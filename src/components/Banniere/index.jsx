import './banniere.scss'
import logo from '../../img/logo.svg'

function Banniere() {
  return (
    <div className="banniere">
      <img src={logo} alt="" />
      <h1 id="titre">Joshua Lavaud</h1>
      <h2>Développeur WEB FullStack</h2>
    </div>
  )
}

export default Banniere
