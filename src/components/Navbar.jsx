import React from 'react'

const Navbar = () => {
  return (
      <nav className =" font-semibold w-4/12 text-xl items-center sticky top-5  z-50 shadow-md  grid grid-cols-5 text-center bg-white/20 backdrop-blur-md justify-center p-2  rounded-full border-2 border-primaryBlack-100 ">
          <a href="/" className=" p-1 rounded-full hover:text-white hover:bg-primaryOrange-200 transition duration-200 ">
          <p>
            Projects
          </p>
        </a>
          <a href="/" className=" p-2 rounded-full  hover:text-white hover:bg-primaryOrange-200 transition duration-200 ">
            <p>
              Stack
            </p>
          </a>
          <a href="/" className=" p-2 rounded-full  hover:text-white hover:bg-primaryOrange-200 transition duration-200 ">
            <p>
              About
            </p>
          </a>
          <a href="/" className=" p-2 rounded-full  hover:text-white hover:bg-primaryOrange-200 transition duration-200 ">
            <p>
              Contact
            </p>
          </a>
          <button className="flex justify-center items-center p-2 rounded-full  w-20 hover:text-white hover:bg-primaryOrange-200 transition duration-200 ">
            <img src="/public/other/moon.svg" className="w-6 h-6" alt="Dark Mode" />
          </button>
      </nav>
  )
}

export default Navbar