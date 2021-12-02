import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#46A358'
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
