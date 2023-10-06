import React from "react";
import Router from "next/router";

export default function Ecommerce() {
  return (
    <>
      <div className="bg-[url('/img/ecommerce-business.svg')] relative bg-no-repeat py-6 md:py-14 w-full h-full bg-cover">
        <div className="max-w-containers mx-auto px-3.6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="w-full md:pt-6">
              <div className="text-center md:text-left space-y-2 md:space-y-4 w-full">
                <div className="text-sm md:text-lg text-white font-medium font-sans uppercase">
                  Ecommerce Platform
                </div>
                <h3 className="text-subtitle md:text-3xl font-medium text-white leading-tight">
                  Helping build your dream ecommerce business.
                </h3>
                <p className="text-ltiny md:text-lg text-white leading-7 md:leading-8 font-normal">
                  Stand out from the crowd with our ecommerce platform. Starting
                  an online business is hard. But we are here to make it easier
                  for you.
                </p>
                <button
                  onClick={() => Router.push("https://monafy.com/")}
                  className="btn2 py-2 md:py-3 rounded-md px-7 relative border border-white bg-white text-base font-medium overflow-hidden"
                  type="button"
                >
                  <span className="absolute inset-0 bg-bda-brand"></span>
                  <span className="absolute inset-0 flex justify-center items-center text-bda-linked hover:text-white">
                    Read more
                  </span>
                  Read more
                </button>
              </div>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-2 gap-3 md:gap-5 items-center w-full md:max-w-mxw442 ml-auto">
                <div className="w-full h-auto space-y-3 md:space-y-5">
                  <div className="boxhover text-left bg-white shadow-eb rounded-3xl pt-2 pb-4 px-4 md:px-6 text-black cursor-pointer hover:text-white hover:bg-bda-brand ease-in duration-200">
                    <span className="bg-b2b bg-no-repeat bg-center w-28 h-28 inline-block"></span>
                    <h3 className="font-black text-xl mb-2">B2B</h3>
                    <p className="font-normal text-sm leading-6 opacity-90">
                      In publishing and graphic design, Lorem ipsum is a.
                    </p>
                  </div>
                  <div className="boxhover text-left bg-white shadow-eb rounded-3xl pt-2 pb-4 px-4 md:px-6 text-black cursor-pointer hover:text-white hover:bg-bda-brand ease-in duration-200">
                    <span className="bg-b2c bg-no-repeat bg-center w-28 h-28 inline-block"></span>
                    <h3 className="font-black text-xl mb-2">B2C</h3>
                    <p className="font-normal text-sm leading-6 opacity-90">
                      In publishing and graphic design, Lorem ipsum is a.
                    </p>
                  </div>
                </div>
                <div className="w-full h-auto">
                  <div className="boxhover text-left bg-white shadow-eb rounded-3xl pt-2 pb-4 px-4 md:px-6 text-black cursor-pointer hover:text-white hover:bg-bda-brand ease-in duration-200">
                    <span className="bg-c2c bg-no-repeat bg-center w-28 h-28 inline-block"></span>
                    <h3 className="font-black text-xl mb-2">C2C</h3>
                    <p className="font-normal text-sm leading-6 opacity-90">
                      In publishing and graphic design, Lorem ipsum is a.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
