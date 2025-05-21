import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryLight: string
      primary: string
      secondary: string
      background: string
      text: string
      error: string
    }
    cards: {
      background: string
      borderColor: string
      titleColor: string
      subtitleColor: string
      badgeBackground: string
      badgeTextColor: string
    }
    spacing: {
      small: string
      medium: string
      large: string
    }
  }
}