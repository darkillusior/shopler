import React, { useState } from "react";
import { logoutUser } from "../utils/authUser";
import Link from "next/link";
import { Icon } from "semantic-ui-react";
function Navbar({ user }) {
  const [showProfile, setShowProfile] = useState(false);
  return (
<<<<<<< HEAD
    <>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Shopler
            </span>
          </a>
          
          <div class="flex items-center md:order-2">
            <li className=" flex item-center">
              <a
                href="/profile"
                class="  pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Profile
              </a>
            </li>
            <button
              type="button"
              data-dropdown-toggle="language-dropdown-menu"
              class="inline-flex items-center justify-center px-4 py-2 text-sm text-gray-200 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
             Haldwani
            </button>
            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
              id="language-dropdown-menu"
            >
              <ul class="py-2" role="none">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div class="inline-flex items-center">Haldwani</div>
                  </a>
                </li>
                
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div class="inline-flex items-center">Deutsch</div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div class="inline-flex items-center">Italiano</div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div class="inline-flex items-center">中文 (繁體)</div>
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="mobile-menu-language-select"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-language-select"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
            </button>
=======
    <header className='h-14 w-full sticky top-0 bg-gradient-to-b from-cyan-600 to-gray-800   flex item-center font-semibold text-2xl font-sans  shadow-transparent shadow-2xl '>
      <div className='text-sm  sm:text-2xl font-semibold text-zinc-200 font-serif flex items-center m-2'>
        <Link href='/'><a >Shopler.com</a></Link></div>
      <select name="city" className="rounded-md h-10 m-auto font-semibold text-base  sm:text-xl border border-solid border-black">
        <option value="Haldwani" defaultValue >Haldwani</option>
      </select>

      <div className='flex flex-col p-2  '>
        <button className=" text-sm  sm:text-xl flex m-auto items-center font-semibold  hover:bg-gradient-to-r  hover:cursor-pointer from-gray-500 to-transparent text-zinc-200 font-serif" onClick={() => { setShowProfile(!showProfile) }} >
          <Icon size="small" name="user" inverted />
          Profile
        </button>

        {showProfile ? <>
          <div className='bg-slate-900 top-11 '>
            <button className=" text-sm  sm:text-xl m-2 hover:bg-slate-300 hover:cursor-pointer flex self-center font-semibold  text-zinc-200 font-serif" ><a href="/shopProfile">Shop Profile</a></button>
            <button className=" text-sm  sm:text-xl m-2 flex hover:cursor-pointer hover:bg-slate-300 self-center font-semibold  text-zinc-200 font-serif"><a href="/userProfile">User Profile</a></button>
>>>>>>> 5ce0bd6f120362cd1b47a804601a1a4a45bb410f
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-language-select"
          >
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
            
            
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
