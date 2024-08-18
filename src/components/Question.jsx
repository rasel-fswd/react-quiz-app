import { twMerge } from 'tailwind-merge';

export default function Question({ question, answer, dispatch }) {
  const hasAnswer = answer !== null;
  return (
    <div>
      <h3 className="text-2xl font-medium tracking-tight text-gray-700">
        {question.question}
      </h3>
      <div className="mt-6 space-y-4">
        {question.options.map((option, i) => (
          <button
            onClick={() => dispatch({ type: 'newAnswer', payload: i })}
            key={option}
            disabled={hasAnswer}
            className={twMerge(
              'block text-gray-600 py-3 px-4 border border-gray-600 w-full rounded-full text-lg hover:bg-gray-600 hover:border-gray-700 hover:text-gray-200 disabled:cursor-not-allowed transition',
              hasAnswer
                ? i === question.correctOption
                  ? 'bg-teal-600 text-gray-200 hover:bg-teal-600 border-teal-700 hover:border-teal-700'
                  : 'bg-amber-500 hover:bg-amber-500 border-amber-600 hover:border-amber-600 hover:text-gray-600'
                : ''
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
