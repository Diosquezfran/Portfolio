import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faGoogle, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                   <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/>
                                </div>
                                <h3>Web desing</h3>
                                <p>aqui debria ir una breve descripcion de algo que no se</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                   <FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/>
                                </div>
                                <h3>Web development</h3>
                                <p>aqui debria otra una breve descripcion de algo que no se</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="box">
                                <div className="circle">
                                   <FontAwesomeIcon className="icon" icon={faReact} size="2x"/>
                                </div>
                                <h3>Programing</h3>
                                <p>aqui debria una ultima breve descripcion de algo que no se</p>
                            </div>
                        </div>
                    </div>
                </div>    
        </div>
    )
}

export default Services;
