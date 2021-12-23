import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { useLocation, useMatch } from 'react-router-dom'
import ShopCategoriesAccordion from './ShopCategoriesAccordion'

const ShopCategories = () => {
  const [expanded, setExpanded] = useState([])
  const locationArray = useLocation().pathname.split('/')
  // useEffect(() => {
  //   if (locationArray.some(element => element === 'house')) {
  //     const defObj = {
  //       parentId: 'null',
  //       id: 'house'
  //     }
  //     setExpanded(defObj)
  //   }
  //   if (locationArray.some(element => element === 'outdoors')) {
  //     const defObj = {
  //       parentId: 'null',
  //       id: 'outdoors'
  //     }
  //     setExpanded(defObj)
  //   }
  //   if (locationArray.some(element => element === 'trees')) {
  //     const defObj = {
  //       parentId: 'null',
  //       id: 'trees'
  //     }
  //     setExpanded(defObj)
  //   }
  //   if (locationArray.some(element => element === 'seeds')) {
  //     const defObj = {
  //       parentId: 'null',
  //       id: 'seeds'
  //     }
  //     setExpanded(defObj)
  //   }
  //   const defObj = {
  //     parentId: '',
  //     id: ''
  //   }
  //   setExpanded(defObj)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const handleChange = panel => (event, newExpanded) => {
    console.log(panel)
    console.log(expanded)
    const { parentId, id } = panel
    if (parentId === 'null') {
      setExpanded([panel])
    }
    if (expanded.some(element => parentId === element.parentId && id === element.id)) {
      const newState = expanded.map(element => {
        if (parentId === element.parentId && id === element.id) {
          const defObj = {
            parentId: '',
            id: ''
          }
          return defObj
        }
        return element
      })
      setExpanded([...newState])
      return null
    }
    if (expanded.some(element => parentId === element.parentId)) {
      const newState = expanded.map(element => {
        if (parentId === element.parentId) {
          const defObj = {
            parentId: element.parentId,
            id: id
          }
          return defObj
        }
        return element
      })
      setExpanded([...newState])
      return null
    }
    setExpanded([...expanded, panel])
    return null
  }
  const { catalog } = useSelector(state => state.catalog)
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
              <div key={category.id}>
                <Typography>{category.name}</Typography>
                {/* <HeaderNavMobLink category={category} handleDrawerToggle={handleDrawerToggle} /> */}
              </div>
            )
          }
          return (
            <div key={category.id}>
              <ShopCategoriesAccordion
                expanded={expanded}
                handleChange={handleChange}
                accordionBody={createCatalog(currentLevel, category.id)}
                category={category}
              />
            </div>
          )
        })
    }
    return null
  }

  return <div>{createCatalog()}</div>
}

export default ShopCategories
