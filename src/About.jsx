import React from "react";
import Common from "./Common"
import img from "./27.svg"


let About = () => {
    return(
        <>
             <Common name=" Welcome to about page " visit="/contact" imgsrc={img} btname="Contact Now" />
        </>
    )
}

export default About;