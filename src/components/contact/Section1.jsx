import MAN from "../media/man.png"
//import CUSTOMER from "../media/custormer.jpg"
import SMS from "../media/sms.jpg"
import "./conatct.css"
import { Link } from "react-router-dom"
import { useForm, ValidationError } from "@formspree/react"
import { Whatsapp, Twitter, Instagram, Facebook, Arrow90degLeft } from "react-bootstrap-icons"


export const Section1 =()=>{

  const [state, handleSubmit] = useForm("mqkrzbkv");
  const reloadP = ()=>{
    window.location.reload(true)
  }
  if (state.succeeded) {
      return (
        <div className={"messagesent"}>
          <div className="image5">
          <Link to={"/Contact"} onClick={reloadP}>
          <Arrow90degLeft className={"back"}/>
          </Link>
            <img src={SMS} alt=""/>
            <p> Message Delivered!!!</p>
          </div>
        </div>
      )
  }

  return(
    <div>
      <section className={"sec4"}>
        <div className={"image4"}>
        <img className={"man1"} src={MAN} alt="" />
        {/* <img className={"man2"} src={CUSTOMER} alt="" /> */}
        </div>
        <div className={"form"}>
        <form onSubmit={handleSubmit}>
          <input type="text" name="Name" id="name" placeholder="Enter your name" required/>
          <input type="email" name="email" id="email" placeholder="Enter your email" required/>
          <ValidationError prefix="Email" field="email" errors={state.errors}/>
          <textarea name="message" id="message" placeholder="Your message" required/>
          <ValidationError prefix="Message" field="message" errors={state.errors}/>
          <div className="btns">
          <button type="submit" className="btn7" disabled={state.submitting} >
            Send Message
          </button>
        </div>
        </form>
      
        
        <div className="icns">
          <div className="icns1">
          Conatct or follow us @
          <Link to={""}><Whatsapp /></Link>  
          <Link to={""}><Twitter /></Link>      
          <Link to={""}><Instagram /></Link>
          <Link to={""}><Facebook /></Link>  
          </div>
          <p> Phone +234 8180729451, +234 8094422807, +234 8151134638</p>
        
        </div>
        </div>

      </section>
    </div>
  )
}