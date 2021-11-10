import { EDIT_ITEM, EDITING_ITEM, DELETE_ITEM, DELETE_ALL_ITEMS, CHECK_ITEM, ADD_ITEM } from './Types'

export const addItem = (titleItem) => {
    return {
        type: ADD_ITEM,
        payload: titleItem
    }
}

export const editingItem = (newTitle) => {
    return {
        type: EDITING_ITEM,
        payload: newTitle
    }
}

export const editItem = (editId) => {
    return {
        type: EDIT_ITEM,
        payload: editId
    }
}

export const deleteItem = (deleteId) => {
    return {
        type: DELETE_ITEM,
        payload: deleteId
    }
}

export const deleteAllItems = () => {
    return {
        type: DELETE_ALL_ITEMS
    }
}

export const checkUncheck = (checkId) => {
    return {
        type: CHECK_ITEM,
        payload: checkId
    }
}