import { useState } from 'react'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <>
      <header>
        <div className="container-xl header__content">
          <h1>
            <img src="../public/imgs/logoclara.png" alt="Logo PlayCube" />
          </h1>

          <div
            className={`header-nav__btn ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`header__nav ${menuOpen ? 'active' : ''}`}>
            <a href="#">Filmes</a>
            <a href="#">Séries</a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header