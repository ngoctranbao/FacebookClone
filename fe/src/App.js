import logo from './logo.svg';
import './App.css';
import LoginForm from './pages/auth/login/loginform';
import Dashboard from './components/DashBar'
import Sidebar from './components/SideBar'
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import React from 'react';



function App() {
  return (
    <HashRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/friends'>Friends</Link>
        <Link to='/watch'>Watch</Link>
        <Link to='/messages'>Messages</Link>
        <Link to='/search'>Search</Link>
      </nav>
      <Routes>
        <Route path='/' element={<div>Home Page</div>}/>
        <Route path='/friends' element={<div>Friends</div>}/>
        <Route path='/watch' element={<div>Watch</div>} />
        <Route path='/messages' element={<div>Messages</div>}/>
        <Route path='/search' element={<div>Search</div>}/>
        <Route path='/group' element={<div>Group</div>}/>
        <Route path='/stories' element={<div>Stories</div>}/>
        <Route path='/*' element={<div>Chua dinh nghia</div>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
