import React from "react";

const Education = () => {
    return (
        <div id="education" className="education">
            <div className="d-flex justify-content-center my-5">
                <h1>Education</h1>
            </div>
            <div className="container education-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2019-2020</h3>
                            <p>Udemy: HTML - CSS</p>
                        </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"> </div>
                        <div className="timeline-content" id="js">
                            <h3>2020-2021</h3>
                            <p>Coderhouse: Javascript</p>
                        </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"> </div>
                        <div className="timeline-content">
                            <h3>2020-2021</h3>
                            <p>Coderhouse: React Js</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Education;
