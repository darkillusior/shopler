import React, { useState } from 'react'
import { logoutUser } from "../utils/authUser";
import Link from "next/link";
import { Icon } from 'semantic-ui-react'
function Navbar({ user }) {
  const [showProfile, setShowProfile] = useState(false)
  return (
    <header className='h-14 w-full sticky top-0 bg-gradient-to-b from-cyan-700 to-gray-900   flex item-center font-semibold text-2xl font-sans  shadow-black shadow-md '>
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
          </div>
        </> : null
        }
      </div>


      <button onClick={() => logoutUser(user.email)} className="m-2 text-sm  sm:text-xl font-semibold px-2   hover:bg-gradient-to-r  hover:cursor-pointer from-gray-500 to-transparent text-zinc-200 font-serif">
        Logout

      </button>
    </header>
  )
}

export default Navbar