import { increment } from './reducer'

export const asyncIncrement = () => async dispatch => {
  setTimeout(() => {
    dispatch(increment())
  }, 2000)
}
