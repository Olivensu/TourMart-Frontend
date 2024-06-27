import React, { useState, useEffect } from 'react'
import { Arrival } from './Arrival';
import { Deparchar } from './Deparchar';
import compare from '../images/compare.png'
import { DepartDate } from './DepartDate';
import { OnwordDate } from './OnwordDate';
import { PassengerSelection } from './PassengerSelection';


export const TourInfo = () => {
  
    return (
      <div className='flex md:flex-row justify-between flex-col md:items-center gap-4 p-2'>
        <Deparchar></Deparchar>
        <div className='flex flex-row justify-center items-center'>
          <div className='block md:hidden w-full mx-5 h-1 bg-yellow-500'></div>
        <img className='w-7 md:mt-10 h-6 ' src={compare} alt="" />
        <div className='block md:hidden w-full h-1 mx-5 bg-yellow-500'></div>
        </div>
        <Arrival></Arrival>
        <div className='block md:hidden  h-1 mx-5 my-2 bg-yellow-500'></div>
        
        <div className='flex md:flex-row justify-center'>
        <DepartDate></DepartDate>
        <OnwordDate></OnwordDate>
        </div>
        <div className='block md:hidden  h-1 mx-5 my-2 bg-yellow-500'></div>
        <PassengerSelection></PassengerSelection>
        <button
          className='py-2 px-6 mx-2 md:mt-5 font-semibold bg-yellow-500 rounded-lg'
        >
           Search
        </button>

      </div>
    );
  };
