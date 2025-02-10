import Projet from '../../components/Projet'
import sites from '../../bdd/sites.json'
import './projects.scss'

function Projects() {
  return (
    <div className="projects">
      <h2>Tous mes Projets</h2>
      <div className="projects__all">
        {sites.map((site, index) => (
          <span className="projects__all__card" key={index}>
            <Projet bdd={site} />
          </span>
        ))}
      </div>
    </div>
  )
}

export default Projects
