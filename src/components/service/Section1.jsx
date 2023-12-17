import "./service.css"
import TOP from "../media/our services.png"
import BOTTOM from "../media/9145 1 (1).png"

export const Section1 =()=>{
  return(
    <div>
      <section className={"sec5"}>
        <div className={"top1"}>
            <img src={TOP} alt="" />
          <p>Revolutionize the way your business operates <br />and establish it's online presence today with BMP </p>
        </div>
        <div className={"info"}>
        <img src={BOTTOM} alt="" />
        <p>Our platform integrates project management, communication tools, automation, data analytics, and more. This comprehensive solution covers multiple pain points in one go.</p>
        <h1>Core Services</h1>
        </div>
      </section>
    </div>
  )
}