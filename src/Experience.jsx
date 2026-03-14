import {
  OrbitControls,
  useGLTF,
  Center,
  Html,
  Environment,
  Plane,
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
    ],
  );

  const [TexColorMap, TexNormalMap, TexRoughnessMap] = useLoader(
    TextureLoader,
    [
      "/textures/textiles/rough_linen_1k.blend/rough_linen_diff_1k.jpg",
      "/textures/textiles/rough_linen_1k.blend/rough_linen_nor_dx_1k.jpg",
      "/textures/textiles/rough_linen_1k.blend/rough_linen_rough_1k.jpg",
    ],
  );

  const leather = (
    <meshStandardMaterial
      // map={brlColorMap}
      normalMap={brlNormalMap}
      roughnessMap={brlRoughnessMap}
      roughness={0.9}
      color={"#ffffff"}
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
      {/* Lights */}
      {/* <ambientLight intensity={0.3} castShadow /> */}
      <directionalLight
        position={[2, 5, 0.5]}
        intensity={0.01}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Geometries */}
      <Center>
        <Plane
          args={[20, 20]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.25, 0]}
          receiveShadow
        >
          <shadowMaterial
            attach="material"
            transparent
            color="hsla(0, 0%, 51%, 1)"
          />
        </Plane>
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ThreadsTipRight005.geometry}
          >
            {leather}
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Sole001.geometry}>
            <meshStandardMaterial
              normalMap={brlNormalMap}
              roughnessMap={brlRoughnessMap}
              roughness={1}
              color={props.swooshColor}
              metalness={0}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BottomSole001.geometry}
            material={materials.BottomSole001}
          >
            <meshStandardMaterial
              normalMap={brlNormalMap}
              roughnessMap={brlRoughnessMap}
              roughness={1}
              color={props.swooshColor}
              metalness={0}
            />
          </mesh>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cushion001.geometry}
            material={materials.BottomSole001}
          >
            <meshStandardMaterial
              normalMap={brlNormalMap}
              roughnessMap={brlRoughnessMap}
              roughness={1}
              color={props.swooshColor}
              metalness={0}
            />
          </mesh>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BackTab001.geometry}
          >
            <meshStandardMaterial
              normalMap={brlNormalMap}
              roughnessMap={brlRoughnessMap}
              roughness={1}
              color={props.tipEyestayTongueColor}
              metalness={0}
            />
          </mesh>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BackVertical003.geometry}
          >
                        <meshStandardMaterial
              normalMap={brlNormalMap}
              roughnessMap={brlRoughnessMap}
              roughness={1}
              color={props.tipEyestayTongueColor}
              metalness={0}
            />
          </mesh>

          <mesh castShadow receiveShadow geometry={nodes.Foxing001.geometry}>
            {leather}
          </mesh>

          <mesh castShadow receiveShadow geometry={nodes.Tip001.geometry}>
            {leather}
          </mesh>

          <mesh castShadow receiveShadow geometry={nodes.Eyestay001.geometry}>
            <meshStandardMaterial
              normalMap={brlNormalMap}
              roughnessMap={brlRoughnessMap}
              roughness={1}
              color={props.tipEyestayTongueColor}
              metalness={0}
            />
          </mesh>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SwooshInside001.geometry}
          >
            <meshStandardMaterial
              normalMap={brlNormalMap}
              roughnessMap={brlRoughnessMap}
              roughness={1}
              color={props.swooshColor}
              metalness={0}
            />
          </mesh>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SwooshOutside001.geometry}
          >
            <meshStandardMaterial
              normalMap={brlNormalMap}
              roughnessMap={brlRoughnessMap}
              roughness={1}
              color={props.swooshColor}
              metalness={0}
            />
          </mesh>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tag001.geometry}
          >
            <meshStandardMaterial
              normalMap={brlNormalMap}
              roughnessMap={brlRoughnessMap}
              roughness={1}
              color={props.swooshColor}
              metalness={0}
            />
          </mesh>

          <mesh castShadow receiveShadow geometry={nodes.MainBody001.geometry}>
            <meshStandardMaterial
              normalMap={brlNormalMap}
              roughnessMap={brlRoughnessMap}
              roughness={1}
              color={props.mainColor}
              metalness={0}
            />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cushion001.geometry}>
            <meshStandardMaterial
              color={props.interiorColor}
              normalMap={TexNormalMap}
              roughnessMap={TexRoughnessMap}
              roughness={1}
              metalness={0}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TongueCushion001.geometry}
          >
            <meshStandardMaterial
              normalMap={brlNormalMap}
              roughnessMap={brlRoughnessMap}
              roughness={1}
              color={props.tipEyestayTongueColor}
              metalness={0}
            />
          </mesh>
                    <mesh
            castShadow
            receiveShadow
            geometry={nodes.TongueTab001.geometry}
          >
            <meshStandardMaterial
              normalMap={brlNormalMap}
              roughnessMap={brlRoughnessMap}
              roughness={1}
              color={props.tipEyestayTongueColor}
              metalness={0}
            />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Lace001.geometry}>
            <meshStandardMaterial
              color={props.laceColor}
              normalMap={TexNormalMap}
              roughnessMap={TexRoughnessMap}
              roughness={1}
              metalness={0}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SoleAirLine001.geometry}
          >
            {leather}
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Air001.geometry}>
            {leather}
          </mesh>

      {/* Threads */}

        </group>
        <Environment preset="city" />
      </Center>
    </>
  );
}
