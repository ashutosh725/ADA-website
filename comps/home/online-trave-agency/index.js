import React from "react";
import Link from "next/link";
import Image from "next/image";
import { katana } from "utils/katana";

export default function OnlineTraveAgency() {
  return (
    <>
      <div className="pt-8 md:pt-14 pb-6 md:pb-8 w-full">
        <div className="max-w-containers mx-auto px-3.6 w-full">
          <div className="text-center space-y-2 w-full md:w-5/12 mx-auto mb-12">
            <h3 className="text-subtitle md:text-3xl font-bold text-black leading-tight capitalize">
              Online Travel Agency
            </h3>
            <p className="text-ltiny md:text-lg text-gray-500 leading-7">
              Plan your next trip or book your next hotel room
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 items-center">
            <div className="boxhover w-full">
              <Link href="https://www.bdatrip.com/thailand">
                <a className="relative after:z-20 after:content-[''] after:h-14 after:w-11/12 after:rounded-tl-xl after:rounded-tr-xl md:after:rounded-tl-43 md:after:rounded-tr-43  after:absolute after:bg-gray-200 after:top-0">
                  <div className="relative z-40 mt-4">
                    <div className="absolute left-0 right-0 bottom-3 md:bottom-6 w-full text-center text-white text-lg text-xl">
                      Thailand
                    </div>
                    <div className="w-full rounded-2xl md:rounded-5xl shadow-ota overflow-hidden flex">
                      <Image
                        src="/img/ota-1.svg"
                        alt="online trave agency"
                        width={320}
                        height={410}
                        className="w-full relative -z-10"
                        loader={katana}
                      />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="boxhover w-full">
              <Link href="https://www.bdatrip.com/vietnam/tours">
                <a className="relative after:z-20 after:content-[''] after:h-14 after:w-11/12 after:rounded-tl-xl after:rounded-tr-xl md:after:rounded-tl-43 md:after:rounded-tr-43  after:absolute after:bg-gray-200 after:top-0">
                  <div className="relative z-40 mt-4">
                    <div className="absolute left-0 right-0 bottom-3 md:bottom-6 w-full text-center text-white text-lg text-xl">
                      Vietnam
                    </div>
                    <div className="w-full rounded-2xl md:rounded-5xl shadow-ota overflow-hidden flex">
                      <Image
                        src="/img/ota-2.svg"
                        alt="online trave agency"
                        width={320}
                        height={410}
                        className="w-full relative -z-10"
                        loader={katana}
                      />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="boxhover w-full">
              <Link href="https://www.bdatrip.com/south-korea">
                <a className="relative after:z-20 after:content-[''] after:h-14 after:w-11/12 after:rounded-tl-xl after:rounded-tr-xl md:after:rounded-tl-43 md:after:rounded-tr-43  after:absolute after:bg-gray-200 after:top-0">
                  <div className="relative z-40 mt-4">
                    <div className="absolute left-0 right-0 bottom-3 md:bottom-6 w-full text-center text-white text-lg text-xl">
                      South Korea
                    </div>
                    <div className="w-full rounded-2xl md:rounded-5xl shadow-ota overflow-hidden flex">
                      <Image
                        src="/img/ota-3.svg"
                        alt="online trave agency"
                        width={320}
                        height={410}
                        className="w-full relative -z-10"
                        loader={katana}
                      />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="boxhover w-full">
              <Link href="https://www.bdatrip.com/japan">
                <a className="relative after:z-20 after:content-[''] after:h-14 after:w-11/12 after:rounded-tl-xl after:rounded-tr-xl md:after:rounded-tl-43 md:after:rounded-tr-43  after:absolute after:bg-gray-200 after:top-0">
                  <div className="relative z-40 mt-4">
                    <div className="absolute left-0 right-0 bottom-3 md:bottom-6 w-full text-center text-white text-lg text-xl">
                      Japan
                    </div>
                    <div className="w-full rounded-2xl md:rounded-5xl shadow-ota overflow-hidden flex">
                      <Image
                        src="/img/ota-4.svg"
                        alt="online trave agency"
                        width={320}
                        height={410}
                        className="w-full relative -z-10"
                        loader={katana}
                      />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
