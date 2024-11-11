import trash_pic from '../assets/imgs/trash_pic.png';
import php_pic from  '../assets/skills/php.png';
import c_sharp from  '../assets/skills/c_sharp.png';
import css_pic from  '../assets/skills/css_3.png';
import java_pic from  '../assets/skills/java.png';
import flutter_pic from  '../assets/skills/flutter.png';
import laravel_pic from  '../assets/skills/laravel_icon.png';
import tailwind_pic from  '../assets/skills/tailwind_css.png';
import js_pic from  '../assets/skills/js.png';
import html_5 from  '../assets/skills/html_5.png';
import mysql_pic from  '../assets/skills/mysql.png';
import postgres_pic from  '../assets/skills/postgre.png';
import react_pic from  '../assets/skills/react.png';

import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className='container-xl lg:container m-auto'>
        <div className='flex flex-col p-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-4'>
            <div className='my-auto'>
                <h1 className='text-4xl text-gray-900 mt-20 mb-5'>ABOUT ME</h1>
                <p className='text-gray-600 mb-3'>LISHIBA EMMANUEL CHIBOBOKA - SOFTWARE DEVELOPER</p>
                <p className='text-gray-900 justify-center mb-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt vitae consectetur cum ut. Inventore, voluptatum quibusdam quos 
                    consequatur quisquam libero fuga, repellendus nam officia impedit alias quis a recusandae quod.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt vitae consectetur cum ut. Inventore, voluptatum quibusdam quos 
                    consequatur quisquam libero fuga, repellendus nam officia impedit alias quis a recusandae quod.
                </p>
                <div className='flex '>
                    <NavLink to=""><FaFacebook className='text-2xl text-blue-600'/></NavLink>
                    <NavLink to=""><FaInstagram className='text-2xl ml-3 text-pink-700'/></NavLink>
                    <NavLink to=""><FaLinkedin className='text-2xl ml-3 text-blue-900'/></NavLink>
                    <NavLink to=""><FaGithub className='text-2xl ml-3 text-black'/></NavLink>
                </div>
            </div>
            <div className='mx-auto'>
                <img src={ trash_pic } alt="" />
            </div>
        </div>
        <div className=''>
            <h1 className='text-4xl p-2 text-gray-800 font-bold text-center'>My Skills</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 p-9 mt-4 '>
                <div className='bg-gray-800 rounded-md h-44 text-center hover:bg-orange-300 duration-75'>
                    <img className='h-1/2 mx-auto my-4' src={ c_sharp } alt="" />
                    <p className='text-white font-bold'>C#</p>
                </div>   
                <div className='bg-gray-800 rounded-md h-44 text-center hover:bg-orange-300 duration-75'>
                    <img className='h-1/2 mx-auto my-4' src={ html_5 } alt="" />
                    <p className='text-white font-bold'>HTML</p>
                </div>   
                <div className='bg-gray-800 rounded-md h-44 text-center hover:bg-orange-300 duration-75'>
                    <img className='h-1/2 mx-auto my-4' src={ css_pic } alt="" />
                    <p className='text-white font-bold'>CSS</p>
                </div>   
                <div className='bg-gray-800 rounded-md h-44 text-center hover:bg-orange-300 duration-75'>
                    <img className='h-1/2 mx-auto my-4' src={ react_pic } alt="" />
                    <p className='text-white font-bold'>React js</p>
                </div>   
                <div className='bg-gray-800 rounded-md h-44 text-center hover:bg-orange-300 duration-75'>
                    <img className='h-1/2 mx-auto my-4' src={ js_pic } alt="" />
                    <p className='text-white font-bold'>JavaScript</p>
                </div>   
                <div className='bg-gray-800 rounded-md h-44 text-center hover:bg-orange-300 duration-75'>
                    <img className='h-1/2 mx-auto my-4' src={ php_pic } alt="" />
                    <p className='text-white font-bold'>PHP</p>
                </div>   
                <div className='bg-gray-800 rounded-md h-44 text-center hover:bg-orange-300 duration-75'>
                    <img className='h-1/2 mx-auto my-4' src={ java_pic } alt="" />
                    <p className='text-white font-bold'>Java</p>
                </div>   
                <div className='bg-gray-800 rounded-md h-44 text-center hover:bg-orange-300 duration-75'>
                    <img className='h-1/2 mx-auto my-4' src={ laravel_pic } alt="" />
                    <p className='text-white font-bold'>Laravel</p>
                </div>   
                <div className='bg-gray-800 rounded-md h-44 text-center hover:bg-orange-300 duration-75'>
                    <img className='h-1/2 mx-auto my-4' src={ tailwind_pic } alt="" />
                    <p className='text-white font-bold'>Tailwind css</p>
                </div>   
                <div className='bg-gray-800 rounded-md h-44 text-center hover:bg-orange-300 duration-75'>
                    <img className='h-1/2 mx-auto my-4' src={ mysql_pic } alt="" />
                    <p className='text-white font-bold'>Mysql</p>
                </div>   
                <div className='bg-gray-800 rounded-md h-44 text-center hover:bg-orange-300 duration-75'>
                    <img className='h-1/2 mx-auto my-4' src={ postgres_pic } alt="" />
                    <p className='text-white font-bold'>Postgres</p>
                </div>   
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutPage