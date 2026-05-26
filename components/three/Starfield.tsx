"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const STAR_COUNT = 1800;
const FIELD_RADIUS = 80;

function StarPoints({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Points>(null!);

  const { positions, sizes } = useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3);
    const sizes = new Float32Array(STAR_COUNT);
    for (let i = 0; i < STAR_COUNT; i++) {
      // distribute uniformly on a sphere shell, then push outward
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = FIELD_RADIUS * (0.55 + Math.random() * 0.45);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      // weighted size: most small, a few brighter
      sizes[i] = Math.pow(Math.random(), 4) * 1.6 + 0.25;
    }
    return { positions, sizes };
  }, []);

  useFrame((_, delta) => {
    if (!ref.current || reduced) return;
    ref.current.rotation.y += delta * 0.012;
    ref.current.rotation.x += delta * 0.004;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={STAR_COUNT}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
          count={STAR_COUNT}
        />
      </bufferGeometry>
      <shaderMaterial
        transparent
        depthWrite={false}
        vertexShader={`
          attribute float size;
          varying float vAlpha;
          void main() {
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mv;
            gl_PointSize = size * (220.0 / -mv.z);
            vAlpha = clamp(1.4 - (length(mv.xyz) / 90.0), 0.0, 1.0);
          }
        `}
        fragmentShader={`
          varying float vAlpha;
          void main() {
            vec2 d = gl_PointCoord - vec2(0.5);
            float r = length(d);
            float core = smoothstep(0.5, 0.0, r);
            float halo = smoothstep(0.5, 0.15, r) * 0.35;
            float a = (core + halo) * vAlpha;
            // cool blue-white tint
            vec3 col = mix(vec3(0.78, 0.86, 1.0), vec3(0.48, 0.84, 1.0), r * 1.2);
            gl_FragColor = vec4(col, a);
          }
        `}
      />
    </points>
  );
}

interface StarfieldProps {
  className?: string;
}

export default function Starfield({ className }: StarfieldProps) {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className={className} aria-hidden="true">
      <Canvas
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: true,
        }}
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 1], fov: 60, near: 0.1, far: 200 }}
        style={{ background: "transparent" }}
      >
        <StarPoints reduced={reduced} />
      </Canvas>
    </div>
  );
}
