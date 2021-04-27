import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My skills</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                   <FontAwesomeIcon className="icon" icon={faReact} size="2x"/>
                                </div>
                                <h3>React Js</h3>
                                {/* <p>Created by Facebook, React is one of the most important libraries to used for creating user 
                                    interfaces. 
                                </p> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                   <FontAwesomeIcon className="icon" icon={faJsSquare} size="2x"/>
                                </div>
                                <h3>Javascript</h3>
                                {/* <p>Javascript is the most used language of programming in the world to build web 
                                    applications.
                                </p> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                   <FontAwesomeIcon className="icon" icon={faServer} size="2x"/>
                                </div>
                                <h3>Firebase</h3>
                                {/* <p>passionate for study, actually perfecting my knowledge,
                                    and creating my route of study that includes learning in this time: React Native, Vue Js, Node Js
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>    
        </div>
    )
}

export default Services;
