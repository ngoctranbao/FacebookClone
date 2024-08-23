import './App.css';
import Dashboard from './components/DashBar'
import Sidebar from './components/SideBar'
import Home from './pages/home'
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import Friend from './pages/friends';
import Messages from './pages/messages';
import Watch from './pages/watch';



function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/friends' element={<Friend/>}/>
        <Route path='/watch' element={<Watch/>} />
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/search' element={<div>Search</div>}/>
        <Route path='/group' element={<div>Group</div>}/>
        <Route path='/stories' element={<div>Stories</div>}/>
        <Route path='/live' element={<div>Live</div>}/>
        <Route path='/reels' element={<div>Short video</div>}/>
        <Route path='/*' element={<div>Chua dinh nghia</div>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
