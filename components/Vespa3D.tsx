"use client";

/*
  Modelo 3D "Vespa" por Jasmine Roberts (Poly Pizza) — Licencia CC-BY 3.0.
  https://poly.pizza/m/blGLclvvdEM
  Recoloreado al amarillo de marca y acabado PBR (clearcoat + HDR de estudio).
*/

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ContactShadows, Environment } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import {
  ACESFilmicToneMapping,
  Box3,
  Color,
  Group,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  Vector3,
} from "three";

const MODEL = "/models/vespa.glb";

const BODY_YELLOW = "#f3bf07"; // amarillo limón de la marca
const SEAT_BROWN = "#4f3320";

function VespaModel() {
  const ref = useRef<Group>(null);
  const { scene } = useGLTF(MODEL);

  const { obj, scale, groundY } = useMemo(() => {
    const obj = scene.clone(true);

    obj.traverse((o) => {
      const mesh = o as Mesh;
      if (!mesh.isMesh) return;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      const src = mesh.material as MeshStandardMaterial;

      switch (src.name) {
        case "Material.001": {
          // Carrocería: pintura amarilla con barniz automotriz
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
          // Asiento: cuero marrón mate
          const m = src.clone();
          m.color = new Color(SEAT_BROWN);
          m.roughness = 0.78;
          m.metalness = 0;
          mesh.material = m;
          break;
        }
        case "Material.005": {
          // Metal: cromo pulido
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
          // Neumáticos / detalles oscuros: caucho mate
          const m = src.clone();
          m.roughness = 0.92;
          m.metalness = 0;
          mesh.material = m;
          break;
        }
        default: {
          mesh.material = src.clone();
        }
      }
    });

    // Normalizar tamaño y centrar
    const box = new Box3().setFromObject(obj);
    const size = new Vector3();
    const center = new Vector3();
    box.getSize(size);
    box.getCenter(center);
    const scale = 3 / Math.max(size.x, size.y, size.z);
    obj.position.sub(center);
    const groundY = (box.min.y - center.y) * scale;

    return { obj, scale, groundY };
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
      {/* Luz clave con sombra nítida */}
      <directionalLight
        position={[5, 7, 4]}
        intensity={2.6}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-4, 4, 4, -4, 0.1, 20]}
        />
      </directionalLight>
      {/* Relleno cálido */}
      <directionalLight position={[-5, 3, -3]} intensity={0.6} color="#ffe6b0" />
      {/* Brillo del faro */}
      <pointLight position={[-1.4, 0.6, 0.2]} intensity={0.4} color="#fff3cf" distance={3} />

      <Suspense fallback={null}>
        <VespaModel />
        {/* HDR de estudio: reflejos realistas en pintura y cromo (sin fondo) */}
        <Environment files="/hdr/studio.hdr" background={false} environmentIntensity={1} />
      </Suspense>
    </Canvas>
  );
}
