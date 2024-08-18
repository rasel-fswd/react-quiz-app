export default function ProgressBar() {
  return (
    <progress
      max={100}
      value={50}
      className="h-2 w-full mb-4 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-gray-300 [&::-webkit-progress-value]:bg-teal-600 [&::-moz-progress-bar]:bg-teal-600 [&::-moz-progress-bar]:rounded-lg"
    ></progress>
  );
}
