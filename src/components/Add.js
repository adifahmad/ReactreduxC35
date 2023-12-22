import { useState } from 'react'
import './style.css'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addUser } from '../actions/users'

function ButtonSave() {
    return <button type="submit" className="buttonSave">Save</button>
}

function ButtonCancel() {
    return <button className="buttonCancel">Cancel</button>
}

export default function Add() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [user, setUser] = useState({ name: '', phone: '' })

    const AddData = (e) => {
        e.preventDefault()
        dispatch(addUser(user))
        navigate('/')
    }

    return (
        <>
            <div className='addContainer'>
                <form onSubmit={AddData}>
                    <input className="inputAdd" type="text" onChange={(e) => setUser({ ...user, name: e.target.value })}></input>
                    <input className="inputAdd" type="text" onChange={(e) => setUser({ ...user, phone: e.target.value })}></input>
                    <div className='addButtonContainer'>
                        <ButtonSave /> <Link to="/"><ButtonCancel /></Link>
                    </div>
                </form>
            </div>
        </>
    )
}
