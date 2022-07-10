import React from 'react';
import './Home.css';
import { useNavigate } from "react-router-dom";
import { Button} from 'react-bootstrap';

const Home = ({getquestions}) =>{
      
  const history=useNavigate();
  const Submit=()=>{
    getquestions();
    history("/quiz");
  }
    return(
        <div className="container">
          <h3>Quiz on Computer Awareness</h3>
          <ul>
            <li>This quiz contains 10 questions</li>
            <li>You'll get 1 minute for each question</li>
            <li>This quiz can be solved only twice a day</li>
            <li>Score more than 60% and get your prize!!</li>
          </ul>
          <button onClick={Submit}>Start Quiz</button>
        </div>
    )
}

export default Home;