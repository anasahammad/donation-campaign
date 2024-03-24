import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const [theme, setTheme] = useState("light")

    const handleTheme = event =>{
        if (event.target.checked) {
            setTheme('dark')
            localStorage.setItem('theme', "dark")
          } else {
            setTheme('light')
            localStorage.setItem('theme', "light")
          }
    }

    useEffect(() => {
       
        const localTheme = localStorage.getItem('theme')
    
        // add custom data-theme attribute
        document.querySelector('html').setAttribute('data-theme', localTheme)
      }, [theme])
    
    return (
        <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
            <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
               <img src="/public/Logo.png" alt="" />
            </NavLink>
            <ul className="mr-4 hidden space-x-3 md:flex items-center items-center">
                
                 <NavLink className={({isActive})=> isActive ? "text-primary font-bold" : "font-bold"}  to={"/"} >Home</NavLink>
                 <NavLink className={({isActive})=> isActive ? "text-primary font-bold" : "font-bold"} to={"/donation"} >Donation</NavLink>
                 <NavLink className={({isActive})=> isActive ? "text-primary font-bold" : "font-bold"}  to={"/statistics"} >Statistics</NavLink>
               


               
                 <label className='cursor-pointer grid place-items-center'>
          <input
            type='checkbox'
            onChange={handleTheme}
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
              
                
            </ul>
            <button className="flex justify-end p-4 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </header>
    );
};

export default Navbar;