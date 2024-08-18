export default function ProgressBar({ questions, index, answer }) {
  return (
    <progress
      max={questions.length}
      value={index + Number(answer !== null)}
      className="h-2 w-full mb-4 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-gray-300 [&::-webkit-progress-value]:bg-teal-600 [&::-moz-progress-bar]:bg-teal-600 [&::-moz-progress-bar]:rounded-lg"
    ></progress>
  );
}
