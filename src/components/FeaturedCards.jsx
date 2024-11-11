import  Resturant  from '../assets/my_projects/Resturant.png';
import  car_rental  from '../assets/my_projects/car_rental.png';
import  portifolio  from '../assets/my_projects/portifolio.png';
import  cleaning_services  from '../assets/my_projects/cleaning_services.png';
import  HGE  from '../assets/my_projects/HGE.png';
import  M_HIKE  from '../assets/my_projects/M_HIKE.png';
import  EMS  from '../assets/my_projects/EMS.png';

const FeaturedCards = () => {
  return (
    <div className='container-xl lg:container m-auto'>
        <h1 className='text-4xl p-6 text-gray-800 font-bold text-center'>My Work</h1>
        <p className='text-2xl p-6 text-gray-500 font-bold text-center'>Have a look at some of the projects I have worked on.</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-9 p-4 rounded-lg'>
            <div className='p-12 rounded-lg shadow-md flex flex-col'>
                <div className=' text-center'>
                    <p className='text-2xl mb-2 font-bold text-gray-800'>Rent-me</p>
                    <div>
                        <img className='' src={ car_rental } alt="" />
                    </div>
                </div>
                <div>
                    <p className='mt-4 mb-2 font-bold text-gray-500'>Rent-me</p>
                    <p className='text-gray-500'>
                        Rent-me is a website that is developed using the Laravel PHP framework. 
                        It allows a user to sign in and rent a car of their choice.
                        Currently under development.
                    </p>
                </div>
            </div>

            <div className='p-12 rounded-lg shadow-md flex flex-col'>
            <div className=' text-center'>
                <p className='text-2xl mb-2 font-bold text-gray-800'>Resturant</p>
                <div>
                    <img className='' src={ Resturant } alt="" />
                </div>
            </div>
            <div>
                <p className='mt-4 mb-2 font-bold text-gray-500'>Resturant</p>
                <p className='text-gray-500'>
                    This a simple website designed with HTML, CSS and JavaScript.
                </p>
            </div>
            </div>
            
            <div className='p-12 rounded-lg shadow-md flex flex-col'>
            <div className=' text-center'>
                <p className='text-2xl mb-2 font-bold text-gray-800'>M-HIKE</p>
                <div>
                    <img className='h-60 m-auto rounded-md' src={ M_HIKE } alt="" />
                </div>
            </div>
            <div>
                <p className='mt-4 mb-2 font-bold text-gray-500'>M-HIKE</p>
                <p className='text-gray-500'>
                    M-HIKE is an android mobile application designed and developed with Java, 
                    allowing users to track their data as they go on hikes.
                </p>
            </div>
            </div>
            <div className='p-12 rounded-lg shadow-md flex flex-col'>
            <div className=' text-center'>
                <p className='text-2xl mb-2 font-bold text-gray-800'>Cleaning Service Website</p>
                <div>
                    <img className='' src={ cleaning_services } alt="" />
                </div>
            </div>
            <div>
                <p className='mt-4 mb-2 font-bold text-gray-500'>Cleaning Service Website</p>
                <p className='text-gray-500'>
                    This Cleaning Service Website displays products for sale that can be 
                    proceeded to a checkout section, and allows a user to book a service once they are logged in.
                    This was developed using PHP, making use of PHPmyAdmin to handle the backend.
                </p>
            </div>
            </div>
            <div className='p-12 rounded-lg shadow-md flex flex-col'>
            <div className=' text-center'>
                <p className='text-2xl mb-2 font-bold text-gray-800'>Employee Management System</p>
                <div>
                    <img className='' src={ EMS } alt="" />
                </div>
            </div>
            <div>
                <p className='mt-4 mb-2 font-bold text-gray-500'>EMS</p>
                <p className='text-gray-500'>
                    The EMS is a desktop application built using C#, and then MySQL was used to manage
                    the data that the system uses. It is allows authorized users to manage employee data and 
                    generate payslips.
                </p>
            </div>
            </div>
            <div className='p-12 rounded-lg shadow-md flex flex-col'>
            <div className=' text-center'>
                <p className='text-2xl mb-2 font-bold text-gray-800'>GYM Website</p>
                <div>
                    <img className='' src={ HGE } alt="" />
                </div>
            </div>
            <div>
                <p className='mt-4 mb-2 font-bold text-gray-500'>Gym Website</p>
                <p className='text-gray-500'>
                    This GYM website allows users to sign up for membership or even purchase GYM eqipment
                    for home usage. This was developed using PHP, making use of PHPmyAdmin to handle the backend.
                </p>
            </div>
            </div>
            <div className='p-12 rounded-lg shadow-md flex flex-col'>
            <div className=' text-center'>
                <p className='text-2xl mb-2 font-bold text-gray-800'>Portfolio Website</p>
                <div>
                    <img className='' src={ portifolio } alt="" />
                </div>
            </div>
            <div>
                <p className='mt-4 mb-2 font-bold text-gray-500'>Portfolio Website</p>
                <p className='text-gray-500'>
                    This is a simple portfolio website that was developed with HTML, CSS and JavaScript.
                </p>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default FeaturedCards