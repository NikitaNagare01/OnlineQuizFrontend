import React from 'react'

const AccountItem = (props) => {

  const del=async()=>{
    const res= await fetch("http://localhost:5000/quiz/delete",{
      method:'DELETE',
      headers:{
        "Content-Type" : "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body:JSON.stringify({
                quizid:props.id
      })
    })

    const data = await res.json();

    console.log(data);
    alert(data.message);

  }


  return (
    <div id='accountitem'>

        <div className="con">

                    
            <div className="footerlist">

                <div className='fo'> 
                <h5>{props.quiz}</h5>
                {/* <button type="button" className="btn btn-light">{props.id}</button> */}
                <button type="button" className="btn btn-light" onClick={del}>Delete</button>
                
                
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default AccountItem
