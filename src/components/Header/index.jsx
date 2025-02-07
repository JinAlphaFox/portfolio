import { Link } from 'react-router-dom'
import './header.scss'

function Header() {
  return (
    <div className="header">
      <div className="header__navigate">
        <Link to="/">Mon CV</Link>
        <Link to="/projects">Mes Projets</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="header__fakeBar">
        <i class="fa-solid fa-chevron-left"></i>
        <i class="fa-solid fa-chevron-right"></i>
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
