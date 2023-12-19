import "./service.css"
import ONLINE from "../media/online.png"
import VAT from "../media/value.png"
import  LINE  from "../media/Group 651.png"
import  LINE1 from "../media/Group 6512.png"
import { Link } from "react-router-dom"

export const Section3 = ()=>{
  return(
    <div>
      <section className={"sec7"}>
      <div className={"container"}>
      <div className={"value"}>
        <div className={"image0 image02"}>
        <img src={LINE1} alt="" className="line1 line3" />
        <img src={VAT} alt="" className={"vatimg"}/>
        </div>
          <div className={"val"}>
            <h2>Value-Added Services</h2>
            <p>a. Logistics and Fulfillment: we offer logistics and fulfillment services, helping businesses manage the delivery of products efficiently. This can include warehousing, shipping, and tracking services.</p>
            <p>
            b. Integration and Customization: We offer integration capabilities with other software systems (e.g., ERP systems) and allow for customization to meet the specific needs of businesses
            </p>
            <Link to="">
            <button className="btn2" > Get Started </button>  
            </Link>
          </div>
        </div> 
        <div className={"online"}>
          <div className={"on"}>
            <h2>Online Presence</h2>
            <p>Establishing a strong online presence is a critical business strategy for a B2B (business-to-business) platform. A robust online presence can help attract, engage, and retain users, build trust, and drive growth. Here are key elements of an online presence strategy for a B2B platform:
            </p>
            <p>
            a.  Comprehensive Website: Develop a user-friendly, responsive website with clear navigation.Ensure that the platform's features and benefits are well-documented and easy to understand.Optimize the website for both desktop and mobile devices.
            </p>
            <p>
            b. Content Marketing: Create high-quality, informative content that addresses the pain points and challenges of your target audience.Publish blog posts, articles, case studies, and white papers relevant to your industry.Share valuable insights, industry trends, and best practices.
            </p>
            <Link to="">
            <button className="btn2" > Get Started </button>  
            </Link>
          </div>
          <div className={"image01 image04"}>
          <img src={LINE} alt="" className={"line2"}
/>          <img src={ONLINE} alt="" className="onlimg"/>
          </div>
        </div> 
      </div>
      </section>
    </div>
  )
}