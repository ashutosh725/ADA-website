import Image from "next/image";
import { katana } from "utils/katana";

export default function HomeBanner() {
  return (
    <>
      <div className="bg-gray-50 md:bg-[url('/img/banner.svg')] py-10 w-full md:h-screen md:flex items-center pt-32 md:pt-24 bg-cover bg-no-repeat">
        <div className="max-w-containers mx-auto px-3.6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20 items-center">
            <div className="md:col-span-5">
              <div className="md:text-left text-center space-y-2">
                <div className="text-sm md:text-base font-sans font-medium text-bda-linked uppercase">
                  Become a Disrupter!
                </div>
                <h3 className="text-title md:text-5xl font-black text-black leading-tight">
                  Creative Solutions to Help Grow Your Business
                </h3>
                <p className="text-ltiny md:text-base text-gray-500 md:text-gray-900 md:font-medium leading-7 md:leading-8 pt-3 md:pt-4">
                  Your company and brand deserve to lead the way in your
                  industry! Our goal is to help you stand apart from the others.
                </p>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="relative text-right">
                <Image
                  src="/img/banner-graphics.png"
                  alt="Banner Graphics"
                  width={581}
                  height={592}
                  className="ml-auto updown_animation"
                  loader={katana}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
