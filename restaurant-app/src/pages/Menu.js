import sampleMenu from "../utils/sampleMenu"
import MenuCard from "../components/MenuCard"

export default function Menu(){
  return(
    <div className="container mt-4">
      <h2 className="mb-3">Our Menu</h2>
      <div className="row">
        {sampleMenu.map(d=> (
          <div key={d.id} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
            <MenuCard dish={d}/>
          </div>
        ))}
      </div>
    </div>
  )
}
