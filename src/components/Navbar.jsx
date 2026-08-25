import React from "react";

const Navbar = () => {
  return (
    <nav className="font-stack-sans text-white  w-5/16 text-lg items-center sticky top-5  z-50 grid grid-cols-5 text-center bg-black/10 backdrop-blur-md justify-center p-1  rounded-full ">
      <a
        href="#projects"
        className=" p-2 rounded-full  hover:bg-primaryOrange-200 hover:text-black transition duration-200 "
      >
        <p>Projects</p>
      </a>
      <a
        href="#stack"
        className=" p-2 rounded-full  hover:bg-primaryOrange-200  hover:text-black transition duration-200 "
      >
        <p>Stack</p>
      </a>
      <a
        href="#aboutme"
        className=" p-2 rounded-full  hover:bg-primaryOrange-200  hover:text-black transition duration-200 "
      >
        <p>About</p>
      </a>
      <a
        href="#footer"
        className=" p-2 rounded-full  hover:bg-primaryOrange-200 hover:text-black transition duration-200 "
      >
        <p>Contact</p>
      </a>
      <button className="flex justify-center items-center p-2  rounded-full  w-20 hover:text-white hover:bg-primaryOrange-200 transition duration-200 ">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_125_199)">
            <path
            className=""
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.4731 22.4945C8.64358 22.4945 5.31267 20.3338 3.6253 17.1683C11.377 17.8259 17.8271 11.3969 17.1694 3.62518C20.3337 5.31256 22.4946 8.64367 22.4946 12.4731C22.4946 17.9988 17.9987 22.4945 12.4731 22.4945ZM13.5429 0C18.1503 8.64609 8.71624 18.1878 0 13.5428C0.537405 19.8802 5.85384 25 12.4731 25C19.3917 25 25 19.3918 25 12.4731C25 5.85016 19.8765 0.5374 13.5429 0Z"
              fill="white "
            />
          </g>
          <defs>
            <clipPath id="clip0_125_199">
              <rect width="25" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
