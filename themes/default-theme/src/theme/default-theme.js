import { grayscale, lighten, darken } from "polished"

const lightMode = {
  black: "#000",
  white: "#fff",
  text: "#15153f",
  background: "#fff",
  primary: "#663399",
  secondary: "#636B61",
  accent: "#AFA2FF",
  muted: "#72788D",
}

const darkMode = {
  black: "#000",
  white: "#fff",
  text: "#fff",
  background: "#15153f",
  primary: "#663399",
  secondary: "#636B61",
  accent: "#AFA2FF",
  muted: "#666",
}

export default {
  colors: {
    black: lightMode.black,
    white: lightMode.white,
    text: lightMode.text,
    background: lightMode.background,
    primary: lightMode.primary,
    secondary: lightMode.secondary,
    accent: lightMode.accent,
    muted: lightMode.muted,
    primary1: lighten(0.4, lightMode.primary),
    primary2: lighten(0.3, lightMode.primary),
    primary3: lighten(0.2, lightMode.primary),
    primary4: lighten(0.1, lightMode.primary),
    primary5: lightMode.primary,
    primary6: darken(0.1, lightMode.primary),
    primary7: darken(0.2, lightMode.primary),
    primary8: darken(0.3, lightMode.primary),
    primary9: darken(0.4, lightMode.primary),
    secondary1: lighten(0.4, lightMode.secondary),
    secondary2: lighten(0.3, lightMode.secondary),
    secondary3: lighten(0.2, lightMode.secondary),
    secondary4: lighten(0.1, lightMode.secondary),
    secondary5: lightMode.secondary,
    secondary6: darken(0.1, lightMode.secondary),
    secondary7: darken(0.2, lightMode.secondary),
    secondary8: darken(0.3, lightMode.secondary),
    secondary9: darken(0.4, lightMode.secondary),
    accent1: lighten(0.4, lightMode.accent),
    accent2: lighten(0.3, lightMode.accent),
    accent3: lighten(0.2, lightMode.accent),
    accent4: lighten(0.1, lightMode.accent),
    accent5: lightMode.accent,
    accent6: darken(0.1, lightMode.accent),
    accent7: darken(0.2, lightMode.accent),
    accent8: darken(0.3, lightMode.accent),
    accent9: darken(0.4, lightMode.accent),
    gray1: grayscale(lighten(0.4, lightMode.black)),
    gray2: grayscale(lighten(0.3, lightMode.black)),
    gray3: grayscale(lighten(0.2, lightMode.black)),
    gray4: grayscale(lighten(0.1, lightMode.black)),
    gray5: grayscale(lightMode.black),
    gray6: grayscale(darken(0.1, lightMode.black)),
    gray7: grayscale(darken(0.2, lightMode.black)),
    gray8: grayscale(darken(0.3, lightMode.black)),
    gray9: grayscale(darken(0.4, lightMode.black)),
    header: {
      text: lightMode.text,
      background: lightMode.primary,
    },
    modes: {
      dark: {
        black: darkMode.black,
        white: darkMode.white,
        text: darkMode.text,
        background: darkMode.background,
        primary: darkMode.primary,
        secondary: darkMode.secondary,
        accent: darkMode.accent,
        muted: darkMode.muted,
        primary1: lighten(0.4, darkMode.primary),
        primary2: lighten(0.3, darkMode.primary),
        primary3: lighten(0.2, darkMode.primary),
        primary4: lighten(0.1, darkMode.primary),
        primary5: darkMode.primary,
        primary6: darken(0.1, darkMode.primary),
        primary7: darken(0.2, darkMode.primary),
        primary8: darken(0.3, darkMode.primary),
        primary9: darken(0.4, darkMode.primary),
        secondary1: lighten(0.4, darkMode.secondary),
        secondary2: lighten(0.3, darkMode.secondary),
        secondary3: lighten(0.2, darkMode.secondary),
        secondary4: lighten(0.1, darkMode.secondary),
        secondary5: darkMode.secondary,
        secondary6: darken(0.1, darkMode.secondary),
        secondary7: darken(0.2, darkMode.secondary),
        secondary8: darken(0.3, darkMode.secondary),
        secondary9: darken(0.4, darkMode.secondary),
        accent1: lighten(0.4, darkMode.accent),
        accent2: lighten(0.3, darkMode.accent),
        accent3: lighten(0.2, darkMode.accent),
        accent4: lighten(0.1, darkMode.accent),
        accent5: darkMode.accent,
        accent6: darken(0.1, darkMode.accent),
        accent7: darken(0.2, darkMode.accent),
        accent8: darken(0.3, darkMode.accent),
        accent9: darken(0.4, darkMode.accent),
        gray1: grayscale(lighten(0.4, darkMode.black)),
        gray2: grayscale(lighten(0.3, darkMode.black)),
        gray3: grayscale(lighten(0.2, darkMode.black)),
        gray4: grayscale(lighten(0.1, darkMode.black)),
        gray5: grayscale(darkMode.black),
        gray6: grayscale(darken(0.1, darkMode.black)),
        gray7: grayscale(darken(0.2, darkMode.black)),
        gray8: grayscale(darken(0.3, darkMode.black)),
        gray9: grayscale(darken(0.4, darkMode.black)),
        header: {
          text: darkMode.text,
          background: darkMode.primary,
        },
      },
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      color: "text",
      bg: "background",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
    Header: {
      color:"white",
      bg: "primary"
    },
    Main: {
      display: "flex",
    },
    Container: {
      maxWidth: 2560,
      p: 0,
      display: "flex",
    },
    Footer: {
      color:"white",
      bg: "primary"
    },
  },
}
