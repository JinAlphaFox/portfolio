import './formation.scss'
import bdd from '../../bdd/formations.json'

function Formation() {
  return (
    <div className="formation module2">
      <h2>Formations</h2>
      {bdd.map((formation) => (
        <div className="formation__card">
          <h3 key={formation.titre}>{formation.titre}</h3>
          <ul>
            <li>
              Diplome de niveau {formation.niveau} (Bac {formation.niveauBac})
            </li>
            <li>Organisme : {formation.organisme}</li>
            <li>Réalisée en {formation.realiseAnnee}</li>
            <li>Durée : {formation.duree}</li>
            <li>{formation.desc}</li>
            <li>{formation.distanceOuPresence}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Formation
