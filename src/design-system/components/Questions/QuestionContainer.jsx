import React from "react";
import TitleHeader from "../global/TitleHeader";
import QuestionBox from "./QuestionBox";
import "./QuestionBox.css";
const QuestionContainer = () => {
    return (
        <div className="questions-container container">
            <>
                <TitleHeader
                    title={"do you have "}
                    titleSpan={"questions ?"}
                    description={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sit amet consectetur  "
                    }
                />
            </>
            <QuestionBox />
        </div>
    );
};

export default QuestionContainer;
