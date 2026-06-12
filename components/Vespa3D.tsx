"use client";

/*
  Modelo 3D "Vespa" por Jasmine Roberts (Poly Pizza) — Licencia CC-BY 3.0.
  https://poly.pizza/m/blGLclvvdEM
  Recoloreado al amarillo de marca, acabado PBR (clearcoat + HDR de estudio)
  y una canasta de flores amarillas sobre el asiento (réplica de la foto real).
*/

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ContactShadows, Environment } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import {
  ACESFilmicToneMapping,
  Box3,
  Color,
  DoubleSide,
  Group,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  Vector3,
} from "three";

const MODEL = "/models/vespa.glb";

const BODY_YELLOW = "#f3bf07"; // amarillo limón de la marca
const SEAT_BROWN = "#4f3320";

type Placement = { pos: [number, number, number]; s: number };

/* ---- Canasta con ramo de flores amarillas ---- */
function FlowerBasket({ pos, s }: Placement) {
  const flowers: [number, number, number][] = [
    [0, 0.98, 0],
    [0.52, 0.86, 0.34],
    [-0.5, 0.86, -0.3],
    [0.42, 0.82, -0.46],
    [-0.42, 0.84, 0.48],
    [0.05, 1.08, 0.36],
    [0.22, 1.0, -0.2],
    [-0.2, 1.02, 0.18],
  ];
  const leaves: [number, number, number][] = [
    [0.62, 0.9, 0.05],
    [-0.6, 0.94, 0.22],
    [0.05, 0.95, -0.62],
  ];
  return (
    <group position={pos} scale={s}>
      {/* cuerpo de la canasta (mimbre) */}
      <mesh castShadow position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1, 0.72, 1, 20, 1, true]} />
        <meshStandardMaterial color="#a9763f" roughness={0.92} side={DoubleSide} />
      </mesh>
      {/* fondo */}
      <mesh position={[0, 0.06, 0]}>
        <cylinderGeometry args={[0.72, 0.72, 0.12, 20]} />
        <meshStandardMaterial color="#7f5429" roughness={0.92} />
      </mesh>
      {/* borde superior */}
      <mesh position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.09, 8, 28]} />
        <meshStandardMaterial color="#8a5e30" roughness={0.85} />
      </mesh>
      {/* hojas */}
      {leaves.map((p, i) => (
        <mesh key={i} position={p} scale={[0.55, 0.22, 0.32]}>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#5e8c3a" roughness={0.7} />
        </mesh>
      ))}
      {/* flores amarillas */}
      {flowers.map((p, i) => (
        <mesh key={i} position={p} castShadow>
          <icosahedronGeometry args={[0.34, 0]} />
          <meshStandardMaterial
            color={i % 2 ? "#ffd21f" : "#f3bf07"}
            roughness={0.55}
            emissive="#3a2c00"
            emissiveIntensity={0.06}
          />
        </mesh>
      ))}
    </group>
  );
}

function VespaModel() {
  const ref = useRef<Group>(null);
  const { scene } = useGLTF(MODEL);

  const { obj, scale, groundY, basket } = useMemo(() => {
    const obj = scene.clone(true);
    let seat: Mesh | null = null;

    obj.traverse((o) => {
      const mesh = o as Mesh;
      if (!mesh.isMesh) return;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      const src = mesh.material as MeshStandardMaterial;

      switch (src.name) {
        case "Material.001": {
          mesh.material = new MeshPhysicalMaterial({
            color: new Color(BODY_YELLOW),
            metalness: 0.25,
            roughness: 0.32,
            clearcoat: 1,
            clearcoatRoughness: 0.12,
            envMapIntensity: 1.15,
          });
          break;
        }
        case "Material.004": {
          const m = src.clone();
          m.color = new Color(SEAT_BROWN);
          m.roughness = 0.78;
          m.metalness = 0;
          mesh.material = m;
          seat = mesh; // el asiento -> ahí va la canasta
          break;
        }
        case "Material.005": {
          const m = src.clone();
          m.metalness = 1;
          m.roughness = 0.18;
          m.color = new Color("#eef1f4");
          m.envMapIntensity = 1.6;
          mesh.material = m;
          break;
        }
        case "Material.002":
        case "Material.003": {
          const m = src.clone();
          m.roughness = 0.92;
          m.metalness = 0;
          mesh.material = m;
          break;
        }
        default:
          mesh.material = src.clone();
      }
    });

    obj.updateMatrixWorld(true);

    // Caja completa: centrar y escalar
    const box = new Box3().setFromObject(obj);
    const size = new Vector3();
    const center = new Vector3();
    box.getSize(size);
    box.getCenter(center);
    const scale = 3 / Math.max(size.x, size.y, size.z);
    const groundY = (box.min.y - center.y) * scale;

    // Ubicar la canasta sobre el asiento (coords relativas al centro)
    let basket: Placement | null = null;
    if (seat) {
      const sb = new Box3().setFromObject(seat);
      const sc = new Vector3();
      const ss = new Vector3();
      sb.getCenter(sc);
      sb.getSize(ss);
      const r = Math.min(ss.x, ss.z) * 0.42; // radio de la canasta
      basket = {
        pos: [sc.x - center.x, sb.max.y - center.y - r * 0.15, sc.z - center.z],
        s: r,
      };
    }

    obj.position.sub(center);
    return { obj, scale, groundY, basket };
  }, [scene]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.38;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.3) * 0.035;
  });

  return (
    <group>
      <group ref={ref} scale={scale}>
        <primitive object={obj} />
        {basket && <FlowerBasket pos={basket.pos} s={basket.s} />}
      </group>
      <ContactShadows
        position={[0, groundY - 0.005, 0]}
        opacity={0.5}
        scale={4.5}
        blur={3}
        far={3}
        resolution={1024}
        color="#2a1c0c"
      />
    </group>
  );
}

useGLTF.preload(MODEL);

export default function Vespa3D() {
  return (
    <Canvas
      shadows
      camera={{ position: [3.6, 1.5, 4.4], fov: 30 }}
      dpr={[1, 2]}
      gl={{
        alpha: true,
        antialias: true,
        toneMapping: ACESFilmicToneMapping,
        toneMappingExposure: 1.05,
      }}
      style={{ background: "transparent" }}
    >
      <directionalLight
        position={[5, 7, 4]}
        intensity={2.6}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      >
        <orthographicCamera attach="shadow-camera" args={[-4, 4, 4, -4, 0.1, 20]} />
      </directionalLight>
      <directionalLight position={[-5, 3, -3]} intensity={0.6} color="#ffe6b0" />
      <pointLight position={[-1.4, 0.6, 0.2]} intensity={0.4} color="#fff3cf" distance={3} />

      <Suspense fallback={null}>
        <VespaModel />
        <Environment files="/hdr/studio.hdr" background={false} environmentIntensity={1} />
      </Suspense>
    </Canvas>
  );
}
