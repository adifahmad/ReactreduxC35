const users = (state = {phonebook : []}, action) => {
    switch(action.type) {
        case 'LOAD_USER_SUCCESS' :
            return {...state, ...action.item, phonebook : [...state.phonebook, ...action.item.phonebook]}

        case 'ADD_USER' :
            return {...state, ...action.items}

        case 'REMOVE_USER_SUCCESS' :
            return {...state, phonebook : [...state.phonebook.filter(item => item.id !== action.id)]}

        case 'UPDATE_USER_SUCCESS' :
            const sortBy = {...state, phonebook: [...state.phonebook.filter(data => data.id !== action.id), {id : action.id, name : action.name, phone : action.phone, avatar : action.avatar}]}
            sortBy.phonebook.sort((a, b) => b.id - a.id)
            return sortBy

        case 'UPDATE_AVATAR_SUCCESS' :
            return {...state, phonebook: [...state.filter(data => data.id !== action.id), {id : action.id, avatar : action.avatar}]}

        case 'REMOVE_USER_FAILED' :
        case 'LOAD_USER_FAILED' :
        default :
            return state;


    }
}

export default users