import React from "react";
import Card from "./Card";
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"
import img5 from "./img5.jpg"
import img6 from "./img6.jpg"


let Services = () => {
    return(
        <>
        <div className="my-5">
            <h1 className="text-center"> Our Services</h1>
        </div>
        <div className="container">
            <div className="row gy-4">
                <Card serimg={img1}/>
                <Card serimg={img2}/>
                <Card serimg={img3}/>
            <div/>
            <div className="row gy-4">
                <Card serimg={img4}/>
                <Card serimg={img5}/>
                <Card serimg={img6}/>
            </div>
            </div>
        </div>
     </>   
    )
}

export default Services;