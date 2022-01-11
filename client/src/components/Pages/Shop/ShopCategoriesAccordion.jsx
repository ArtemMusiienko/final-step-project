import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

const Accordion = styled(props => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => {
    return {
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
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => {
  return {
    backgroundColor: '#FBFBFB',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)'
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1)
    }
  }
})

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => {
  return {
    paddingLeft: theme.spacing(5),
    backgroundColor: '#FBFBFB'
  }
})

const ShopCategoriesAccordion = ({ expanded, handleChange, category, accordionBody, level }) => {
  const theme = useTheme()
  const [accordion, setAccordion] = useState({
    id: category.id,
    level
  })

  const cheackExpanded = () =>
    expanded.some(exp => exp.id === accordion.id && exp.level === accordion.level)
  return (
    <Accordion expanded={cheackExpanded()} onChange={handleChange(accordion)}>
      <AccordionSummary aria-controls={`${accordion.id}-content`} id={`${accordion.id}-header`}>
        <Typography
          sx={{
            color: cheackExpanded() ? theme.palette.primary.main : theme.text.primary,
            fontWeight: cheackExpanded() ? 700 : 400,
            '&:hover': {
              color: theme.palette.primary.main,
              opacity: 1
            }
          }}
        >
          {category.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{accordionBody}</AccordionDetails>
    </Accordion>
  )
}

export default React.memo(ShopCategoriesAccordion)
