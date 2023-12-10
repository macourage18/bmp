import "./nav.css"
import BMP from "../components/media/bmpinnovations 1.png"
import { Link } from "react-router-dom"
import { useState } from "react" 
import { MenuButtonFill,  XCircle } from "react-bootstrap-icons"



export const Navbar = ()=>{
  const [active ,setActive]= useState('')
  const [menu, setMenu] = useState('')
  const [nav1, setNav1] = useState('')
  const [menu1, setMenu1] = useState('not-active')
  const [overlay, setOverlay] = useState('not-active')

  // const [open, setOpen] =useState ('')
  // const [useToggle, setUseToggle]= useState(false)
  let border = {}
  let border1 = {}
  let border2 = {}
  
  switch(active){
    case 'home':
      border = { borderBottom: 'solid 2px #017efe' }
      break;
    
    case 'service':
      border1 = { borderBottom: 'solid 2px #017efe' }
      break;

    case 'about':
      border2 = { borderBottom: 'solid 2px #017efe' }
      break;

    default:
     border ={borderBottom: 'solid 2px #017efe'}
  }

  let hamburger = {}
  let hamburger2 = {}
  switch(menu){
    case 'menubtn1':
      hamburger = {display :"none"}
      break;

    case 'close':
      hamburger2 = {display :"none"}
      break

    default:
      hamburger = {}
  }

  let mobilenav1 = {}
  switch(nav1){
    case 'open':
      mobilenav1 = {top: "58px",transition: "all ease 0.5s"}
      break
    case 'close2':
      mobilenav1 = {top: "-300px",
        transition: "all ease 0.5s"}
      break
    default:
      mobilenav1 ={}
  }



  return(
    <div>
      <div className={`overlay ${overlay}`} onClick={()=>{setNav1("close"); setMenu('close');setOverlay('not-active')}}></div>
      <nav className={"navbar1"}>
      <Link to={"/"}>
       <div className="logo" onClick={()=> {setActive('homebtn1'); setNav1("close2"); setMenu('close');setOverlay('not-active')}}>
        <img src={BMP} alt="" />
       </div>
       </Link>
       <div className="di2">
       <XCircle className={`menubtn2 ${menu1}`} onClick={()=> {setMenu('close');setNav1('close2');setOverlay('not-active')}} style={hamburger2} />

       <MenuButtonFill className={`menubtn`} onClick={()=> {setMenu('menubtn1');setNav1('open');setMenu1('close');setOverlay('is-active')}} style={hamburger} />
       </div>
       
       <div className={`mobilenav`} style={mobilenav1}>
       <div>
          <Link to={"/"} onClick={()=> {setActive('home'); setNav1("close2"); setMenu('close');setOverlay('not-active')}}> <p className={"pp"} style={border}>Home</p></Link>
          <Link to={"/Service"} onClick={()=> {setActive('service'); setNav1("close2"); setMenu('close');setOverlay('not-active')}}> <p className={"pp"} style={border1}>Service</p></Link>

          <Link to={"/About"} onClick={()=>{setActive('about'); setNav1("close2"); setMenu('close');setOverlay('not-active')}}><p className={"pp"} style={border2} >About</p></Link>
        </div>
          <Link to={"/Contact"} onClick={()=>{setNav1("close2"); setMenu('close');setOverlay('not-active')}}>
            <button className="btn1">
              Contact
            </button>
          </Link>
       </div>
      </nav>
      <nav className="navbar">
      <Link to={"/"}>
       <div className="logo" onClick={()=> setActive('home')}>
        <img src={BMP} alt="" />
       </div>
       </Link>
       <div className="mid">
          <Link to={"/"} onClick={()=> setActive('home')}> <p className={"pp"} style={border}>Home</p></Link>
          <Link to={"/Service"} onClick={()=> setActive('service')}> <p className={"pp"} style={border1}>Service</p></Link>

          <Link to={"/About"} onClick={()=>setActive('about') }><p className={"pp"} style={border2} >About</p></Link>
        </div>
        <div className="btn">
          <Link to={"/Contact"}>
            <button className="btn1">
              Contact
            </button>
          </Link>
        </div>
      </nav>
     </div>
  )
}