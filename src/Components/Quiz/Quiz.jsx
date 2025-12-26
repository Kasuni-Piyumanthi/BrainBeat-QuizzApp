import React from 'react'
import './Quiz.css'
import { data } from '../../assets/data';

const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [Questions, setQuestions] = useState(data[index]);

  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>{index+1}. {Questions.question}</h2>
        <ul>
            <li>{Questions.option1}</li>
            <li>{Questions.option2}</li>
            <li>{Questions.option3}</li>
            <li>{Questions.option4}</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 10 Questions</div>
    </div>
  )
}

export default Quiz