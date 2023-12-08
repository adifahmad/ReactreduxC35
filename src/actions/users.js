import axios from "axios"

export const loadUserFailed = () => ({
    type: 'LOAD_USER_FAILED'
})

export const loadUserSuccess = (item) => ({
    type: 'LOAD_USER_SUCCESS',
    item
})

export const loadUser = ({keyword = ""}) => dispatch => axios.get('http://localhost:3001/api/phonebook', {params: {keyword}}).then(({ data }) => {
    dispatch(loadUserSuccess(data))
}).catch((err) => {
    dispatch(loadUserFailed())
})

export const updateUserDraw = (allItem) => ({
    type: 'UPDATE_USER',
    allItem
})

export const updateAvatarDraw = (profile) => ({
    type: 'UPDATE_AVATAR',
    profile
})

export const addUserFailed = () => ({
    type: 'ADD_USER_FAILED'
})

export const addUserSuccess = (items) => ({
    type: 'ADD_USER_SUCCESS',
    items
})

export const addUserDraw = (items) => ({
    type: 'ADD_USER',
    items
})

export const addUser = ({name, phone}) => dispatch => {
    dispatch(addUserDraw({name, phone}))
    return axios.post('http://localhost:3001/api/phonebook', {name, phone}).then(({ data }) => {
        dispatch(addUserSuccess({name, phone}))
    }).catch((err) => {
        dispatch(addUserFailed())
    })
}

export const removeUser = (id) => dispatch => {
    return axios.delete(`http://localhost:3001/api/phonebook/${id}`).then(({ data }) => {
        dispatch({type: 'REMOVE_USER_SUCCESS', id})
    }).catch((err) => {
        dispatch({type: 'REMOVE_USER_FAILED'})
    })
}

export const updateUser = ({id, name, phone, avatar}) => dispatch => {
    dispatch(updateUserDraw())
    return axios.put(`http://localhost:3001/api/phonebook/${id}`, {name, phone, avatar}).then(({ data }) => {
        dispatch({type: 'UPDATE_USER_SUCCESS', id, name, phone, avatar})
    }).catch((err) => {
        dispatch({type: 'UPDATE_USER_FAILED'})
    })
}

export const updateAvatar = ({id, avatar}) => dispatch => {
    dispatch(updateAvatarDraw())
    return axios.put(`http://localhost:3001/api/phonebook/${id}/avatar`, avatar, {
        headers: {
            'Content-Type': 'multipart/form-data'
          }
    }).then(({ data }) => {
        dispatch({type: 'UPDATE_AVATAR_SUCCESS', id, avatar})
    }).catch((err) => {
        dispatch({type: 'UPDATE_AVATAR_FAILED'})
    })
}