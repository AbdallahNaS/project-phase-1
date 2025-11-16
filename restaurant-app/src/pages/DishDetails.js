import { useParams, useNavigate } from "react-router-dom"
import sampleMenu from "../utils/sampleMenu"
export default function DishDetails(){
  const {id}=useParams()
  const dish=sampleMenu.find(d=>d.id===id)
  const navigate = useNavigate()
  if(!dish) return <div style={{padding:16}}><h2>Dish not found</h2><button className="btn" onClick={()=>navigate("/menu")}>Back</button></div>
  return(
    <div style={{padding:15}}>
      <h1>{dish.name}</h1>
      <p>Price: ${dish.price}</p>
      <p>{dish.description}</p>
      <button className="btn" onClick={()=>navigate("/menu")}>Back to Menu</button>
    </div>
  )
}
