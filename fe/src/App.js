import './App.css';
import Dashboard from './components/DashBar'
import Home from './pages/home'
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import React from 'react';
import Friend from './pages/friends';
import Watch from './pages/watch';
import LoginForm from './pages/auth/loginform';
import RoomChat from './pages/roomchat';

const Layout = ({ children }) => {
  const location = useLocation();

  const hideElementOnPath = '/auth/login';

  return (
    <div>
      {location.pathname !== hideElementOnPath && <Dashboard/>}
      <div style={{marginTop: `${location.pathname !== hideElementOnPath ? "100px" : "0px"}`}}>
        {children}
      </div>
    </div>
  );
};


function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path='auth/login' element={<LoginForm/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/friends' element={<Friend/>}/>
          <Route path='/watch' element={<Watch/>} />
          <Route path='/messages/:id' element={<RoomChat/>}/>
          <Route path='/search' element={<div>Search</div>}/>
          <Route path='/group' element={<div>Group</div>}/>
          <Route path='/stories' element={<div>Stories</div>}/>
          <Route path='/live' element={<div>Live</div>}/>
          <Route path='/reels' element={<div>Short video</div>}/>
          <Route path='/*' element={<div>Chua dinh nghia</div>}/>
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
