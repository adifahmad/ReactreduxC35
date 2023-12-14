import { useState } from 'react';
import './style.css'
import { Link } from "react-router-dom"

var ButtonSort = ({sort, sortName, event}) => {
    return <button className="buttonSort" onClick={() => {sort('asc'); sortName('name'); event(false)} }><i class="fa-solid fa-arrow-down-a-z"></i></button>
}
var ButtonAdd = () => {
    return <button className="buttonAdd"><i class="fa-solid fa-user"></i><i class="fa-solid fa-plus"></i></button>
}
var ButtonSortDesc = ({sortNameDesc, sortNamemode, eventName}) => {
    return <button className="buttonSort" onClick={() => {sortNameDesc('desc'); sortNamemode('name'); eventName(true) }}><i class="fa-solid fa-arrow-down-a-z"></i></button>
}

export default function SearchBar({props, filter, sortBy}) {
    const [isBoolean, setIsBoolean] = useState(true)
    return (
        <>
            <div className="searchContainer">
                {isBoolean ? <ButtonSort sort={filter} sortName={sortBy} event={setIsBoolean}/> : <ButtonSortDesc sortNameDesc={filter} sortNamemode={sortBy} eventName={setIsBoolean}/>}
                <input type="text" className="searchBar" onInput={(e) => (props((e.target.value)))}></input>
                <Link to="/add"><ButtonAdd /></Link>
            </div>
        </>
    )
} 