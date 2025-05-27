import React, { useState, useEffect } from 'react';
import questions from '../data/questionslevel1';
import '../styles/Level1.css';

function Level1() {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [correct, setCorrect] = useState(null);
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [questionsCount, setQuestionsCount] = useState(0);
  const [waiting, setWaiting] = useState(false);

  const maxQuestions = 10;

  // Fonction pour mélanger un tableau
  const shuffleArray = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const getRandomQuestion = (excludedIndices) => {
    const availableIndices = questions
      .map((_, index) => index)
      .filter(index => !excludedIndices.includes(index));
    if (availableIndices.length === 0) return null;
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    const question = questions[randomIndex];
    // Mélange des options ici
    const shuffledOptions = shuffleArray(question.options);
    // On retourne la question avec les options mélangées
    return { question: { ...question, options: shuffledOptions }, index: randomIndex };
  };

  const startGame = () => {
    setStart(true);
    setTime(0);
    setSelectedAnswerIndex(null);
    setCorrect(null);
    setAskedQuestions([]);
    setQuestionsCount(0);
    setWaiting(false);

    const { question, index } = getRandomQuestion([]);
    setCurrentQuestion(question);
    setAskedQuestions([index]);
    setQuestionsCount(1);
  };

  useEffect(() => {
    let timer;
    if (start) {
      timer = setInterval(() => {
        setTime(prev => prev + 10);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [start]);

  const handleAnswer = (isCorrect, index) => {
    if (waiting) return;

    setSelectedAnswerIndex(index);
    setCorrect(isCorrect);

    if (isCorrect) {
      setTimeout(() => {
        if (questionsCount >= maxQuestions) {
          setStart(false);
          setCurrentQuestion(null);
          setSelectedAnswerIndex(null);
          setCorrect(null);
          setWaiting(false);
          return;
        }

        const { question: nextQuestion, index: nextIndex } = getRandomQuestion(askedQuestions);
        if (nextQuestion) {
          setCurrentQuestion(nextQuestion);
          setAskedQuestions(prev => [...prev, nextIndex]);
          setQuestionsCount(prev => prev + 1);
          setSelectedAnswerIndex(null);
          setCorrect(null);
          setWaiting(false);
        } else {
          setStart(false);
          setCurrentQuestion(null);
          setSelectedAnswerIndex(null);
          setCorrect(null);
          setWaiting(false);
        }
      }, 1000);
    } else {
      setWaiting(true);
      setTimeout(() => {
        setSelectedAnswerIndex(null);
        setCorrect(null);
        setWaiting(false);
      }, 2000);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
  };

  return (
    <div className="level1-container">
      <div className="timer">{formatTime(time)}</div>

      {!start ? (
        <button className="start-button" onClick={startGame}>Démarrer</button>
      ) : (
        currentQuestion && (
          <>
            <h2 className="question">{currentQuestion.question}</h2>
            <div className="answers">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`answer-button ${
                    selectedAnswerIndex === index
                      ? option.isCorrect
                        ? 'correct'
                        : 'incorrect'
                      : ''
                  }`}
                  onClick={() => handleAnswer(option.isCorrect, index)}
                  disabled={correct === true || waiting}
                >
                  {option.answer}
                </button>
              ))}
            </div>
            <p>Question {questionsCount} / {maxQuestions}</p>
          </>
        )
      )}
    </div>
  );
}

export default Level1;
