import React from "react"
import { readableColor, parseToRgb, parseToHsl } from "polished"

const ColorSwatch = ({ color }) => {
  const hslColor = parseToHsl(color)
  const rgbColor = parseToRgb(color)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
        color: readableColor(color, "#000", "#fff"),
        width: "120px",
        height: "100px",
        margin: "6px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "14px",
        }}
      >{`hsl(${hslColor.hue.toFixed(0)}, ${hslColor.saturation.toFixed(
        2
      )}, ${hslColor.lightness.toFixed(2)})`}</div>
      <div
        style={{
          textAlign: "center",
          fontSize: "14px",
        }}
      >{`rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`}</div>
      <div
        style={{
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        {color}
      </div>
    </div>
  )
}

export default ColorSwatch
