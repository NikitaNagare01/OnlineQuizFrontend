import { useState } from "react";
import React from "react";

import QuizContext from "./QuizContext";

const QuizState=(props)=>{

    const[quizid, setquizid]=useState('quizid');

    return (
        <QuizContext.Provider value={{quizid, setquizid}}>
            {props.children}
        </QuizContext.Provider>
    )

}

export default QuizState;