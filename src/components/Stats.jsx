export default function Stats({ questions, index, points, totalPoints }) {

  return (
    <div className="flex justify-between mb-4 text-gray-600 text-sm">
      <p className="py-3 px-4 bg-gray-200 rounded-full">
        Q.No: {index + 1}/{questions.length}
      </p>
      <p className="py-3 px-4 bg-gray-200 rounded-full">
        {points}/{totalPoints}
      </p>
    </div>
  );
}
