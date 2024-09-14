import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-4xl font-bold mb-4">{count}</div>
      <div className="space-x-4">
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Decrement
        </button>
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Count;
