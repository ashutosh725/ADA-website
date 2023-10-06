import React from "react";
import Router from "next/router";

export default function BdaService() {
  return (
    <>
      <div className="bg-[url('/img/over-service.svg')] relative pt-8 md:pt-14 pb-8 md:pb-12 w-full h-full bg-cover bg-no-repeat">
        <div className="max-w-mxw988 mx-auto px-3.6 w-full">
          <div className="w-full space-y-8 md:space-y-12">
            <div className="w-full flex flex-col md:flex-auto items-center justify-between">
              <div className="w-full">
                <div className="text-left space-y-2">
                  <div className="text-sm md:text-base font-sans font-medium text-bda-linked">
                    OUR SERVICES
                  </div>
                  <h3 className="text-subtitle md:text-3xl font-black text-black leading-tight">
                    Our Best-in-class Services
                  </h3>
                  <p className="text-ltiny md:text-lg text-gray-500 leading-7 font-normal">
                    At ADA, we believe that our clients' success is our success.
                  </p>
                </div>
              </div>
              <div className="w-full text-right">
                <button
                  onClick={() => Router.push("/services")}
                  className="btn2 py-2 md:py-3 rounded-md px-5 relative border border-white bg-bda-brand text-base font-medium overflow-hidden hover:text-white"
                  type="button"
                >
                  <span className="absolute inset-0 bg-bda-linked"></span>
                  <span className="absolute inset-0 flex justify-center items-center text-white">
                    Read more
                  </span>
                  Read more
                </button>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
              <div className="boxhover text-center bg-white shadow-sb pt-6 md:pt-9 pb-6 md:pb-10 rounded-xl md:rounded-large px-6 text-black cursor-pointer hover:text-white hover:bg-bda-linked ease-in duration-200">
                <h3 className="font-medium text-xl mb-8">Digital Marketing</h3>
                <span className="bg-service-icon1 bg-no-repeat bg-center w-20 h-20 inline-block"></span>
                <p className="font-normal md:text-ltiny text-sm leading-7 opacity-90 pt-7">
                  Our digital marketing services focus on growing your business
                  through online marketing. We leverage the power of technology
                  to help you reach new customers..
                </p>
              </div>
              <div className="updown_animation boxhover text-center bg-white shadow-sb border-b-4 md:border-b-3 border-solid border-bda-brand pt-6 md:pt-9 pb-6 md:pb-10 rounded-xl md:rounded-large px-6 text-black cursor-pointer hover:text-white hover:bg-bda-linked ease-in duration-200">
                <h3 className="font-medium text-xl mb-8">
                  Product Development
                </h3>
                <span className="bg-service-icon2 bg-no-repeat bg-center w-20 h-20 inline-block"></span>
                <p className="font-normal md:text-ltiny text-sm leading-7 opacity-90 pt-7">
                  We offer product development services that help you improve
                  your business and solution capabilities. ADA has a deep
                  understanding of customer..
                </p>
              </div>
              <div className="boxhover text-center bg-white shadow-sb pt-6 md:pt-9 pb-6 md:pb-10 rounded-xl md:rounded-large px-6 text-black cursor-pointer hover:text-white hover:bg-bda-linked ease-in duration-200">
                <h3 className="font-medium text-xl mb-8">Data Analytics</h3>
                <span className="bg-service-icon3 bg-no-repeat bg-center w-20 h-20 inline-block"></span>
                <p className="font-normal md:text-ltiny text-sm leading-7 opacity-90 pt-7">
                  We offer advanced data analytics services that can help you
                  understand your customers’ needs and requirements better than
                  ever before.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
