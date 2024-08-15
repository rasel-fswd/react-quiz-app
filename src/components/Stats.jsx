export default function Stats({questions, index}) {
  return (
    <div className="flex justify-between mb-6 text-gray-600 text-sm">
      <p className="py-3 px-4 bg-gray-200 rounded-full">Q.No: {index + 1}/{questions.length}</p>
      <p className="py-3 px-4 bg-gray-200 rounded-full">10/300</p>
    </div>
  );
}
