import '../index.css';
import { Link } from 'react-router-dom';


function Navbar() {

    return (
        <div className='text-white bg-black py-7 flex justify-center'>
            <div className="flex flex-row space-x-10 lg:space-x-335">
                <div className="text-xs lg:text-xl font-bold flex flex-row items-center">
                    <img src="https://i.imgur.com/uKGerrj.png" 
                    className="w-4 h-4 lg:w-6 lg:h-6 mr-2" alt='logo' />
                    Aeron Roxas
                    </div>
                <div>
                    <ul id="menu" className="flex flex-row space-x-10 text-xs lg:text-lg">
                        <li className='hover:text-yellow-300 font-light'><Link to="/">Home</Link></li>
                        <li className='hover:text-yellow-300 font-light'><Link to="/projects">Projects</Link></li>
                        <li className='hover:text-yellow-300 font-light'><Link to="/about">About Me</Link></li>
                    </ul>
                </div>
            </div>
            <script src='NavbarScript.js' />

        </div>
    )
}

export default Navbar;