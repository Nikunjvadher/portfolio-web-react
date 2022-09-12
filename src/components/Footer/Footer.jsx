import React from 'react'
import './Footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#/" className="footer__logo">Nikunj</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testmonial">testmonial</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__social">
        <a href="https://facebook.com"><AiFillFacebook/></a>
        <a href="https://instagram.com"><GrInstagram/></a>
        <a href="https://facebook.com"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Nikunj Vadher. All Rights Reserved</small>
      </div>

    </footer>
  )
}

export default Footer