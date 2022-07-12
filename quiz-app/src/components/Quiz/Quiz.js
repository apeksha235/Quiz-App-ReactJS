import React, { Component } from 'react'
import { useEffect, useState } from "react"
import Question from '../Question/Question';
import { CircularProgress } from '@mui/material';
import './Quiz.css'

const Quiz = ({questions, result, setresult, setquestion }) => {
  const [options, setOptions] = useState('');
  const [currQues, setCurrQues] = useState(0);                
  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer ?? [],
          ...questions[currQues]?.incorrect_answers ?? [],
        ])
    );
  }, [currQues, questions]);
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      {/* <span className="subtitle">Welcome, {name}</span> */}
      {questions?(
        <>
          <div className="quizInfo">
            <span className='score'>
              {/* {questions[currQues].difficulty} */}
              Score : {result}
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            result={result}
            setresult={setresult}
            setquestion={setquestion}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={5}
        />
      )}
    </div>
  );
};

export default Quiz;