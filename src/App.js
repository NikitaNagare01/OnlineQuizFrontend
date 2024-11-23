import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Quizes from './Components/Quizes';
import Account from './Components/Account';
import QuestionItem from './Components/QuestionItem';

// import ContextValue from './Context/quiz/QuizContext';
import ContextValue from './Context/quiz/QuizContext'
import { useContext } from 'react';
import AddQuiz from './Components/AddQuiz';

function App() {

  
  const context = useContext(ContextValue);
  const {quizid, setquizid} = context;


  return (
    <div className="App">
  
   
      <Navbar/>

        <Routes>
          <Route exact path='/home' element={<Home/>}/>
          <Route  path='/login' element={<Login/>}/>
          <Route  path='/signup' element={<Signup/>}/>
          <Route  path='/quizes' element={<Quizes/>}/>
          <Route  path='/account' element={<Account/>}/>
          <Route  path='/add' element={<AddQuiz/>}/>
          <Route  path='/quiz' element={<QuestionItem qu={quizid}/>}/>
          <Route  path='*' element={<Home/>}/>
          
        </Routes>



      <Footer/>
    </div>
  );
}

export default App;
