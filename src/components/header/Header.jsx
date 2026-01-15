import { useState } from 'react'
import './Header.css'

function Header() {
  return (
    <>
      <header>
        <div className="container-xl header__content">
            <h1>
              <img src="../public/imgs/logo-clara.png" alt="Logo PlayCube" />
            </h1>
            
            <div className="header-nav__btn" id="btn-hamburguer">
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <nav className="header__nav" id="nav-links">
                <a href="#">Filmes</a>
                <a href="#">Séries</a>
            </nav>
        </div>
      </header>
    </>
  );
}

export default Header
