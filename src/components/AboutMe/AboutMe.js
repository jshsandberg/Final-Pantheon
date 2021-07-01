import React from "react";
import Profile from "../../utils/profilePicture.jpg";
import "./AboutMe.css"

export default function AboutMe() {

    return (
        <div className="aboutMeHolder">
            <div className="aboutMeTextHolder">
                <div className="aboutMeTitle">
                    <h2>About Me</h2>
                </div>
                <div className="aboutMeText">
                    <h4>Hello! I am Josh Sandberg! I have just recently discovered my love for <span>Web Design</span> and <span>Computer Science</span> and have been passionate about it ever since.</h4>
                  
                    <h4>As a kid and young adult, I have always had a passion for creating things. Using Lego's, Magnetics, Minecraft, City Skylines to name a few, I have always felt this fufillment in creating something out of nothing. As an adult, I have found myself feeling like a kid again evertime I build something using my software skills. Creating slick and modern web sites have been extremely rewarding and I forever see myself coding. I have had the privilege of learning from amazing software engineers at <span>University of California Irvine</span> and able to interact with family members who work for InstaCart, Google, ect on a technological side. While looking for employment; I have worked on multiple side projects and assisted <span>Interlude Musical Outreach</span> with their website as an intern. These projects are not only impressive in my eyes but also extremely fun and helpful for me to advance my skills as a <span>web developer</span>. Even after finding employment, I still want to work on these side projects because these projects still bring the happiness I found when playing with lego's as a kid.   </h4>
               
                    <h4>When I am not coding, you can find me watching sports, powerlifting, or playing games with my family!</h4>
                </div>    
            </div>
            <div className="aboutMeImage">
                <img src={Profile} alt="profilePicture" />
            </div>
        </div>
    )
}