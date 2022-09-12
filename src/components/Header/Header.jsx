import React from 'react'
import './Header.css'
import CTA from './CTA'
// import me from '../../assests/person3.jpg'
import me from '../../assests/person3.png'
import HeaderSocial from './HeaderSocial'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1> Nikunj Vadher </h1>
        <h5 className="text-light">MERN stack developer</h5>
        <CTA/>

        <HeaderSocial/>

        <div className="me">
          <img src={me} alt="Person" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

        <Nav/>
      </div>
    </header>
  )
}

export default Header