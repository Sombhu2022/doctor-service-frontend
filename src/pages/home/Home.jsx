import React from 'react'
import img from '../../assets/doc_team.jpg'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='home '>
      <div className='w-[60vw] m-5 ml-auto mr-auto'> 

      <h3 className='text-center text-5xl text-shadow-sm mb-10 text-[#01192306]'> Wellcome to DoctoMeet </h3>
     
        <h2 className="text-3xl text-center text-gray-700 mb-20">Connecting Patients with Compassionate Care</h2>
        <p className="text-2xl text-center text-gray-400 mb-10">
          Our mission is to make healthcare more accessible and convenient for everyone. 
          Whether you need a consultation, a second opinion, or ongoing care, our dedicated 
          doctors are here to help you every step of the way.
        </p>
        <div className='w-[60vw] m-5 ml-auto mr-auto flex justify-center'>

        <NavLink to="/doctors" className=" text-white text-[20px] border transition-all hover:bg-blue-600 hover:text-white px-5 py-3 rounded-full">
          Find a Doctor
        </NavLink>
        </div>
      </div>
      </div>
  )
}

export default Home