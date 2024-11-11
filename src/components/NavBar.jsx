import { NavLink } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaFacebook, FaLaptopHouse } from 'react-icons/fa';

const NavBar = () => {
  return (
    <>
    <nav className='bg-gray-800 text-white p-7'>
        <div className=' '>
            <div className='flex justify-center'>
                <div className='mx-auto'>
                  <span className=' text-4xl'><NavLink to="/"><FaLaptopHouse /></NavLink></span>
                </div>
                <div className='mx-auto'>
                  <span className='mx-2'><NavLink to="/about">about</NavLink></span>
                  <span className='mx-2'><NavLink to="/featured">featured</NavLink></span>
                  <span className='mx-2'><NavLink to="/experience">experience</NavLink></span>
                  <span className='mx-2'><NavLink to="/contact">contact</NavLink></span>
                  <div className='flex my-4 ml-16'>
                    <NavLink to=""><FaInstagram className=' mx-4'/></NavLink> 
                    <NavLink to=""><FaFacebook className='mx-4'/></NavLink>
                    <NavLink to=""><FaLinkedin className='mx-4'/></NavLink>
                  </div>
                
                </div>
                
            </div>
            
        </div>
    </nav>
    </>
  )
}

export default NavBar