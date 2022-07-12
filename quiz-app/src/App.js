import './App.css';
import axios from "axios"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Quiz from "./components/Quiz/Quiz"
import { useState } from 'react';

function App() {
  // const [questions, setquestions] = useState();
  // const [result, setresult] = useState(0);

  const getquestions= async()=>{

    const { data }=await axios.get('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple');
    console.log(data.results)
  };
   return(
    <BrowserRouter>
    <div className="App">
    </div>
    <Routes>
    <Route path='/quiz' element={<Quiz/>} exact></Route>
    <Route path='' element={<Home
    />}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
