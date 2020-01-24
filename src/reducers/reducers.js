import { combineReducers } from 'redux'
import todoReducers from './todoReducer'

const rootReducers = combineReducers({
    todo: todoReducers
})

export default rootReducers