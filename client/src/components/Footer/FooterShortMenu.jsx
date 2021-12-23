import React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

const Accordion = styled(props => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => {
    return {
      minHeight: 0,
      '&:not(:last-child)': {
        borderBottom: 0
      },
      '&:before': {
        display: 'none'
      }
    }
  }
)

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.6rem' }} />}
    {...props}
  />
))(({ theme }) => {
  return {
    padding: 0,
    backgroundColor: '#FBFBFB',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)'
    },
    '& .MuiAccordionSummary-content': {
      margin: 0,
      '& .MuiTypography-root': {
        marginLeft: '5px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: theme.palette.text.primary
      }
    }
  }
})

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => {
  return {
    backgroundColor: '#FBFBFB',
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    '& .MuiTypography-root': {
      fontSize: '14px',
      color: theme.palette.text.primary
    }
  }
})

const FooterShortMenu = () => {
  const [expanded, setExpanded] = React.useState('')

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>My Account</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>My Account</Typography>
          <Typography>Our stores</Typography>
          <Typography>Contact us</Typography>
          <Typography>Career</Typography>
          <Typography>Specials</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Help & Guide</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Help Center</Typography>
          <Typography>How to Buy</Typography>
          <Typography>Shipping & Delivery</Typography>
          <Typography>Product Policy</Typography>
          <Typography>How to Return</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>House Plants</Typography>
          <Typography>Potter Plants</Typography>
          <Typography>Seeds</Typography>
          <Typography>Small Plants</Typography>
          <Typography>Accessories</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default FooterShortMenu
