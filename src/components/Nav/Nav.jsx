import React , { useState } from 'react'
import { AiFillHome , AiOutlineUser } from 'react-icons/ai'
import {BiBook , BiMessageAltDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      {/* <a href="#/"  onClick={()=> setActiveNav('#/')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a> */}
      <a href="#home"  onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><BiBook/></a>
      <a href="#services"  onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltDetail/></a>

    </nav>
  )
}

export default Nav;