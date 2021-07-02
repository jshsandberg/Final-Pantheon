import React from "react";
import GithubIconActive from "../../utils/iconActive.png";
import LinkedIn from "../../utils/linkedin.png";
import Email from "../../utils/email.png";
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
                <h2><span className="softwareEngineer">Software Engineer.</span> Studied at University of California Irvine with a passion for creating applications.</h2>
            </div>
            <div className="welcomeSkills">
                <h4>Learning and exploring new opportunities and side projects</h4>
                <h4>Currently looking for employment in Web Developement / Software Engineering</h4>
            </div>
            <div className="welcomeContact">
                <button><img style={{width: "2em"}} src={GithubIconActive} alt="githubIcon" /><span style={{marginTop: "2px"}}><a style={{textDecoration: "none", color: "white"}} href="https://github.com/jshsandberg" target="_blank">Github</a></span></button>
                <button><img style={{width: "1.5em"}} src={LinkedIn} alt="linkedinIcon" /><span style={{marginTop: "2px"}}><a style={{textDecoration: "none", color: "white"}} href="https://linkedin.com/in/jshsandberg" target="_blank">LinkedIn</a></span></button>
                <button><img style={{width: "1.5em"}} src={Email} alt="emailIcon" /><span style={{marginTop: "2px"}}><a style={{textDecoration: "none", color: "white"}} href="mailto:jshsandberg@gmail.com" target="_blank">Email</a></span></button>
            </div>
        </div>
    )
}