import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group'; // ES6
import "./TimeLine.css";

const TimeLine = () => {

    const [gcuHover, setGcuHover] = useState(false);
    const [gymHover, setGymHover] = useState(false);
    const [webHover, setWebHover] = useState(false);
    const [freeHover, setFreeHover] = useState(false);
    const [ucHover, setUcHover] = useState(false);
    const [interludeHover, setInterludeHover] = useState(false);
    const [trainerHover, setTrainerHover] = useState(false);


    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <div className="timeLineGCU">
                <div onMouseEnter={() => {console.log("hello"); setGcuHover(true)}} onMouseLeave={() => setGcuHover(false)} className="timeLineInfo">
                    <div className="timeLineWords">
                        <h4>Grand Canyon University</h4>
                        <h5>2014-2018</h5>
                        <p>B.A. in Pre-Law</p>
                            <CSSTransition 
                                in={gcuHover} 
                                timeout={2000} 
                                classNames="gcu"
                                mountOnEnter
                                unmountOnExit
                            >
                                <p style={{marginTop: "5vh"}}>Studied here for a long time</p>
                            </CSSTransition>

                        </div>
                </div>
                <div className="timeLineGym">
                    <div onMouseEnter={() => setGymHover(true)} onMouseLeave={() => setGymHover(false)} className="timeLineInfo">
                        <div className="timeLineWords">
                            <h4>24 Hour Fitness</h4>
                            <h5>2017-2020</h5>
                            <p>Master Trainer / Assistant General Manager</p>
                            <CSSTransition 
                                in={gymHover} 
                                timeout={2000} 
                                classNames="gym"
                                mountOnEnter
                                unmountOnExit
                            >
                                <p style={{marginTop: "4vh"}}>Studied here for a long time</p>
                            </CSSTransition>
                        </div>
                    </div>
                </div>
                <div className="timeLineGCUWeb">
                <div onMouseEnter={() => setWebHover(true)} onMouseLeave={() => setWebHover(false)} className="timeLineInfoUnder">
                    <div className="timeLineWordsUnder">
                        <h4>Grand Canyon University Web Team</h4>
                        <h5>2016-2018</h5>
                        <p>Vice President</p>
                        <CSSTransition 
                                in={webHover} 
                                timeout={2000} 
                                classNames="web"
                                mountOnEnter
                                unmountOnExit
                            >
                                <p style={{marginTop: "-27vh"}}>Studied here for a long time</p>
                            </CSSTransition>
                    </div>
                </div>
                </div>

            </div>
            <div className="timeLineHolderFirst">
                <div className="timeLineFreeLance">
                    <div onMouseEnter={() => setFreeHover(true)} onMouseLeave={() => setFreeHover(false)} className="timeLineInfoUnder">
                        <div className="timeLineWordsUnder">
                            <h4>Freelance</h4>
                            <h5>2018-2019</h5>
                            <p>MERN Stack</p>
                            <CSSTransition 
                                in={freeHover} 
                                timeout={2000} 
                                classNames="free"
                                mountOnEnter
                                unmountOnExit
                            >
                                <p style={{marginTop: "-25vh"}}>Studied here for a long time</p>
                            </CSSTransition>
                        </div>
                    </div>
                </div>

            </div>
            <div className="timeLineUCI">
                <div onMouseEnter={() => setUcHover(true)} onMouseLeave={() => setUcHover(false)} className="timeLineInfo">
                    <div className="timeLineWords">
                        <h4>U.C. Irvine</h4>
                        <h5>2020-2021</h5>
                        <p>Web Development</p>
                        <CSSTransition 
                                in={ucHover} 
                                timeout={2000} 
                                classNames="uc"
                                mountOnEnter
                                unmountOnExit
                            >
                                <p style={{marginTop: "3        vh"}}>Studied here for a long time</p>
                            </CSSTransition>
                    </div>
                </div>
                <div className="timeLineInterlude">
                    <div onMouseEnter={() => setInterludeHover(true)} onMouseLeave={() => setInterludeHover(false)} className="timeLineInfoUnder">
                        <div className="timeLineWordsUnder">
                            <h4>Interlude Musical Outreach</h4>
                            <h5>2020-2021</h5>
                            <p>Mobile Application Developer</p>
                            <CSSTransition 
                                in={interludeHover} 
                                timeout={{
                                    appear: 5000,
                                    enter: 300,
                                    exit: 500,
                                   }}
                                classNames="interlude"
                                // mountOnEnter
                                // unmountOnExit
                                appear={true}
                            >
                                <p style={{marginTop: "-20vh"}}>Studied here for a long time</p>
                            </CSSTransition>
                        </div>
                    </div>
                </div>
            </div>
            <div className="timeLineHolderSecond">
                <div className="timeLineTraining">
                    <div onMouseEnter={() => setTrainerHover(true)} onMouseLeave={() => setTrainerHover(false)} className="timeLineInfo">
                        <div className="timeLineWords">
                            <h4>24 Hour Fitness</h4>
                            <h5>2021-Present</h5>
                            <p>Master Trainer</p>
                            <CSSTransition 
                                in={trainerHover} 
                                timeout={2000} 
                                classNames="training"
                                mountOnEnter
                                unmountOnExit
                            >
                                <p style={{marginTop: "5vh"}}>Studied here for a long time</p>
                            </CSSTransition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TimeLine;