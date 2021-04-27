import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialsCarousel = () => {
    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        >
            <>
                <img src="https://res.cloudinary.com/druj3xeao/image/upload/v1618948034/profile/avatar_j9hu1w.jpg" alt="someone"/>
                <div className="myCarousel">
                    <h3>person 1</h3>
                    <p>Lorem, ipsum dolor sit amet 
                        consectetur adipisicing elit. Quisquam, vitae.
                    </p>
                </div>
            </>
            <>
                <img src="https://res.cloudinary.com/druj3xeao/image/upload/v1618948034/profile/avatar_j9hu1w.jpg" alt="someone"/>
                <div className="myCarousel">
                    <h3>person 2</h3>
                    <p>Lorem, ipsum dolor sit amet 
                        consectetur adipisicing elit. Quisquam, vitae.
                    </p>
                </div>
            </>
            <>
                <img src="https://res.cloudinary.com/druj3xeao/image/upload/v1618948034/profile/avatar_j9hu1w.jpg" alt="someone"/>
                <div className="myCarousel">
                    <h3>person 3</h3>
                    <p>Lorem, ipsum dolor sit amet 
                        consectetur adipisicing elit. Quisquam, vitae.
                    </p>
                </div>
            </>
            <>
                <img src="https://res.cloudinary.com/druj3xeao/image/upload/v1618948034/profile/avatar_j9hu1w.jpg" alt="someone"/>
                <div className="myCarousel">
                    <h3>person 4</h3>
                    <p>Lorem, ipsum dolor sit amet 
                        consectetur adipisicing elit. Quisquam, vitae.
                    </p>
                </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel;
