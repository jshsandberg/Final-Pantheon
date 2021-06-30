import React, { useState } from "react";
import GithubIconInactive from "../../utils/iconInactive.png";
import GithubIconActive from "../../utils/iconActive.png";
import LinkIconInactive from "../../utils/test1.png";
import LinkIconActive from "../../utils/test.png"
import "./ProjectHolder.css";

export default function ProjectHolder({img, name, techs, text}) {

    const [githubActive, setGithubActive] = useState(false);
    const [linkActive, setLinkActive] = useState(false);




    return (
        <div className="projectCard">
            <div className="projectImageHolder">
                <img className="projectImage" src={img} alt="projectImage" />
            </div>
            <div className="projectCardTitle">
                <div className="projectCardTitleHolder">
                    <div className="projectCardTitleName">
                        <h1>{name}</h1>
                    </div>
                    <div className="projectCardTitleLinks">
                        <img onMouseEnter={() => setGithubActive(true)} onMouseLeave={() => setGithubActive(false)} className="githubIconImage" src={githubActive ? GithubIconActive : GithubIconInactive} alt="githubIcon" />
                        <img onMouseEnter={() => setLinkActive(true)} onMouseLeave={() => setLinkActive(false)} className="linkIconImage" src={linkActive ? LinkIconActive : LinkIconInactive} alt="linkIcon" />
 
                    </div>
                </div>
                <div className="projectCardTitleTechsHolder">
                    {techs.map((item, i) => {
                        return (
                            <div className={item === "Javascript" ? "javascriptHolder" : item === "MongoDB" ? "mongoDBHolder" : item === "React" ? "reactHolder" : item === "NodeJS" ? "nodeJSHolder" : null } key={i}>
                                <h4>{item}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="projectCardText">
                <h4>{text}</h4>
            </div>
        </div>
    )
}