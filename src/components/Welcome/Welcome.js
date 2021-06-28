import React from "react";
import "./Welcome.css"

export default function Welcome() {

    return (
        <div className="welcomeComponent">
            <div className="welcomeImageHolder">
                <div className="heyThere">
                    <h2>Hello World! I am</h2>
                </div>
                <div className="welcomeName">
                    <h1>Josh Sandberg</h1>
                </div>
            </div>
            <div className="welcomeBio">
                <h2>Software Engineer.</h2>
                <h2>Studied at University of California Irvine with a passion of creating applications.</h2>
            </div>
            <div className="welcomeSkills">
                <h4>Learning and exploring new opportunities and side projects</h4>
                <h4>Currently looking for employment in Web Developement / Software Engineering</h4>
            </div>
            <div className="welcomeContact">
                <button>Github</button>
                <button>LinkedIn</button>
                <button>Email</button>
            </div>
        </div>
    )
}