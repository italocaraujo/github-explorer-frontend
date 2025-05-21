import { title } from "process"

export const theme = {
  colors: {
    primary: '#483AA0',
    secondary: '#7965C1',
    background: '#ffffff',
    primaryLight: '#0070f3',
    text: '#333333',
    error: '#ff0000'
  },
  cards: {
    background: '#f1f5f9',
    borderColor: '#e2e8f0',
    titleColor: '#020817',
    subtitleColor: '#64748b',
    badgeBackground: '#f1f5f9',
    badgeTextColor: '#0f172a',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px'
  }
}

export type ThemeType = typeof theme