import React from "react";

const AboutMe = () => {
  return (
    <div className="flex bg-black/10 hover:bg-black/20 text-white font-stack-sans transition duration-300 backdrop-blur-md border-2 border-white z-0 text-black-600 w-11/12 p-20 rounded-[120px]">
      <div className="rounded-full z-20 grid grid-cols-3">
        <div className="  p-5 col-span-2 ">
          <h4 className="text-lg mb-2 font-stack-sans">
            03. <span className="text-primaryGreen-200">$ </span> about Me
          </h4>
          <h2 className="text-5xl font-stack-sans mb-4 flex gap-5">
            Clean code
            <br />
            Human design
            <svg
              className="hover:scale-150 transition duration-300 hover:rotate-180"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4215 7.45581C24.1006 7.34424 24.7878 9.5658 23.3614 10.4944C21.7991 11.5117 21.6989 13.7818 23.1682 14.8784C24.5035 15.8747 23.6372 18.0453 21.9775 17.8615L21.8368 17.8458C20.012 17.6438 18.5054 19.3381 18.8965 21.1525C19.2528 22.8065 17.1843 23.9499 16.0142 22.6873C14.7701 21.3452 12.5527 21.6541 11.6808 23.3171L11.6216 23.4296L11.6206 23.4299C10.8238 24.9495 8.5768 24.4606 8.51987 22.7553C8.45724 20.8831 6.54841 19.7118 4.85369 20.4476C4.07567 20.7854 3.33309 20.5073 2.9024 19.9573C2.47374 19.4098 2.38554 18.6359 2.90052 17.9656C4.04264 16.4793 3.3752 14.3215 1.61433 13.8075C0.820327 13.5757 0.45817 12.8935 0.499411 12.1886C0.540937 11.4805 0.988217 10.8038 1.80948 10.6059C3.59848 10.1749 4.49228 8.06476 3.49371 6.50608C2.58401 5.08636 4.1351 3.32529 5.63409 4.07588L5.74618 4.131C7.38662 4.95243 9.36079 3.85739 9.61899 2.01216C9.86167 0.276268 12.1827 -0.0505403 12.8205 1.50919C13.5199 3.22027 15.6934 3.68194 17.0622 2.41017L17.1678 2.31201C18.4128 1.15532 20.3332 2.3925 19.8071 4.01229C19.2284 5.79483 20.5823 7.57789 22.4215 7.45581Z"
                fill="#FFFFFF"
                stroke="white"
              />
            </svg>
          </h2>
          <p className="text-lg ">
            En un mundo digital saturado, la claridad es poder. Soy Alexis Jara,
            o conocido en internet como "NovinhoDev", un desarrollador Front-End
            en Paraguay con ojo para el detalle visual.
          </p>
          <p className="text-lg pt-10">
            No solo entrego código; entrego soluciones escalables. Me
            especializo en traducir identidades de marca en interfaces fluidas y
            funcionales.
          </p>
          <table className="text-lg font-semibold flex">
            <td className="pt-10  ">
              <tr className="flex flex-row items-center gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="white" />
                  <path
                    d="M4.70703 9L6.5 11"
                    stroke="black"
                    stroke-linecap="round"
                  />
                  <line
                    x1="11.064"
                    y1="5.7042"
                    x2="6.7042"
                    y2="10.936"
                    stroke="black"
                    stroke-linecap="round"
                  />
                </svg>
                Diseño Centrado en el Usuario
              </tr>

              <tr className="flex flex-row items-center gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="white" />
                  <path
                    d="M4.70703 9L6.5 11"
                    stroke="black"
                    stroke-linecap="round"
                  />
                  <line
                    x1="11.064"
                    y1="5.7042"
                    x2="6.7042"
                    y2="10.936"
                    stroke="black"
                    stroke-linecap="round"
                  />
                </svg>
                Arquitectura de Software Escalable
              </tr>

              <tr className="flex flex-row items-center gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="white" />
                  <path
                    d="M4.70703 9L6.5 11"
                    stroke="black"
                    stroke-linecap="round"
                  />
                  <line
                    x1="11.064"
                    y1="5.7042"
                    x2="6.7042"
                    y2="10.936"
                    stroke="black"
                    stroke-linecap="round"
                  />
                </svg>
                Optimización de Rendimiento
              </tr>
            </td>
          </table>
        </div>
        <div className="p-5 flex items-center justify-center"></div>
      </div>
    </div>
    
  );
};

export default AboutMe;
