import { ThemeProvider } from '@emotion/react'

const tema = {
  cores: {
    branco: '#fff',
    atencao: '',
    focus: '#b009ff',

    primarias: {
      a: '#5754ed',
      b: '#d93114',
      c: '',
    },
    secundarias: {
      a: '#ebeaf9',
      b: '',
      c: '',
    },
    neutras: {
      a: '#373737',
      b: '',
      c: '',
      d: '',
    },
    dark: {
      a: '',
      b: '',
    },

  },
  espacamentos: {
    xxs: '4px',
    xs: '8px',
    s: '16px',
    m: '24px',
    l: '32px',
    xl: '48px',
    xxl: '64px',
  },
  fontFamily:"'Montserrat','sans-serif'",
}

export const ProvedorTema = ({ children }) => {
  return (
    <ThemeProvider theme={tema}>
      {children}
    </ThemeProvider>
  )
}