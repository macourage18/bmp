import Man from "../media/1 1.png"
import "./home.css"
import { Link } from "react-router-dom"

export const Section1=()=>{
  return(
    <div>
    <section className="sec1">
    <div className={'cont'}>
      <div className={"grow"} >
        <h5> DO IT BETTER TODAY</h5>
        <h1><span className="A">Let's</span> Grow <br /> <span className="A">Your </span><span className="B">Brand</span></h1>
        <p> we offer lifetime tool to grow and streamline the work flow  of your business or organization with data driven insights to help you monitor the growth of your brand</p>
        <Link to={""}>
        <button className={"btn2"}>
          Get Started Now
        </button>
      </Link>
      </div>
     
      <div className={"image"} >
        <img src={Man} alt="" />
      </div>
    </div>  
    <div className={"bottom"} >
      <p>
      <span className={"C"}>500+</span> Clients Globally 
      </p>
      <p>
      <span className={"C"}>1000+</span> Jobs Done 
      </p>
      <p>
      <span className={"C"}>500+</span> Clients Reviews 
      </p>
      <p>
      <span className={"C"}>100+</span> Partners
      </p>
    </div>
    </section>
    </div>
  )
}