import BMP from "../media/bmp innovationsz 1.png"
import "./footer.css"
import { Link } from "react-router-dom"
import { Whatsapp, Facebook,Linkedin,Twitter, Apple, GooglePlay } from "react-bootstrap-icons"
export const Footer =() =>{
  const path = ()=>{
    window.location.pathname("/")
  }
  const path2 = ()=>{
    window.location.pathname("/Service")
  }
  const path3 = ()=>{
    window.location.pathname("/About")
  }
  const path4 = ()=>{
    window.location.pathname("/Contact")
  }



  return(
    <div>
      <footer>
        <div className={"top"}>
        <Link to={"/"} onClick={path}>
          <img src={BMP} alt="" />
        </Link>
          <div className={"follow"}>
          <h5>follow us</h5>
            <Whatsapp />
            <Facebook />
            <Linkedin />
            <Twitter />
          </div>
          </div>
        <div className={"bottom3"}>
          <ul>
            <h3>BMPInovations</h3>
            <p>Graphic  Design</p>
            <p>Logo Design</p>
            <p>Advert Designs</p>
            <p>Stationery Design</p>
            <p>Video & Animation</p>
            <p>Advertisement</p>
            <p>Courses</p>
            <p>Web Development</p>
            <p>App Development</p>
          </ul>
          <ul>
          <h3>Quick Links</h3>
            <Link to={"/Service"} onClick={path2}><p>Our Services</p></Link>
            <Link to={"/Contact"} onClick={path4}><p>Contact</p></Link>
            <Link to={"/About"}onClick={path3}><p>About</p></Link>
            <Link to={"/Pricing"}> <p>Pricing Plans</p></Link>
          </ul>
          <div className={"contact2"}>Service
            <div className={"customer"}>
              <h5>Customer Care</h5>
             <div>
             <Link to={""}><Whatsapp className={"icon4"} /></Link>
              <Link to={""}>bmpinovations@gmail.com</Link>
             </div>
            </div>
            <div className={"buttns"}>
            <button className={"btn5"} >
              <Apple /> downoad app
            </button>
            <button className={"btn5"} >
              <GooglePlay /> downoad app
            </button>
            </div>
            <div className={"buttns2"}>
              <button className={"btn6"}>
                coming soon
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className={"copy"}>
        © BMPInovations – All rights reserved
        </div>
    </div>
  )
}