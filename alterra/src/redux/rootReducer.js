import { combineReducers } from 'redux'
import navIsOpenReducer from './navIsOpen/Reducer'
import nameReducer from './name/Reducer'
import listReducer from './list/Reducer'

const rootReducer = combineReducers({
    navIsOpen: navIsOpenReducer,
    name: nameReducer,
    list: listReducer
})

export default rootReducer