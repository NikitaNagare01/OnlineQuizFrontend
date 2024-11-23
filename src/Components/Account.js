'use client'
import React, { useEffect, useState } from 'react'
import AccountItem from './AccountItem';
import {Link} from 'react-router-dom'

const Account = () => {

    const [quizlist, setquizlist] = useState([]);
  

    const userquiz=async()=>{

        const res =await fetch('https://quiz-app-backend-jt93.onrender.com/exam/userquiz',{
            method:'GET',
            headers:{
                "Content-Type" : "application/json",
                "auth-token":localStorage.getItem('token')
            }
        });

        const data = await res.json();
        // console.log(data);
        
        setquizlist(data.data);
    }

    useEffect(()=>{
        userquiz();
      })

  return (
    <div id='account'>
        <div className='con'>

            <h1>My Quizes</h1>
            <div className="quizli">
                
            {quizlist.map((qi)=>{
              return <AccountItem key={qi._id} id={qi._id} quiz={qi.name}  que={qi.question_list}/>
              
            })}

            </div>

            <h1>
            <button type="button" className="btn btn-light" ><Link  to="/add" >Add Quiz</Link></button>
            </h1>
        </div>
    </div>
  )
}

export default Account
