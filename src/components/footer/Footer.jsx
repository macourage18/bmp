import BMP from "../media/bmp innovationsz 1.png"
import "./footer.css"
import { Link } from "react-router-dom"
import { Whatsapp, Facebook,Linkedin,Twitter, Apple, GooglePlay } from "react-bootstrap-icons"
export const Footer =() =>{
  return(
    <div>
      <footer>
        <div className={"top"}>
        <Link to={"/"}>
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
            <Link to={"/Services"}><p>Our Services</p></Link>
            <Link to={"/Contact"}><p>Contact</p></Link>
            <Link to={"/About"}><p>About</p></Link>
            <Link to={"/Pricing"}> <p>Pricing Plans</p></Link>
          </ul>
          <div className={"contact2"}>
            <div className={"customer"}>
              <h5>Customer Care</h5>
             <div>
             <Link to={""}><Whatsapp className={"icon4"} /></Link>
              <Link to={"bmpinovations@gmail.com"}>bmpinovations@gmail.com</Link>
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