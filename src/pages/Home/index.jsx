import formations from '../../bdd/formations.json'
import experiences from '../../bdd/experiences.json'
import './home.scss'

function Homme() {
  return (
    <div className="monCv">
      <h2>Joshua Lavaud</h2>
      <div className="monCv__sections">
        <div className="monCv__sections__primaire"></div>
        <div className="monCv__sections__primaire__formations">
          <h3>
            <span className="circle"></span>Formations
            <i class="fa-solid fa-arrow-pointer"></i>
          </h3>
          <div className="monCv__sections__primaire__formations__cards">
            {formations.map((formation) => (
              <div>
                <h4 key={formation.key}>
                  <label for={formation.key}>{formation.titre}</label>
                </h4>
                <input
                  type="checkbox"
                  id={formation.key}
                  name={formation.key}
                />
                <div className="monCv__sections__primaire__formations__cards__card">
                  <ul>
                    <li>
                      Diplome de niveau {formation.niveau} (
                      {formation.niveauBac})
                    </li>
                    <li>Organisme : {formation.organisme}</li>
                    <li>Réalisée en {formation.realiseAnnee}</li>
                    <li>Durée : {formation.duree}</li>
                    <li>{formation.distanceOuPresence}</li>
                    <li>{formation.desc}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="monCv__sections__primaire__experiences">
          <h3>
            <span className="circle"></span>Expérience Professionnelle
            <i class="fa-solid fa-arrow-pointer"></i>
          </h3>
          <div className="monCv__sections__primaire__experiences__cards">
            {experiences.map((experience) => (
              <div>
                <span>
                  {experience.entreprise} ({experience.dateDebut} -{' '}
                  {experience.dateFin})
                </span>
                <h4 key={experience.key}>
                  <label for={experience.key}>{experience.titre}</label>
                </h4>
                <input
                  type="checkbox"
                  id={experience.key}
                  name={experience.key}
                />
                <div className="monCv__sections__primaire__experiences__cards__card">
                  <ul>
                    {experience.competences.map((competence) => (
                      <li key={competence.index}>{competence}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="monCv__sections__secondaire"></div>
      </div>
    </div>
  )
}

export default Homme
