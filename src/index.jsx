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

const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {
  const [mainColor, setColor] = useState("#8B4513");
  console.log(mainColor);

  return (
    <>
      <div id="canvas-container">
        <Canvas
          flat
          camera={{
            fov: 50,
            near: 0.01,
            position: [-6, 8, 15],
          }}
        >
          <Suspense>
            <Experience mainColor={mainColor} />
            {/* UI */}
          </Suspense>
        </Canvas>
      </div>

      <div id="ui-container">
        <Container maxWidth="xs" id="simple-container">
          <Box
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.4)",
              borderRadius: "20px",
              padding: "30px",
              backdropFilter: "blur(10px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
          </Box>
          <Box
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.4)",
              borderRadius: "20px",
              padding: "10px",
              backdropFilter: "blur(10px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxHeight: "80vh",
            }}
          >
            <ShoeBuilder title="Vamp / Quarter 1/10" />
            <div>
              <Fab
                size="small"
                sx={{
                  backgroundColor: "#8B4513",
                  margin: "10px",
                  border: mainColor === "#8B4513" ? "2px solid #727272ff" : null,
                }}
                onClick={() => setColor("#8B4513")}
              ></Fab>
              <Fab
                size="small"
                sx={{
                  backgroundColor: "#ffffff",
                  margin: "10px",
                  border: mainColor === "#ffffff" ? "2px solid #727272ff" : null,
                }}
                onClick={() => setColor("#ffffff")}
              ></Fab>
              <Fab
                size="small"
                sx={{
                  backgroundColor: "#000000",
                  margin: "10px",
                  border: mainColor === "#000000" ? "2px solid #727272ff" : null,
                }}
                onClick={() => setColor("#000000")}
              ></Fab>
              <Fab
                size="small"
                sx={{
                  backgroundColor: "#cb8bdf",
                  margin: "10px",
                  border: mainColor === "#cb8bdf" ? "2px solid #727272ff" : null,
                }}
                onClick={() => setColor("#cb8bdf")}
              ></Fab>
              <Fab
                size="small"
                sx={{
                  backgroundColor: "#cc1d51",
                  margin: "10px",
                  border: mainColor === "#cc1d51ff" ? "2px solid #727272ff" : null,
                }}
                onClick={() => setColor("#cc1d51")}
              ></Fab>
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
