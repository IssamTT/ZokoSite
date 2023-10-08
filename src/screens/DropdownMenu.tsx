import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    }

    return (
        <div className="relative inline-block text-left">
            <button onClick={toggleMenu}>
                Menu
            </button>
            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5">
                    <ul className="py-1 rounded-md bg-red shadow-xs">
                        <li onClick={() => setIsOpen(false)}>
                            <Link to="/Charge" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">
                                Charge de travaille
                            </Link>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                            <Link to="/Inverse" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">
                                Max estimé
                            </Link>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                            <Link to="/Contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;
