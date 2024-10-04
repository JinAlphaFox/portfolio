import './projets.scss'
import accessibility from '../../img/accessibilityProject.jpg'
import grimoire from '../../img/grimoireProject.jpg'

function Projets() {
  return (
    <div className="project module1">
      <h2 id="projets">Projets</h2>
      <div className="project__list">
        <div className="project__list__unique">
          <img src={accessibility} alt="" />
          <h3>Site de Nina Carducci</h3>
          <ul>
            <li>
              Je devais débugger et optimiser le site de la photographe Nina
              Carducci
            </li>
            <li></li>
            <li>
              Ce projet m'a permis de développer mes compétences en
              accessibilité et en optimisation du référencement.
            </li>
            <li>
              <a href="https://accessibiliy.netlify.app/">Lien du site</a>
            </li>
            <li>
              <a href="https://github.com/JinAlphaFox/W3C">Lien GitHub</a>
            </li>
          </ul>
        </div>
        <div className="project__list__unique">
          <img src={grimoire} alt="" />
          <h3>Site Mon Vieux Grimoire</h3>
          <ul>
            <li>Je devais développer le back-end du site.</li>
            <li>
              Ma plus grosse problématique sur ce projet fût la compression des
              images. Les anciennes images ne voulaient pas se supprimer. Il
              fallait vider le cache du module pour réussir.
            </li>
            <li>
              J'ai appris à utiliser Node.js, Express et MongoDB pour me servir
              d'une base de donnée.
            </li>
            <li>
              <a href="https://github.com/JinAlphaFox/bookstars">Lien GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projets
