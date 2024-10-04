import './skills.scss'

function Skills() {
  return (
    <div className="skill module1">
      <h2>Compétences</h2>
      <div className="skill__list" id="skills">
        <div className="skill__list__card">
          <i class="fa-brands fa-html5"></i>
          <p>HTML 5</p>
        </div>
        <div className="skill__list__card">
          <i class="fa-brands fa-css3-alt"></i>
          <p>CSS 3</p>
        </div>
        <div className="skill__list__card">
          <i class="fa-brands fa-js"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill__list__card">
          <i class="fa-brands fa-sass"></i>
          <p>Sass</p>
        </div>
        <div className="skill__list__card">
          <i class="fa-brands fa-react"></i>
          <p>React</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
