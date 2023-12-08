import './App.css';
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { About } from "./pages/About"
import { Service } from "./pages/Service" 
import { Navbar } from "./pages/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
      <Routes>
        <Route to={"/"}element = {<Home />} />
        <Route to={"/Contact"}element= {<Contact />} />
        <Route to={"/About"}element= {<About />} />
        <Route to={"/Service"}element= {<Service />} />
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
