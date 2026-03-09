import { useRef, useMemo, useState, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Line } from "@react-three/drei";
import * as THREE from "three";

interface TechPoint {
  name: string;
  icon?: string;
  position: [number, number, number];
}

const techItems = [
  { name: "Python", icon: "python" },
  { name: "LangChain", icon: "langchain" },
  { name: "LangGraph" },
  { name: "LlamaIndex" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "FAISS" },
  { name: "OpenAI", icon: "openai" },
  { name: "Anthropic", icon: "anthropic" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "Docker", icon: "docker" },
  { name: "AWS", icon: "amazonwebservices" },
];

function fibonacciSphere(count: number, radius: number): [number, number, number][] {
  const points: [number, number, number][] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    points.push([Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius]);
  }
  return points;
}

const GlobeWireframe = () => {
  const rings = useMemo(() => {
    const lines: [number, number, number][][] = [];
    const R = 1.8;
    for (let i = 1; i < 6; i++) {
      const phi = (i / 6) * Math.PI;
      const pts: [number, number, number][] = [];
      for (let j = 0; j <= 64; j++) {
        const theta = (j / 64) * Math.PI * 2;
        pts.push([Math.sin(phi) * Math.cos(theta) * R, Math.cos(phi) * R, Math.sin(phi) * Math.sin(theta) * R]);
      }
      lines.push(pts);
    }
    for (let i = 0; i < 8; i++) {
      const theta = (i / 8) * Math.PI * 2;
      const pts: [number, number, number][] = [];
      for (let j = 0; j <= 64; j++) {
        const phi = (j / 64) * Math.PI;
        pts.push([Math.sin(phi) * Math.cos(theta) * R, Math.cos(phi) * R, Math.sin(phi) * Math.sin(theta) * R]);
      }
      lines.push(pts);
    }
    return lines;
  }, []);

  return (
    <group>
      {rings.map((pts, i) => (
        <Line key={i} points={pts} color="#2d8a6e" lineWidth={0.5} opacity={0.15} transparent />
      ))}
    </group>
  );
};

/* ── Glowing Particles orbiting the globe ── */
const Particles = () => {
  const count = 80;
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.9 + Math.random() * 0.4;
      arr[i * 3] = Math.sin(phi) * Math.cos(theta) * r;
      arr[i * 3 + 1] = Math.cos(phi) * r;
      arr[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * r;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.08;
      ref.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial color="#34d399" size={0.03} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

/* ── Animated connections between nearby nodes ── */
const Connections = ({ positions, hoveredIdx }: { positions: [number, number, number][]; hoveredIdx: number | null }) => {
  const lines = useMemo(() => {
    const result: { from: [number, number, number]; to: [number, number, number]; dist: number; indices: [number, number] }[] = [];
    const maxDist = 2.8;
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dx = positions[i][0] - positions[j][0];
        const dy = positions[i][1] - positions[j][1];
        const dz = positions[i][2] - positions[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < maxDist) {
          result.push({ from: positions[i], to: positions[j], dist, indices: [i, j] });
        }
      }
    }
    return result;
  }, [positions]);

  return (
    <group>
      {lines.map((line, i) => {
        const isHighlighted = hoveredIdx !== null && (line.indices[0] === hoveredIdx || line.indices[1] === hoveredIdx);
        const alpha = isHighlighted ? 0.5 : 0.08 * (1 - line.dist / 2.8);
        return (
          <Line
            key={i}
            points={[line.from, line.to]}
            color={isHighlighted ? "#4ade80" : "#2d8a6e"}
            lineWidth={isHighlighted ? 1.5 : 0.3}
            opacity={alpha}
            transparent
          />
        );
      })}
    </group>
  );
};

const TechNode = ({ point, isHovered, onHover, onUnhover }: {
  point: TechPoint;
  isHovered: boolean;
  onHover: () => void;
  onUnhover: () => void;
}) => {
  const initials = point.name.split(/[\s.]+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (glowRef.current) {
      const s = isHovered ? 0.4 : 0.25;
      glowRef.current.scale.lerp(new THREE.Vector3(s, s, s), 0.1);
    }
  });

  return (
    <group position={point.position}>
      {/* Glow sphere */}
      <mesh ref={glowRef} scale={0.25}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color={isHovered ? "#4ade80" : "#34d399"} opacity={isHovered ? 0.15 : 0.06} transparent />
      </mesh>
      {/* Core node */}
      <mesh onPointerOver={onHover} onPointerOut={onUnhover}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color={isHovered ? "#4ade80" : "#2d8a6e"} opacity={isHovered ? 1 : 0.7} transparent />
      </mesh>
      <Html center distanceFactor={6} style={{ pointerEvents: "none", userSelect: "none" }}>
        <div
          className={`flex items-center gap-1.5 px-2 py-1 rounded-md border whitespace-nowrap transition-all duration-200 ${
            isHovered ? "bg-card/95 border-primary/40 shadow-lg shadow-primary/10 scale-110" : "bg-card/70 border-border/50"
          }`}
          style={{ fontSize: "9px", fontFamily: "monospace" }}
        >
          {point.icon ? (
            <img src={`https://cdn.simpleicons.org/${point.icon}/currentColor`} alt="" className="w-3 h-3 opacity-60 dark:invert" />
          ) : (
            <span className="inline-flex items-center justify-center w-3 h-3 rounded-[2px] border border-border text-[6px] font-mono font-medium text-muted-foreground">
              {initials}
            </span>
          )}
          <span className={`transition-colors duration-200 ${isHovered ? "text-foreground" : "text-muted-foreground"}`}>
            {point.name}
          </span>
        </div>
      </Html>
    </group>
  );
};

const RotatingGroup = ({ children, isDragging }: { children: React.ReactNode; isDragging: boolean }) => {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current && !isDragging) {
      ref.current.rotation.y += delta * 0.15;
    }
  });
  return <group ref={ref}>{children}</group>;
};

const GlobeScene = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const techPoints: TechPoint[] = useMemo(() => {
    const positions = fibonacciSphere(techItems.length, 2.1);
    return techItems.map((item, i) => ({ ...item, position: positions[i] }));
  }, []);

  const positions = useMemo(() => techPoints.map(p => p.position), [techPoints]);

  const handleDragStart = useCallback(() => setIsDragging(true), []);
  const handleDragEnd = useCallback(() => setIsDragging(false), []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <RotatingGroup isDragging={isDragging}>
        <GlobeWireframe />
        <Particles />
        
        {techPoints.map((point, i) => (
          <TechNode
            key={point.name}
            point={point}
            isHovered={hoveredIdx === i}
            onHover={() => setHoveredIdx(i)}
            onUnhover={() => setHoveredIdx(null)}
          />
        ))}
      </RotatingGroup>
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} onStart={handleDragStart} onEnd={handleDragEnd} />
    </>
  );
};

const TechGlobe = ({ compact = false }: { compact?: boolean }) => {
  const height = compact ? "280px" : "450px";
  return (
    <div style={{ width: "100%", height, position: "relative" }}>
      <Canvas camera={{ position: [0, 0, compact ? 7 : 6], fov: 45 }}>
        <GlobeScene />
      </Canvas>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[9px] text-muted-foreground/40 select-none">
        drag to rotate
      </div>
    </div>
  );
};

export default TechGlobe;
