import { OPEN_NAV, CLOSE_NAV } from './Types'

export const openNav = () => {
    return {
        type: OPEN_NAV
    }
}

export const closeNav = () => {
    return {
        type: CLOSE_NAV
    }
}