import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faJsSquare, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { SiTypescript, SiPostgresql, SiFirebase, SiSequelize, SiExpress} from 'react-icons/si';

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My skills</h1>
                <div className="container">
                    <div className="row">
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
                                   <FontAwesomeIcon className="icon" icon={faReact} size="2x"/>
                                </div>
                                <h3>React Js</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                   <SiTypescript className="icon" />
                                </div>
                                <h3>Typescript</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                   <FontAwesomeIcon className="icon" icon={faNodeJs} size="2x"/>
                                </div>
                                <h3>Node Js</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                    <SiExpress className="icon"/>
                                </div>
                                <h3>Express</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                   <SiPostgresql className="icon"/>
                                </div>
                                <h3>PostgreSQL</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                    <SiSequelize className="icon"/>
                                </div>
                                <h3>Sequelize</h3>
                            </div>
                        </div>
                    
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                   <SiFirebase className="icon"/>
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
