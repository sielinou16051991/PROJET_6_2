import React from "react";
import fullStar from '../../assets/images/star-rate.svg';
import emptyStar from '../../assets/images/emptyStar.svg';

export default function Rate({ score }) {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className='rate-comp'>
            {stars.map((level) => score
                >= level
                ? (
                    <img
                        key={level.toString()}
                        className='star'
                        src={fullStar}
                        alt="étoile de notation"
                    />
                )
                : ( // affichage conditionnel des étoiles de notation (score), pleine ou vide selon le score passé en props
                    <img
                        key={level.toString()}
                        className='star'
                        src={emptyStar}
                        alt="étoile de notation"
                    />
                )
            )}
            {/*Rate*/}
        </div>
    )
}
