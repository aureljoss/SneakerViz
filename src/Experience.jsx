import {
  OrbitControls,
  useGLTF,
  useTexture,
  CameraShake,
  Center,
  Html,
  useEnvironment,
  Environment,
} from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import { DoubleSide } from "three";
import { useThree, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

//Imported glb models
const sneakerModel = "/models/sneaker.glb";

export default function Experience(props) {
  const { nodes, materials } = useGLTF("/models/sneaker.glb");

  // Materials
  const [brlColorMap, brlNormalMap, brlRoughnessMap] = useLoader(
    TextureLoader,
    [
      "/textures/Leather/Leather037_1K-JPG/Leather037_1K-JPG_Color.jpg",
      "/textures/Leather/Leather037_1K-JPG/Leather037_1K-JPG_NormalDX.jpg",
      "/textures/Leather/Leather037_1K-JPG/Leather037_1K-JPG_Roughness.jpg",
      "/textures/leather_red_02_coll2_1k.jpg",
    ]
  );

  const [TexColorMap, TexNormalMap, TexRoughnessMap] = useLoader(
    TextureLoader,
    [
      "/textures/textiles/rough_linen_diff_1k.jpg",
      "/textures/textiles/rough_linen_nor_dx_1k.jpg",
      "/textures/textiles/rough_linen_rough_1k.jpg",
    ]
  );

  const leather = (
    <meshStandardMaterial
      // map={brlColorMap}
      normalMap={brlNormalMap}
      roughnessMap={brlRoughnessMap}
      roughness={0.9}
      color={props.color}
      metalness={0}
    />
  );

  const textile = (
    <meshStandardMaterial
      map={TexColorMap}
      normalMap={TexNormalMap}
      roughnessMap={TexRoughnessMap}
      roughness={0.99}
      metalness={0}
    />
  );

  return (
    <>
      <color args={["#cfe8fc"]} attach="background" />
      <OrbitControls
        makeDefault
        autoRotateSpeed={-0.1}
        zoomSpeed={2}
        enableZoom={true}
        minDistance={4}
        maxDistance={3000000}
        dampingFactor={0.08}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
      />
      <ambientLight intensity={0.5} />

      <Center>
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ThreadsTipRight003.geometry}
            position={[0, -0.007, 0]}
            rotation={[0, 0, -Math.PI]}
            scale={-1}
          >
            {leather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sole001.geometry}
            material={materials.Sole}
            position={[0, 0.844, -0.117]}
            scale={[1.802, 0.84, 0.642]}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BackTab001.geometry}
            position={[0, 0.844, -0.117]}
            scale={[1.802, 0.84, 0.642]}
          >
            {leather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Foxing001.geometry}
            position={[0, 0.844, -0.117]}
            scale={[1.802, 0.84, 0.642]}
          >
            {leather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tip001.geometry}
            position={[0, 0.844, -0.117]}
            scale={[1.802, 0.84, 0.642]}
          >
            {leather}
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Eyestay001.geometry}>
            {leather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Swoosh.geometry}
            position={[0, 0, 0.15]}
            rotation={[0, -0.059, 0]}
          >
            <meshStandardMaterial
              // map={brlColorMap}
              normalMap={brlNormalMap}
              roughnessMap={brlRoughnessMap}
              roughness={0.9}
              color={props.color}
              metalness={0}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MainBody.geometry}
            position={[0, 0.844, -0.117]}
            scale={[1.802, 0.84, 0.642]}
          >
            {leather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cushion001.geometry}
            position={[0, 0.844, -0.117]}
            scale={[1.789, 0.834, 0.637]}
          >
            {textile}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TongueCushion001.geometry}
            position={[0, 0.844, -0.117]}
            scale={[1.802, 0.84, 0.642]}
          >
            {leather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            position={[0.408, 0.414, 0.004]}
            rotation={[0, 0, 0.459]}
          >
            {textile}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SoleAir002.geometry}
            position={[0, 0.844, -0.117]}
            scale={[1.794, 0.836, 0.639]}
          >
            {leather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SoleAir003.geometry}
            position={[0, 0.844, -0.117]}
            scale={[1.794, 0.836, 0.639]}
          >
            {leather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Air001.geometry}
            position={[1.366, 0.277, 0.502]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.12}
          >
            {leather}
          </mesh>
        </group>
        <Environment preset="city" />
      </Center>
    </>
  );
}
