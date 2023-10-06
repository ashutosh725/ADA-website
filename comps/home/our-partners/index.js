import React from "react";
import Image from "next/image";
import { katana } from "utils/katana";

export default function OurPartners() {
  return (
    <>
      <div className="py-10 md:py-20 w-full background_linearone">
        <div className="max-w-containers mx-auto px-3.6 w-full">
          <div className="text-center space-y-2.5 md:space-y-3 w-full mb-8 md:mb-12">
            <div className="text-sm md:text-base font-sans font-medium text-bda-linked">
              OUR PARTNERS
            </div>
            <h3 className="text-subtitle md:text-3xl font-medium text-black leading-snug">
              Some of our Partners
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-5 justify-center">
            <div className="w-full rounded-lg bg-white py-7 cursor-pointer relative clients-logo boxhover px-2 flex items-center justify-center">
              <Image
                src="/img/partners/partners-1.png"
                alt="bda team"
                width={180}
                height={100}
                className="rounded-lg"
                loader={katana}
              />
            </div>
            <div className="w-full rounded-lg bg-white py-7 cursor-pointer relative clients-logo boxhover px-2 flex items-center justify-center">
              <Image
                src="/img/partners/partners-2.png"
                alt="bda team"
                width={180}
                height={100}
                className="rounded-lg"
                loader={katana}
              />
            </div>
            <div className="w-full rounded-lg bg-white py-7 cursor-pointer relative clients-logo boxhover px-2 flex items-center justify-center">
              <Image
                src="/img/partners/partners-3.png"
                alt="bda team"
                width={180}
                height={100}
                className="rounded-lg"
                loader={katana}
              />
            </div>
            <div className="w-full rounded-lg bg-white py-7 cursor-pointer relative clients-logo boxhover px-2 flex items-center justify-center">
              <Image
                src="/img/partners/partners-4.png"
                alt="bda team"
                width={180}
                height={100}
                className="rounded-lg"
                loader={katana}
              />
            </div>
            <div className="w-full rounded-lg bg-white py-7 cursor-pointer relative clients-logo boxhover px-2 flex items-center justify-center">
              <Image
                src="/img/partners/partners-5.png"
                alt="bda team"
                width={180}
                height={100}
                className="rounded-lg"
                loader={katana}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
