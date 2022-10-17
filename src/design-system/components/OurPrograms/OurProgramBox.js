import React from "react";
import { faClock, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const OurProgramBox = ({ roomMap, title, time, name, description, img }) => {
    return (
        <div className="program-box">
            <div className="box-img">
                <img src={img} alt="" />
            </div>
            <div className="box-body">
                <div className="our-box">
                    <span>
                        <FontAwesomeIcon icon={faClock} />
                        {time}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faLocationPin} />
                        room {roomMap}
                    </span>
                </div>
                <h2>{title}</h2>
                <h6>by {name}</h6>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default OurProgramBox;
