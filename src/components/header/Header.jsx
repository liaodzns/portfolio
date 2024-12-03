import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import TypeWriter from '../../TypeWriter.js';

const Header = () => {
  return (
    <section id = 'header'>
    <header>

      <div className="container header__container">
        <h1> <TypeWriter content="Hi, I'm Daniel" speed={100} /> </h1>
        <h3> <TypeWriter content="I'm a developer from Boston" speed={50} /> </h3>
        {/* <h5 className = "text-light"> An Aspiring Fullstack Developer From Boston, Massachusetts</h5> */}
        <CTA />
        <HeaderSocials/>

        {/* <div className = "me">
          <img src={ME} alt="me" />
        </div> */}

        <a href="#contact" className = 'scroll__down'>Scroll Down</a>
      </div>
    </header>
    </section>
  )
}

export default Header