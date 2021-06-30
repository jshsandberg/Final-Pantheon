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

  const ref = useRef();

  const onScreen = useOnScreen(ref, "-300px")

  return (
    <div style={{backgroundColor: "black"}}>
      <div>
        <NavBar />
      </div>
      <div style={{marginLeft: "10vw", marginTop: "15vh"}}>
        <div>
          <Welcome />
        </div>
          <div className={`fade-in-section ${onScreen ? 'is-visible' : 'is-not-visible'}`} ref={ref} style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "15vh"}}>
            <AboutMe />
          </div>
      </div>
      <div>
        <div className="creativeWorkHolder" style={{marginLeft: "10vw"}}>
          <h2>All Creative Work.</h2>
          <h4>Here's some of my projects that I have worked on.</h4>
          <h4 style={{color: "rgb(91, 223, 91)"}}>Explore more</h4>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <ProjectHolder img={Inventory} name={"Inventory"} techs={["Javascript", "MongoDB", "React", "NodeJS"]} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et lorem lacus. Curabitur nec ex varius, tempus tellus vitae, feugiat sapien. Mauris et blandit ex. Fusce rutrum elit in tellus eleifend, nec bibendum magna cursus. Nullam convallis metus dignissim, fringilla felis placerat, dictum turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam fringilla nunc id nisl cursus faucibus. Duis et nisi vitae diam cursus vestibulum id et ex. Integer ornare ipsum non ex congue faucibus. Vestibulum consequat diam vel ante sodales porta. Praesent aliquet nunc felis, vitae suscipit dolor pulvinar vel. Sed vel fringilla massa, rhoncus eleifend magna."} />
        </div>
      </div>
     
    </div>
  );
}

export default App;
