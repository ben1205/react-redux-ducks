import React from 'react';

export const themes = {
  light: {
    foreground: '#000',
    background: '#eee'
  },
  dark: {
    foreground: '#765',
    background: '#000'
  }
}

export const ThemeContext = React.createContext(
  themes.dark
)