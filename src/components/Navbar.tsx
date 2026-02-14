import '../index.css';
import { Link } from 'react-router-dom';


function Navbar() {

    return (
        <div id="top" className='text-white py-7 px-5 lg:px-20 bg-black lg:w-full'>
            <div className="grid grid-cols-3">
                <div className=" 
                text-xs lg:text-xl font-bold flex flex-row items-center">
                    <img src="https://i.imgur.com/uKGerrj.png" className="w-1/8 h-auto lg:w-6 lg:h-6 mr-2" alt='logo' />
                    Aeron Roxas
                </div>
                <div className='col-span-2 flex justify-end'>
                    <ul id="menu" className="flex flex-row space-x-10 text-xs lg:text-lg
                    ">
                        <li className='hover:text-yellow-300 font-light active:text-yellow-300'><Link to="/">Home</Link></li>
                        <li className='hover:text-yellow-300 font-light active:text-yellow-300'><Link to="/projects">Projects</Link></li>
                        <li className='hover:text-yellow-300 font-light active:text-yellow-300'><Link to="/about">About Me</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar;