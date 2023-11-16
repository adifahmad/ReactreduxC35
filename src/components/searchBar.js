import './style.css'
import { Link } from "react-router-dom"

var ButtonSort = () => {
    return <button className="buttonSort"><i class="fa-solid fa-arrow-down-a-z"></i></button>
}
var ButtonAdd = () => {
    return <button className="buttonAdd"><i class="fa-solid fa-user"></i><i class="fa-solid fa-plus"></i></button>
}
export default function SearchBar({props}) {

    return (
        <>
            <div className="searchContainer">
                <ButtonSort />
                <input type="text" className="searchBar" onInput={(e) => (props((e.target.value)))}></input>
                <Link to="/add"><ButtonAdd /></Link>
            </div>
        </>
    )
} 