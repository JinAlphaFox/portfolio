import './projet.scss'

function Projet({ bdd }) {
  return (
    <div className="projet">
      <img src={`/img/${bdd.photo}`} alt={bdd.alt} />
      <h3>{bdd.titre}</h3>
      <div className="projet__icone">
        <i class="fa-solid fa-arrow-pointer"></i>
      </div>
    </div>
  )
}

export default Projet
