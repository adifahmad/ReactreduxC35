import './style.css'
import UserItemCard from './UserItemCard'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { loadUser } from "../actions/users"
import SearchBar from './searchBar'


export default function UserItemComponent() {
    const item = useSelector(state => state.users)
    const [keyword, setKeyword] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser({keyword}))
    }, [dispatch, keyword])

        return (
            <>
            <SearchBar props={setKeyword}/>
            <div className="itemCardContainer">
                {item.map((user) => <UserItemCard user={user}/>)}
            </div>
            </>
        )
    }

