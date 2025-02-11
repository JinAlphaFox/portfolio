import './projet.scss'
import { useState } from 'react'
import Modal from 'react-modal'

function Projet({ bdd }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <>
      <div className="projet" onClick={() => setModalIsOpen(true)}>
        <img src={`/img/${bdd.photo}`} alt={bdd.alt} />
        <h3>{bdd.titre}</h3>
        <div className="projet__icone">
          <i className="fa-solid fa-arrow-pointer"></i>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content__head">
          <i class="fa-solid fa-window-minimize"></i>
          <i class="fa-regular fa-window-restore"></i>
          <button onClick={() => setModalIsOpen(false)}>
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <div className="modal-content__body">
          <img src={`/img/${bdd.photo}`} alt={bdd.alt} />
          <h2>{bdd.titre}</h2>
          <p>
            Objectif : {bdd.objectif}
            <br />
            J'ai mobilisé les compétences suivantes sur ce projet :
            <ul>
              {bdd.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <a href={bdd.github}>Lien GitHub</a>
            <br />
            {bdd.adresse ? (
              <a href={bdd.adresse}>Lien du site</a>
            ) : (
              <span></span>
            )}
          </p>
        </div>
        <div className="modal-content__foot">
          <i class="fa-solid fa-bars"></i>
          <i class="fa-solid fa-camera"></i>
          <i class="fa-solid fa-expand"></i>
        </div>
      </Modal>
    </>
  )
}

export default Projet
