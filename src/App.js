import './App.css'; 
import React from 'react';
import { Home } from "./pages/home/Home.js"
import { Contact } from "./pages/contact/Contact.js"
import { About } from "./pages/about/About.js"
import { Service } from "./pages/service/Service.js" 
import { Navbar } from './pages/navbar/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
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
