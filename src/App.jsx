import React from 'react';
import './App.css'
import logo from './images/logo.png'
import background from './images/background.png'
import ButtonGroup from './components/ButtonGroup'
import RadioButtonGroup from './components/RadioButtonGroup '
import TravelOption from './components/RadioButtonGroup '
import { TourInfo } from './components/TourInfo';

function App() {

  return (
    <>
    <div className='bg-sky-950'>
      <div className=' max-w-screen-xl mx-auto'>
          <div className='py-3'>
            <img className='w-56 ml-5 p-1 border-2  border-gray-300 rounded-xl bg-white' src={logo} alt="" />
          </div>
      </div>
    </div>
    <div className='mx-auto background'>
      <div className='max-w-screen-xl text-white mx-auto pl-5'>
        <p className=' text-3xl md:text-5xl font-semibold pt-10'>Discover Great Flight Deals.</p>
        <p className='text-lg pt-3'>Book your Flight, Hotels and Desire Holiday Packages</p>
      </div>
      <div className='h-36'>

      </div>
    </div>

    <div className='max-w-screen-xl mx-auto md:pl-5 px-2'>
      <div className='mt-[-72px] border-2 border-yellow-500 rounded-xl bg-white p-1 md:p-3'>
        <ButtonGroup></ButtonGroup>
        <TravelOption></TravelOption>
        <TourInfo></TourInfo>
      </div>
    </div>
    </>
  )
}

export default App
