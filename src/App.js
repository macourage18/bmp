import './App.css'; 
import React from 'react';
import { Home } from "./pages/Home.js"
import { Contact } from "./pages/Contact.js"
import { About } from "./pages/About.js"
import { Service } from "./pages/Service.js" 
import { Pricing } from './pages/Pricing.js';
import { Navbar } from './pages/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path={"/"}element = {<Home />} />
          <Route path={"/Contact"}element= {<Contact />} />
          <Route path={"/About"}element= {<About />} />
          <Route path={"/Service"}element= {<Service />} />
          <Route path={"/Pricing"}element= {<Pricing />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
