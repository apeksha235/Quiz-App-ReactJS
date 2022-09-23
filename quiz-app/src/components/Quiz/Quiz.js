import React, { Component } from 'react'
import { useEffect, useState } from "react"
import Question from '../Question/Question';
import { CircularProgress } from '@mui/material';
import './Quiz.css'

const Quiz = ({name,questions, result, setresult, setquestion }) => {
  const [options, setOptions] = useState('');
  const [currQues, setCurrQues] = useState(0);    
     window.dataLayer = window.dataLayer||[];
  function gtag()(dataLayer.push(arguments);}
 gtag(js',new Date());
 gtag('config','UA-242613192-1)
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
      {questions?(
        <>
          <div className="quizInfo">
          <span className="subtitle">Welcome, {name}</span>
            <span className='score'>
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
