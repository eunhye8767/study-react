import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Nav.css'

function Nav() {
  const navigate = useNavigate();
  
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      (window.scrollY > 50) ? setShow(true) : setShow(false)
    })

    return () => {
      window.removeEventListener("scroll", () => {} )
    }
  }, [])

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  }
  

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img 
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" 
        alt="Netflix logo"
        className='nav__logo'
        onClick={ () => navigate('/') }
      />

      <input
        type={"text"}
        placeholder="영화를 검색해주세요"
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
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