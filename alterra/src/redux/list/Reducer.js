import { EDIT_ITEM, EDITING_ITEM, DELETE_ITEM, DELETE_ALL_ITEMS, CHECK_ITEM, ADD_ITEM } from './Types'

// const initialState = {
//     id: undefined,
//     title: '',
//     checked: false,
//     editID: undefined,
//     isEditing: false
// }

const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
        return (list = JSON.parse(localStorage.getItem('list')));
    } else {
        return [];
    }
};

const initialState = {
    list: getLocalStorage(),
    editID: undefined,
    isEditing: false
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                list: [...state.list, {
                    id: new Date().getTime().toString(),
                    title: action.payload,
                    checked: false
                }]
            }

        case EDIT_ITEM:
            return {
                ...state,
                editID: action.payload,
                isEditing: true
            }

        case EDITING_ITEM:
            return {
                ...state,
                list: state.list.map((item) => {
                    if (state.editID === item.id) {
                        item.title = action.payload
                    }
                    return item
                }),
                isEditing: false
            }

        case DELETE_ITEM:
            return {
                ...state,
                list: state.list.filter((item) => {
                    if (action.payload !== item.id) { return item }

                })
            }

        case DELETE_ALL_ITEMS:
            return {
                ...state,
                list: []
            }

        // case DELETE_ITEM:
        //     return {
        //         ...state,
        //         list: state.list.filter((item) => {
        //             action.payload !== item.id && item
        //         })
        //     }
        default: return state
    }
}

export default listReducer