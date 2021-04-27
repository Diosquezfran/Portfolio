import React from "react";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src="https://res.cloudinary.com/druj3xeao/image/upload/v1619547871/profile/cv-profile-2_t9otgc.jpg" alt="about me"/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p>
                    Hi there! my name is Franco Diosquez, I’m from Santiago del Estero, Argentina and I’m a Front End Developer
                    in constant learning. Passionate for study and curious to know technologies that allow me to grow as a professional and as an apprentice.
                    I love challenges and fixing problems. Feel free to contact me.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
