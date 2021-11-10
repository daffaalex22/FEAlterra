import { CHANGE_NAME, RESET_NAME } from "./Types";

const initialState = {
    name: ''
}

const nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }

        case RESET_NAME:
            return {
                ...state,
                name: ''
            }
        default: return state
    }
}

export default nameReducer