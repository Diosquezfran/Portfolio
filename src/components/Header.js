import React from "react";
import { Link } from "react-scroll";
import Typed from "react-typed"; 


const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>Front End Developer!</h1>
                <Typed
                    className="typed-text"
                    strings={["Software Developer", "Programmer", "Creative"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to="contact" offset={-110} className="btn-main-offer" href="#">Contact me</Link>
            </div>
        </div>
    )
};

export default Header;