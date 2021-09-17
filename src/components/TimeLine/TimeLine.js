import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group'; // ES6
import "./TimeLine.css";

const TimeLine = () => {

    const [gcuHover, setGcuHover] = useState(false);

    console.log(gcuHover)

    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <button onClick={() => setGcuHover(true)}>Click</button>
            <div className="timeLineGCU">
                <div className="timeLineInfo">
                    <div className="timeLineWords">
                        <h4>Grand Canyon University</h4>
                        <h5>2014-2018</h5>
                        <p>B.A. in Pre-Law</p>
                        <CSSTransition 
                            in={gcuHover} 
                            timeout={200} 
                            classNames="my-node"
                        >
                            <p>Studied here for a long time</p>
                        </CSSTransition>
                        </div>
                </div>
                <div className="timeLineGym">
                <div className="timeLineInfo">
                    <div className="timeLineWords">
                        <h4>24 Hour Fitness</h4>
                        <h5>2017-2020</h5>
                        <p>Master Trainer / Assistant General Manager</p>
                    </div>
                </div>
                </div>
                <div className="timeLineGCUWeb">
                <div className="timeLineInfoUnder">
                    <div className="timeLineWordsUnder">
                        <h4>Grand Canyon University Web Team</h4>
                        <h5>2016-2018</h5>
                        <p>Vice President</p>
                    </div>
                </div>
                </div>

            </div>
            <div className="timeLineHolderFirst">
                <div className="timeLineFreeLance">
                <div className="timeLineInfoUnder">
                    <div className="timeLineWordsUnder">
                        <h4>Freelance</h4>
                        <h5>2018-2019</h5>
                        <p>MERN Stack</p>
                    </div>
                </div>
                </div>

            </div>
            <div className="timeLineUCI">
            <div className="timeLineInfo">
                    <div className="timeLineWords">
                        <h4>U.C. Irvine</h4>
                        <h5>2020-2021</h5>
                        <p>Web Development</p>
                    </div>
                </div>
                <div className="timeLineInterlude">
                <div className="timeLineInfoUnder">
                    <div className="timeLineWordsUnder">
                        <h4>Interlude Musical Outreach</h4>
                        <h5>2020-2021</h5>
                        <p>Mobile Application Developer</p>
                    </div>
                </div>
                </div>

            </div>
            <div className="timeLineHolderSecond">
                <div className="timeLineTraining">
                <div className="timeLineInfo">
                    <div className="timeLineWords">
                        <h4>24 Hour Fitness</h4>
                        <h5>2021-Present</h5>
                        <p>Master Trainer</p>
                    </div>
                </div>
                </div>

            </div>
         
        </div>
    )

}

export default TimeLine;