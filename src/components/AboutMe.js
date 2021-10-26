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
                    Hi there! my name is Franco Diosquez, I’m from Argentina and I’m a Fullstack Developer.
                    Since I was a child I was passionate about philosophy, logic, and technology. While looking for new challenges I found in programming
                    a place where all these passions converge.
                    The possibility of being able to create, through code and innovative ideas,
                    solutions capable of changing the world is something that fascinates and motivates me. Feel free to contact me.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
