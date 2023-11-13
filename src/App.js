import User from './components/User';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import Add from './components/Add';

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<User />} />
              <Route path="/add" element={<Add />}></Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}



export default App;
