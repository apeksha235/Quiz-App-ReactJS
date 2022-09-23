import { Button } from '@mui/material';
import { useState } from "react";
import { useNavigate } from "react-router";
import "./Question.css";
import Popup from 'reactjs-popup';

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setresult,
  result,
  setquestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
   window.dataLayer = window.dataLayer||[];
  function gtag()(dataLayer.push(arguments);}
 gtag(js',new Date());
 gtag('config','UA-242613192-1)
  const history = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setresult(++result);
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 3) {
      history("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
    console.log(currQues)
  };

  const handleQuit = () => {
    setCurrQues(0);
    setquestions();
  };

  return (
    <div className="question">
      <h1>Question {currQues+1} :</h1>

      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <span className='errorMes'>{error}</span>
        <div className="options">
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          {currQues<=3?(
            <>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            Next Question
          </Button>
          </>
          ): 
          <Popup
    trigger={<button className="button">Submit</button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">Your final score is: {result}</div>
        <br/>
        <br/>
        <div className="content">
          {result==5?(
               <>
               <div>Well Done!!!</div>
               <br></br>
               <div><a href="/#">Click here </a>to get the best offer from UpCloud digital healthcare</div>
               </>
          ):result>=2?(
            <>
          <div>Very Good!!!</div>
          <br></br>
          <div><a href="/#">Click here </a>to get the best offer from UpCloud digital healthcare</div>
          </>):
          <><div>Sorry you are not eligible to get best offer, Please try again!</div>
          <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/">
        Go to homepage
    </Button></>
          }
        </div>
        <div className="actions">

        </div>
      </div>
    )}
  </Popup>
          
          }
        </div>
      </div>
    </div>
  );
};

export default Question;
