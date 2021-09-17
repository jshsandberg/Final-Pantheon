import { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar/NavBar";
import Welcome from "./components/Welcome/Welcome";
import AboutMe from "./components/AboutMe/AboutMe";
import ProjectHolder from "./components/ProjectHolder/ProjectHolder";
import KeepInTouch from "./components/KeepInTouch/KeepInTouch";
import RightArrow from "./utils/rightArrow.png";
import Inventory from "./utils/Welcome.png";
import RoadMap from "./utils/roadmap.png";
import Pokedex from "./utils/Pokedex4.png";
import Recipe from "./utils/Recipe1.png";
import Pantheon from "./utils/pantheon.png";
import "./App.css";
import TimeLine from "./components/TimeLine/TimeLine";

function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
  }, [ref, rootMargin]);
  return isIntersecting;
}

function App() {

  const bioRef = useRef();

  const onScreenBio = useOnScreen(bioRef, "-200px");

  const timeLineRef = useRef();

  const onScreenTimeLine = useOnScreen(timeLineRef, "-200px");

  const creativeWorkRef = useRef();

  const onScreenCreativeWork = useOnScreen(creativeWorkRef, "-200px")

  const roadRef = useRef();

  const onScreenRoad = useOnScreen(roadRef, "-200px");

  const pokemonRef = useRef();

  const onScreenPokemon = useOnScreen(pokemonRef, "-200px");

  const recipeRef = useRef();

  const onScreenRecipe = useOnScreen(recipeRef, "-200px");

  const keepRef = useRef();

  const onScreenKeep = useOnScreen(keepRef, "-200px");

  const pantheonRef = useRef();

  const onScreenPantheon = useOnScreen(pantheonRef, "-200px");

  const shelfKeeperText = "Shelf Keeper is a MERN Stack application that allows the user to record their inventory and alter the data. Working with three gifted individuals, I was in charge of the functionality of the website, the back-end, and incorporating third party packages in our code, such as JSON WebToken and Passport "

  const pantheonText = "Pantheon is currently my passion project as of now. Been working on this since March and have gone through multiple iterations of what I want the application to do and how it shoud feel. Pantheon is an application that allows user's to challenge friends on what is the best song for said definition. Using the Spotify API, user's can create competitions and invite their friends to compete to see which song they think best respresents the category of the competition. It is currently functional and available to anyone; however, I am still working on quality of life changes and the UI. Future plans include, emailing the user when an action is ready for them to take, keeping track of wins and losses, and much more."
 
  const pokedexText = "The Galar Pokedex was my first project I completed by myself. This project was a way for me to explore more of the realm of React and hone in on my skills while still doing something that I enjoyed and felt passionate about. The Galar Pokedex use's the PokeAPI to gather data for each pokemon. The user can click on any pokemon and the API will gather data for that certain pokemon and display it in a clean, slick manor."

  const recipeText = "The first application I ever created, this application allows the user to look up any dish and using a Food API, gather as much information as possible for that paticular dish. User's can also look up drinks using the BartendingAPI we have incorporated in our application. My focus was the functionality of the website and the API. The API only allows 50 calls every 10 minutes. If you are on the website and the food images are not showing up, it is because the API is limiting the amount of calls. Please wait 5 minutes and refresh and it will work";
 
  const roadText = "An application that allows the user to create notes and plans about thier upcoming trip. User's can click on any state and store any notes about that state. The user can then alter, add, or delete any prior notes they have written before."

  const shelfKeeperTerm = "Inventory Control System App";

  const pantheonTerm = "Music Streaming App";

  const pokedexTerm = "Passion Project";

  const recipeTerm = "Cooking App";

  const roadTripTerm = "Travel App";



  return (
    <div style={{backgroundColor: "black"}}>
      {/* <div>
        <NavBar />
      </div> */}
      <div style={{marginLeft: "10vw", paddingTop: "10vh"}}>
        <div>
          <Welcome />
        </div>
          <div className={`fade-in-section ${onScreenBio ? 'is-visible' : 'is-not-visible'}`} ref={bioRef} style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "15vh"}}>
            <AboutMe />
          </div>
      </div>
      <div className={`fade-in-section ${onScreenTimeLine ? 'is-visible' : 'is-not-visible'}`} ref={timeLineRef} style={{marginLeft: "5vw", marginRight: "5vw", marginTop: "30vh"}}>
        <TimeLine />
      </div>
      <div style={{marginTop: "40vh", display: "flex", flexDirection: "row", justifyContent: "center", gap: "5vw"}}>
        <div className="creativeWorkHolder1">
          <div className={`fade-in-section ${onScreenCreativeWork ? 'is-visible' : 'is-not-visible'}`} ref={creativeWorkRef}>
            <h2>All Creative Work.</h2>
            <h4>Here's some of my projects that I have worked on.</h4>
            <h4 style={{color: "rgb(91, 223, 91)", fontSize: "1.5em", display: 'flex', flexDirection: "row", alignItems: "center"}}>Explore more<img style={{width: "40px", marginTop: "8px", marginLeft: '10px'}} src={RightArrow} alt="rightArrow" /></h4>
          </div>
          <div className={`fade-in-section ${onScreenPantheon ? 'is-visible' : 'is-not-visible'}`} ref={pantheonRef} style={{display: "flex", justifyContent: "center"}}>
            <ProjectHolder term={pantheonTerm} github={"https://github.com/jshsandberg/Pantheon"} link={"https://pantheon-jjshsandberg.herokuapp.com/"} img={Pantheon} name={"Pantheon"} techs={["Javascript", "React", "MongoDB", "NodeJS"]} text={pantheonText} />
          </div>
          <div className={`fade-in-section ${onScreenRecipe ? 'is-visible' : 'is-not-visible'}`} ref={recipeRef} style={{display: "flex", justifyContent: "center"}}>
            <ProjectHolder term={recipeTerm} github={"https://github.com/jshsandberg/Recipe"} link={"https://spencer-alan.github.io/project-1/"} img={Recipe} name={"Recipe"} techs={["Javascript"]} text={recipeText} />
          </div>
        </div>
          <div className="creativeWorkHolder1">
            <div className={`fade-in-section ${onScreenCreativeWork ? 'is-visible' : 'is-not-visible'}`} ref={creativeWorkRef} style={{display: "flex", justifyContent: "center"}}>
              <ProjectHolder term={shelfKeeperTerm} github={"https://github.com/jshsandberg/Inventory"} link={"https://shelf-keeper-jshsandberg.herokuapp.com/"} img={Inventory} name={"Shelf Keeper"} techs={["Javascript", "MongoDB", "React", "NodeJS"]} text={shelfKeeperText} />
            </div>
            <div className={`fade-in-section ${onScreenPokemon ? 'is-visible' : 'is-not-visible'}`} ref={pokemonRef} style={{display: "flex", justifyContent: "center"}}>
              <ProjectHolder term={pokedexTerm} github={"https://github.com/jshsandberg/pokedex-v2"} link={"https://jshsandberg.github.io/pokedex-v2/"} img={Pokedex} name={"Galar Pokedex"} techs={["Javascript", "React"]} text={pokedexText} />
            </div>
            <div className={`fade-in-section ${onScreenRoad ? 'is-visible' : 'is-not-visible'}`} ref={roadRef} style={{display: "flex", justifyContent: "center"}}>
              <ProjectHolder term={roadTripTerm} github={"https://github.com/jshsandberg/RoadTrip-Planner"} link={"https://roadtrip-planner-app.herokuapp.com/"} img={RoadMap} name={"RoadTrip Planner"} techs={["Javascript", "MySQL", "NodeJS"]} text={roadText} />
            </div>
          </div>
      </div>
      <div className={`fade-in-section ${onScreenKeep ? 'is-visible' : 'is-not-visible'}`} ref={keepRef} style={{display: "flex", justifyContent: "center", marginTop: "35vh"}}>
        <KeepInTouch />
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20vh", paddingBottom: "10vh"}}>
        <h3 style={{color: "white", margin: "0"}}>Designed and Developed by Josh Sandberg</h3>
        <h3 style={{color: "white", margin: "0"}}>Built with <span style={{color: "rgb(91, 223, 91"}}>React</span>. Hosted on <span style={{color: "rgb(91, 223, 91"}}>Heroku</span></h3>
      </div>
    </div>
  );
}

export default App;
