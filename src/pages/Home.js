import { Section1 } from "../components/home/Section1"
import { Section2 } from "../components/home/Section2"
import { Section3 } from "../components/home/Section3"
import { Footer } from "../components/footer/Footer"

export const Home = ()=>{
  return(
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  )
}