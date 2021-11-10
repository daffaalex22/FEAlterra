import { OPEN_NAV, CLOSE_NAV } from './Types'

const initialState = {
    navIsOpen: true
}

const navIsOpenReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_NAV:
            return {
                ...state,
                navIsOpen: true
            }

        case CLOSE_NAV:
            return {
                ...state,
                navIsOpen: false
            }
        default: return state
    }
}

export default navIsOpenReducer