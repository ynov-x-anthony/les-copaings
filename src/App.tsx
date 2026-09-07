import { useState } from 'react'

import './App.css'

import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import LeftPanel from './components/LeftPanel.tsx';


function App() {
  return (
    <>
    <div className="App">
      <Navbar />
    </div>

    <div className='App__body'>
      <LeftPanel/>
      <Footer/>
    </div>
    </>
  ) 
}

export default App