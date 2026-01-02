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

export default function Experience() {
  const { nodes, materials } = useGLTF("/models/sneaker.glb");

  // Materials
  const [brlColorMap, brlNormalMap, brlRoughnessMap, wlColorMap] = useLoader(TextureLoader, [
    "/textures/leather_red_02_coll1_1k.jpg",
    "/textures/leather_red_02_nor_dx_1k.jpg",
    "/textures/leather_red_02_rough_1k.jpg",
    "/textures/leather_red_02_coll2_1k.jpg",
  ]);

  const [TexColorMap, TexNormalMap, TexRoughnessMap] = useLoader(TextureLoader, [
    "/textures/textiles/rough_linen_diff_1k.jpg",
    "/textures/textiles/rough_linen_nor_dx_1k.jpg",
    "/textures/textiles/rough_linen_rough_1k.jpg",
  ]);

  const brownLeather = (
    <meshStandardMaterial
      map={brlColorMap}
      normalMap={brlNormalMap}
      roughnessMap={brlRoughnessMap}
      roughness={0.99}
      color={"#8B4513"}
      metalness={0}
    />
  );

    const whiteLeather = (
    <meshStandardMaterial
      // map={wlColorMap}
      normalMap={brlNormalMap}
      roughnessMap={brlRoughnessMap}
      roughness={0.99}
      metalness={0}
    />
  );

  const blueTextile = (
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
      <color args={["#ffffffff"]} attach="background" />
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
          {/* Site */}
          {/* <mesh
            geometry={nodes.geometry}
            scale={[1, 1, 1]}
            castShadow
            receiveShadow
            position={[1.3659575, 0.2771428, 0.5024487]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            {whiteLeather}
          </mesh> */}

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ThreadsTipRight003.geometry}
            material={materials.Material}
            position={[0, -0.007, 0]}
            rotation={[0, 0, -Math.PI]}
            scale={-1}
          >
            {whiteLeather}
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
            material={materials["Material.003"]}
            position={[0, 0.844, -0.117]}
            scale={[1.802, 0.84, 0.642]}
          >
            {brownLeather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Foxing001.geometry}
            material={materials["Material.003"]}
            position={[0, 0.844, -0.117]}
            scale={[1.802, 0.84, 0.642]}
          >
            {brownLeather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tip001.geometry}
            material={materials["Material.003"]}
            position={[0, 0.844, -0.117]}
            scale={[1.802, 0.84, 0.642]}
          >
            {brownLeather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Eyestay001.geometry}
            material={materials["Material.003"]}
          >
            {brownLeather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Swoosh.geometry}
            material={materials["Material.001"]}
            position={[0, 0, 0.15]}
            rotation={[0, -0.059, 0]}
          >
            {brownLeather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MainBody.geometry}
            material={materials.Material}
            position={[0, 0.844, -0.117]}
            scale={[1.802, 0.84, 0.642]}
          >
            {whiteLeather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cushion001.geometry}
            material={materials["Material.003"]}
            position={[0, 0.844, -0.117]}
            scale={[1.789, 0.834, 0.637]}
          >
            {blueTextile}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TongueCushion001.geometry}
            material={materials["Material.001"]}
            position={[0, 0.844, -0.117]}
            scale={[1.802, 0.84, 0.642]}
          >
            {brownLeather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={nodes.Plane001.material}
            position={[0.408, 0.414, 0.004]}
            rotation={[0, 0, 0.459]}
          >
            {brownLeather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SoleAir002.geometry}
            material={materials.Material}
            position={[0, 0.844, -0.117]}
            scale={[1.794, 0.836, 0.639]}
          >
            {brownLeather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SoleAir003.geometry}
            material={materials.Sole}
            position={[0, 0.844, -0.117]}
            scale={[1.794, 0.836, 0.639]}
          >
            {brownLeather}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Air001.geometry}
            material={nodes.Air001.material}
            position={[1.366, 0.277, 0.502]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.12}
          >
            {brownLeather}
          </mesh>
        </group>
        <Environment preset="city" />
      </Center>
    </>
  );
}
