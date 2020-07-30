import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { GlobalStyle, Wrapper } from './App.styles';
import Footer from './components/Footer';
import { fetchQuizQuestions, QuestionState } from './API';
import Input from './components/Input';
import Select from './components/Select';

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<any[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [optionValue, setOptionValue] = useState('');
  let TOTAL_QUESTIONS: number = numberOfQuestions || 10;

  const getQuantityOfQuestions = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === null) return;
    setNumberOfQuestions(Number(event.target.value));
    console.log(numberOfQuestions);
  }

  const getOptionValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionValue(event.target.value);
  }

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS = 10, optionValue);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //user Answer
      const answer = e.currentTarget.value;
      // check answer against correct 
      const correct = questions[number].correct_answer === answer;
      // Add score
      if (correct) setScore(prev => prev + 1);
      const answerObject = {
        question: questions[number],
        answer, correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, answerObject]);
    }
  }

  const nexQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    }
    else {
      setNumber(nextQuestion);
    }
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Wrapper>
        <h1 className="header">REACT QUIZ</h1>

        {gameOver || userAnswers.length === TOTAL_QUESTIONS ?
          <div className="FormGroup">
            <Input numberQue={getQuantityOfQuestions} />
            <Select getOption={getOptionValue} />
          </div>
          : null}

        {isNaN(numberOfQuestions) ? <span>Number of questions is invalid</span> : null}

        {gameOver ||userAnswers.length === TOTAL_QUESTIONS ?
          <button className="btn" onClick={startTrivia}>Start</button>
          : null}

        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading && <div className="progress">
          <div className="indeterminate"></div>
        </div>}

        {!gameOver && !loading && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            correct={questions[number].correct}
            callback={checkAnswer}
          />)}


        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button className="btn" onClick={nexQuestion}>Next Question</button>) : null
        }
      </Wrapper>
    </div>
  );
}

export default App;
