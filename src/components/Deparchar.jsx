import React, { useState, useEffect } from 'react'
import deparchar from '../images/deparchar.png'
const flightData = [
  { "code": "DAC", "name": "Hazrat Shahjalal International Airport", "country": "Bangladesh", "district": "Dhaka" },
  { "code": "CXB", "name": "Cox's Bazar Airport", "country": "Bangladesh", "district": "Cox's Bazar" },
  { "code": "LHR", "name": "Heathrow Airport", "country": "UK", "district": "Hillingdon, London" },
  { "code": "HND", "name": "Haneda Airport", "country": "Japan", "district": "Ota, Tokyo" },
  { "code": "CDG", "name": "Charles de Gaulle Airport", "country": "France", "district": "Roissy-en-France" },
  { "code": "DXB", "name": "Dubai International Airport", "country": "UAE", "district": "Garhoud, Dubai" },
  { "code": "SIN", "name": "Changi Airport", "country": "Singapore", "district": "Changi" },
  { "code": "LAX", "name": "Los Angeles International Airport", "country": "USA", "district": "Westchester, Los Angeles" },
  { "code": "ORD", "name": "O'Hare International Airport", "country": "USA", "district": "O'Hare, Chicago" },
  { "code": "ATL", "name": "Hartsfield-Jackson Atlanta International Airport", "country": "USA", "district": "Atlanta, Georgia" },
  { "code": "PEK", "name": "Beijing Capital International Airport", "country": "China", "district": "Chaoyang, Beijing" }
];
export const Deparchar = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
  
    
    useEffect(() => {
      if (inputValue) {
        const filtered = flightData.filter(flight =>
          flight.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          flight.code.toLowerCase().includes(inputValue.toLowerCase()) ||
          flight.country.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredOptions(filtered);
      } else {
        setFilteredOptions(flightData.slice(0, 5)); // Show first 5 options as default
      }
    }, [inputValue]);
  
    return (
      <div className='m-2'>
        <div className="relative mx-auto md:mt-8">
        <label htmlFor="flight-input" className=" text-gray-500 text-sm font-bold flex">
        Deparchar <img className='w-6 ml-3' src={deparchar} alt="" />
          <div className='w-7'>
                        </div>
        </label>
        <input
          type="text"
          id="flight-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setShowOptions(true)}
          onBlur={() => setTimeout(() => setShowOptions(false), 200)}
          className="w-full py-2 px-2 border-none  rounded-lg"
          placeholder="Deparchar Destination..."
        />
        {showOptions && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg max-h-60 overflow-y-auto mt-1">
          {filteredOptions.map((flight) => (
            <li
              key={flight.code}
              className="px-2 py-2 hover:bg-gray-200 cursor-pointer"
              onMouseDown={() => setInputValue(flight.name)}
            >
              {flight.name} ({flight.code}) - {flight.country} - {flight.district}
            </li>
          ))}
        </ul>
      )}
      </div>
      </div>
    );
  };
