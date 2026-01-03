import { Link } from "react-router-dom"

export default function MenuCard({dish}){
  return(
    <div className="card" style={{width: '100%', marginBottom: '1rem'}}>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{dish.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">${dish.price}</h6>
        <p className="card-text flex-grow-1">{dish.description}</p>
        <Link to={`/dish/${dish.id}`} className="btn btn-primary mt-2">Details</Link>
      </div>
    </div>
  )
}
