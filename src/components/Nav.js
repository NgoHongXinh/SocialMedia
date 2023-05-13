import React, { useState } from 'react';
import {NavLink } from "react-router-dom";

export default function Nav() {
const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='pb-10'>
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className='mr-4'>
                <a href="#" class="flex items-center">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SOCIAL MEDIA</span>
                </a>
            </div>
          <div className="flex block md:order-2">
            <button 
            type="button" 
            className="flex mr-6 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-3 focus:ring-gray-300 dark:focus:ring-gray-600">
                <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="user photo"/>
            </button>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <svg
                className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
                <svg
                className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
            </button>
          </div>
          <div className={`block items-center justify-between  w-full md:flex md:w-auto md:order-1mr-4 ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'white' : 'gray' })} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" >Home</NavLink>
              </li>
              <li>
                <NavLink to="music" style={({ isActive }) => ({ color: isActive ? 'white' : 'gray' })} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Music</NavLink>
              </li>
              <li>
                <NavLink to="video" style={({ isActive }) => ({ color: isActive ? 'white' : 'gray' })} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Video</NavLink>
              </li>
              <li>
                <NavLink to="contact" style={({ isActive }) => ({ color: isActive ? 'white' : 'gray' })} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}
