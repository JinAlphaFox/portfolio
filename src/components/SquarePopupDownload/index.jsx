import parse from 'html-react-parser'
import '../SquarePopup/squarePopup.scss'

function SquarePopupDownload() {
  const onButtonClick = () => {
    const pdfUrl = 'CV_Joshua_Lavaud.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'CV_Joshua_Lavaud.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <div className="squarePopup">
      <div className="squarePopup__head">
        <i class="fa-solid fa-window-minimize"></i>
        <i class="fa-regular fa-window-restore"></i>
        <i class="fa-solid fa-x"></i>
      </div>
      <div className="squarePopup__body">
        <h3>Impression</h3>
        <div className="squarePopup__body__other">
          <span>
            Vous pouvez télécharger mon CV en faisant clique droit puis imprimer
            ou bien en cliquant directement sur le bouton ci-dessous.
          </span>
          <button onClick={onButtonClick}>Download PDF</button>
        </div>
      </div>
      <div className="squarePopup__foot">
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-camera"></i>
        <i class="fa-solid fa-expand"></i>
      </div>
    </div>
  )
}

export default SquarePopupDownload
