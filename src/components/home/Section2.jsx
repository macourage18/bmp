import { CheckCircleFill, Activity, Whatsapp,Linkedin,Twitter,Globe, BarChartFill, Facebook, StarFill,StarHalf  } from "react-bootstrap-icons"
import { Link } from "react-router-dom"


export const Section2 =()=>{
  return(
    <div>
      <section className={"sec2"}>
      <div className={"cont2"}>
        <div className={"ourService"}>
          <h1>Our Services</h1>
          <p>With our following service, we provide you with everything you need to build a successful project in the virtual world
          Who We Are
        </p>
        <div><CheckCircleFill className={"icon1"} /> Speed </div>
        <div><CheckCircleFill className={"icon1"} /> Quality </div>
        <Link to={""}>
          <button className={"btn3"}>
            Get Started
          </button>
        </Link>
        </div>
        <div className={"cards"}>
          <div className={"card"}  >
          <Activity className={"icon2"}  />
          <h3> Streamline Workflow</h3>
          <p>By emphasizing automation and efficient processes, we help businesses improve productivity and collaboration... </p>

          <Link to={'/Service'}>
          Learn More
          </Link>

          </div>
          <div className={"card"}  >
          <BarChartFill className={"icon2"}  />
          <h3>Data Driven Insights</h3>
          <p>
          Analytics and Reporting: B2B platforms can provide businesses with valuable data and analytics to help them make informed decisions. This includes data on market trends, transaction history, and supplier performance.
          </p>
          <Link to={'/Service'}>
          Learn More
          </Link>

          </div>
          <div className={"card "}  >
          <div className={"social"} >
            <Globe className={"icon2"}  />
            <Whatsapp className={"icon2"}  />
            <Linkedin className={"icon2"}  />
            <Twitter className={"icon2"}  />
            <Facebook className={"icon2"}  />
          </div>
          <h3>Online Presence</h3>
          <p>
          Comprehensive Website: Develop a user-friendly, responsive website with clear navigation.Ensure that the platform's features and benefits are well-documented and easy to understand.Optimize the website for both desktop and mobile devices.
          </p>
          <Link to={'/Service'}>
          Learn More
          </Link>

          </div>
          <div className={"card"}  >
          <div>
          <StarFill className={"icon2"} />
          <StarFill className={"icon2"}  />
          <StarFill className={"icon2"}  />
          <StarFill className={"icon2"}  />
          <StarHalf className={"icon2"}  />
          </div>
          <h3>Value-Added Services</h3>
          <p>
          Logistics and Fulfillment: we offer logistics and fulfillment services, helping businesses manage the delivery of products efficiently. This can include warehousing, shipping, and tracking services.
          </p>
          <Link to={'/Service'}>
          Learn More
          </Link>

          </div>
        </div>
      </div>  
      </section>
    </div>
  )
}