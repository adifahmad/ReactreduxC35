import './style.css'
import UserItemCard from './UserItemCard'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loadUser } from "../actions/users"


export default function UserItemComponent() {
    const item = useSelector(state => state.users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])

        return (
            <div className="itemCardContainer">
                {item.map((user) => <UserItemCard user={user}/>)}
            </div>
        )
    }

