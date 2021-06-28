import React from "react";
import BeardLogo from "../../utils/beardLogo.jpg";
import "./NavBar.css";

export default function NavBar() {

    return (
        <div className="navBar">
            <div className="navBarLogo">
                <img className="logo" src={BeardLogo} alt="beardLogo" />
            </div>
            <div className="navBarComponents">
                <h2>Home</h2>
                <h2>Projects</h2>
                <h2>Blogs</h2>
            </div>
        </div>
    )
}