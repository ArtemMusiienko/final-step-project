import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import { asyncIncrement } from '../../../store/counterExample/actions'
import { counterSlice } from '../../../store/counterExample/reducer'
import './Main.scss'

const Main = () => {
  const { count } = useSelector(state => state.counter)
  const { increment, decrement } = counterSlice.actions
  const dispatch = useDispatch()
  return (
    <div>
      {/* <div>{count}</div>
      <Button variant="contained" color="primary" onClick={() => dispatch(increment())}>
        increment counter
      </Button>
      <Button variant="contained" color="primary" onClick={() => dispatch(decrement())}>
        decrement counter
      </Button>
      <Button variant="contained" color="secondary" onClick={() => dispatch(asyncIncrement())}>
        Async increment counter
      </Button> */}
    </div>
  )
}

export default Main
