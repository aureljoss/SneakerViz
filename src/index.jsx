import "./styles/styles.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import * as THREE from "three";
import React, { Suspense, useState, useEffect } from "react";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {
  return (
    <>
      <div id="main-nav">
      </div>
      <div id="canvas-container">
        <Canvas
          flat
          camera={{
            fov: 50,
            near: 0.01,
            position: [-6, 8, 15],
          }}
        >
          <Suspense >
            <Experience />
          </Suspense>
        </Canvas>
      </div>

      {/* Footer */}
      <footer></footer>
    </>
  );
}

// Render

root.render(<App />);
