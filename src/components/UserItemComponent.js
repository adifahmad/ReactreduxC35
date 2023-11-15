import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { removeUser } from '../actions/users'
import { loadUser } from "../actions/users"

function AvatarImage({ photos }) {
    return <img src={photos == null ? `/usertie.png` : `/${photos}`} alt="logo" className="Avatar" />
}

function ButtonEdit({ edit }) {
    return <i class="fa-solid fa-pen-to-square" onClick={edit}></i>
}

function ButtonDelete({ remove }) {
    return <i class="fa-solid fa-trash" onClick={remove}></i>
}

function ButtonSave({ save }) {
    return <i class="fa-solid fa-floppy-disk" onClick={save}></i>
}

export default function UserItemComponent() {

    const [isEdit, setIsEdit] = useState(false)
    const item = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])


    const result = []

    if (isEdit) {
        return (
            <div className="itemCardContainer">
                {item.map((user) => {
                    return (
                        <>
                            <div className="itemContainer">
                                <div className='avatarContainer'>
                                    <AvatarImage photos={user.avatar} />
                                </div>
                                <div className='formContainer'>
                                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
                                    <div>
                                        <input type='text' className='formInputName'></input>
                                    </div>
                                    <div>
                                        <input type='text' className='formInputPhone'></input>
                                    </div>
                                    <div className='formButton'>
                                        <div className='formButtonEdit'>
                                            <ButtonSave save={() => (setIsEdit(false))} />
                                        </div>
                                    </div>
                                </div>
                                {result}
                            </div>
                        </>
                    );
                })}
            </div>
        )
    } else {
        return (
            <div className="itemCardContainer">
                {item.map((user) => {
                    return (
                        <>
                            <div className="itemContainer">
                                <div className='avatarContainer'>
                                    <AvatarImage photos={user.avatar} />
                                </div>
                                <div className='formContainer'>
                                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
                                    <p>{user.name}</p>
                                    <p>{user.phone}</p>
                                    <div className='formButton'>
                                        <div className='formButtonEdit'>
                                            <ButtonEdit edit={() => (setIsEdit(true))} />
                                        </div>
                                        <ButtonDelete remove={() => dispatch(removeUser(user.id))} />
                                    </div>
                                </div>
                                {result}
                            </div>
                        </>
                    );
                })}
            </div>
        )
    }


}