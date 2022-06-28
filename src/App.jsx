import React from "react";
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import Services from "./Services"
import { Routes,Route} from "react-router-dom";
import Navbar from "./Navbar";



let App = () => {
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>

        </>
    )
}

export default App;