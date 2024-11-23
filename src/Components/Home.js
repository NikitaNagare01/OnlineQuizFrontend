import React from 'react'
import home from '../image.png';
import homesecond from '../homesecond.png'

const Home = () => {
  return (
    <div id='home'>

        <div className="con">
            <div className="ro">

                <div className="about-col-1">

                    <h1>Online<span> QUIZ</span></h1><br/>
                    <p>Welcome to Online Quiz<br/>All the Best!</p>

                    
                </div>

                <div className="about-col-2">
                    <img className='homeimage' src={home} alt="homeimage"/>
                    {/* <p>home</p> */}
                </div>

            </div>

            <div className="ro se">
                <div className="se-col-1">
                    <img src={homesecond} alt="homesecond"/>
                </div>

                <div className="se-col-2">
                    <ul>
                        <li>Keeping yourself entertained and educated is just a quiz away. </li>
                        <li>Want to have some fun or learn about a topic? Curated to learn while having fun, our online quizzes are an excellent source of knowledge and entertainment.</li>
                        <li>Take a quiz today to discover amazing facts about yourself or the world.</li>
                        <li>Take a quiz or create a quiz for your peers, students, friends, customers, or employees. There’s something for everyone.</li>
                        <li>Firstly Register yourself then start with Online Quiz</li>
                    </ul>
                </div>
            </div>


        </div>

    </div>
  )
}

export default Home
