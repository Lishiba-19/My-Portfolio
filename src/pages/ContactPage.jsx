import { FaMailBulk } from "react-icons/fa"

const ContactPage = () => {
  return (
    <div className='p-6'>
      <h1 className='text-4xl p-4 text-gray-800 font-bold text-center'>Contact Me</h1>
      <p className='text-2xl p-4 text-gray-500 font-bold text-center'>Get in touch with me.</p>
      <form action="" className='flex flex-col p-6 m-auto justify-center w-1/2'>
        <input className='outline-none p-2 mb-5 
        border-solid border-2 border-gray-500 rounded-md' 
        type="text" placeholder='Fullname' required/>
        <input className='outline-none p-2 mb-5 border-solid border-2 border-gray-500 rounded-md' type="email" name="" id="" placeholder='Email' required/>
        <textarea className='outline-none p-3 mb-5 border-solid border-2 border-gray-500 rounded-md' name="" id="" placeholder='Your message to me :)' required></textarea>

        <button className='outline-none p-3 bg-gray-500 hover:bg-gray-900 duration-75 rounded-md text-white' onClick={ '' }>Submit</button>
      </form>
    </div>
  )
}

export default ContactPage