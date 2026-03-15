import "./styles/styles.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import * as THREE from "three";
import React, { Suspense, useState, useEffect } from "react";
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

const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {
  const [mainColor, setMainColor] = useState("#ece9e9");
  const [tipEyestayTongueColor, setTipEyestayTongueColor] = useState("#ece9e9");
  const [interiorColor, setInteriorColor] = useState("#6881c5");
  const [swooshColor, setSwooshColor] = useState("#6881c5");
  // This will hold a logo choice identifier (e.g. 'logo-1', 'logo-2')
  const [tongueLabelColor, setTongueLabelColor] = useState("logo-1");
  const [laceColor, setLaceColor] = useState("#6881c5");
  const [backTabColor, setBackTabColor] = useState("#6881c5");
  // soleColor limited to 'white' or 'gum'
  const [soleColor, setSoleColor] = useState("#ece9e9");

  const [builderIndex, setBuilderIndex] = useState(0);

  const handleMeshClick = (index) => {
    setBuilderIndex(index);
  };

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
    },
    { title: "Laces", value: laceColor, onChange: setLaceColor },
    { title: "Back Tab", value: backTabColor, onChange: setBackTabColor },
    { title: "Sole", value: soleColor, onChange: setSoleColor },
  ];

  return (
    <>
      <div id="canvas-container">
        <Canvas
          flat
          shadows
          camera={{
            fov: 26,
            near: 0.01,
            position: [-5, 3, -10],
          }}
        >
          <Suspense>
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
            />
            {/* UI */}
          </Suspense>
        </Canvas>
      </div>

      <div id="ui-container">
        <Container maxWidth="xs" id="simple-container">
          <Box
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.4)",
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
              crisp leather, bold colors and the perfect amount of flash to make
              you shine. A subtle platform gives you just the right amount of
              height.
            </p>
            <p>
              <span className="stars">★ ★ ★ ★ ☆</span> 4.6
            </p>
          </Box>
          <Box
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.4)",
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
            <h1>Product Details</h1>
            <p>Fits large; we recommend ordering a half size down</p>
            <p>
              Free standard shipping on orders $50+ and free 60-day returns for
              Nike Members. Learn more. Return policy exclusions apply.
            </p>
          </Box>
          <Box
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.4)",
              borderRadius: "15px",
              padding: "10px",
              backdropFilter: "blur(10px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              maxHeight: "80vh",
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
              />

              <ArrowForwardIosIcon
                onClick={() =>
                  setBuilderIndex((i) => Math.min(i + 1, builders.length - 1))
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

      {/* Footer */}
      <footer></footer>
    </>
  );
}

// Render

root.render(<App />);
