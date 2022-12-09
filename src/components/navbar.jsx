import React from "react";
import "../App.css"
import keep from "../images/keep_img.PNG";
function Nav(props) {
    return (
        <>
            <header className="position-fixed head1">
                <nav className="d-flex ">
                    <img className="keepimg" src={keep} alt="" />

                    <h4 className="text-light ml-4"> {props.title}</h4>
                   
                </nav>
            </header>
        </>
    )
}

export default Nav