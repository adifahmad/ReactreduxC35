import './style.css'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { removeUser } from '../actions/users'
import { updateUser } from '../actions/users'
import { Link } from 'react-router-dom'

const submit = (remove) => {
    confirmAlert({
      title: 'Konfirmasi untuk hapus',
      message: 'Apakah anda yakin menghapus data ini?',
      buttons: [
        {
          label: 'Ya',
          onClick: () => remove()
        },
        {
          label: 'Tidak',
          onClick: () => <Link to='/'></Link>
        }
      ]
    });
  };

function AvatarImage({ photos }) {
    return <img src={photos == null ? `/usertie.png` : `http://localhost:3001/images/${photos}`} alt="logo" className="Avatar" />
}

function ButtonEdit({ edit }) {
    return <i class="fa-solid fa-pen-to-square" onClick={edit}></i>
}

function ButtonDelete({ remove }) {
    return <i class="fa-solid fa-trash" onClick={() => submit(remove)}></i>
}

function ButtonSave({ save }) {
    return <i class="fa-solid fa-floppy-disk" onClick={save}></i>
}

export default function UserItemCard({user}){

   
    
    const [userInput, setUserInput] = useState({})

    useEffect(() => {
        setUserInput({name: user.name, phone: user.phone})
    }, [user.name, user.phone])

    const [isEdit, setIsEdit] = useState(false)

    const dispatch = useDispatch()

    const result = []

    if(isEdit){
        return (
            <>
                <div className="itemContainer">
                    <div className='avatarContainer'>
                        <Link to="/avatar" ><AvatarImage photos={user.avatar} /></Link>
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
                                    phone : userInput.phone,
                                    avatar : user.avatar
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
                    <Link to="/avatar" state={{user}}><AvatarImage photos={user.avatar}/></Link>
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