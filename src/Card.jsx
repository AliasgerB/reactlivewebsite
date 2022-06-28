import React from "react";
import { NavLink } from "react-router-dom";



let Card = (props) => {
    return(
        <>
        <div  className="card col-sm-4" >
        <img src={props.serimg} className="card-img-top" alt="cardimg"/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="/" className="btn btn-primary">Go Home</NavLink>
        </div>
        </div> 
        </>
    )
}

export default Card;