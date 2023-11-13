import { useState } from 'react'
import './style.css'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

function ButtonSave(){
    return <button type="submit" className="buttonSave">Save</button>
}

function ButtonCancel(){
    return <button className="buttonCancel">Cancel</button>
}

export default function Add(){
    let navigate = useNavigate()

    const [user, setUser] = useState({name:'', phone:''})

    const addData = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/phonebook', {
            ...user
        }).then((data) => {
            console.log(data)
            navigate('/')
        })
    }

    return( 
    <>
    <div className='addContainer'> 
        <form onSubmit={addData}>
        <input className="inputAdd" type="text" onChange={(e) => setUser({...user, name: e.target.value})}></input>
        <input className="inputAdd" type="text" onChange={(e) => setUser({...user, phone: e.target.value})}></input>
        <div className='addButtonContainer'>
        <ButtonSave /> <Link to="/"><ButtonCancel /></Link>
        </div>
        </form>
    </div>
    </>
    )
}