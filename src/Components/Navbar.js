import React, { useContext } from 'react'
import {Link, useLocation} from 'react-router-dom'
import ContextValue from '../Context/quiz/QuizContext';

const Navbar = () => {

    const context = useContext(ContextValue);
    const {quizid, setquizid} = context;

    let location = useLocation();

    const handleLogout= ()=>{
        localStorage.removeItem('token');
    }

  return (
    <div id='navbar'>

        
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">QUIZ</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} aria-current="page" to="/home">Home</Link>
                        </li>


                        {localStorage.getItem('token') ?
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/quizes" ? "active" : ""}`} aria-current="page" to="/quizes">Quizes</Link>
                            </li>
                            : <li></li>
                        }
                    </ul>

                    {!localStorage.getItem('token')? <div className="d-flex">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link mx-1' to="/login" >Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link mx-1' to="/signup">Signup</Link>
                            </li>
                    
                        </ul>

                    </div> :
                        <div className="d-flex">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className='nav-link mx-1' to="/account" >Account</Link>
                            </li>

                            <li className="nav-item">
                                <Link className='nav-link mx-1' to="/logout" onClick={handleLogout}>Logout</Link>
                            </li>
                           
                        </ul>
                        </div>

                     }
                </div>
            </div>
        </nav>

      
    </div>
  )
}

export default Navbar
