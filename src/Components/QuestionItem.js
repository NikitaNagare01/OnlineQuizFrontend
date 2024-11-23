import React, { useContext, useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Que from './Que';

const QuestionItem = (props) => {

    const [quelist, setquelist]=useState([]);

    const [na, setna]=useState('');

    const [ansfi, setansfi] = useState({});

    const [score, setscore]=useState()
    const [total, settotal]=useState();
    const [dis, setdis] = useState();




    const questionitempage=async()=>{

        const res = await fetch('https://quiz-app-backend-jt93.onrender.com/exam/quiz',{
            method:'POST',
            headers:{
                "Content-Type" : "application/json",
                "auth-token":localStorage.getItem('token')
            },
            body:JSON.stringify({
                quizid:props.qu
            })
        })

        const data = await res.json();
        // console.log(data.data.question_list);
        setquelist(data.data.question_list);
        setna(data.data.name);
       

    }

   

    useEffect(()=>{
        questionitempage();
    })


    if(props.qu=='quizid'){
        return (<h1>
            Quiz not found
        </h1>)
    }
      
   
    const oncli=async(e)=>{
        console.log(ansfi);

        try{const res= await fetch('https://quiz-app-backend-jt93.onrender.com/exam/submit',{
            method:'POST',
            headers:{
                "Content-Type" : "application/json",
                "auth-token":localStorage.getItem('token')
            },
            body:JSON.stringify({
                quizid:props.qu,
                attempted_question:ansfi
            })
        })

        const response = await res.json();
        console.log(response.data.score);
        setscore(response.data.score);
        settotal(response.data.total);
        setdis(true);
    }
        catch(err){
            console.log(err);
        }

    }


      

  return (
    <div id='questionitem'>
        <div className="con">
            <h1>{na}</h1>
            {/* <p>{props.qu}</p> */}

            <div className='quelist'>
                {quelist.map((qi)=>{
                    return <Que key={qi._id} pp={qi.question_number} ele={qi} op={qi.options} ansfi={ansfi} setansfi={setansfi}/>
                })}
            </div>

            <button type="button" className="btn btn-light"  onClick={oncli}>Submit</button>

            {score && total && 
                <div>

                <h1>Total :<p>{total}</p> </h1>
                <h1>Score :<p>{score}</p> </h1>
                </div>
            }

        </div>
    </div>
  )
}

export default QuestionItem
