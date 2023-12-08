const users = (state = [], action) => {
    switch(action.type) {
        case 'LOAD_USER_SUCCESS' :
            return action.item

        case 'ADD_USER' :
            return [...state, action.items]

        case 'REMOVE_USER_SUCCESS' :
            return state.filter(item => item.id !== action.id)

        case 'UPDATE_USER_SUCCESS' :
            const sortBy = [...state.filter(data => data.id !== action.id), {id : action.id, name : action.name, phone : action.phone, avatar : action.avatar}]
            sortBy.sort((a, b) => b.id - a.id)
            return sortBy

        case 'UPDATE_AVATAR_SUCCESS' :
            return [...state.filter(data => data.id !== action.id), {id : action.id, avatar : action.avatar}]

        case 'REMOVE_USER_FAILED' :

        case 'LOAD_USER_FAILED' :

        default :
            return state;


    }
}

export default users