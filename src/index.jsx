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
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {
  const [color, setColor] = useState("#8B4513");
  console.log(color);

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
            <Experience color={color} />
            {/* UI */}
          </Suspense>
        </Canvas>
      </div>

      <div id="ui-container">
          <Box sx={{ justifyContent: "center", alignItems: "center" }}>
            <ShoeBuilder title="Vamp / Quarter 1/10"/>
            <ButtonGroup>
              <Button onClick={() => setColor("#8B4513")}>Brown</Button>
              <Button onClick={() => setColor("#ffffff")}>White</Button>
              <Button onClick={() => setColor("#000000")}>Black</Button>
            </ButtonGroup>
            <p onClick={() => setColor("#0000ff")}>Blue</p>
          </Box>
      </div>

      {/* Footer */}
      <footer></footer>
    </>
  );
}

// Render

root.render(<App />);
