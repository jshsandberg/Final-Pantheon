import { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar/NavBar";
import Welcome from "./components/Welcome/Welcome";
import AboutMe from "./components/AboutMe/AboutMe";
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
     
    </div>
  );
}

export default App;
