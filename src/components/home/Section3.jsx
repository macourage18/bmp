import ABT from "../media/1 2.png"
import { Link } from "react-router-dom"
export const Section3=()=>{
  return(
    <div>
      <section className={"sec3"}>
        <div className={"cont3"}>
          <div className={"who"}>
            <h4>Who We Are</h4>
            <h2>We Create Track for
            <br />Businesses to Grow.</h2>
            <p>
            We believe brand interaction is key to communication. Real innovations 
            and positive customer experience are the heart of success.
            </p>
            <h3>Our Values & Features</h3>
            <div className={"values"}>
              <div className={"card1"}>
                fast delivery
              </div>
              <div className={"card1"}>
                fast delivery
              </div>
              <div className={"card1"}>
                fast delivery
              </div>
              <div className={"card1"}>
                fast delivery
              </div>
            </div>
          </div>
          <div className={"image3"}>
          <img src={ABT} alt="" />
          </div>
        </div>
        <div className={"bottom2"}>
          <p>Grab an offer & customize your brand</p>
          <Link to={""}>
          <button className={"btn4"}>
            Contact US
          </button>
          </Link>
        </div>

      </section>
    </div>
  )
}