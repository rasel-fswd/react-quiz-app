import { useEffect, useReducer } from 'react';
import shuffle from './utils/index';
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
    level: 'easy',
  },
  {
    id: 2,
    question: 'He is devoid___common sense.',
    options: ['of', 'from', 'by', 'at'],
    correctOption: 0,
    points: 1,
    level: 'easy',
  },
  {
    id: 3,
    question: 'He insisted___there.',
    options: ['on to go', 'on my going', 'over going', 'into going'],
    correctOption: 1,
    points: 1,
    level: 'easy',
  },
  {
    id: 4,
    question: 'Please___the necessity of arriving early.',
    options: ['emphasise about', 'emphasize to', 'emphasise on', 'emphasise'],
    correctOption: 3,
    points: 1,
    level: 'medium',
  },
  {
    id: 5,
    question: 'Noureen will discuss the issue with Nabila___phone.',
    options: ['in', 'over', 'by', 'on'],
    correctOption: 2,
    points: 1,
    level: 'hard',
  },
  {
    id: 6,
    question: 'Credit tk 5000___my account.',
    options: ['in', 'with', 'against', 'to'],
    correctOption: 3,
    points: 1,
    level: 'easy',
  },
  {
    id: 7,
    question: 'The rich should not look down___the poor.',
    options: ['at', 'for', 'towards', 'upon'],
    correctOption: 3,
    points: 1,
    lavel: 'easy',
  },
  {
    id: 8,
    question: 'I am not good___translation.',
    options: ['at', 'in', 'about', 'with'],
    correctOption: 0,
    points: 1,
    lavel: 'easy',
  },
  {
    id: 9,
    question: 'There is no alternative___train.',
    options: ['in', 'to', 'than', 'of'],
    correctOption: 1,
    points: 1,
    lavel: 'easy',
  },
  {
    id: 10,
    question: 'He felt bad___no reason.',
    options: ['of', 'on', 'in', 'for'],
    correctOption: 3,
    points: 1,
    lavel: 'easy',
  },
  {
    id: 11,
    question: 'The girl takes___her mother.',
    options: ['with', 'after', 'to', 'for'],
    correctOption: 1,
    points: 1,
    level: 'medium',
  },
  {
    id: 12,
    question: 'He has been entrusted___new responsibilities.',
    options: ['with', 'for', 'to', 'at'],
    correctOption: 0,
    points: 1,
    lavel: 'hard',
  },
  {
    id: 13,
    question: 'Many prefer donating money___distributing clothes.',
    options: ['than', 'but', 'to', 'without'],
    correctOption: 2,
    points: 1,
    lavel: 'medium',
  },
  {
    id: 14,
    question: 'Your conduct admits___no excuse.',
    options: ['for', 'to', 'of', 'at'],
    correctOption: 2,
    points: 1,
    lavel: 'hard',
  },
  {
    id: 15,
    question: 'Wordsworth introduced the readers___a new kind of poetry.',
    options: ['at', 'with', 'for', 'to'],
    correctOption: 3,
    points: 1,
    lavel: 'medium',
  },
  {
    id: 16,
    question: 'Some writers sink___oblivion in course of time.',
    options: ['into', 'in', 'from', 'of'],
    correctOption: 0,
    points: 1,
    lavel: 'medium',
  },
  {
    id: 17,
    question: 'What are you so angry___?',
    options: ['about', 'with', 'for', 'at'],
    correctOption: 2,
    points: 1,
    lavel: 'medium',
  },
  {
    id: 18,
    question: 'The emergency exit was concealed___a red curtain.',
    options: ['by', 'from', 'with', 'in'],
    correctOption: 2,
    points: 1,
    lavel: 'medium',
  },
  {
    id: 19,
    question: 'That reminds me___my last visit to Paris.',
    options: ['about', 'of', 'for', 'to'],
    correctOption: 1,
    points: 1,
    lavel: 'medium',
  },
  {
    id: 20,
    question: 'The gift was wrapped___blue paper.',
    options: ['by', 'around', 'of', 'in'],
    correctOption: 3,
    points: 1,
    lavel: 'medium',
  },
  {
    id: 21,
    question: 'I entrusted him___my camera.',
    options: ['to', 'with', 'in', 'of'],
    correctOption: 1,
    points: 1,
    lavel: 'medium',
  },
];

const initalState = {
  questions: [],
  status: 'loading',
  answer: null,
  index: 0,
  points: 0,
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
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
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
        questions: action.payload,
        status: 'ready',
      };
  }
}

function App() {
  const [{ status, questions, index, answer, points }, dispatch] = useReducer(
    reducer,
    initalState
  );
  const shuffledArr = shuffle([...data]);

  useEffect(function () {
    dispatch({ type: 'dataReceived', payload: shuffledArr });
  }, []);

  const totalPoints = questions.reduce((acc, question) => {
    return acc + question.points;
  }, 0);

  return (
    <AppLayout>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'ready' && <StartScreen dispatch={dispatch} />}
        {status === 'active' && (
          <>
            <Stats
              questions={questions}
              index={index}
              points={points}
              totalPoints={totalPoints}
            />
            <ProgressBar questions={questions} index={index} answer={answer} />
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
        {status === 'finish' && (
          <FinishScreen
            dispatch={dispatch}
            points={points}
            totalPoints={totalPoints}
            questions={shuffledArr}
          />
        )}
      </Main>
    </AppLayout>
  );
}

export default App;
