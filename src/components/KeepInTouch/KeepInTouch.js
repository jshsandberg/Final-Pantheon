import React from "react";
import LinkedIn from "../../utils/linkedin.png";
import Email from "../../utils/email.png";
import Resume from "../../utils/resume.png";
import "./KeepInTouch.css"

export default function KeepInTouch() {

    return (
        <div className="keepHolder">
            <div className="keepTitle">
                <h1>Keep In Touch</h1>
            </div>
            <div className="keepText">
                <h3>I am currently looking for a new opportunity as a</h3>
                <h3 style={{color: "rgb(91, 223, 91)"}}>Full Stack Web Developer / React Developer.</h3>
                <h3>Let's get in touch and we can discuss my projects.</h3>
            </div>
            <div className="keepLinks">
                <a style={{textDecoration: "none", color: "white"}} href="https://linkedin.com/in/jshsandberg" target="_blank"><button><img style={{width: "1.5em"}} src={LinkedIn} alt="linkedinIcon" /><span style={{marginTop: "2px", marginLeft: "3px"}}>LinkedIn</span></button></a>
                <a style={{textDecoration: "none", color: "white"}} href="mailto:jshsandberg@gmail.com" target="_blank"><button><img style={{width: "1.5em"}} src={Email} alt="emailIcon" /><span style={{marginTop: "2px", marginLeft: "5px"}}>Email</span></button></a>
                <a style={{textDecoration: "none", color: "white"}} href="https://docs.google.com/document/d/1cI4OydsWFTuhW30POsUaOk_4DspptTxb_r6XxAr_q7w/edit" target="_blank"><button><img style={{width: "1.5em"}} src={Resume} alt="resumeIcon" /><span style={{marginTop: "2px", marginLeft: "5px"}}>Resume</span></button></a>
            </div>
        </div>
    )
}