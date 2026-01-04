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
            <div class="builder-navigation">
              <ArrowBackIosIcon onClick={() => {}} />
              <ShoeBuilder title="Vamp / Quarter" />
              <ArrowForwardIosIcon />
            </div>

            <div>
              <Fab
                size="small"
                sx={{
                  backgroundColor: "#000000",
                  margin: "10px",
                  transform: "scale(0.9)",
                  border:
                    mainColor === "#000000" ? "2px solid #353535ff" : null,
                }}
                onClick={() => setColor("#000000")}
              ></Fab>
              <Fab
                size="small"
                sx={{
                  backgroundColor: "#ffffff",
                  margin: "10px",
                  transform: "scale(0.9)",
                  border:
                    mainColor === "#ffffff" ? "2px solid #353535ff" : null,
                }}
                onClick={() => setColor("#ffffff")}
              ></Fab>
              <Fab
                size="small"
                sx={{
                  backgroundColor: "#d19c2a",
                  margin: "10px",
                  transform: "scale(0.9)",
                  border:
                    mainColor === "#d19c2a" ? "2px solid #353535ff" : null,
                }}
                onClick={() => setColor("#daa431")}
              ></Fab>
              <Fab
                size="small"
                sx={{
                  backgroundColor: "#cb8bdf",
                  margin: "10px",
                  transform: "scale(0.9)",
                  border:
                    mainColor === "#cb8bdf" ? "2px solid #353535ff" : null,
                }}
                onClick={() => setColor("#cb8bdf")}
              ></Fab>
              <Fab
                size="small"
                sx={{
                  backgroundColor: "#647be0",
                  margin: "10px",
                  transform: "scale(0.9)",
                  border:
                    mainColor === "#647be0" ? "2px solid #353535ff" : null,
                }}
                onClick={() => setColor("#647be0")}
              ></Fab>
              <Fab
                size="small"
                sx={{
                  backgroundColor: "#cc1d51",
                  margin: "10px",
                  transform: "scale(0.9)",
                  border:
                    mainColor === "#cc1d51ff" ? "2px solid #353535ff" : null,
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
