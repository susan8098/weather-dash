import { combineReducers } from 'redux'
import FetchReducer from './FetchReducer'
import GoalReducer from './GoalReducer'

export default combineReducers({
  FetchReducer,
  GoalReducer
})