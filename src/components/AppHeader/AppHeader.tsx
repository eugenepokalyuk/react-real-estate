import React, { useState } from 'react';
import { ReactComponent as Search } from '../../images/icon-search.svg';
import { ReactComponent as Logo } from '../../images/icon-logo.svg';
import { ReactComponent as MenuIcon } from '../../images/menu-icon.svg'; // Import a menu icon for mobile view
import { ReactComponent as CloseIcon } from '../../images/close-icon.svg'; // Import a close icon for mobile view
import { Link } from "react-router-dom";

const AppHeader = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="container mx-auto bg-[#FAFAFA] shadow py-4 sm:py-2 rounded-full">
                <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">

                    <a href="#" className="block">
                        <Logo className='mb-2' />
                    </a>

                    <div className="sm:hidden">
                        <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg">
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>

                    <nav className={`${isMenuOpen ? 'block' : 'hidden'} absolute sm:relative top-full left-0 w-full sm:w-auto sm:flex flex-col sm:flex-row bg-[#FEFEFF] sm:bg-transparent shadow-md sm:shadow-none py-4 sm:py-0 rounded-lg sm:rounded-none`}>
                        <Link to="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium">About us</Link>
                        <Link to="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium">Projects</Link>
                        <Link to="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium">Agents</Link>
                        <Link to="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium">Services</Link>
                        <Link to="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium">Listings</Link>

                        <button className="text-gray-600 hover:text-gray-800 rounded-lg text-base p-2.5 ml-4">
                            <Search />
                        </button>
                    </nav>
                    <div className="hidden sm:flex items-center">
                        <button className="focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg text-base p-2.5 ml-4">
                            Other services
                        </button>
                        <button className="bg-[#FEFEFF] border border-[#BEBEBE] rounded-full text-base py-[15px] px-[30px] ml-4 text-black hover:cursor-pointer">
                            Contact us
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="fixed w-full top-0 left-[50%] -translate-x-1/2 h-screen bg-[#FAFAFA] bg-[#FAFAFA] shadow z-10 p-9 bg-gradient-to-r from-[#c2dee7] to-[#fad9ba]">
                        {/* Place mobile menu items here */}
                        <ul className='flex flex-col gap-4 p-4'>
                            <li className='text-right flex justify-between mb-8'>
                                <Link to="#" className="block">
                                    <Logo className='mb-2' />
                                </Link>

                                <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg">
                                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                                </button>
                            </li>

                            {/* from #c2dee7 to #fad9ba */}

                            <li className='border-b border-gray bg-[#fff]/90 px-2 py-3 rounded-2xl' onClick={() => setMenuOpen(!isMenuOpen)}>
                                <Link to="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium text-base">About us</Link>
                            </li>

                            <li className='border-b border-gray bg-[#fff]/90 px-2 py-3 rounded-2xl' onClick={() => setMenuOpen(!isMenuOpen)}>
                                <Link to="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium text-base">Projects</Link>
                            </li>

                            <li className='border-b border-gray bg-[#fff]/90 px-2 py-3 rounded-2xl' onClick={() => setMenuOpen(!isMenuOpen)}>
                                <Link to="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium text-base">Agents</Link>
                            </li>

                            <li className='border-b border-gray bg-[#fff]/90 px-2 py-3 rounded-2xl' onClick={() => setMenuOpen(!isMenuOpen)}>
                                <Link to="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium text-base">Services</Link>
                            </li>

                            <li className='border-b border-gray bg-[#fff]/90 px-2 py-3 rounded-2xl' onClick={() => setMenuOpen(!isMenuOpen)}>
                                <Link to="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium text-base">Listings</Link>
                            </li>

                        </ul>
                    </div>
                )}
            </header>
        </>
    );
};

export default AppHeader;