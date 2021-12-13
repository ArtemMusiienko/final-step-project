import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import { Divider, SvgIcon, ToggleButton, ToggleButtonGroup } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { ReactComponent as Login } from '../../assets/Login.svg'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 300,
  bgcolor: 'background.paper',
  borderBottom: '10px solid #46A358',
  boxShadow: 24,
  padding: '50px 100px'
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => {
  return {
    '& .MuiToggleButtonGroup-grouped': {
      margin: theme.spacing(0.5),
      border: 0,
      '&.Mui-disabled': {
        border: 0
      },
      '&:not(:first-of-type)': {
        borderRadius: theme.shape.borderRadius
      },
      '&:first-of-type': {
        borderRadius: theme.shape.borderRadius
      }
    }
  }
})

const StyledToggleButton = styled(ToggleButton)(({ theme }) => {
  return {
    textTransform: 'capitalize',
    fontSize: '20px',
    fontWeight: 500,
    color: theme.palette.text.primary,
    '&.Mui-selected': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main,
      fontWeight: 800,
      '&:hovered': {
        backgroundColor: theme.palette.secondary.main
      }
    }
  }
})

const LoginModal = () => {
  const [open, setOpen] = useState(false)
  const [alignment, setAlignment] = useState('login')
  const handleOpen = () => {
    setAlignment('login')
    setOpen(true)
  }
  const handleClose = () => setOpen(false)
  const handleAlignment = (event, newAlignment) => {
    if (!newAlignment) {
      return
    }
    setAlignment(newAlignment)
  }

  return (
    <div>
      <Button
        variant="contained"
        sx={{ textTransform: 'capitalize', display: { xs: 'none', md: 'flex' } }}
        startIcon={
          <SvgIcon
            sx={{ width: '100%', height: '100%', fill: 'none', minWidth: 18, minHeight: 18 }}
            component={Login}
            viewBox="0 0 18 18"
          />
        }
        onClick={handleOpen}
      >
        Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Button
              onClick={handleClose}
              size="small"
              sx={{ position: 'absolute', top: 0, right: 0, paddingTop: '10px' }}
            >
              <CloseIcon />
            </Button>
            <Box
              elevation={0}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <StyledToggleButtonGroup
                size="small"
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="Login modal"
              >
                <StyledToggleButton value="login" aria-label="Login">
                  Login
                </StyledToggleButton>
                <ToggleButton disabled value="devider" aria-label="devider">
                  <Divider orientation="vertical" />
                </ToggleButton>
                <StyledToggleButton value="register" aria-label="Register">
                  Register
                </StyledToggleButton>
              </StyledToggleButtonGroup>
            </Box>
            {alignment === 'login' ? <LoginForm onClose={handleClose} /> : <RegisterForm />}
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default LoginModal
