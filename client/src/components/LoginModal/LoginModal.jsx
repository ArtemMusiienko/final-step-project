import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Divider, SvgIcon, ToggleButton, ToggleButtonGroup } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { ReactComponent as Login } from '../../assets/loginIcon.svg'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { clearMessage } from '../../store/message/reducer'

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

const LoginModal = ({ handleDrawerToggle }) => {
  const [open, setOpen] = useState(false)
  const [alignment, setAlignment] = useState('login')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearMessage())
    return () => {
      dispatch(clearMessage())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, alignment])
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])
  const handleOpen = () => {
    setAlignment('login')
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    if (!handleDrawerToggle) {
      return null
    }
    handleDrawerToggle()
    return null
  }
  const handleAlignment = (event, newAlignment) => {
    if (!newAlignment) {
      return
    }
    setAlignment(newAlignment)
  }
  const descriptionElementRef = React.useRef(null)
  return (
    <div>
      <Button
        variant="contained"
        sx={{ textTransform: 'capitalize', boxShadow: 'none' }}
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
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent
          ref={descriptionElementRef}
          sx={{ borderBottom: '10px solid #46A358', padding: '50px 50px' }}
        >
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
          {alignment === 'login' ? (
            <LoginForm onClose={handleClose} />
          ) : (
            <RegisterForm onClose={handleClose} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default LoginModal
