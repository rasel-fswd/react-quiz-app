export default function NextButton({ answer, dispatch, index, questions }) {
  if (answer === null) return;
  return (
    <button
      onClick={() => dispatch({ type: 'nextQuestion' })}
      className="py-2 px-6 block mt-4 ml-auto bg-tranparent rounded-full text-gray-500 border border-gray-600 hover:bg-gray-500 hover:text-gray-50"
    >
      {index < questions.length -1 ? 'Next' : 'Finish'}
    </button>
  );
}
