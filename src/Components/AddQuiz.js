import React, { useState } from 'react'
import AddQuestion from './AddQuestion'
import { useNavigate } from 'react-router-dom'

const AddQuiz = () => {

const navigate = useNavigate();

// final list

  const initial=[]
  const [quelifi, setquelifi] = useState(initial);


  // question list element

  const [queliele, setqueliele]=useState({"question_number":"", "question":"", "options":{}});



  // final answrs
  const [ansfi, setansfi] = useState({});


  // final list
    const[quiname, setquizname]=useState();

    const onchanquizname=(e)=>{
      setquizname(e.target.value);
    }



// create

  const create=async()=>{

    const res= await fetch("https://quiz-app-backend-jt93.onrender.com/quiz/create",{
      method:"POST",
      headers:{
        
        "Content-Type" : "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body:JSON.stringify({
        name:quiname,
        question_list:quelifi,
        answer:ansfi
      })
    }) 

    const data = await res.json();

    console.log(data);
    alert(data.message);

    navigate('/account');

  }


  return (
    <div id='addquiz'>
      <h1>Add Quiz</h1>

        <div className="con">

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Quiz Name</label>
            <input type="text" className="form-control" id="name"  name='name' value={quiname} onChange={onchanquizname}/>
          </div>

          
          <AddQuestion ansfi={ansfi} setansfi={setansfi} queliele={queliele} setqueliele={setqueliele} quelifi={quelifi} setquelifi={setquelifi}/>


          <h1>
        <button type="button" className="btn btn-light" onClick={create}>create quiz</button>
        </h1>
          
        </div>

    </div>
  )
}

export default AddQuiz
