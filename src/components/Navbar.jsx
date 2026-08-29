import useScrollDirection from "../hooks/useScrollDirection";


const Navbar = () => {
    const isVisible = useScrollDirection();

  return (
    <nav className={`font-stack-sans text-white  px-4 text-[15px] items-center sticky top-5  z-50 flex flex-wrap gap-3 text-center bg-black/10 border shadow-2xl border-white/20  backdrop-blur-lg justify-center p-1  rounded-full transition-transform duration-200  ${isVisible ? "-translate-y-0" : "-translate-y-30"} `}>
     
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
      {/* <button className="flex justify-center h-full items-center p-2  rounded-full  w-20 hover:text-white hover:bg-primaryOrange-200 transition duration-200 ">
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
      <button className="h-full flex justify-center items-center p-2  rounded-full  w-20 hover:text-white hover:bg-primaryOrange-200 transition duration-200 ">
        <svg
          width="23"
          height="15"
          viewBox="0 0 23 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.76622e-05 14.32V0.319999H9.6201V2.26H2.1801V6.32H8.8201V8.24H2.1801V12.38H9.7001V14.32H9.76622e-05ZM13.7384 9.86C13.7917 10.4333 13.9717 10.9267 14.2784 11.34C14.5984 11.7533 15.0117 12.0667 15.5184 12.28C16.0384 12.4933 16.625 12.6 17.2784 12.6C18.2117 12.6 18.965 12.4267 19.5384 12.08C20.125 11.72 20.4184 11.2067 20.4184 10.54C20.4184 10.0867 20.2584 9.73333 19.9384 9.48C19.6184 9.22667 19.1917 9.02667 18.6584 8.88C18.1384 8.73333 17.565 8.6 16.9384 8.48C16.3117 8.34667 15.6784 8.2 15.0384 8.04C14.4117 7.86667 13.8317 7.63333 13.2984 7.34C12.7784 7.03333 12.3584 6.62667 12.0384 6.12C11.7184 5.6 11.5584 4.93333 11.5584 4.12C11.5584 3.34667 11.785 2.65333 12.2384 2.04C12.705 1.41333 13.3517 0.919999 14.1784 0.559999C15.005 0.186666 15.9717 -7.15256e-07 17.0784 -7.15256e-07C18.0917 -7.15256e-07 19.005 0.206666 19.8184 0.619998C20.645 1.02 21.2984 1.58 21.7784 2.3C22.2584 3.00667 22.4984 3.82667 22.4984 4.76H20.1584C20.105 3.89333 19.8184 3.22667 19.2984 2.76C18.7917 2.28 18.0184 2.04 16.9784 2.04C15.9384 2.04 15.1517 2.23333 14.6184 2.62C14.0984 2.99333 13.8384 3.49333 13.8384 4.12C13.8384 4.61333 13.9984 5 14.3184 5.28C14.6384 5.54667 15.0584 5.76 15.5784 5.92C16.1117 6.06667 16.6917 6.2 17.3184 6.32C17.9584 6.42667 18.5917 6.56667 19.2184 6.74C19.845 6.9 20.4184 7.12667 20.9384 7.42C21.4717 7.7 21.8984 8.09333 22.2184 8.6C22.5517 9.09333 22.7184 9.74 22.7184 10.54C22.7184 11.8467 22.225 12.86 21.2384 13.58C20.265 14.2867 18.905 14.64 17.1584 14.64C16.0784 14.64 15.105 14.4333 14.2384 14.02C13.385 13.5933 12.705 13.02 12.1984 12.3C11.705 11.58 11.4384 10.7667 11.3984 9.86H13.7384Z"
            fill="white"
          />
        </svg>
      </button> */}
    </nav>
  );
};

export default Navbar;
