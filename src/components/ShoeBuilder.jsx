import React from "react";
import Fab from "@mui/material/Fab";

const DEFAULT_COLORS = [
  "#292929",
  "#ece9e9",
  "#a05f21",
  "#cb8bdf",
  "#6881c5",
  "#cc1d51",
  "#a2bb9e",
  "#445742",
];

export default function ShoeBuilder({
  title,
  value,
  onChange,
  colors = DEFAULT_COLORS,
}) {
  return (
    <div id="builder-container">
      <h1>{title}</h1>
      <div>
        {colors.map((color) => (
          <Fab
            key={color}
            size="small"
            sx={{
              backgroundColor: color,
              margin: "10px",
              transform: "scale(0.9)",
              border: value === color ? "2px solid #353535" : null,
            }}
            onClick={() => onChange(color)}
          ></Fab>
        ))}
      </div>
    </div>
  );
}
