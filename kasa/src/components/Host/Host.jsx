import React from "react";

export default function Host(props) {
    return (
        <div className='host-comp'>
            <div className="host-name">{props.hostname}</div>
            <div className="hostPicture">
                <img src={props.hostPicture} alt={props.id} />
            </div>
            {/*Host*/}
        </div>
    );
}
