import Accordion from "../Accordion/Accordion.jsx";
import "./QuestionBox.css";
import { QuestionsData } from "../../Data/AllData.js";
const QuestionBox = () => {
    return (
        <>
            <div className="question-box">
                {QuestionsData.length ? (
                    QuestionsData.map((el) => {
                        return (
                            <Accordion
                                key={el.id}
                                Title={el.title}
                                Description={el.Description}
                                questionNum={el.questionNum}
                            />
                        );
                    })
                ) : (
                    <h2>not found data</h2>
                )}
            </div>
        </>
    );
};

export default QuestionBox;
