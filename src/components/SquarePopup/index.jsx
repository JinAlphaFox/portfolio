import parse from 'html-react-parser'
import './squarePopup.scss'

function SquarePopup({ bdd }) {
  return (
    <div className="squarePopup">
      <div className="squarePopup__head">
        <i class="fa-solid fa-window-minimize"></i>
        <i class="fa-regular fa-window-restore"></i>
        <i class="fa-solid fa-x"></i>
      </div>
      {bdd.map((element, index0) => (
        <div className="squarePopup__body">
          <h3>{element.titre}</h3>
          <div key={index0} className={`squarePopup__body__${element.cssName}`}>
            {element.skills.map((skill, index1) => (
              <span key={index1}>{parse(skill)}</span>
            ))}
          </div>
        </div>
      ))}
      <div className="squarePopup__foot">
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-camera"></i>
        <i class="fa-solid fa-expand"></i>
      </div>
    </div>
  )
}

export default SquarePopup
