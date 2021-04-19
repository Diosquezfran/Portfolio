import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Education from "./components/Education";


function App() {
  return (
    <>
      <Particles
      className="particles-canvas"
        params={{
          particles:{
            number:{
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <NavBar/>
      <Header/>
      <AboutMe/>
      <Services/>
      <Education/>
    </>
  );
}

export default App;
