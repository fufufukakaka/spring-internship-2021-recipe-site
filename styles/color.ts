type ColorType = {
  hex: string
  opacity: number
}

export const colors = {
  base: {
    primary: '#1C1A10',
    white: '#ffffff',
    accent: '#F78700',
    gray: '#989483',
    green: '#97AF10',
  },
  text: {
    primary: '#1C1A10',
    white: '#ffffff',
    accent: '#F78700',
    gray: '#989483',
    green: '#97AF10',
  },
  background: {
    primary: '#FAFAF5',
    accent: '#F78700',
  },
  icon: {
    primary: '#1C1A10',
    white: '#ffffff',
    accent: '#F78700',
    gray: '#989483',
    green: '#97AF10',
  },
}

export type BaseColor = keyof typeof colors.base
export type TextColor = keyof typeof colors.text
export type BackgroundColor = keyof typeof colors.background
export type IconColor = keyof typeof colors.icon
