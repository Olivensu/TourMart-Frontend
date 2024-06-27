import React, { useState } from 'react';

const TravelOption = () => {
  const [selectedOption, setSelectedOption] = useState('One Way');

  const handleRadioButtonChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex space-x-4">
      {['One Way', 'Round City', 'Multi City'].map((option) => (
        <label key={option} className="flex items-center mx-2 my-2">
          <input
            type="radio"
            name="radio-6"
            value={option}
            checked={selectedOption === option}
            onChange={handleRadioButtonChange}
            className="radio radio-warning font-semibold"
          />
          {/* <span
            className={`inline-block w-6 h-6 rounded-full border border-gray-400 ${
              selectedOption === option ? 'bg-yellow-500' : 'bg-white'
            }`}
          ></span> */}
          <span className={`font-semibold ml-2 capitalize ${
              selectedOption === option ? 'text-yellow-500' : 'text-black'
            }`}>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default TravelOption;
