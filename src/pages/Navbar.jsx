import "./nav.css"
import { Link } from "react"

export const Navbar = ()=>{
  
  return(
    <div>
    
      <nav className="navbar">
       <div className="logo">
        <img src={""} alt="" />
       </div>
       <div className="mid">

          <Link to={"/"}>Home</Link>
          <Link to={"/Service"}>Service</Link>

          <Link to={"/About"}>About</Link>
        </div>
        <div>
          <Link to={"/Contact"}>
            <button className="btn1">
              contact
            </button>
          </Link>
        </div>
      </nav>
    </div>
  )
}