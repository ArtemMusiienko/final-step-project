import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

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

const ShopCategoriesAccordion = ({ expanded, handleChange, category, accordionBody }) => {
  const [accordion, setAccordion] = useState({ parentId: '', id: '' })
  const [isClick, setIsClick] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const { parentId, id } = category
    setAccordion(prevState => {
      return {
        ...prevState,
        parentId,
        id
      }
    })
  }, [category])

  const handleClick = () => {
    if (isClick) {
      navigate('/shop')
      setIsClick(!isClick)
      return null
    }
    navigate(`/shop/${category.id}`)
    setIsClick(!isClick)
    return null
  }

  const cheackExpanded = () =>
    expanded.some(exp => exp.parentId === accordion.parentId && exp.id === accordion.id)
  return (
    <Accordion expanded={cheackExpanded()} onChange={handleChange(accordion)} onClick={handleClick}>
      <AccordionSummary aria-controls={`${accordion.id}-content`} id={`${accordion.id}-header`}>
        <Typography>{category.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>{accordionBody}</AccordionDetails>
    </Accordion>
  )
}

export default ShopCategoriesAccordion
