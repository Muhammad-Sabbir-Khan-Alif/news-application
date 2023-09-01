import React from "react";
import '../index.css'
function Navbar (){
    return(
        <div className="nav-div">
            <div className="logo-div">
                <h1 className="logo">Newzzi</h1>
            </div>
            <div className="button-div">
                <a href="/" className="navigation-button1">Home</a>
            </div>
        </div>
    )
}
export default Navbar;