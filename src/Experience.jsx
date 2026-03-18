import {
  OrbitControls,
  useGLTF,
  Center,
  Environment,
  Plane,
} from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import { DoubleSide, Color } from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

//Imported glb models

export default function Experience(props) {
  const { nodes } = useGLTF("/models/sneaker.glb");

  const meshToIndex = {
    MainBody001: 0, // Vamp / Quarter
    Tip001: 1, // Tip / Eyestay / Tongue
    Eyestay001: 1,
    Tongue001: 1,
    TongueCushion001: 2,
    TongueTab001: 4,
    NikeTongueTab: 4,
    AirTongueTab: 4,
    NikeBackTab001: 4,
    BackVertical003: 2,
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
    ThreadsEyestay001: 0,
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

  const setCursor = (cursor) => {
    if (typeof document !== "undefined") {
      document.body.style.cursor = cursor;
    }
  };

  const hoveredRef = useRef(null);

  const getMaterialObject = (object) => {
    while (object && !object.material) {
      object = object.parent;
    }
    return object;
  };

  const highlightMesh = (object) => {
    if (!object?.material) return;
    const setHighlight = (material) => {
      if (!material.userData) material.userData = {};
      if (!material.userData.original) {
        material.userData.original = {
          color: material.color
            ? material.color.clone()
            : new Color(0xffffff),
        };
      }
      material.color = new Color(0xffffff);
    };

    if (Array.isArray(object.material)) {
      object.material.forEach(setHighlight);
    } else {
      setHighlight(object.material);
    }
  };

  const unhighlightMesh = (object) => {
    if (!object?.material) return;
    const restore = (material) => {
      const original = material.userData?.original;
      if (!original) return;
      material.color = original.color.clone();
    };

    if (Array.isArray(object.material)) {
      object.material.forEach(restore);
    } else {
      restore(object.material);
    }
  };

  const handlePointerOver = (event) => {
    event.stopPropagation();
    const mesh = getMaterialObject(event.object);
    if (!mesh) return;

    setCursor("pointer");
    if (hoveredRef.current && hoveredRef.current !== mesh) {
      unhighlightMesh(hoveredRef.current);
    }
    highlightMesh(mesh);
    hoveredRef.current = mesh;
  };

  const handlePointerOut = (event) => {
    event.stopPropagation();
    const mesh = getMaterialObject(event.object);
    if (!mesh) return;

    if (hoveredRef.current === mesh) {
      unhighlightMesh(mesh);
      hoveredRef.current = null;
    }
    setCursor("auto");
  };

  // Materials
  const [brlNormalMap, brlRoughnessMap] = useLoader(
    TextureLoader,
    [
      "/textures/Leather/Leather037_1K-JPG/Leather037_1K-JPG_NormalDX.jpg",
      "/textures/Leather/Leather037_1K-JPG/Leather037_1K-JPG_Roughness.jpg",
      "/textures/leather_red_02_coll2_1k.jpg",
    ],
  );

  const [TexNormalMap, TexRoughnessMap] = useLoader(TextureLoader, [
    "/textures/textiles/rough_linen_1k.blend/rough_linen_nor_dx_1k.jpg",
    "/textures/textiles/rough_linen_1k.blend/rough_linen_rough_1k.jpg",
  ]);

  const [LacesColorMap, LacesRoughnessMap] = useLoader(TextureLoader, [
    "/textures/textiles/Laces/dirty_carpet_diff_1k.jpg",
    "/textures/textiles/Laces/rough_linen_rough_1k.jpg",
  ]);

  const renderShoe = (position, scale) => (
    <group
      rotation={[0, 0, Math.PI / 14]}
      position={position}
      scale={scale}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ThreadsTipRight005.geometry}
        name="ThreadsTipRight005"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        geometry={nodes.SoleMerged001.geometry}
        name="Sole001"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
      >
        <meshStandardMaterial
          color={props.soleColor}
          metalness={0}
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackTab001.geometry}
        name="BackTab001"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
      >
        <meshStandardMaterial
          normalMap={brlNormalMap}
          roughnessMap={brlRoughnessMap}
          roughness={1}
          color={props.interiorColor}
          metalness={0}
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foxing001.geometry}
        name="Foxing001"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
      >
        <meshStandardMaterial
          normalMap={brlNormalMap}
          roughnessMap={brlNormalMap}
          roughness={1}
          color={props.interiorColor}
          metalness={0}
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tip001.geometry}
        name="Tip001"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
      >
        <meshStandardMaterial
          normalMap={brlNormalMap}
          roughnessMap={brlNormalMap}
          roughness={1}
          color={props.tipEyestayTongueColor}
          metalness={0}
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eyestay001.geometry}
        name="Eyestay001"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
      >
        <meshStandardMaterial
          normalMap={brlNormalMap}
          roughnessMap={brlNormalMap}
          roughness={1}
          color={props.mainColor}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cushion001.geometry}
        name="Cushion001_interior"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        geometry={nodes.NikeTongueTab001.geometry}
        name="NikeTongueTab"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
      >
        <meshStandardMaterial
          normalMap={brlNormalMap}
          roughnessMap={brlRoughnessMap}
          roughness={1}
          color="#1b1b1b"
          metalness={0}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NikeBackTab001.geometry}
        name="NikeBackTab001"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
      >
        <meshStandardMaterial
          normalMap={brlNormalMap}
          roughnessMap={brlRoughnessMap}
          roughness={1}
          color="#1b1b1b"
          metalness={0}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AirBackTab001.geometry}
        name="AirBackTab001"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
      >
        <meshStandardMaterial
          normalMap={brlNormalMap}
          roughnessMap={brlRoughnessMap}
          roughness={1}
          color="#1b1b1b"
          metalness={0}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AirTongueTab001.geometry}
        name="AirTongueTab001"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
      >
        <meshStandardMaterial
          normalMap={brlNormalMap}
          roughnessMap={brlRoughnessMap}
          roughness={1}
          color="#1b1b1b"
          metalness={0}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TongueTab001.geometry}
        name="TongueTab001"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        geometry={nodes.Tongue001.geometry}
        name="Tongue001"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
      >
        <meshStandardMaterial
          color={props.laceColor}
          // normalMap={LacesColorMap}
          roughnessMap={LacesRoughnessMap}
          roughness={1}
          metalness={0}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SoleAirLine001.geometry}
        name="SoleAirLine001"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        geometry={nodes.Air002.geometry}
        name="Air001"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        geometry={nodes.ThreadsEyestay001.geometry}
        name="ThreadsEyestay001"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
      >
        <meshStandardMaterial
          color={props.tipEyestayTongueColor}
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
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        geometry={nodes.ThreadsFoxingRight003.geometry}
        name="ThreadsFoxingRight003"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        geometry={nodes.ThreadsSole001.geometry}
        name="ThreadsSole001"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
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
        geometry={nodes.ThreadsSwoosh001.geometry}
        name="ThreadsSwoosh001"
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
      >
        <meshStandardMaterial
          color={props.swooshColor}
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
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
      >
        <meshStandardMaterial
          color={props.tipEyestayTongueColor}
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
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
      >
        <meshStandardMaterial
          color={props.tipEyestayTongueColor}
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
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
      >
        <meshStandardMaterial
          color={props.tipEyestayTongueColor}
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
        onClick={(event) => {
          event.stopPropagation();
          props.onMeshClick(meshToIndex[event.object.name]);
        }}
      >
        <meshStandardMaterial
          color={props.tipEyestayTongueColor}
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
      <color args={["#f8f8f8"]} attach="background" />
      <OrbitControls
        makeDefault
        autoRotateSpeed={-0.1}
        zoomSpeed={2}
        enableZoom={false}
        // minDistance={10}
        // maxDistance={14}
        dampingFactor={0.08}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
      />
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[2, 5, 0.5]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[6, 15, -30]} intensity={1.2} />
      <directionalLight position={[6, 50, 30]} intensity={0.5} />
      <directionalLight position={[40, 8, 3]} intensity={1.2} />
      <directionalLight position={[1, 50, 3]} intensity={0.6} />

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
        {renderShoe([0, 0.2, 0], [1, 1, 1])}
        {renderShoe([0, 0.2, 1.8], [1, 1, -1])}

        <Environment preset="city" environmentIntensity={0.1}/>
      </Center>
    </>
  );
}
