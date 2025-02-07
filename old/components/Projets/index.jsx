import './projets.scss'
import ProjetUnique from '../ProjetUnique'
import bdd from '../../bdd/sites.json'

function Projets() {
  return (
    <div className="project module1">
      <h2 id="projets">Projets</h2>
      <div className="project__list">
        {bdd.map((projet) => (
          <ProjetUnique bdd={projet} key={projet._id} />
        ))}
      </div>
    </div>
  )
}

export default Projets
