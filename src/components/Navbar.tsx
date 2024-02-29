import React, { useEffect, useState } from "react";

import {BiCameraMovie, BiMenu} from 'react-icons/bi';
import {MdClose} from 'react-icons/md';
import { Button } from './Button';
import "./Navbar.css";
import * as Scroll from 'react-scroll';
import { IconContext } from "react-icons";
import { useBlurContext } from "../Context/BlurContext";
const Navbar =()=>{

const scroller = Scroll.scroller;
    const {setBlurred}= useBlurContext();

    const [mobile, setMobile] = useState(false);
    const [toggle, setToggle] = useState(false);
   const handleResize = () =>{
    if(window.innerWidth<=960){
        setMobile(true);
    }else{
        setMobile(false);
        setToggle(false);
    }
   }
    
   useEffect(()=>{
    window.addEventListener('resize',handleResize);
   },[])
    
   const handleToggle = ()=>{
    setToggle(!toggle);
   }

   useEffect(()=>{
        toggle ? setBlurred(true) : setBlurred(false)
   },[toggle]);

   const scrollTo = (anchor:string) =>{
        scroller.scrollTo(anchor, {
            duration: 1500,
            offset: -60,
            smooth: true,
        });
        setToggle(false);
   }

    return (
        <>
        <nav className="navbar">
            <div className='navbar-container'>
                <ul className={toggle ? 'nav-menu active' : 'nav-menu'}>
                    <li><Button buttonStyle='btn--outline' onClick={()=>scrollTo('landing')}>Home</Button></li>
                    <li><Button buttonStyle='btn--outline' onClick={()=>scrollTo('about')}>About</Button></li>
                    <li><Button buttonStyle='btn--outline' onClick={()=>scrollTo('contact')}>Contact</Button></li>
                    <li><Button buttonStyle='btn--outline' onClick={()=>scrollTo('projects')}>Projects</Button></li>
                </ul>  
            </div>
            <IconContext.Provider value={{ size: '40' }}><button className="toggle btn--outline" onClick={handleToggle}>
                {!toggle ?<BiMenu />
                : <MdClose/>}</button></IconContext.Provider>
        </nav>
        
        </>
    )
}
export default Navbar;