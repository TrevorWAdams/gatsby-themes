import React from "react"
import ColorHue from "./hue"
import theme from "../theme"

const Colors = () => {
  const { colors } = theme
  return (
    <div>
      {Object.entries(colors).map(([key, value], index) => (
        <ColorHue key={index} colorName={key} colors={value} />
      ))}
    </div>
  )
}

export default Colors
