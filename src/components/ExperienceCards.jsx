import React from 'react'

const ExperienceCards = () => {
  return (
    <div className='container-xl lg:container m-auto'>
        <h1 className='text-4xl p-4 text-gray-800 font-bold text-center'>My Experience</h1>
        <p className='text-2xl p-4 text-gray-500 font-bold text-center'>Have a look my experience.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 m-auto p-6'>
          <div>
              <p className='text-center text-2xl font-bold text-gray-900'>EDUCATION</p>
              <div>
                  <div className='justify-center mt-3 p-4 bg-gray-500 rounded-xl'>
                     <p className='font-bold text-white my-1'>University of Greenwich</p>
                     <p className='text-orange-300 my-1'>2023 - final year entry</p>
                     <p className='text-white my-1'>Bsc In Computing</p>
                  </div>
                  <div className='justify-center mt-3 p-4 bg-gray-500 rounded-xl'>
                     <p className='font-bold text-white my-1'>ZCAS University</p>
                     <p className='text-orange-300 my-1'>2022</p>
                     <p className='text-white my-1'>Advanced Diploma In Computing</p>
                  </div>
                  <div className='justify-center mt-3 p-4 bg-gray-500 rounded-xl'>
                     <p className='font-bold text-white my-1'>ZCAS University</p>
                     <p className='text-orange-300 my-1'>2021</p>
                     <p className='text-white my-1'>Level 4 Diploma In Computing</p>
                  </div>
                  <div className='justify-center mt-3 p-4 bg-gray-500 rounded-xl'>
                     <p className='font-bold text-white my-1'>ZCAS University</p>
                     <p className='text-orange-300 my-1'>2020</p>
                     <p className='text-white my-1'>Level 3 Diploma In Computing</p>
                  </div>
                  <div className='justify-center mt-3 p-4 bg-gray-500 rounded-xl'>
                     <p className='font-bold text-white my-1'>David Kaunda National Technical Secondary School</p>
                     <p className='text-orange-300 my-1'>2017 - 2019</p>
                     <p className='text-white my-1'>High School Diploma</p>
                  </div>
              </div>
          </div>
          <div>
              <p className='text-center text-2xl font-bold text-gray-900'>EXPERIENCE</p>
              <div>
                <div className='justify-center mt-3 p-4 bg-gray-500 rounded-xl'>
                    <p className='font-bold text-white my-1'>Atatu Soft</p>
                    <p className='text-orange-300 my-1'>2023 - Present</p>
                    <p className='text-white my-1'>Junior Software Developer - Internship</p>
                </div>
                <div className='justify-center mt-3 p-4 bg-gray-500 rounded-xl'>
                    <p className='font-bold text-white my-1'>Revridge</p>
                    <p className='text-orange-300 my-1'>2024 - Present</p>
                    <p className='text-white my-1'>Web Developer</p>
                </div>
                <div className='justify-center mt-3 p-4 bg-gray-500 rounded-xl'>
                    <p className='font-bold text-white my-1'>Handisi Digital Solutions</p>
                    <p className='text-orange-300 my-1'>2024 - Present</p>
                    <p className='text-white my-1'>Software Developer</p>
                </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default ExperienceCards