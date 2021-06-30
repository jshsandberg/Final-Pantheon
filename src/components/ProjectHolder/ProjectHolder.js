import React, { useState } from "react";
import GithubIconInactive from "../../utils/iconInactive.png";
import GithubIconActive from "../../utils/iconActive.png";
import "./ProjectHolder.css";

export default function ProjectHolder({img, name, techs, text}) {

    const [githubActive, setGithubActive] = useState(false);



    return (
        <div className="projectCard">
            <div className="projectImageHolder">
                <img className="projectImage" src={img} alt="projectImage" /> circle size 76 icon size 95
            </div>
            <div className="projectCardTitle">
                <div className="projectCardTitleHolder">
                    <div className="projectCardTitleName">
                        <h1>{name}</h1>
                    </div>
                    <div className="projectCardTitleLinks">
                        <img onMouseEnter={() => setGithubActive(true)} onMouseLeave={() => setGithubActive(false)} className="githubIconImage" src={githubActive ? GithubIconActive : GithubIconInactive} alt="githubIcon" />
                        <button>Link</button>
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