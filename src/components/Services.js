import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faJsSquare, faCss3, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faServer, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My skills</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                   <FontAwesomeIcon className="icon" icon={faReact} size="2x"/>
                                </div>
                                <h3>React Js</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                   <FontAwesomeIcon className="icon" icon={faJsSquare} size="2x"/>
                                </div>
                                <h3>Javascript</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                   <FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/>
                                </div>
                                <h3>HTML - CSS</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                   <FontAwesomeIcon className="icon" icon={faServer} size="2x"/>
                                </div>
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>
                </div>    
        </div>
    )
}

export default Services;
