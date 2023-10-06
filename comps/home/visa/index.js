import React from "react";
import Router from "next/router";
import Image from "next/image";
import { katana } from "utils/katana";

export default function VisaService() {
  return (
    <>
      <div className="pt-10 md:pt-16 md:pb-10 pb-10 w-full">
        <div className="max-w-containers mx-auto px-3.6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="w-full text-center">
              <span>
                <Image
                  src="/img/visa-service.svg"
                  alt="Visa Service"
                  width={419}
                  height={501}
                  className="mx-auto updown_animation"
                  loader={katana}
                />
              </span>
            </div>
            <div className="w-full">
              <div className="text-left md:text-right space-y-5 w-full md:w-9/12 ml-auto">
                <h3 className="text-subtitle md:text-3xl font-bold text-black leading-tight">
                  Vietnamese Visas And Visas On Arrival
                </h3>
                <p className="text-ltiny md:text-base text-gray-700 leading-7 md:leading-8">
                  You can save time by completing the Entry/Exit form before you
                  arrive at one of Vietnam’s international airports.
                </p>
                <button
                  onClick={() =>
                    Router.push("https://vietnamvisa.govt.vn/apply-online/")
                  }
                  className="btn2 py-2 md:py-3 rounded-md px-5 relative border border-white bg-bda-brand text-base font-medium overflow-hidden hover:text-white"
                  type="button"
                >
                  <span className="absolute inset-0 bg-bda-linked"></span>
                  <span className="absolute inset-0 flex justify-center items-center text-white">
                    Apply For Visa
                  </span>
                  Apply For Visa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
