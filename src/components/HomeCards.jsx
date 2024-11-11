import React from 'react'
import my_projects  from '../assets/imgs/my_projects.png';
import about from '../assets/imgs/about_me.png';
import trash_pic from '../assets/imgs/trash_pic.png';
import { NavLink } from 'react-router-dom';

const HomeCards = () => {
  return (
    <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
            <div className='p-4 rounded-lg shadow-md flex'>
                <div className='my-auto border-spacing-2 '>
                    <img className=' rounded-s-md' src={trash_pic} alt="" />
                </div>
                <div className='my-auto'>
                <p className='text-gray-900 mt-11 mb-3'>A SOFTWARE DEVELOPER</p>
                <h1 className='text-2xl mb-3'>Lishiba Emmanuel Chiboboka</h1>
                <p 
                className='text-gray-900 '
                >I am a Software Developer based in Lusaka, Zambia
                </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg m-auto'>
    
                <div className='p-4 rounded-lg shadow-md flex mx-auto'>
                    <div className='my-32'>
                    <img className=' ' src={about} alt="" />
                    <p className='text-gray-600 '>MORE ABOUT ME</p>
                    <p 
                    className='text-gray-900 '
                    > <NavLink to="/about">ABOUT</NavLink>
                    </p>
                    </div>
                </div>
                <div className='p-4 rounded-lg shadow-md flex mx-auto'>
                    <div className='my-32'>
                    <img className='mb-4 ' src={my_projects} alt="" />
                    <p className='text-gray-600 '>HAVE A LOOK</p>
                    <p 
                    className='text-gray-900 '
                    > <NavLink to="/featured">PROJECTS</NavLink>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeCards