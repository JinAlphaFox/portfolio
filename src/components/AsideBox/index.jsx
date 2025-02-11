import { Link } from 'react-router-dom'
import sites from '../../bdd/sites.json'
import './asideBox.scss'
import { useState } from 'react'

function AsideBox({ limit }) {
  const [checkedItems, setCheckedItems] = useState(
    sites.reduce((acc, site) => {
      acc[site._id] = false
      return acc
    }, {}),
  )
  const toggleCheck = (_id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [_id]: !prev[_id],
    }))
  }
  return (
    <div className="aside">
      <h2>Projets Réalisés</h2>
      {sites.slice(0, limit).map((site, index) => (
        <div className="aside__project" _id={index}>
          <img src={`/img/${site.photo}`} alt={site.alt} />
          <h3>
            <label for={site._id}>
              {site.titre}
              <i
                class={`fa-solid ${checkedItems[site._id] ? 'fa-arrow-up' : 'fa-arrow-down'}`}
              ></i>
            </label>
          </h3>
          <input
            type="checkbox"
            id={site._id}
            name={site._id}
            onChange={() => toggleCheck(site._id)}
          />
          <div className="aside__project__hidden">
            <ul>
              <li>Objectif : {site.objectif}</li>
              <li>
                J'ai mobilisé les compétences suivantes : <br />
                {site.skills.map((skill, index) => (
                  <span _id={index}>
                    - {skill}
                    <br />
                  </span>
                ))}
              </li>
              <li>
                <a href={site.github}>Lien GitHub</a>
              </li>
              {site.adresse ? (
                <li>
                  <a href={site.adresse}>Lien du site</a>
                </li>
              ) : (
                <span></span>
              )}
            </ul>
          </div>
        </div>
      ))}
      <Link to="/projects" className="aside__lienPlus">
        <i class="fa-solid fa-arrow-right"></i> En voir plus{' '}
        <i class="fa-solid fa-arrow-left"></i>
      </Link>
    </div>
  )
}

export default AsideBox
