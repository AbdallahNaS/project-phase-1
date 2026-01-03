import { Link } from "react-router-dom"

export default function Home(){
  return(
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="display-4">Welcome to RestoApp</h1>
          <p className="lead">Order your favorite dishes online or explore our menu.</p>
          <Link to="/menu" className="btn btn-primary btn-lg">View Menu</Link>
        </div>
        <div className="col-md-6 text-center">
          <img src="/logo192.png" alt="Resto" className="img-fluid" style={{maxHeight:200}} />
        </div>
      </div>
    </div>
  )
}
