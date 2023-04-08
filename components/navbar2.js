import React, { useEffect, useState } from "react";
import { logoutUser } from "../utils/authUser";
function Navbar({ user,length }) {
const[showcollapse,setshowcollapse]=useState(false)
const changeCollapse=()=>{
  setshowcollapse(!showcollapse)
}
  
  const [length1 ,setLength] = useState(user.items);

  useEffect(() => {
    setLength(length?length:user.items)
  }, [length])
  
  return (

    <>
      <nav className=" border-2 border-gray-200 px-2 sm:px-4 py-2.5  bg-gray-900 sticky  top-0 z-50">
        <div className="container flex flex-wrap items-center justify-between mx-auto relative">

          <div className="flex ">
          <a href="/" className="flex items-center">
           
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
        
         
          </div>
         
        

          <div className="flex items-center md:order-2">
            <li className=" flex item-center">
            

             
              
              <button
              onClick={() => logoutUser(user.email)}
                className="hidden sm:block  pl-3 mr-4 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 text-gray-400 dark:hover:bg-gray-700 hover:text-white m"
              >Logout</button>
            </li>
            
            <li className=" flex item-center">
            <a href="/profile"className="hidden sm:block  pl-3 mr-4 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</a>
            </li>

            <div className="sm:hidden flex flex-col items-center pr-5">
              <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={changeCollapse}>
                <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
              
       {showcollapse ?
                <> <ul><li className="mb-1 sm:hidden">
                  <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#"> <button
                    onClick={() => logoutUser(user.email)}
                  
                  >Logout</button></a>
                </li>
                  <li className="mb-1">
                    <a href='/profile' className="block sm:hidden p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Profile</a>
                  </li></ul></> : null}</div> 

            <li className=" flex item-center h-10 w-10 cursor-pointer justify-center">           
            <a href="/cart"> <img className='' src="/carts.png"></img></a>
            <h1 className="text-white font-semibold text-center m-auto">{length1}</h1>
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

// export const getServerSideProps = async ctx => {
//   try {

//     const { token } = parseCookies(ctx);


//     const res = await axios.get(`${baseUrl}/api/addtocart`, {
//       headers: { Authorization: token },

//     });
//     console.log("navbar", res.data)
//     const post = res.data

//     return { props: { postsData: post } };
//   } catch (error) {
//     return { props: { errorLoading: true } };
//   }
// };