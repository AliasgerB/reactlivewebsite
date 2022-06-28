import React, { useState } from "react";


let Contact = () => {
    const[items,setItems] = useState({
        fName   : "",
        phoneN  : "",
        email   : "",
        comment : "",
    });

    const[values, setValues] = useState({
        fName   : "",
        phoneN  : "",
        email   : "",
        comment : "",
    });

    let inputEvent = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        setItems( (preVal) => {
            return {
                ...preVal,
                [name] : value
            }
        })
    }

    let submitData = (event) => {
        event.preventDefault();
        setValues(items)
        setItems({
            fName   : "",
            phoneN  : "",
            email   : "",
            comment : "",
        })
    }
    return(
        <>
        <div className="text-center mb-5 mt-5">
            <h1>Contact Us</h1>
        </div>
           <div className="container">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <h1>{values.fName}</h1>
                    <form onSubmit={submitData}>
                        <div class="mb-3 mt-3">
                            <label for="text" class="form-label">Fullname:</label>
                            <input type="text" class="form-control" id="text" value={items.fName} name="fName" onChange={inputEvent} placeholder="Enter Fullname"/>
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label">Phone No.:</label>
                            <input type="number" class="form-control" id="email" value={items.phoneN} name="phoneN" onChange={inputEvent} placeholder="Enter Mobile no."/>
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label">Email:</label>
                            <input type="email" class="form-control" id="email" value={items.email} name="email" onChange={inputEvent} placeholder="Enter email"/>
                        </div>
                        <div class="form-group">
                            <label for="comment">Comment:</label>
                            <textarea class="form-control" rows="5" id="comment" value={items.comment} name="comment" onChange={inputEvent}></textarea>
                        </div>
                        <button type="submit" class="btn btn-outline-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>
           </div>
        </>
    )
}

export default Contact;