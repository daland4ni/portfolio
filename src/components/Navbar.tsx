import '../index.css';

function Navbar() {

    return (
        <div className='text-white py-7 flex justify-center'>
            <div className="flex flex-row space-x-60 lg:space-x-335">
                <div className="text-xl font-bold w-fit">Aeron Roxas</div>
                <div>
                    <ul id="menu" className="flex flex-row space-x-10">
                        <li><a href="#" className="font-light hover:text-yellow-500">Home</a></li>
                        <li><a href="#" className="font-light hover:text-yellow-500">Projects</a></li>
                        <li><a href="#" className="font-light hover:text-yellow-500">About Me</a></li>
                    </ul>
                </div>
            </div>
            <script src='NavbarScript.js' />

        </div>
    )
}

export default Navbar;