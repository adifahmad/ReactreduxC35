import { useState } from 'react';
import './style.css'
import { Link } from "react-router-dom"

var ButtonSort = ({sort, event}) => {
    return <button className="buttonSort" onClick={() => {sort(); event(false)} }><i class="fa-solid fa-arrow-down-a-z"></i></button>
}
var ButtonAdd = () => {
    return <button className="buttonAdd"><i class="fa-solid fa-user"></i><i class="fa-solid fa-plus"></i></button>
}
var ButtonSortDesc = ({ sort, eventName}) => {
    return <button className="buttonSort" onClick={() => {sort(); eventName(true) }}><i class="fa-solid fa-arrow-down-a-z"></i></button>
}

export default function SearchBar({setKeyword, setSortMode, setSortBy, setPage}) {
    const [isBoolean, setIsBoolean] = useState(true)

    const onSearch = (e) => {
        setKeyword(e.target.value)
        setPage(1)
    }
    
    const onSortAsc = () => {
        setSortBy('name')
        setSortMode('asc')
        setPage(1)
    }

    const onSortDesc = () => {
        setSortBy('name')
        setSortMode('desc')
        setPage(1)
    }

    return (
        <>
            <div className="searchContainer">
                {isBoolean ? <ButtonSort sort={onSortAsc} event={setIsBoolean}/> : <ButtonSortDesc sort={onSortDesc} eventName={setIsBoolean}/>}
                <input type="text" className="searchBar" onInput={onSearch}></input>
                <Link to="/add"><ButtonAdd /></Link>
            </div>
        </>
    )
} 