import { Link } from "react-router-dom"
export default function Home(){
  return(
    <div className="hero">
      <h1>Welcome to RestoApp</h1>
      <p>Order your favorite dishes online or explore our menu.</p>
      <Link to="/menu" className="btn">View Menu</Link>
    </div>
  )
}
