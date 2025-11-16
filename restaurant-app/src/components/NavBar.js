import { Link, useLocation } from "react-router-dom"
export default function NavBar(){
  const location = useLocation()
  const active = (p)=> location.pathname===p?"nav-link active":"nav-link"
  return(
    <header className="nav">
      <div className="brand"><Link to="/" className="brand">RestoApp</Link></div>
      <nav className="nav-links">
        <Link className={active("/")} to="/">Home</Link>
        <Link className={active("/menu")} to="/menu">Menu</Link>
        <Link className={active("/about")} to="/about">About</Link>
        <Link className={active("/contact")} to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
