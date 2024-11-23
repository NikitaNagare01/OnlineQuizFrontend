import React, { useEffect, useContext, useState } from 'react'

import ContextValue from '../Context/quiz/QuizContext';
import QuizesItem from './QuizesItem';

const Quizes = () => {

  const [quizlist, setquizlist] = useState([]);
  
  const context = useContext(ContextValue);

  const quizespage= async()=>{

    const res = await fetch('http://localhost:5000/exam/getallquiz',{
      method:'GET',
      headers:{
        "Content-Type" : "application/json",
        "auth-token":localStorage.getItem('token')
      }
    });

    const data = await res.json();
    // console.log(data.data);
    setquizlist(data.data);
    // console.log(quizlist)
  }

  useEffect(()=>{
    quizespage();
  })
    

  return (
    <div id='quizes'>

        <div className="con">
            <h1 className="sub-title">Quizes</h1>

            {/* <QuizesItem/> */}
            <div className='quizli'>
            {quizlist?.map((qi)=>{
              return <QuizesItem key={qi._id} id={qi._id} quiz={qi.name}  que={qi.question_list}/>
              {/* {console.log(qi)} */}
            })}
            </div>

        </div>

    </div>
  )
}

export default Quizes
