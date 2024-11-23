import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const[credential, setcredential] = useState({name:"", email:"", password:"", cpassword:""});
    const navigate = useNavigate();

    const onChange=(e)=>{        
       setcredential({...credential, [e.target.name]:e.target.value});
    }


    const onclick = async(e)=>{
        e.preventDefault();

        const res= await fetch("https://quiz-app-backend-jt93.onrender.com/auth/register", {
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({name:credential.name, email:credential.email, password:credential.password, cpassword:credential.cpassword})
        });

        const data=await res.json();

        if(!data){
            alert('invalid credentials')
            console.log(data);
        }else{

            if(!data.status){
                alert(data.message);
                console.log(data);
            }else{
                alert('Registered in successfully')
                setcredential({email:"", password:""})
                navigate('/login');
            }
        }
    }



  return (
    <div id='signup'>

        <div className="register-container">
            <div className="register-form">
                <h2>Register</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="name">Username</label>
                        <input type="text" id="name" name="name" onChange={onChange} value={credential.name} required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" onChange={onChange} value={credential.email} required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={onChange} value={credential.password} required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" id="cpassword" name="cpassword" onChange={onChange} value={credential.cpassword} required/>
                    </div>
                    <button type="submit" className="btn" onClick={onclick}>Register</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Signup
