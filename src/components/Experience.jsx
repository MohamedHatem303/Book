import { Environment, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
import { useMediaQuery } from "react-responsive";


export const Experience = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Book position={isMobile ? [-0.15, 0.4, 3] : [0, 0, 0.64]} />
      <OrbitControls
        enableRotate={true}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 2.4}
        maxPolarAngle={Math.PI / 1.8}
        enableZoom={true}
        minDistance={2}
        maxDistance={8}
        enablePan={true}
        panSpeed={1.2}
        screenSpacePanning={true}
      />
      <Environment preset="studio" background={false} environmentIntensity={0.4} />
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