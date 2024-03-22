import React, { useState } from "react";
import fond1 from "../../assets/images/fond.jpg";
import lac from "../../assets/images/lac.jpg";
import "../../assets/styles/Carousel.css";
import back from "../../assets/images/backgroundBlue.jpg";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        fond1,
        lac,
        back
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative carousel-container mt-5">
            <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`slide-${index}`}
                        className="carousel-image"
                    />
                ))}
            </div>
            <button className="prev-button hover:bg-green-600" onClick={handlePrev}>
                &larr;
            </button>
            <button className="next-button hover:bg-green-600" onClick={handleNext}>
                &rarr;
            </button>
        </div>
    );
};

export default Carousel;
