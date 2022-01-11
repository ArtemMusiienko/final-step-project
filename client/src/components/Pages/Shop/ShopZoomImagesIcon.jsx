/* eslint-disable no-underscore-dangle */
import React, { useEffect, useRef, useState } from 'react'
import { Backdrop, Dialog, DialogContent, IconButton } from '@mui/material'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import { useTheme } from '@mui/material/styles'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'

const ShopZoomImagesIcon = ({ product }) => {
  const theme = useTheme()
  const [isOpenedDialog, setIsOpenedDialog] = useState(false)
  const images = product.imageUrls.map(image => {
    const imgObject = {
      original: `${image}`,
      description: `${product.name}`,
      thumbnail: `${image}`
    }
    return imgObject
  })
  const handleClick = async () => {
    setIsOpenedDialog(true)
  }
  const handleClose = () => {
    setIsOpenedDialog(false)
  }
  const descriptionElementRef = useRef(null)
  useEffect(() => {
    if (isOpenedDialog) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [isOpenedDialog])
  return (
    <>
      <IconButton onClick={handleClick}>
        <ZoomOutMapIcon sx={{ color: theme.text.primary }} />
      </IconButton>
      <Dialog
        open={isOpenedDialog}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <DialogContent
          sx={{
            padding: '2px',
            backgroundColor: theme.palette.primary.main,
            '& .image-gallery-right-nav:hover': { color: theme.palette.primary.main },
            '& .image-gallery-left-nav:hover': { color: theme.palette.primary.main },
            '& .image-gallery-description': {
              top: 0,
              bottom: '90%',
              right: 0,
              textTransform: 'capitalize',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }}
        >
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            showThumbnails={false}
            showIndex
            showPlayButton={false}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ShopZoomImagesIcon
