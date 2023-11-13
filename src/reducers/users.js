const users = (state = [], action) => {
    switch(action.type) {

        case 'LOAD_USER_FAILED' :

        case 'LOAD_USER_SUCCESS' :

        case 'ADD_USER' :


        default :
            return state;


    }
}

export default users