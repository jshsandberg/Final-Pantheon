import { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar/NavBar";
import Welcome from "./components/Welcome/Welcome";
import AboutMe from "./components/AboutMe/AboutMe";
import ProjectHolder from "./components/ProjectHolder/ProjectHolder";
import Inventory from "./utils/Welcome.png";
import "./App.css";

function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}

function App() {

  const bioRef = useRef();

  const onScreenBio = useOnScreen(bioRef, "-300px");

  const creativeWorkRef = useRef();

  const onScreenCreativeWork = useOnScreen(creativeWorkRef, "-300px")

  console.log(onScreenCreativeWork)

  return (
    <div style={{backgroundColor: "black"}}>
      <div>
        <NavBar />
      </div>
      <div style={{marginLeft: "10vw", marginTop: "15vh"}}>
        <div>
          <Welcome />
        </div>
          <div className={`fade-in-section ${onScreenBio ? 'is-visible' : 'is-not-visible'}`} ref={bioRef} style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "15vh"}}>
            <AboutMe />
          </div>
      </div>
      <div className={`creativeWorkHolder1 fade-in-section ${onScreenCreativeWork ? 'is-visible' : 'is-not-visible'}`} ref={creativeWorkRef}>
        <div>
          <h2>All Creative Work.</h2>
          <h4>Here's some of my projects that I have worked on.</h4>
          <h4 style={{color: "rgb(91, 223, 91)"}}>Explore more</h4>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <ProjectHolder img={Inventory} name={"Inventory"} techs={["Javascript", "MongoDB", "React", "NodeJS"]} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et lorem lacus. Curabitur nec ex varius, tempus tellus vitae, feugiat sapien. Mauris et blandit ex. Fusce rutrum elit in tellus eleifend, nec bibendum magna cursus. Nullam convallis metus dignissim, fringilla felis placerat, dictum turpis. Vestibulum ante ipsum. Integer ornare ipsum non ex congue faucibus."} />
        </div>
      </div>
     
    </div>
  );
}

export default App;
