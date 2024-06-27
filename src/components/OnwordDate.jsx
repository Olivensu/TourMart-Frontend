import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import './styles.css';
import calender from '../images/calender.png'


export const OnwordDate = () => {

    const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowCalendar(false); // Hide calendar after selecting a date
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="calendar-container md:mt-8">
      <div className="date-picker">
      <label htmlFor="departdate" className=" text-gray-500 text-sm font-bold flex">
      Onword Date <img className='w-5 ml-3' src={calender} alt="" />
          <div className='w-7'>
                        </div>
        </label>
        <input
          type="text"
          name='departdate'
          value={format(date, 'MMMM d, yyyy')}
          readOnly
          onClick={toggleCalendar}
          className="w-full py-2 px-2 border-none  rounded-lg"
        />
        {showCalendar && (
          <div className="calendar-popup">
            <Calendar
              onChange={handleDateChange}
              value={date}
              className="mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};