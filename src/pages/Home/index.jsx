import formations from '../../bdd/formations.json'
import experiences from '../../bdd/experiences.json'
import './home.scss'

function Homme() {
  return (
    <div className="monCv">
      <h2>Joshua Lavaud</h2>
      <div className="monCv__sections">
        <div className="monCv__sections__primaire">
          <div className="monCv__sections__primaire__formations">
            <h3>
              <span className="circle"></span>Formations
              <i class="fa-solid fa-arrow-pointer"></i>
            </h3>
            <div className="monCv__sections__primaire__formations__cards">
              {formations.map((formation, index) => (
                <div>
                  <h4 key={formation.key}>
                    <label for={formation.key}>{formation.titre}</label>
                  </h4>
                  <input
                    type="checkbox"
                    id={formation.key}
                    name={formation.key}
                    defaultChecked={formation.pertinenceCV}
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
              {experiences.map((experience, index) => (
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
                    defaultChecked={experience.pertinenceCV}
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
        </div>
        <div className="monCv__sections__secondaire">
          <div className="monCv__sections__secondaire__aPropos">
            <h3>À Propos</h3>
            <p>
              Depuis toujours animé par le développement, j'ai enfin concrétisé
              mon rêve de devenir développeur Web grâce à ma motivation, ma
              curiosité et aussi ma passion. J'aime apprendre, ce qui me permet
              d’être le plus efficace possible.
            </p>
          </div>
          <div className="monCv__sections__secondaire__programmation">
            <div className="monCv__sections__secondaire__programmation__head">
              <i class="fa-solid fa-window-minimize"></i>
              <i class="fa-regular fa-window-restore"></i>
              <i class="fa-solid fa-x"></i>
            </div>
            <div className="monCv__sections__secondaire__programmation__skills">
              <h3>Programmation</h3>
              <div className="monCv__sections__secondaire__programmation__skills__icones">
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css"></i>
                <i class="fa-brands fa-sass"></i>
                <i class="fa-brands fa-js"></i>
                <i class="fa-brands fa-php"></i>
                <i class="fa-brands fa-react"></i>
                <i class="fa-brands fa-node"></i>
                <i class="fa-brands fa-git"></i>
              </div>
              <p>MySQL, Yarn, MongoDB, Méthode, Agile</p>
            </div>
            <div className="monCv__sections__secondaire__programmation__foot">
              <i class="fa-solid fa-bars"></i>
              <i class="fa-solid fa-camera"></i>
              <i class="fa-solid fa-expand"></i>
            </div>
          </div>
          <div className="monCv__sections__secondaire__passions">
            <div className="monCv__sections__secondaire__passions__head">
              <i class="fa-solid fa-window-minimize"></i>
              <i class="fa-regular fa-window-restore"></i>
              <i class="fa-solid fa-x"></i>
            </div>
            <div className="monCv__sections__secondaire__passions__body">
              <h3>Langues</h3>
              <p>Anglais lu</p>
              <h3>Centres d'intérêt</h3>
              <p>
                <ul>
                  <li>Jeux de rôles (Meneur et Joueur)</li>
                  <li>Taekwondo, Volley-ball</li>
                  <li>Jeux vidéo (RPG principalement)</li>
                  <li>Jeux de société (Animateur et Joueur)</li>
                </ul>
              </p>
            </div>
            <div className="monCv__sections__secondaire__passions__foot">
              <i class="fa-solid fa-bars"></i>
              <i class="fa-solid fa-camera"></i>
              <i class="fa-solid fa-expand"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homme
