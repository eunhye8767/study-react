import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      (window.scrollY > 50) ? setShow(true) : setShow(false)
    })

    return () => {
      window.removeEventListener("scroll", () => {} )
    }
  }, [])
  

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img 
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" 
        alt="Netflix logo"
        className='nav__logo'
        onClick={ () => window.location.reload() }
      />
      <img
        src='user.png'
        alt='User logged'
        className='nav__avatar'
      />
    </nav>
  )
}

export default Nav