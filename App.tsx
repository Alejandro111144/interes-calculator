import React, { useState } from "react";
import { CalculatorIcon } from "lucide-react";

const InterestRateCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [interest, setInterest] = useState(0);

  const calculateInterest = () => {
    const interest = (principal * rate * time) / 100;
    setInterest(interest);
  };

  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Interest Rate Calculator</h2>
      <div className="flex flex-col mb-4">
        <label className="text-gray-700 font-bold mb-2" htmlFor="principal">
          Principal Amount
        </label>
        <input
          className="p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          type="number"
          id="principal"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-gray-700 font-bold mb-2" htmlFor="rate">
          Interest Rate (%)
        </label>
        <input
          className="p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          type="number"
          id="rate"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-gray-700 font-bold mb-2" htmlFor="time">
          Time (Years)
        </label>
        <input
          className="p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          type="number"
          id="time"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
        />
      </div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={calculateInterest}
      >
        Calculate
      </button>
      <p className="text-lg font-bold mt-4">Interest: ${interest.toFixed(2)}</p>
      <p className="text-xl font-semibold text-gray-700 mt-6 tracking-wide">
        Created by:{" "}
        <span className="text-indigo-600 italic text-base">
          Javier Alejandro Castillo Camayo
        </span>
      </p>
    </div>
  );
};

export default InterestRateCalculator;
