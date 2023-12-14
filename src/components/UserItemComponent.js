import './style.css'
import UserItemCard from './UserItemCard'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { loadUser } from "../actions/users"
import SearchBar from './searchBar'


export default function UserItemComponent() {
    const item = useSelector(state => state.users)
    const [sortMode, setSortMode] = useState('desc')
    const [sortBy, setSortBy] = useState('id')
    const [keyword, setKeyword] = useState('')
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("page", page)
        dispatch(loadUser({ keyword, sortMode, sortBy, page }))
    }, [dispatch, keyword, sortMode, sortBy, page])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const {
                scrollTop,
                scrollHeight,
                clientHeight
            } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 1) {
                setPage(page => page + 1)
            }
        }, {
            passive: true
        });
    }, [])
    
    console.log("data",item)
    return (
        <>
            <SearchBar props={setKeyword} filter={setSortMode} sortBy={setSortBy} />
            <div className="itemCardContainer">
                {item.phonebook.map((user) => <UserItemCard key={user.id} user={user} />)}
            </div>
        </>
    )
}

