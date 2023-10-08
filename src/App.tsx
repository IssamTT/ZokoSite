import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './screens/Home';
import DropdownMenu from './screens/DropdownMenu';
import { Routes, BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Calculator from './screens/Calculator';
import Toolbars from './screens/Toolbars';
import Contact from './screens/Contact';

function App() {
  return (
    <Router>
      <Toolbars />
      <div className="bg-black min-h-screen text-white">
        <nav className='flex justify-end'>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Charge' element={<Calculator caller="charge" />} />
          <Route path='/Inverse' element={<Calculator caller="Max" />} />
          <Route path='/Contact' element={<Contact />} />

        </Routes>
        <img src="roronoa-zoro-one-1242x2208-10523.png" className="w-full h-auto" />
      </div >
    </Router>

  );
}

export default App;
