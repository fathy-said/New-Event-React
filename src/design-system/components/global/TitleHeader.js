import React from "react";

const TitleHeader = ({ title, titleSpan, description }) => {
    return (
        <div className="title-box">
            <h1>
                {title} <span>{titleSpan}</span>
            </h1>
            <p>{description}</p>
        </div>
    );
};

export default TitleHeader;
