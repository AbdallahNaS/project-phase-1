import sampleMenu from "../utils/sampleMenu"
import MenuCard from "../components/MenuCard"
export default function Menu(){
  return(
    <div className="grid">
      {sampleMenu.map(d=> <MenuCard key={d.id} dish={d}/>)}
    </div>
  )
}
