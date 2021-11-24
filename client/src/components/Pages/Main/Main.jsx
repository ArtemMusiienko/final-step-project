import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncIncrement } from '../../../store/counterExample/actions'
import { counterSlice } from '../../../store/counterExample/reducer'
import './Main.scss'

const Main = () => {
  const { count } = useSelector(state => state.counter)
  const { increment, decrement } = counterSlice.actions
  const dispatch = useDispatch()
  return (
    <div>
      <div>{count}</div>
      <button type="button" onClick={() => dispatch(increment())}>
        increment counter
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        decrement counter
      </button>
      <button type="button" onClick={() => dispatch(asyncIncrement())}>
        Async increment counter
      </button>
    </div>
  )
}

export default Main
