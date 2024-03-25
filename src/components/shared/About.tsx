import React from "react";
import { Meteors } from "../ui/meteors";
import { Button } from "../ui/button";

export function AboutUs() {
  return (
    <>
      <div className="flex justify-center items-center mt-48 mb-20">
        <Button variant={"outline"} className="text-white font-bold text-2xl">
          About Us
        </Button>
      </div>
      <main className="flex lg:flex-row flex-col lg:mb-0 mb-36 justify-center items-center gap-14 lg:gap-52">
        {/* Team Member 1 */}
        <div className="w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-black border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Mohammad Abu Omar - Front End Developer
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              Mohammad is our skilled Front End Developer for this project.
            </p>

            <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
              Contact
            </button>

            <Meteors number={20} />
          </div>
        </div>
        {/* Team Member 2 */}
        <div className="w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-black border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Mahmoud Jahshan - Back End Developer
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              Mahmoud is our proficient Back End Developer.
            </p>

            <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
              Contact
            </button>

            <Meteors number={20} />
          </div>
        </div>
        {/* Team Member 3 */}
        <div className="w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-black border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Rashed Tarada - Back End Developer
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              Rashed is our skilled Back End Developer.
            </p>

            <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
              Contact
            </button>

            <Meteors number={20} />
          </div>
        </div>
      </main>
    </>
  );
}
