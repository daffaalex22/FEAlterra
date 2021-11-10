import { CHANGE_NAME, RESET_NAME } from './Types'

export const changeName = (newName) => {
    return {
        type: CHANGE_NAME,
        payload: newName
    }
}

export const resetName = () => {
    return {
        type: RESET_NAME
    }
}