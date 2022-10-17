import React from "react";

const CreativeSpeaker = ({ img, id, description, name }) => {
    return (
        <div className="slider-speaker">
            <div className="box">
                <div className="box-img">
                    <img src={img} alt="" />
                </div>
                <div className="info">
                    <h4>{name}</h4>
                    <h6>{description}</h6>
                </div>
            </div>
        </div>
    );
};

export default CreativeSpeaker;
