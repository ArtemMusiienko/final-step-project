import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#46A358'
    },
    secondary: {
      main: '#ffffff'
    }
  },
  text: {
    primary: '#3D3D3D'
  },
  typography: {
    fontFamily: 'Nunito'
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body1: 'span'
        }
      }
    }
  }
})

export default theme
