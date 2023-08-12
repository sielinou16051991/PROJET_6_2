import React, {useState} from "react";
import right from "../../assets/images/rightArrow.svg";
import left from "../../assets/images/leftArrow.svg";

export default function Gallery({ slides }) {
    const [current, setCurrent] = useState(0); // je défini l'index du premier element du tableau  "current" à 0
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1); // on part au premier slide quand on arrive au dernier
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1); // on part au dernier slide quand est au premier
    }
    return (
        <section id='gallery-container'>
            {length > 1 && (
                <img
                    src={left} // j'affiche la fleche si et seulement s'il y a 2 images ou plus (length > 1)
                    alt="gauche"
                    className='leftArrow'
                    onClick={prevSlide}
                />
            )}
            {length > 1 && (
                <img
                    src={right}
                    alt="droite"
                    className='rightArrow'
                    onClick={nextSlide}
                />
            )}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={
                        current === index
                            ? "slider bl-msk wh-msk active-anim"
                            : "slider bl-msk wh-msk"
                    }
                >
                    {index === current && <img src={slide} alt="appartement à louer" /> }
                    {index === current && (
                        <span className="slider__number">
                            {current + 1}/{length}
                        </span>
                    )}

                </div>
            ))}
            {/*Gallery*/}
        </section>
    )
}
