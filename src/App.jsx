import { act, useEffect, useReducer } from 'react';
import Question from './components/Question';
import StartScreen from './components/StartScreen';
import Loader from './components/Loader';
import NextButton from './components/NextButton';
import Header from './components/Header';
import Main from './components/Main';
import FinishScreen from './components/FinishScreen';
import AppLayout from './components/AppLayout';
import Stats from './components/Stats';
import ProgressBar from './components/ProgressBar';

const data = [
  {
    id: 1,
    question: 'My brohter has no interest____music.',
    options: ['for', 'in', 'with', 'at'],
    correctOption: 1,
    points: 1,
  },
  {
    id: 2,
    question: 'He is devoid___common sense.',
    options: ['of', 'from', 'by', 'at'],
    correctOption: 0,
    points: 1,
  },
  {
    id: 3,
    question: 'He insisted___there.',
    options: ['on to go', 'on my going', 'over going', 'into going'],
    correctOption: 1,
    points: 1,
  },
  {
    id: 4,
    question: 'Please___the necessity of arriving early.',
    options: ['emphasise about', 'emphasize to', 'emphasise on', 'emphasise'],
    correctOption: 3,
    points: 1,
  },
  {
    id: 5,
    question: 'Noureen will discuss the ussue with Nabila___phone.',
    options: ['in', 'over', 'by', 'on'],
    correctOption: 2,
    points: 1,
  },
  {
    id: 6,
    question: 'Credit tk 5000___my account.',
    options: ['in', 'with', 'against', 'to'],
    correctOption: 3,
    points: 1,
  },
];

const initalState = {
  questions: [],
  status: 'loading',
  answer: null,
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'active':
      return {
        ...state,
        status: 'active',
      };
    case 'newAnswer':
      return {
        ...state,
        answer: action.payload,
      };
    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        status:
          state.index === state.questions.length - 1 ? 'finish' : state.status,
      };
    case 'restart':
      return {
        ...initalState,
        questions: state.questions,
        status: 'ready',
      };
  }
}

function App() {
  const [{ status, questions, index, answer }, dispatch] = useReducer(
    reducer,
    initalState
  );

  useEffect(function () {
    dispatch({ type: 'dataReceived', payload: data });
  }, []);

  return (
    <AppLayout>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'ready' && <StartScreen dispatch={dispatch} />}
        {status === 'active' && (
          <>
            <Stats questions={questions} index={index} />
            <ProgressBar questions={questions} index={index} answer={answer}/>
            <Question
              question={questions[index]}
              index={index}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton
              answer={answer}
              questions={questions}
              index={index}
              dispatch={dispatch}
            />
          </>
        )}
        {status === 'finish' && <FinishScreen dispatch={dispatch} />}
      </Main>
    </AppLayout>
  );
}

export default App;
