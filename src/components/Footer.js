import React from "react";
import { Link } from "react-scroll";
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon
} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Sgo del Estero, Argentina, 2020</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:555-555-555">+54(0385) 555-555</a>
                        </div>
                        <div className="d-flex">
                            <p>Diosquezfran@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" className="footer-nav">Home</Link>
                                <br/>
                                <Link smooth={true} to="about" className="footer-nav">About me</Link>
                                <br/>
                                <Link smooth={true} to="services" className="footer-nav">Skills</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="education" className="footer-nav">Education</Link>
                                <br/>
                                <Link smooth={true} to="portfolio" className="footer-nav">Portfolio</Link>
                                <br/>
                                <Link smooth={true} to="contact" className="footer-nav">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 aling-items-center">
                        <div className="d-flex justify-content-center">
                            <LinkedinShareButton
                                url={"www.linkedin.com/in/franco-diosquez"}
                                quote={"Front End developer"}
                                hashtag={"react"}
                            >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                            <FacebookShareButton
                                url={"www.linkedin.com/in/franco-diosquez"}
                                quote={"Front End developer"}
                                hashtag={"react"}
                            >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"www.linkedin.com/in/franco-diosquez"}
                                quote={"Front End developer"}
                                hashtag={"react"}
                            >
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp; Franco Diosquez | All Rights Reserved 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
