import "./service.css"
import STREAM from "../media/stream.png"
import DATA from "../media/data.png"
import  LINE  from "../media/Group 651.png"
import  LINE1 from "../media/Group 6512.png"
import { Link } from "react-router-dom"


export const Section2 = () =>{
  return(
    <div>
      <section className={"sec7"}>
      <div className={"container"}>
      <div className={"streamline"}>
        <div className={"image0"}>
        <img src={LINE1} alt="" className="line1" />
        <img src={STREAM} alt="" className={"streamimg"}/>
        </div>
          <div className={"stworkflow"}>
            <h2>Streamline Workflow</h2>
            <p>By emphasizing automation and efficient processes, we help businesses improve productivity and collaboration. Our solutions aim to make day-to-day operations smoother and more efficient.</p>
            <Link to="">
            <button className="btn2" > Get Started </button>  
            </Link>
          </div>
        </div> 
        <div className={"data"}>
          <div className={"insights"}>
            <h2>Data-Driven Insights</h2>
            <p>a. Analytics and Reporting: B2B platforms can provide businesses with valuable data and analytics to help them make informed decisions. This includes data on market trends, transaction history, and supplier performance.
            </p>
            <p>
            b. Personalized Recommendations: Using data 
            analysis and machine learning algorithms, B2B platforms can offer personalized product and supplier recommendations to users, increasing the chances of successful transactions..
            </p>
            <Link to="">
            <button className="btn2" > Get Started </button>  
            </Link>
          </div>
          <div className={"image01"}>
          <img src={LINE} alt="" className={"line2"}
/>          <img src={DATA} alt="" className="dataimg"/>
          </div>
        </div> 
      </div>
       
      </section>
    </div>
  )
}