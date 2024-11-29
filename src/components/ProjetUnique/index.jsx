function ProjetUnique({ bdd, id }) {
  const url = `/img/${bdd.photo}`
  return (
    <div className="project__list__unique" key={id}>
      <img src={url} alt={bdd.alt} />
      <h3>{bdd.titre}</h3>
      <ul>
        <li>Objectif : {bdd.objectif}</li>
        <li>{bdd.probleme}</li>
        <li>
          J'ai mobilisé les compétences suivantes : <br />
          {bdd.skills.map((skill) => (
            <span key={skill}>
              - {skill}
              <br />
            </span>
          ))}
        </li>
        <li>
          <a href={bdd.github}>Lien GitHub</a>
        </li>
        {bdd.site ? (
          <li>
            <a href={bdd.site}>Lien du site</a>
          </li>
        ) : (
          <span></span>
        )}
      </ul>
    </div>
  )
}

export default ProjetUnique
