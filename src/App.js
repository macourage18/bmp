import './App.css'; 
import React from 'react';
import { Home } from "./pages/Home.js"
import { Contact } from "./pages/Contact.js"
import { About } from "./pages/About.js"
import { Service } from "./pages/Service.js" 
import { Navbar } from './pages/Navbar.jsx';
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
