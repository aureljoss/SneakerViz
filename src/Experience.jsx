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

  const meshToIndex = {
    MainBody001: 0, // Vamp / Quarter
    Tip001: 1, // Tip / Eyestay / Tongue
    Eyestay001: 1,
    TongueCushion001: 2,
    TongueTab001: 4,
    BackVertical003: 6,
    Foxing001: 2, // Foxing / Lining
    Cushion001_swoosh: 2, // Swoosh
    Cushion001_interior: 2, // Foxing / Lining
    Sole001: 7, // Sole
    BottomSole001: 7, // Sole
    BackTab001: 6, // Back Tab
    SwooshInside001: 3,
    SwooshOutside001: 3,
    Tag001: 4, // Tongue Label
    Lace001: 5, // Laces
    ThreadsBackVertical002: 5,
    ThreadsBackVertical003: 5,
    ThreadsFoxingRight002: 5,
    ThreadsFoxingRight003: 5,
    ThreadsSole001: 7,
    ThreadsSwoosh001: 7,
    ThreadsTipRight005: 7,
    ThreadsTipRight006: 5,
    ThreadsTipRight007: 5,
    ThreadsTipRight008: 5,
    SoleAirLine001: 7,
    Air001: 7,
  };

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

  const renderShoe = (position, scale) => (
    <group rotation={[0, 0, Math.PI / 14]} position={position} scale={scale}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ThreadsTipRight005.geometry}
        name="ThreadsTipRight005"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
        <meshStandardMaterial
          normalMap={brlNormalMap}
          roughnessMap={brlRoughnessMap}
          roughness={1}
          color={props.laceColor}
          metalness={0}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sole001.geometry}
        name="Sole001"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
        <meshStandardMaterial
          // normalMap={brlNormalMap}
          // roughnessMap={brlRoughnessMap}
          // roughness={1}
          color={props.soleColor}
          metalness={0}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BottomSole001.geometry}
        name="BottomSole001"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
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
        name="Cushion001_swoosh"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
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
        name="BackTab001"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
        <meshStandardMaterial
          normalMap={brlNormalMap}
          roughnessMap={brlRoughnessMap}
          roughness={1}
          color={props.backTabColor}
          metalness={0}
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackVertical003.geometry}
        name="BackVertical003"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
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
        geometry={nodes.Foxing001.geometry}
        name="Foxing001"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
        {leather}
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tip001.geometry}
        name="Tip001"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
        {leather}
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eyestay001.geometry}
        name="Eyestay001"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
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
        geometry={nodes.SwooshInside001.geometry}
        name="SwooshInside001"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
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
        name="SwooshOutside001"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
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
        name="Tag001"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
        <meshStandardMaterial
          normalMap={brlNormalMap}
          roughnessMap={brlRoughnessMap}
          roughness={1}
          color={props.tongueLabelColor}
          metalness={0}
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MainBody001.geometry}
        name="MainBody001"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
        <meshStandardMaterial
          normalMap={brlNormalMap}
          roughnessMap={brlRoughnessMap}
          roughness={1}
          color={props.mainColor}
          metalness={0}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cushion001.geometry}
        name="Cushion001_interior"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
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
        name="TongueCushion001"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
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
        name="TongueTab001"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
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
        geometry={nodes.Lace001.geometry}
        name="Lace001"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
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
        name="SoleAirLine001"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
        <meshStandardMaterial
          color={props.soleColor}
          normalMap={TexNormalMap}
          roughnessMap={TexRoughnessMap}
          roughness={1}
          metalness={0}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Air001.geometry}
        name="Air001"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
        <meshStandardMaterial
          color={props.soleColor}
          normalMap={TexNormalMap}
          roughnessMap={TexRoughnessMap}
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Threads */}

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ThreadsBackVertical002.geometry}
        name="ThreadsBackVertical002"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
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
        geometry={nodes.ThreadsBackVertical003.geometry}
        name="ThreadsBackVertical003"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
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
        geometry={nodes.ThreadsFoxingRight002.geometry}
        name="ThreadsFoxingRight002"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
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
        geometry={nodes.ThreadsFoxingRight003.geometry}
        name="ThreadsFoxingRight003"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
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
        geometry={nodes.ThreadsSole001.geometry}
        name="ThreadsSole001"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
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
        geometry={nodes.ThreadsSwoosh001.geometry}
        name="ThreadsSwoosh001"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
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
        geometry={nodes.ThreadsTipRight005.geometry}
        name="ThreadsTipRight005"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
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
        geometry={nodes.ThreadsTipRight006.geometry}
        name="ThreadsTipRight006"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
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
        geometry={nodes.ThreadsTipRight007.geometry}
        name="ThreadsTipRight007"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
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
        geometry={nodes.ThreadsTipRight008.geometry}
        name="ThreadsTipRight008"
        onClick={(event) => props.onMeshClick(meshToIndex[event.object.name])}
      >
        <meshStandardMaterial
          color={props.laceColor}
          normalMap={TexNormalMap}
          roughnessMap={TexRoughnessMap}
          roughness={1}
          metalness={0}
        />
      </mesh>
    </group>
  );

  return (
    <>
      <color args={["#e7ecf0"]} attach="background" />
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
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
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
        {renderShoe([0, 0.2, 0])}
        {renderShoe([0, 0.2, 1.8], [1,1,-1])}

        <Environment preset="city" />
        <Environment preset="city" />
      </Center>
    </>
  );
}
