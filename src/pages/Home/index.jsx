import formations from '../../bdd/formations.json'
import experiences from '../../bdd/experiences.json'
import skillsProg from '../../bdd/skillsProg.json'
import skillsOther from '../../bdd/skillsOther.json'
import download from '../../bdd/download.json'
import RoundPopup from '../../components/RoundPopup'
import SquarePopup from '../../components/SquarePopup'
import SquarePopupDownload from '../../components/SquarePopupDownload'
import AsideBox from '../../components/AsideBox'
import './home.scss'

function Homme() {
  return (
    <div className="page">
      <div className="page__monCv">
        <h2>Joshua Lavaud</h2>
        <div className="page__monCv__gridZone">
          <div className="page__monCv__gridZone__aPropos">
            <h3>À Propos</h3>
            <p>
              Depuis toujours animé par le développement, j'ai enfin concrétisé
              mon rêve de devenir développeur Web grâce à ma motivation, ma
              curiosité et aussi ma passion. J'aime apprendre, ce qui me permet
              d’être le plus efficace possible.
            </p>
          </div>
          <div className="page__monCv__gridZone__skillsProg">
            <SquarePopup bdd={skillsProg} />
          </div>
          <div className="page__monCv__gridZone__skillsOther">
            <SquarePopup bdd={skillsOther} />
          </div>
          <div className="page__monCv__gridZone__formations">
            <RoundPopup titre="Formations" bdd={formations} />
          </div>
          <div className="page__monCv__gridZone__xpPro">
            <RoundPopup titre="Expériences Professionnelle" bdd={experiences} />
          </div>
          <div className="page__monCv__gridZone__download">
            <SquarePopupDownload />
          </div>
        </div>
      </div>
      <div className="page__aside">
        <AsideBox limit={2} />
      </div>
    </div>
  )
}

export default Homme
