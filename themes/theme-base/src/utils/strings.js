const hexColor = str => str.charAt(0) === '#'

const stripEndQuotes = s => {
  var t = s.length
  if (s.charAt(0) === '"') s = s.substring(1, t--)
  if (s.charAt(--t) === '"') s = s.substring(0, t)
  return s
}

const isHexColor = color => {
  return hexColor(color)
}

export { isHexColor, stripEndQuotes }
