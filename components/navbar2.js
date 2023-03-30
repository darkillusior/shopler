import React, { useState } from "react";
import { logoutUser } from "../utils/authUser";
import Link from "next/link";
function Navbar({ user }) {
  const [showProfile, setShowProfile] = useState(false);
  return (

    <>
      <nav className=" border-gray-200 px-2 sm:px-4 py-2.5  bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">

          <div className="flex">
          <a href="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Shopler
            </span>
          </a>
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            className="inline-flex ml-2 items-center justify-center px-4 py-2 text-sm text-gray-200 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Haldwani
          </button>
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
            id="language-dropdown-menu"
          >
            <ul class="py-2" role="none">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm  hover:bg-gray-100 text-gray-400 hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">Haldwani</div>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm  hover:bg-gray-100 text-gray-400 "
                  role="menuitem"
                >
                  <div className="inline-flex items-center">Deutsch</div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-smbg-gray-100 text-gray-400 hover:bg-gray-600 hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">Italiano</div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">中文 (繁體)</div>
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-language-select"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-language-select"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
          </button>
         
          </div>
         
          <div className="flex items-center md:order-2">
            <li className=" flex item-center">
              <button
              onClick={() => logoutUser(user.email)}
                className="  pl-3 mr-4 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Logout
              </button>
            </li>
            <li className=" flex item-center">
              <a
                href="/profile"
                className="  pl-3 mr-4 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Profile
              </a>
            </li>
            <li className=" flex item-center h-10 w-10 cursor-pointer justify-center">           
              <a href="/cart"> <img classname='' src="/carts.png"></img></a>
              <h1 className="text-white font-semibold text-center m-auto">1</h1>
            </li>
           
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-language-select"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
            
            
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
