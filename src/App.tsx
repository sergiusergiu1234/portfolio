import React, { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import { NavLink, Route, Routes } from "react-router-dom";
import { Content } from './components/Content';
import { BlurContext } from './Context/BlurContext';

function App() {
  const [blurred,setBlurred] = useState<boolean>(false);
  return (
    <div className="app">
   
      <BlurContext.Provider value={{blurred , setBlurred}}> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Content/>}/>
        </Routes>
        </BlurContext.Provider>
    
    

    
    </div>
    
 
  );
}

export default App;
