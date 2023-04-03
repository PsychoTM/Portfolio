import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/darius-blaga-31088916a/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/PsychoTM' target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials