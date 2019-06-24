import { grayscale, lighten, darken } from 'polished'

const lightMode = {
  black: '#000000',
  white: '#ffffff',
  text: '#3f3f3f',
  background: '#f9f9f9',
  primary: '#e0e0e0',
  secondary: '#9f9f9f',
  accent: '#6c6c6c',
  muted: '#c3c3c3',
}

const darkMode = {
  black: '#000000',
  white: '#ffffff',
  text: '#f9f9f9',
  background: '#3f3f3f',
  primary: '#e0e0e0',
  secondary: '#9f9f9f',
  accent: '#6c6c6c',
  muted: '#c3c3c3',
}

export default {
  initialColorMode: 'light',
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
    gray1: grayscale(lighten(0.4, lightMode.primary)),
    gray2: grayscale(lighten(0.3, lightMode.primary)),
    gray3: grayscale(lighten(0.2, lightMode.primary)),
    gray4: grayscale(lighten(0.1, lightMode.primary)),
    gray5: grayscale(lightMode.primary),
    gray6: grayscale(darken(0.1, lightMode.primary)),
    gray7: grayscale(darken(0.2, lightMode.primary)),
    gray8: grayscale(darken(0.3, lightMode.primary)),
    gray9: grayscale(darken(0.4, lightMode.primary)),
    header: {
      text: lightMode.text,
      background: lightMode.primary,
    },
    sidebar: {
      text: lightMode.text,
      background: lightMode.primary3,
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
        sidebar: {
          text: lightMode.text,
          background: lightMode.primary3,
        },
      },
    },
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      color: 'text',
      bg: 'background',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        color: 'secondary',
        textDecoration: 'underline',
      },
    },
    h1: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      color: 'secondary7',
    },
    h2: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      color: 'secondary3',
    },
    h3: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      color: 'secondary3',
    },
    h4: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      color: 'secondary2',
    },
    h5: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      textTransform: 'uppercase',
      color: 'secondary2',
    },
    Header: {
      color: 'white',
      bg: 'primary',
      display: 'flex',
      justifyContent: 'space-between',
    },
    Main: {
      display: 'flex',
    },
    Container: {
      maxWidth: 2560,
      p: 0,
      display: 'flex',
    },
    Footer: {
      color: 'white',
      bg: 'primary',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
  },
}
