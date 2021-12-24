import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import Backdrop from '@mui/material/Backdrop'
import Button from '@mui/material/Button'
import { Dialog, DialogActions, DialogContent, DialogContentText, SvgIcon } from '@mui/material'
import { ReactComponent as Login } from '../../assets/login.svg'
import { userLogout } from '../../store/auth/actions'

const LogoutModal = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
    dispatch(userLogout())
    setOpen(false)
  }

  const descriptionElementRef = useRef(null)
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])
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
        onClick={handleClickOpen}
      >
        Logout
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <DialogContent>
          <DialogContentText id="dialog-description" ref={descriptionElementRef} tabIndex={-1}>
            Are you sure? Do you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Ok</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default LogoutModal
