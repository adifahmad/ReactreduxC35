import axios from "axios"

export const loadUserFailed = () => ({
    type: 'LOAD_USER_FAILED'
})

export const loadUserSuccess = (item) => ({
    type: 'LOAD_USER_SUCCESS',
    item
})

export const loadUser = () => dispatch => axios.get('http://localhost:3001/api/phonebook').then(({ data }) => {
    dispatch(loadUserSuccess(data))
}).catch((err) => {
    dispatch(loadUserFailed())
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
        console.log(err)
    })
}