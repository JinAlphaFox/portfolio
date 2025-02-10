import './roundPopup.scss'
import { useState } from 'react'

function RoundPopup({ titre, bdd }) {
  const [checkedItems, setCheckedItems] = useState(
    bdd.reduce((acc, element) => {
      acc[element.key] = element.pertinenceCV || false
      return acc
    }, {}),
  )

  const toggleCheck = (key) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="roundPopup">
      <h3>
        <span className="circle"></span>
        {titre}
      </h3>
      <div className="roundPopup__cards">
        {bdd.map((element, index) => (
          <div>
            {element.type === 'XP' && (
              <span>
                {element.entreprise} ({element.dateDebut} - {element.dateFin})
              </span>
            )}
            <h4 key={index}>
              <label for={element.key}>
                {element.titre}
                <i
                  class={`fa-solid ${checkedItems[element.key] ? 'fa-arrow-up' : 'fa-arrow-down'}`}
                ></i>
              </label>
            </h4>
            <input
              type="checkbox"
              id={element.key}
              name={element.key}
              defaultChecked={element.pertinenceCV}
              onChange={() => toggleCheck(element.key)}
            />
            <div className="roundPopup__cards__card">
              {element.type === 'FT' && (
                <ul>
                  <li>
                    Diplome de niveau {element.niveau} ({element.niveauBac})
                  </li>
                  <li>Organisme : {element.organisme}</li>
                  <li>Réalisée en {element.realiseAnnee}</li>
                  <li>Durée : {element.duree}</li>
                  <li>{element.distanceOuPresence}</li>
                  <li>{element.desc}</li>
                </ul>
              )}
              {element.type === 'XP' && (
                <ul>
                  {element.competences.map((competence) => (
                    <li key={competence.index}>{competence}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoundPopup
