import { useEffect, useState, useRef } from "react";


function StoreMenuTabs({activeItem,setActiveItem}) {

    

  const handleItemClick = clickedTab => setActiveItem(clickedTab);


  return (
    <>
      <div className="p-5 flex justify-between bg-black">
        <button
        className="text-3xl font-serif font-semibold text-slate-300"
          name="profile"
          active={activeItem === "profile"}
          onClick={() => handleItemClick("profile")}
        >
            Profile</button>

        <button
                className="text-3xl font-serif font-semibold text-slate-300"
          name={`Shop`}
          active={activeItem === "Shop"}
          onClick={() => handleItemClick("Shop")}
        >  Shop</button>

<button
className="text-3xl font-serif font-semibold text-slate-300"
          name={`Account`}
          active={activeItem === "Account"}
          onClick={() => handleItemClick("Account")}
        > Account</button>

       
      </div>

  
    </>
  );
}

export default StoreMenuTabs;
