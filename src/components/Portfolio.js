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
                <p>e-Commerce made with React, React Context, React Router Dom, React Share, React Toastify, Bootstrap and Firebase
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
            text: "e-Commerce made with React Js and Firebase",
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

    
   //js ecomerce link
    const openPopUpJs = () => {
        const content = (   
            <>
                <img className="portfolio-image-popupbox" src="https://res.cloudinary.com/druj3xeao/image/upload/v1619501351/portfolio%20img/Captura_de_pantalla_85_tdpa16.png" alt="js project"/>
                <p>Functional e-Commerce made with Vanilla Javascript .
                </p>
                <b>GitHub:</b>
                <a className="hyper-link" onClick={() => window.open("https://github.com/Diosquezfran/Javascript-commerce")}>
                https://github.com/Diosquezfran/Javascript-commerce
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
        //react tasks
        const openPopUpTodo = () => {
            const content = (   
                <div className="id-portfolio-image-popupbox">
                    <img className="portfolio-image-popupbox" src="https://res.cloudinary.com/druj3xeao/image/upload/v1619501246/portfolio%20img/Captura_de_pantalla_84_jodybi.png" alt="todo project"/>
                    <p>App made with React to add tasks using class components.
                    </p>
                    <b>GitHub:</b>
                    <a className="hyper-link" onClick={() => window.open("https://github.com/Diosquezfran/tasks")}>
                    https://github.com/Diosquezfran/tasks
                    </a>
                </div>
            )
            PopupboxManager.open({content});
            PopupboxManager.update({
            ...content,
            config: {
            titleBar: {
            enable: true,
            text: "Task Adder",
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
                     <div className="portfolio-image-box " onClick={openPopUpCrud}>
                        <img src="https://res.cloudinary.com/druj3xeao/image/upload/v1619500274/portfolio%20img/Captura_de_pantalla_82_qfmlbd.png" alt="crud react" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopUpTodo}>
                        <img src="https://res.cloudinary.com/druj3xeao/image/upload/v1619501246/portfolio%20img/Captura_de_pantalla_84_jodybi.png" alt="todo react" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopUpJs}>
                        <img src="https://res.cloudinary.com/druj3xeao/image/upload/v1619501351/portfolio%20img/Captura_de_pantalla_85_tdpa16.png" alt="js project" className="portfolio-image"/>
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
