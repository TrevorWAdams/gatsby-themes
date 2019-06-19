import React from "react"
import {
  useColorMode,
} from "theme-ui"

const ToggleColorMode = () => {
  const [mode, setMode] = useColorMode()


  return (
      <button title="Toggle Color Mode" onClick={() => setMode(mode === "light" ? "dark" : "light")}>{mode}</button>
  )
}

export default ToggleColorMode 
