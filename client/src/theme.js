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
