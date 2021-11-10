import { combineReducers } from 'redux'
import navIsOpenReducer from './navIsOpen/Reducer'

const rootReducer = combineReducers({
    navIsOpen: navIsOpenReducer
})

export default rootReducer