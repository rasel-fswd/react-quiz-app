export default function StartScreen({ dispatch }) {
  return (
    <>
      <h2 className=" text-center text-2xl text-gray-600 font-semibold">
        Start Your Test By Clicking The Button
      </h2>
      <button
        onClick={()=>dispatch({ type: 'active' })}
        className="block mx-auto mt-4 border border-gray-600 py-2 px-4 text-lg w-[120px] text-gray-700 rounded-full hover:bg-gray-600 hover:text-gray-50 transition"
      >
        Start
      </button>
    </>
  );
}
