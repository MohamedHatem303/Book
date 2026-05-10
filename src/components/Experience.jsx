import { Environment, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";

export const Experience = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Book position={isMobile ? [-0.01, 0.5, 3] : [0, 0, 0.64]} />
      <OrbitControls
        enableRotate={true}
        minAzimuthAngle={isMobile ? 0 : -0.2}
        maxAzimuthAngle={isMobile ? 0 : 0.2}
        minPolarAngle={isMobile ? Math.PI / 2.1 : Math.PI / 2.4}
        maxPolarAngle={isMobile ? Math.PI / 2.1 : Math.PI / 1.8}
        enableZoom={true}
        minDistance={isMobile ? 5 : 3}
        maxDistance={isMobile ? 8 : 8}
        enablePan={true}
        panSpeed={1.2}
        screenSpacePanning={true}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.7}
        zoomSpeed={0.8}
        panSpeed={0.8}
        
      />
      <Environment
        preset="studio"
        background={false}
        environmentIntensity={0.35}
      />
      <directionalLight
        position={[2, 5, 2]}
        intensity={1.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
