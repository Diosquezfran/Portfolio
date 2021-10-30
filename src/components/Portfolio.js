import React from "react";
import img from "../images/coffee-computers.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {
    //react e-Commerce
    const openPopUpReact = () => {
        const content = (   
            <>
                <img className="portfolio-image-popupbox" src="https://res.cloudinary.com/druj3xeao/image/upload/v1620061894/portfolio%20img/Captura_de_pantalla_87_fnjkff.png" alt="crud project"/>
                <p>e-Commerce made with React, React Context, Bootstrap and Firebase
                </p>
                <b>GitHub:</b>
                <a className="hyper-link" onClick={() => window.open("https://github.com/Diosquezfran/react")}>
                https://github.com/Diosquezfran/react
                </a>
            </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            ...content,
            config: {
            titleBar: {
            enable: true,
            text: "e-Commerce",
            },
            fadeIn: true,
            fadeInSpeed: 500
        },
        });
    };

   // PF
   const openPopUpJs = () => {
    const content = (   
        <>
            <img className="portfolio-image-popupbox" src="https://res.cloudinary.com/druj3xeao/image/upload/v1635287560/portfolio%20img/Captura_de_pantalla_130_qnjxoa.png" alt="js project"/>
            <p>Final Project at Soy Henry Bootcamp. Technologies used: React, Redux,
                Typescript, NodeJs, Express, Sequelize, PostgreSQL

            </p>
            <b>GitHub:</b>
            <a className="hyper-link" onClick={() => window.open("https://github.com/2Davit/16Bit-GameStore")}>
            https://github.com/2Davit/16Bit-GameStore
            </a>
        </>
    )
    
    PopupboxManager.open({content});
    PopupboxManager.update({
        ...content,
        config: {
        titleBar: {
        enable: true,
        text: "E-commerce",
    },
        fadeIn: true,
        fadeInSpeed: 500
    },
    });
};

   // react crud

    const openPopUpCrud = () => {
        const content = (   
            <>
                <img className="portfolio-image-popupbox" src="https://res.cloudinary.com/druj3xeao/image/upload/v1619500274/portfolio%20img/Captura_de_pantalla_82_qfmlbd.png" alt="crud project"/>
                <p>App made with React and Firebase.
                </p>
                <b>GitHub:</b>
                <a className="hyper-link" onClick={() => window.open("https://github.com/Diosquezfran/React-CRUD")}>
                https://github.com/Diosquezfran/React-CRUD
                </a>
            </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            ...content,
            config: {
            titleBar: {
            enable: true,
            text: "CRUD with Firebase",
            },
            fadeIn: true,
            fadeInSpeed: 500
        },
        });
    };

        //PI
        const openPopUpTodo = () => {
            const content = (   
                <div className="id-portfolio-image-popupbox">
                    <img className="portfolio-image-popupbox" src="https://res.cloudinary.com/druj3xeao/image/upload/v1635288787/portfolio%20img/Captura_de_pantalla_2021-10-26_195223_sfeiaf.png" alt="todo project"/>
                    <p>App made with React, Redux, Express, Sequelize and PostgreSQL
                    </p>
                    <b>GitHub:</b>
                    <a className="hyper-link" onClick={() => window.open("https://github.com/Diosquezfran/Poke-api")}>
                    https://github.com/Diosquezfran/Poke-api
                    </a>
                </div>
            )
            PopupboxManager.open({content});
            PopupboxManager.update({
            ...content,
            config: {
            titleBar: {
            enable: true,
            text: "Poke api",
           },
            fadeIn: true,
            fadeInSpeed: 500
           },
           });
        };
    

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">
                    Portfolio
                </h1>
                <div className="image-box-wrapper row justify-content-center">
                     <div className="portfolio-image-box " onClick={openPopUpReact}>
                        <img src="https://res.cloudinary.com/druj3xeao/image/upload/v1620061894/portfolio%20img/Captura_de_pantalla_87_fnjkff.png" alt="crud react" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopUpJs}>
                        <img src="https://res.cloudinary.com/druj3xeao/image/upload/v1635287560/portfolio%20img/Captura_de_pantalla_130_qnjxoa.png" alt="js project" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                     <div className="portfolio-image-box " onClick={openPopUpCrud}>
                        <img src="https://res.cloudinary.com/druj3xeao/image/upload/v1619500274/portfolio%20img/Captura_de_pantalla_82_qfmlbd.png" alt="crud react" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopUpTodo}>
                        <img src="https://res.cloudinary.com/druj3xeao/image/upload/v1635288787/portfolio%20img/Captura_de_pantalla_2021-10-26_195223_sfeiaf.png" alt="todo react" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                    
                </div>
            </div>
            <PopupboxContainer content={PopupboxManager} />
            <PopupboxContainer content={PopupboxManager} />
            <PopupboxContainer content={PopupboxManager} />
            <PopupboxContainer content={PopupboxManager} />
        </div>
    )
}

export default Portfolio;
