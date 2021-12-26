import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Box } from '@mui/system'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Zoom from '@mui/material/Zoom'
import ShopCategoriesAccordion from './ShopCategoriesAccordion'
import ShopCategoryLink from './ShopCategoryLink'

const ShopCategories = ({ resetExpanded, onResetExpanded }) => {
  const [expanded, setExpanded] = useState([])
  const { catalog } = useSelector(state => state.catalog)
  const params = useParams()
  const location = useLocation()
  const currentMatch = location.pathname.split('/').reverse()[0]
  useEffect(() => {
    setExpanded(prevState => [setExpandedFunc()])
    onResetExpanded(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetExpanded])
  useEffect(() => {
    setExpanded(prevState => [setExpandedFunc()])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catalog, params])
  const setExpandedFunc = () => {
    const currentCatalog = catalog
      .filter(category => category.id.includes('-'))
      .filter(category => {
        const matchParam = category.id.split('-').reverse()
        return matchParam[0] === currentMatch
      })
    let currentExpanded = {}
    if (currentCatalog.length) {
      currentExpanded = {
        id: currentCatalog[0].parentId,
        level: currentCatalog[0].level - 1
      }
    }
    return currentExpanded
  }
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: -100
  })

  const handleClick = event => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const handleChange = panel => (event, newExpanded) => {
    const levelInExpanded = expanded.some(exp => exp.level === panel.level)
    if (!levelInExpanded) {
      setExpanded(prevState => [...prevState, panel])
      return null
    }
    if (levelInExpanded) {
      const matchId = expanded.some(exp => exp.id === panel.id)
      if (matchId) {
        const filteredExpandedById = expanded.filter(exp => exp.id !== panel.id)
        setExpanded(filteredExpandedById)
        return null
      }
      const changeIdInExpanded = expanded.map(exp => {
        if (exp.level === panel.level) {
          const { id } = panel
          return { ...exp, id }
        }
        return exp
      })
      setExpanded(changeIdInExpanded)
    }
    return null
  }
  const maxLevel = Math.max(...[...new Set(catalog.map(category => category.level))])
  const createCatalog = (
    level = 0,
    parentId = 'null',
    currentCatalog = catalog,
    maximumLevel = maxLevel
  ) => {
    let currentLevel = level
    if (currentLevel <= maximumLevel) {
      currentLevel += 1
      return currentCatalog
        .filter(category => category.parentId === parentId)
        .map(category => {
          const cheackChilds = currentCatalog.some(element => element.parentId === category.id)
          if (!cheackChilds) {
            return (
              <Box key={category.id} sx={{ margin: '10px 0' }} onClick={handleClick}>
                <ShopCategoryLink category={category} />
              </Box>
            )
          }
          return (
            <div key={category.id}>
              <ShopCategoriesAccordion
                expanded={expanded}
                handleChange={handleChange}
                accordionBody={createCatalog(currentLevel, category.id)}
                category={category}
                level={level}
              />
            </div>
          )
        })
    }
    return null
  }

  return (
    <Zoom in={trigger}>
      <div>{createCatalog()}</div>
    </Zoom>
  )
}

export default ShopCategories
