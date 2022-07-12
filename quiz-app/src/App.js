import './App.css';
import axios from "axios"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Quiz from "./components/Quiz/Quiz"
import { useEffect, useState } from 'react';
import Result from './components/Result/Result';

function App() {
  const[name,setName]=useState("");
  const [questions, setquestions] = useState([]);
  const [result, setresult] = useState(0);
  const getquestions= async()=>{

    const { data }=await axios.get('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple');
    setquestions(data.results);
  };
  useEffect(() => {
    getquestions();
  }, []);
   return(
    <BrowserRouter>
    <div className="App">
    </div>
    <Routes>
    <Route path='/' element={<Home
    name={name}
    setName={setName}
     getquestions={getquestions}
    />} exact></Route>
    <Route path='/quiz' element={<Quiz
      name={name}
      questions={questions}
      result={result}
      setresult={setresult}
      setquestions={setquestions}
    />} exact></Route>
    <Route path='/result' element={<Result
      result={result}
    />} exact>
    </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
