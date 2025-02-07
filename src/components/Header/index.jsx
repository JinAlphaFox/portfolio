import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="navigate">
      <Link to="/">Mon CV</Link>
      <Link to="/projects">Mes Projets</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Header
