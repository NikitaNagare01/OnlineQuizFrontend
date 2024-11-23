import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ContextValue from '../Context/quiz/QuizContext';

const QuizesItem = (props) => {

  const context = useContext(ContextValue);

  const {quizid, setquizid} = context;

  const oncli=()=>{
    setquizid(props.id);
  }

  return (
    <div id='quizitem'>
        <div className="con">

        
        <div className="footerlist">

            <div className='fo'> 
                <h5>{props.quiz}</h5>
                <button type="button" className="btn btn-light" onClick={oncli}><Link  to="/quiz" >Go to Quiz</Link></button>
                
            </div>
 
        </div>
        </div>
      
    </div>
  )
}

export default QuizesItem
