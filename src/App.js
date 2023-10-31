// import logo from './logo.svg';
import './App.css';
import React, { useState, useContext } from 'react';
import Users from './Users';
import Comments from './Comments';
import { NavLink, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <NavLink className='navlink' to={'/users'} >Users</NavLink>
      <NavLink className='cNavlink' to={'/comments'} >Comments</NavLink>
      
      <Routes>
        <Route path='/users' element={<Users/>} />
        <Route path='/comments' element={<Comments/>} />
      </Routes>
    </div>
  );
}

export default App;
