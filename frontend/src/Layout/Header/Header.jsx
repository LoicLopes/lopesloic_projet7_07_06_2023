import { Link } from 'react-router-dom'
import logo from '../../assets/logos/logo.png'

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Kasa"></img>
      </Link>
      <nav className="nav">
        <Link to="/" className="nav__link">
          Accueil
        </Link>
        <Link to="/About" className="nav__link">
          A propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
