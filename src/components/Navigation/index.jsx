import './navigation.scss'

function Navigation() {
  return (
    <div className="navigate">
      <ul>
        <a href="#titre">
          <li>Home</li>
        </a>
        <a href="#apropos">
          <li>À propos de moi</li>
        </a>
        <a href="#skills">
          <li>Compétences</li>
        </a>
        <a href="#projets">
          <li>Projets</li>
        </a>
      </ul>
    </div>
  )
}

export default Navigation
