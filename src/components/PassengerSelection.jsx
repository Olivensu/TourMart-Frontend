import React,{ useState,useEffect, useRef } from 'react'
import './styles.css';
import profile from '../images/profile.png'

export const PassengerSelection = () => {
    const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [travelClass, setTravelClass] = useState('Economy');
  const [showOptions, setShowOptions] = useState(false);

  const optionsRef = useRef();

  const handleAdultsChange = (change) => {
    setAdults((prev) => Math.max(1, prev + change));
  };

  const handleChildrenChange = (change) => {
    setChildren((prev) => Math.max(0, prev + change));
  };

  const handleClassChange = (newClass) => {
    setTravelClass(newClass);
  };

  const handleClickOutside = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mt-8">
      <label htmlFor="traveler-input" className="text-sm text-gray-500 font-bold flex">
        Travelers and Class<img className='w-6 h-6 ml-3' src={profile} alt="" />
      </label>
      <input
        type="text"
        id="traveler-input"
        value={`${adults + children} Traveler(s), ${travelClass}`}
        readOnly
        onClick={() => setShowOptions(!showOptions)}
        className="w-full px-2 py-2  rounded-lg cursor-pointer"
      />
      {showOptions && (
        <div ref={optionsRef} className="absolute z-10 w-80 bg-white border border-gray-300 rounded-lg mt-1 p-4 shadow-lg">
          <div className="passenger-type mb-4">
            <label className="block text-gray-700 font-bold mb-2">Adults</label>
            <div className="counter">
              <button onClick={() => handleAdultsChange(-1)} className="px-4 py-2 bg-gray-300 rounded-l-lg">-</button>
              <span className="px-4 py-2 border-t border-b border-gray-300">{adults}</span>
              <button onClick={() => handleAdultsChange(1)} className="px-4 py-2 bg-gray-300 rounded-r-lg">+</button>
            </div>
          </div>
          <div className="passenger-type mb-4">
            <label className="block text-gray-700 font-bold mb-2">Children</label>
            <div className="counter">
              <button onClick={() => handleChildrenChange(-1)} className="px-4 py-2 bg-gray-300 rounded-l-lg">-</button>
              <span className="px-4 py-2 border-t border-b border-gray-300">{children}</span>
              <button onClick={() => handleChildrenChange(1)} className="px-4 py-2 bg-gray-300 rounded-r-lg">+</button>
            </div>
          </div>
          <div className="travel-class mb-4">
            <label className="block text-gray-700 font-bold mb-2">Class</label>
            <div className="flex space-x-4">
              <button
                onClick={() => handleClassChange('Economy')}
                className={`px-4 py-2 rounded-lg ${travelClass === 'Economy' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              >
                Economy
              </button>
              <button
                onClick={() => handleClassChange('Business')}
                className={`px-4 py-2 rounded-lg ${travelClass === 'Business' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              >
                Business
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};