export default function FinishScreen({ dispatch }) {
  return (
    <div className="px-4">
      <h1 className="text-gray-700">
        Congratulation you have successfully finished the quiz by scoring X out
        of X
      </h1>
      <button
        onClick={() => dispatch({ type: 'restart' })}
        className="px-4 py-2 mt-4 ml-auto block border border-gray-600 text-gray-700 rounded-full transition hover:text-gray-50 hover:bg-gray-600"
      >
        Restart
      </button>
    </div>
  );
}
