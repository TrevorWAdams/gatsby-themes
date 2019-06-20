import React from 'react'
import { useColorMode } from 'theme-ui'
import { Button } from '../elements'

const ToggleColorMode = () => {
  const [mode, setMode] = useColorMode()

  return (
    <Button
      title="Toggle Color Mode"
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
    >
      {mode}
    </Button>
  )
}

export default ToggleColorMode
