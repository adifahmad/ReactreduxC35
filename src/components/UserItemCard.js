import './style.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { removeUser } from '../actions/users'
import { updateUser } from '../actions/users'


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

export default function UserItemCard({user}){
    
    const [userInput, setUserInput] = useState({name: user.name, phone: user.phone})
    const [isEdit, setIsEdit] = useState(false)

    const dispatch = useDispatch()

    
    const result = []

    if(isEdit){
        return (
            <>
                <div className="itemContainer">
                    <div className='avatarContainer'>
                        <AvatarImage photos={user.avatar} />
                    </div>
                    <div className='formContainer'>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
                        <div>
                            <input type='text' className='formInputName' value={userInput.name} onChange={(e) => setUserInput({...userInput, name: e.target.value})}></input>
                        </div>
                        <div>
                            <input type='text' className='formInputPhone' value={userInput.phone} onChange={(e) => setUserInput({...userInput, phone: e.target.value})}></input>
                        </div>
                        <div className='formButton'>
                            <div className='formButtonEdit'>
                                <ButtonSave save={() => (dispatch(updateUser({ 
                                    id : user.id, 
                                    name : userInput.name,
                                    phone : userInput.phone
                                })), (setIsEdit(false)))} />
                            </div>
                        </div>
                    </div>
                    {result}
                </div>
            </>
        );
    }else{
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
    }
}