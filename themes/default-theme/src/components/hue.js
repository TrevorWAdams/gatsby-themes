import React from "react"
import ColorSwatch from "./swatch"

const ColorHue = ({ colorName, colors }) => {
  return (
    <div
      style={{
        padding: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {colors &&
          colors.map((color, index) => (
            <ColorSwatch key={index} color={color} />
          ))}
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        {colorName}
      </div>
    </div>
  )
}

export default ColorHue
