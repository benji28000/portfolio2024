import React, { useState } from "react";
import "../../assets/styles/Carousel.css";

const Carousel = ({ images, allowZoom = true }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [enlargedImage, setEnlargedImage] = useState(null);

    const handleNext = () => {
        const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
        if (enlargedImage) {
            setEnlargedImage(images[nextIndex]);
        }
    };

    const handlePrev = () => {
        const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        if (enlargedImage) {
            setEnlargedImage(images[prevIndex]);
        }
    };

    const handleImageClick = (image) => {
        if (allowZoom) {
            setEnlargedImage(image);
        }
    };

    const closeEnlargedImage = () => {
        setEnlargedImage(null);
    };

    return (
        <>
            <div className="relative carousel-container mt-5">
                <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`slide-${index}`}
                            className="carousel-image"
                            onClick={() => handleImageClick(image)}
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

            {allowZoom && enlargedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeEnlargedImage}
                >
                    <div className="relative flex items-center justify-center" style={{ maxWidth: '75%', maxHeight: '75%' }} onClick={(e) => e.stopPropagation()}>
                        <button className="prev-button-enlarged hover:bg-green-600" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
                            &larr;
                        </button>
                        <img src={enlargedImage} alt="Enlarged" className="max-w-full max-h-full mx-2" />
                        <button className="next-button-enlarged hover:bg-green-600" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
                            &rarr;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Carousel;
