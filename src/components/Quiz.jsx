import React from "react";
import Heading from "./main_items/Heading";
import Question from "./main_items/Question";
import Score from "./main_items/Score";
import Option from "./main_items/Option";


function runOption(values){
    return <Option option={values} />
}

function Quiz(){
    const questionObject={
    
        "Question": "What is known as CPU?",
        "Answer": "Central Processing Unit",
        "Options":["Central Police Unit", "Central Processing Unit", "Central Potato Unit", "Central Pokemon Unit"]
        
    }

    return(
        <div className="main-body">
            <div className="score-body">
                <Score value={0} />
            </div>
            <div className="question-body">
                <Question question={questionObject.Question} />
            </div>
            <div className="option-body">
                {questionObject.Options.map(runOption)}
            </div>
        </div>
    );
}

export default Quiz;