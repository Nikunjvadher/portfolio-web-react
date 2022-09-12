import React from 'react'
import { BsLinkedin , BsGithub } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <>
        <div className="header__social">
            <a href="/https://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="/https://github.com" target="_blank"><BsGithub/></a>
            <a href="/https://facebook.com" target="_blank"><FaFacebookSquare/></a>
        </div>
    </>
  )
}

export default HeaderSocial;