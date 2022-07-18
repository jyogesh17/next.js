import { combineReducers } from 'redux'
import { imageReducer } from './imageReducer'

const reducer = combineReducers({
  allImages: imageReducer,
})

export default reducer
