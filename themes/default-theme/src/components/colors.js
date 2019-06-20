import React from "react"
//import Hue from "./hue"
import theme from "../theme"

const Colors = () => {
  const { colors } = theme
  return (
    <div>
      {/* {Object.entries(colors).map(([key, value], index) => (
        <ColorHue key={index} colorName={key} colors={value} />
      ))} */}
      <div>{JSON.stringify(colors, null, 2)}</div>
    </div>
  )
}

export default Colors
