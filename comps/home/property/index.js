import React from "react";
import Image from "next/image";
import { katana } from "utils/katana";

export default function Property() {
  return (
    <>
      <div className="py-12 md:py-24 w-full">
        <div className="max-w-containers mx-auto px-3.6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="w-full md:order-2">
              <div className="text-right space-y-2 md:space-y-5 w-full">
                <div className="text-sm md:text-lg font-medium font-sans uppercase">
                  Real Estate
                </div>
                <h3 className="text-subtitle md:text-3xl font-bold text-black leading-tight">
                  Renting & buying a home just got easier!
                </h3>
                <p className="text-ltiny md:text-lg text-gray-900 leading-7 md:leading-8 font-medium">
                  At ADA, we believe that the best investment decision you can
                  make is to buy a home. We’re not just saying that because
                  we’re in the real estate business- we truly believe it!
                </p>
                <button
                  className="btn2 py-2 md:py-3 rounded-md px-5 relative border border-white bg-bda-brand text-base font-medium overflow-hidden hover:text-white"
                  type="button"
                >
                  <span className="absolute inset-0 bg-bda-linked"></span>
                  <span className="absolute inset-0 flex justify-center items-center text-white">
                    Explore Buying
                  </span>
                  Explore Buying
                </button>
              </div>
            </div>
            <div className="w-full md:order-0">
              <div className="relative">
                <Image
                  src="/img/property-img.svg"
                  alt="property Service"
                  width={515}
                  height={472}
                  loader={katana}
                />
                <div className="pulse_animation overflow-hidden flex items-center justify-center w-36 h-36 md:w-48 md:h-48 border-5 md:border-8 border-solid border-white bg-white shadow-md rounded-full absolute -bottom-6 right-0 md:bottom-0">
                  <Image
                    src="/img/property-small.svg"
                    alt="property Service"
                    width={176}
                    height={176}
                    loader={katana}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
