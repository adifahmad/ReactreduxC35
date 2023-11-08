import './App.css';
import UseritemContainer from './components/UserItemContainer';
import SearchBar from './components/searchBar';
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom"

function App() {
  return (
    <>
    <div>
      <SearchBar />
      <UseritemContainer />
    </div>
    </>
  );
}

export default App;
