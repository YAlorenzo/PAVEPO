import { useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

function Planet() {
  const modelRef = useRef();
  const gltf = useLoader(GLTFLoader, '/earth.glb');

  // Устанавливаем скорость вращения
  const rotationSpeed = 0.002;

  // Используем хук useFrame для обновления вращения в каждом кадре
  useFrame(() => {
    if (modelRef.current) {
      // Вращаем модель
      modelRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <primitive object={gltf.scene} ref={modelRef} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-5, 5, 5]} intensity={9} />
      <OrbitControls
        enableZoom={false}
        enablePan={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        target={[0, 0, 0]}
      />
    </>
  );
}

export default Planet;
