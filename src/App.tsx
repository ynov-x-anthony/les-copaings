import { useState } from 'react'
import navBarList from './data/data.tsx';

import './assets/css/index.css';



import LeftPanel from './components/LeftPanel.tsx';
import Navbar from './components/Navbar.tsx';
import Feed from './components/feed.tsx';
import RightPanel from './components/RigthPanel.tsx';



function App() {
  const [, setLink] = useState('')
  
  
  return (
    <>
    <div className="App">
      <Navbar setLink={setLink} navLinkList={navBarList}/>

      <div className='App__body'>
      <LeftPanel/>
      <Feed/>
      <RightPanel/>
      </div>


    </div>
    </>
  ) 
}

export default App