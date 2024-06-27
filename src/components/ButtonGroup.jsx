import React, { useState } from 'react';

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState('Flight');

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className="flex space-x-2 my-3">
      {['Flight', 'Hotel', 'Airport Taxi', 'Tour'].map((buttonIndex) => (
        <button
          key={buttonIndex}
          onClick={() => handleButtonClick(buttonIndex)}
          className={`py-2 px-6 mx-2 font-semibold ${
            activeButton === buttonIndex ? 'bg-yellow-500' : 'bg-white'
          } rounded `}
        >
           {buttonIndex}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
