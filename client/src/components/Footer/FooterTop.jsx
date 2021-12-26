import React from 'react'
import { Button, ButtonGroup, Divider, SvgIcon, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { ReactComponent as CactusFirst } from '../../assets/cactusFirstIcon.svg'
import { ReactComponent as CactusSecond } from '../../assets/cactusSecondIcon.svg'
import { ReactComponent as CactusThird } from '../../assets/cactusThirdIcon.svg'

const FooterTop = () => (
  <Box
    sx={{
      display: 'flex',
      backgroundColor: '#FBFBFB',
      padding: '25px 0',
      flexDirection: { xs: 'column', md: 'row' }
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        marginBottom: { xs: '20px', md: 0 },
        flexDirection: { xs: 'column', sm: 'row' }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '0 23px',
          alignItems: { xs: 'center', sm: 'none' }
        }}
      >
        <Box>
          <SvgIcon
            sx={{ width: '100%', height: '100%', maxWidth: '90px', minHeight: '115px' }}
            component={CactusFirst}
            viewBox="0 0 93 100"
          />
        </Box>
        <Typography
          variant="h6"
          sx={{ fontSize: '17px', fontWeight: 'bold', color: 'text.primary' }}
        >
          Garden Care
        </Typography>
        <Typography sx={{ fontSize: '14px', color: '#727272' }}>
          We are an online plant shop offering a wide range of cheap and trendy plants.
        </Typography>
      </Box>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '0 23px',
          alignItems: { xs: 'center', sm: 'none' }
        }}
      >
        <Box>
          <SvgIcon
            sx={{ width: '100%', height: '100%', maxWidth: '90px', minHeight: '115px' }}
            component={CactusSecond}
            viewBox="0 0 93 100"
          />
        </Box>
        <Typography
          variant="h6"
          color="initial"
          sx={{ fontSize: '17px', fontWeight: 'bold', color: 'text.primary' }}
        >
          Plant Renovation
        </Typography>
        <Typography sx={{ fontSize: '14px', color: '#727272' }}>
          We are an online plant shop offering a wide range of cheap and trendy plants.
        </Typography>
      </Box>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '0 23px',
          alignItems: { xs: 'center', sm: 'none' }
        }}
      >
        <Box>
          <SvgIcon
            sx={{ width: '100%', height: '100%', maxWidth: '90px', minHeight: '115px' }}
            component={CactusThird}
            viewBox="0 0 93 100"
          />
        </Box>
        <Typography
          variant="h6"
          color="initial"
          sx={{ fontSize: '17px', fontWeight: 'bold', color: 'text.primary' }}
        >
          Watering Graden
        </Typography>
        <Typography sx={{ fontSize: '14px', color: '#727272' }}>
          We are an online plant shop offering a wide range of cheap and trendy plants.
        </Typography>
      </Box>
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0 23px'
      }}
    >
      <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
        Would you like to join newsletters?
      </Typography>
      <ButtonGroup disableElevation variant="contained">
        <TextField
          id="outlined-basic"
          label="enter your email address..."
          variant="outlined"
          sx={{ flexGrow: 1, backgroundColor: 'white' }}
        />
        <Button
          sx={{
            flexGrow: 0,
            fontSize: '18px',
            fontWeight: 'bold',
            textTransform: 'capitalize',
            padding: '0 26px'
          }}
        >
          Join
        </Button>
      </ButtonGroup>
      <Typography
        sx={{
          fontSize: '13px',
          color: '#727272'
        }}
      >
        We usually post offers and challenges in newsletter. We’re your online houseplant
        destination. We offer a wide range of houseplants and accessories shipped directly from
        (green)house to yours!
      </Typography>
    </Box>
  </Box>
)

export default FooterTop
