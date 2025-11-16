import { Link } from "react-router-dom"
export default function MenuCard({dish}){
  return(
    <div className="card">
      <div className="card-title">{dish.name}</div>
      <div className="card-meta">${dish.price}</div>
      <div>{dish.description}</div>
      <Link to={`/dish/${dish.id}`} className="btn" style={{marginTop:12}}>Details</Link>
    </div>
  )
}
