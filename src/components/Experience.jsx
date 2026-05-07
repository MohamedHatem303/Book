import { Environment, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";

export const Experience = () => {
  return (
    <>
      <Book position={[0, 0, 0.64]} />
      <OrbitControls
        enableRotate={true}
        minAzimuthAngle={0}
        maxAzimuthAngle={0}
        minPolarAngle={Math.PI / 2.4}
        maxPolarAngle={Math.PI / 1.8}
        enableZoom={true}
        minDistance={2}
        maxDistance={8}
        enablePan={true}
        panSpeed={1.2}
        screenSpacePanning={true}
      />
      <Environment preset="studio" background={false} />
      <directionalLight
        position={[2, 5, 2]}
        intensity={1.5}
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