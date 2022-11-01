import React, { useState } from "react";
import "./Accordion.css";
const Accordion = ({ Title, Description, questionNum }) => {
    const [getActive, setActive] = useState("");

    return (
        <>
            <div className="accordion-box">
                <div
                    className={"box-title"}
                    onClick={() => {
                        getActive === questionNum
                            ? setActive("")
                            : setActive(questionNum);
                    }}
                >
                    <h2>{Title} </h2>
                    <span>{getActive === questionNum ? "-" : "+"} </span>
                </div>
                <div
                    className={
                        "box-description text-center text-lg-start " +
                        (getActive === questionNum ? "active" : "")
                    }
                >
                    <p>{Description}</p>
                    <p>{Description}</p>
                </div>
            </div>
        </>
    );
};

export default Accordion;
