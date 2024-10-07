import './projets.scss'
import accessibility from '../../img/accessibilityProject.jpg'
import grimoire from '../../img/grimoireProject.jpg'

function Projets() {
  return (
    <div className="project module1">
      <h2 id="projets">Projets</h2>
      <div className="project__list">
        <div className="project__list__unique">
          <img src={accessibility} alt="écran du site" />
          <h3>Site de Nina Carducci</h3>
          <ul>
            <li>
              Je devais débugger et optimiser le site de la photographe Nina
              Carducci
            </li>
            <li>
              Mon principal problème fut les métrique donnés par Lightouse qui
              étaient trop variables. J'ai dû m'adapter et supprimer mon cache
              pour réussir.
            </li>
            <li>
              J'ai mobilisé les compétences suivantes : <br />
              - SEO <br />
              - Référencement
              <br />
              - Javascript
              <br />- HTML
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
          <img src={grimoire} alt="écran du site" />
          <h3>Site Mon Vieux Grimoire</h3>
          <ul>
            <li>Je devais développer le back-end du site.</li>
            <li>
              Ma plus grosse problématique sur ce projet fût la compression des
              images. Les anciennes images ne voulaient pas se supprimer. Il
              fallait vider le cache du module pour réussir.
            </li>
            <li>
              J'ai mobilisé les compétences suivantes : <br />
              - Node.js <br />
              - Express <br />
              - MongoDB <br />- Javascript
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
