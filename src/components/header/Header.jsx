import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Hi, I'm Daniel </h1>
        {/* <h5 className = "text-light"> An Aspiring Fullstack Developer From Boston, Massachusetts</h5> */}
        <CTA />
        <HeaderSocials/>

        {/* <div className = "me">
          <img src={ME} alt="me" />
        </div> */}

        <a href="#contact" className = 'scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header