import { Link } from 'react-router-dom'
import './header.scss'

function Header() {
  return (
    <div className="header">
      <div className="header__navigate">
        <span className="header__navigate__cv">
          <Link to="/">Mon CV</Link>
        </span>
        <span className="header__navigate__projects">
          <Link to="/projects">Tous mes Projets</Link>
        </span>
        <span className="header__navigate__contact">
          <Link to="/contact">Contact</Link>
        </span>
      </div>
      <div className="header__fakeBar">
        <div className="header__fakeBar__chevrons">
          <i class="fa-solid fa-chevron-left"></i>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div className="header__fakeBar__searchZone">
          <i class="fa-solid fa-magnifying-glass"></i>
          <h1>Développeur Web FullStack</h1>
        </div>
        <i class="fa-solid fa-rotate-right"></i>
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  )
}

export default Header
