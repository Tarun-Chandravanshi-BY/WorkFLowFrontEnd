import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userdetails } from '../../const';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h4 className="font-semibold text-lg">WorkFlow</h4>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-white hover:text-gray-400 focus:outline-none focus:text-white"
        >
          <svg
            className={`fill-current h-4 w-4 ${isOpen ? "hidden" : "block"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-4 w-4 ${isOpen ? "block" : "hidden"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
        <div className="text-sm lg:flex-grow">
          <p className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 cursor-pointer" onClick={() => navigate('/availableshifts')}>Available Shifts</p>
          {/* <p className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 cursor-pointer" onClick={() => navigate('/listofshifts')}>List of Shifts</p> */}
          <p className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 cursor-pointer" onClick={() => navigate('/assignedshifts')}>Assigned Shifts</p>
        </div>
        <div className="text-sm text-gray-100">Employee: {userdetails.userName}</div>
      </div>
    </nav>
  );
}

export default Header;
