import React from "react";
import Fab from "@mui/material/Fab";

export default function ShoeBuilder({ title, value, onChange }) {
  return (
    <div id="builder-container">
      <h1>{title}</h1>
      <div>
        <Fab
          size="small"
          sx={{
            backgroundColor: "#000000",
            margin: "10px",
            transform: "scale(0.9)",
            border: value === "#000000" ? "2px solid #353535" : null,
          }}
          onClick={() => onChange("#000000")}
        ></Fab>
        <Fab
          size="small"
          sx={{
            backgroundColor: "#ece9e9",
            margin: "10px",
            transform: "scale(0.9)",
            border: value === "#ece9e9" ? "2px solid #353535" : null,
          }}
          onClick={() => onChange("#ece9e9")}
        ></Fab>
        <Fab
          size="small"
          sx={{
            backgroundColor: "#d19c2a",
            margin: "10px",
            transform: "scale(0.9)",
            border: value === "#d19c2a" ? "2px solid #353535" : null,
          }}
          onClick={() => onChange("#d19c2a")}
        ></Fab>
        <Fab
          size="small"
          sx={{
            backgroundColor: "#cb8bdf",
            margin: "10px",
            transform: "scale(0.9)",
            border: value === "#cb8bdf" ? "2px solid #353535" : null,
          }}
          onClick={() => onChange("#cb8bdf")}
        ></Fab>
        <Fab
          size="small"
          sx={{
            backgroundColor: "#6881c5",
            margin: "10px",
            transform: "scale(0.9)",
            border: value === "#6881c5" ? "2px solid #353535" : null,
          }}
          onClick={() => onChange("#6881c5")}
        ></Fab>
        <Fab
          size="small"
          sx={{
            backgroundColor: "#cc1d51",
            margin: "10px",
            transform: "scale(0.9)",
            border: value === "#cc1d51" ? "2px solid #353535" : null,
          }}
          onClick={() => onChange("#cc1d51")}
        ></Fab>
      </div>
    </div>
  );
}
