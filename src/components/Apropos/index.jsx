import photo from '../../img/moi.jpg'
import './apropos.scss'

function Apropos() {
  return (
    <div className="about module2">
      <h2 id="apropos">À propos de moi</h2>
      <div className="about__box">
        <img src={photo} alt="ma photo" />
        <div className="about__box__description">
          <p>
            Je suis un développeur Web FullStack débutant, passionné par la
            création d'applications web modernes et intuitives. Avec une
            formation solide en développement front-end et back-end, je maîtrise
            les technologies essentielles telles que HTML, CSS, JavaScript,
            ainsi que des frameworks populaires comme React et Node.js. Je suis
            particulièrement intéressé par la conception d'interfaces
            utilisateur efficaces.
          </p>
          <p>
            Toujours en quête de perfectionnement, je me distingue par ma
            capacité à apprendre rapidement de nouvelles technologies et à
            m’adapter à des environnements de travail dynamiques. Motivé par la
            volonté de résoudre des problèmes complexes, je suis prêt à
            contribuer à des projets ambitieux tout en continuant de développer
            mes compétences techniques et collaboratives.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Apropos
