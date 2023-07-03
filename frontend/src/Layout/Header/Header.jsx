import { NavLink } from 'react-router-dom'
import logo from '../../assets/logos/logo.png'

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="Kasa"></img>
      </NavLink>
      <nav className="nav">
        <NavLink to="/" className="nav__link">
          Accueil
        </NavLink>
        <NavLink to="/About" className="nav__link">
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
