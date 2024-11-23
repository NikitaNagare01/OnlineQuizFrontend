import React, { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import ContextValue from '../Context/quiz/QuizContext';

const Login = () => {
    const[credential, setcredentials]=useState({email:"", password:""});
    const navigate= useNavigate();

    const context = useContext(ContextValue);

    const onlogin=async(e)=>{

        e.preventDefault();

        const response = await fetch("http://localhost:5000/auth/login",{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                email:credential.email,
                password:credential.password
            })
        });

        const data= await response.json();
        if(!data){
            alert('invalid credentials')
            console.log(data);
        }else{

            if(!data.status){
                alert('invalid credentials');
                console.log(data);
            }else{
                alert('logged in successfully')
                localStorage.setItem('token', data.token);
                console.log(localStorage.getItem('token'));
                setcredentials({email:"", password:""})
                navigate('/home');
            }
        }
    }

    const onChange=(e)=>{
        setcredentials({...credential, [e.target.name]:e.target.value})
    }

  return (
    <div id='login'>

        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={credential.email} onChange={onChange} required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={credential.password} onChange={onChange} required/>
                    </div>
                    <button type="submit" className="btn" onClick={onlogin}>Login</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Login
