export const loadUserFailed = () => ({
    type: 'LOAD_USER_FAILED'
})

export const loadUserSuccess = (item) => ({
    type: 'LOAD_USER_SUCCESS',
    item
})

export const addUser = () => ({
    type: 'ADD_USER'
})