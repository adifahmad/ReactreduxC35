import './style.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function AvatarImage({ photos }) {
    return <img src={photos == null ? `/usertie.png` : `/${photos}`} alt="logo" className="Avatar" />
}

function ButtonEdit() {
    return <i class="fa-solid fa-pen-to-square"></i>
}

function ButtonDelete({ remove }) {
    return <i class="fa-solid fa-trash" onClick={remove}></i>
}


export default function UserItemComponent() {

    const [item, setItem] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/phonebook').then(({ data }) => setItem(data)).catch(err => console.log(err))
    }, [setItem])

    const deleteData = (id) => {
        axios.delete(`http://localhost:3001/api/phonebook/${id}`).then(({ data }) => {
            setItem(item.filter(item => item.id !== id))
        }).catch(err => console.log(err))
    }

    const result = []

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
                                    <ButtonEdit />
                                    </div>
                                    <ButtonDelete remove={()=>deleteData(user.id)} />
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