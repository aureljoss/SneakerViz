import "./styles/styles.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import React, { useState, useMemo } from "react";
import ShoeBuilder from "./components/ShoeBuilder.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const root = ReactDOM.createRoot(document.querySelector("#root"));

// Define 5 camera positions for different views
const cameraPositions = [
  { position: [-8, 4, -10], fov: 20 }, // Default front view
  { position: [0, 1, -12], fov: 20 }, // Side view (left)
  { position: [12, 1, 0], fov: 20 }, // Back View
  { position: [0, 1, 12], fov: 20 }, // Side view (right)
  { position: [-12, 1, 0], fov: 20 }, // Front View
  { position: [0, 14, 0], fov: 20 }, // Top View
];

function App() {
  const [mainColor, setMainColor] = useState("#445742");
  const [tipEyestayTongueColor, setTipEyestayTongueColor] = useState("#292929");
  const [interiorColor, setInteriorColor] = useState("#292929");
  const [swooshColor, setSwooshColor] = useState("#ece9e9");
  const [tongueLabelColor, setTongueLabelColor] = useState("#292929");
  const [laceColor, setLaceColor] = useState("#292929");
  const [backTabColor, setBackTabColor] = useState("#ffffff");
  // soleColor limited to 'white' or 'gum'
  const [soleColor, setSoleColor] = useState("#f7c68e");

  const [builderIndex, setBuilderIndex] = useState(0);
  const [isSimpleContainerOpen, setIsSimpleContainerOpen] = useState(true);
  const [cameraPositionIndex, setCameraPositionIndex] = useState(0);

  const handleMeshClick = (index) => {
    setBuilderIndex(index);
  };

  const toggleSimpleContainer = () => {
    setIsSimpleContainerOpen(!isSimpleContainerOpen);
  };

  const nextCameraPosition = () => {
    setCameraPositionIndex((prev) => (prev + 1) % cameraPositions.length);
  };

  const prevCameraPosition = () => {
    setCameraPositionIndex(
      (prev) => (prev - 1 + cameraPositions.length) % cameraPositions.length,
    );
  };

  const cameraConfig = useMemo(
    () => ({
      fov: cameraPositions[cameraPositionIndex].fov,
      near: 0.01,
      position: cameraPositions[cameraPositionIndex].position,
    }),
    [cameraPositionIndex],
  );

  const builders = [
    { title: "Vamp / Quarter", value: mainColor, onChange: setMainColor },
    {
      title: "Tip / Eyestay / Tongue",
      value: tipEyestayTongueColor,
      onChange: setTipEyestayTongueColor,
    },
    {
      title: "Foxing / Lining",
      value: interiorColor,
      onChange: setInteriorColor,
    },
    {
      title: "Swoosh",
      value: swooshColor,
      onChange: setSwooshColor,
    },
    {
      title: "Tongue Label",
      value: tongueLabelColor,
      onChange: setTongueLabelColor,
      colors: ["#ece9e9", "#000000"],
    },
    { title: "Laces", value: laceColor, onChange: setLaceColor },
    { title: "Back Tab", value: backTabColor, onChange: setBackTabColor },
    {
      title: "Sole",
      value: soleColor,
      onChange: setSoleColor,
      colors: ["#ece9e9", "#f7c68e"],
    },
  ];

  return (
    <>
      <div id="canvas-container">
        <Canvas flat shadows camera={cameraConfig}>
          <Experience
            mainColor={mainColor}
            tipEyestayTongueColor={tipEyestayTongueColor}
            interiorColor={interiorColor}
            swooshColor={swooshColor}
            tongueLabelColor={tongueLabelColor}
            laceColor={laceColor}
            backTabColor={backTabColor}
            soleColor={soleColor}
            onMeshClick={handleMeshClick}
            cameraPositionIndex={cameraPositionIndex}
            cameraPositions={cameraPositions}
          />
        </Canvas>
      </div>

      {/* Camera Navigation Arrows */}
      <Fab
        onClick={prevCameraPosition}
        sx={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          bgcolor: "rgba(255, 255, 255, 0.8)",
          "&:hover": {
            bgcolor: "rgba(255, 255, 255, 0.9)",
          },
        }}
      >
        <ArrowBackIosIcon />
      </Fab>

      <Fab
        onClick={nextCameraPosition}
        sx={{
          position: "absolute",
          marginRight: "20px",
          top: "50%",
          right: "30vw",
          transform: "translateY(-50%)",
          bgcolor: "rgba(255, 255, 255, 0.8)",
          "&:hover": {
            bgcolor: "rgba(255, 255, 255, 0.9)",
          },
        }}
      >
        <ArrowForwardIosIcon />
      </Fab>

      <div id="ui-details-container">
        {isSimpleContainerOpen ? (
          <div style={{ position: "relative" }}>
            <Fab
              size="small"
              onClick={toggleSimpleContainer}
              sx={{
                position: "absolute",
                top: "14vh",
                right: "10px",
                zIndex: 10,
                bgcolor: "rgba(255, 255, 255, 0.8)",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              <CloseIcon />
            </Fab>
            <Container maxWidth="xs" id="simple-container">
              <Box
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "15px",
                  padding: "10px",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  maxHeight: "80vh",
                  marginBottom: "10px",
                }}
              >
                <h1>Air Force 1 Low</h1>
                <p>
                  The b-ball icon that puts a fresh spin on what you know best:
                  crisp leather, bold colors and the perfect amount of flash to
                  make you shine. A subtle platform gives you just the right
                  amount of height.
                </p>
                <p>
                  <span className="stars">★ ★ ★ ★ ☆</span> 4.6
                </p>
              </Box>

              <Box
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "15px",
                  padding: "4px",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  maxHeight: "30vh",
                }}
              >
                <div className="builder-navigation">
                  <ArrowBackIosIcon
                    onClick={() => setBuilderIndex((i) => Math.max(0, i - 1))}
                    style={{
                      cursor: builderIndex === 0 ? "default" : "pointer",
                      opacity: builderIndex === 0 ? 0.35 : 1,
                    }}
                  />

                  <ShoeBuilder
                    title={builders[builderIndex].title}
                    value={builders[builderIndex].value}
                    onChange={builders[builderIndex].onChange}
                    colors={builders[builderIndex].colors}
                  />

                  <ArrowForwardIosIcon
                    onClick={() =>
                      setBuilderIndex((i) =>
                        Math.min(i + 1, builders.length - 1),
                      )
                    }
                    style={{
                      cursor:
                        builderIndex === builders.length - 1
                          ? "default"
                          : "pointer",
                      opacity: builderIndex === builders.length - 1 ? 0.35 : 1,
                    }}
                  />
                </div>
              </Box>
            </Container>
          </div>
        ) : (
          <Fab
            onClick={toggleSimpleContainer}
            sx={{
              position: "absolute",
              top: "14vh",
              right: "10px",
              bgcolor: "rgba(255, 255, 255, 0.8)",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            <AddIcon />
          </Fab>
        )}

        <Container maxWidth="sm" id="main-container"></Container>
      </div>

      {/* Footer */}
      <footer></footer>
    </>
  );
}

// Render

root.render(<App />);
