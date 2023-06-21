import React from "react";

import Link from "next/link";


const Navbar = ({}) => {
  return (
    <div className="flex w-screen z-30 top-10 py-1  pb-2 px-4  bg-indigo-500 shadow-lg border-b border-indigo-500 ">
      <div className="flex justify-start">
        <div className="text-white w-full flex items-center px-4 text-3xl">
          <b>C</b>
          <p>-</p>
          <b>CUBE</b>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className=" ">
          <div className=" w-full flex items-center  mt-0 px-4 py-2">
            {/* <Image className=" h-full w-full" src={Logo} alt="photo"/> */}
            <div>
              <ul className="flex items-center justify-between text-base text-white pt-4 md:pt-0">
                <li>
                  <Link
                    className="inline-block no-underline hover:text-indigo-500 font-medium text-lg py-2 px-4 lg:-ml-2"
                    href="/Home"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="inline-block no-underline hover:text-indigo-300 font-medium text-lg py-2 px-4 lg:-ml-2"
                    href="/About"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block no-underline hover:text-indigo-300 font-medium text-lg py-2 px-4 lg:-ml-2"
                    href="/member"
                  >
                    Members
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block no-underline hover:text-indigo-300 font-medium text-lg py-2 px-4 lg:-ml-2"
                    href="/login"
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <Link
                    className="inline-block no-underline hover:text-indigo-300 font-medium text-lg py-2 px-4 lg:-ml-2"
                    href="/Application"
                  >
                    <b>Apply Now!</b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;