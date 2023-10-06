import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
import { BsYoutube, BsTwitter, BsFacebook } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import Image from "next/image";
import { katana } from "utils/katana";

export default function Footer() {
  return (
    <>
      <div className="w-full pt-10 md:pt-16 pb-8 md:pb-20 bg-bg-light">
        <div className="max-w-containers mx-auto px-3.6 w-full">
          <div className="text-center space-y-1 md:space-y-3 w-full mb-8 md:mb-14 relative z-10">
            <h3 className="text-subtitle md:text-3xl font-medium text-black leading-tight w-full">
              Our office
            </h3>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5 shape-loc relative">
            <div className="w-full relative z-10">
              <div className="shadow-address text-center bg-address-box p-5 rounded-tr-5xl rounded-lg">
                <Image
                  src="/img/hong-kong.png"
                  alt="newyork"
                  width={340}
                  height={145}
                  className="relative z-20 mr-auto"
                  loader={katana}
                />
              </div>
              <div className="px-5">
                <h3 className="font-bold text-xl md:text-xxl mt-5">
                  Hong Kong
                </h3>
                <p className="font-normal text-base leading-7 opacity-90 pt-2">
                  Unit 1511, 14th Floor, Cosco Tower 183 Queen’s Road Central,
                  Sheung Wan
                </p>
              </div>
            </div>
            <div className="w-full relative z-10">
              <div className="shadow-address text-center bg-address-box p-5 rounded-tr-5xl rounded-lg">
                <Image
                  src="/img/india.png"
                  alt="india"
                  width={340}
                  height={145}
                  className="relative z-20 mr-auto"
                  loader={katana}
                />
              </div>
              <div className="px-5">
                <h3 className="font-bold text-xl md:text-xxl mt-5">India</h3>
                <p className="font-normal text-base leading-7 opacity-90 pt-2">
                  506, 4th floor, Paras Trinity, Sector 53, Gurugram, Haryana
                  122132
                </p>
              </div>
            </div>
            <div className="w-full relative z-10">
              <div className="shadow-address text-center bg-address-box p-5 rounded-tr-5xl rounded-lg">
                <Image
                  src="/img/newyork.png"
                  alt="newyork"
                  width={340}
                  height={145}
                  className="relative z-20 mr-auto"
                  loader={katana}
                />
              </div>
              <div className="px-5">
                <h3 className="font-bold text-xl md:text-xxl mt-5">USA</h3>
                <p className="font-normal text-base leading-7 opacity-90 pt-2">
                  853 N. Broad St., Suite 204 Middletown, Delaware 19799
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-footer-color py-8 md:py-14 text-white">
        <div className="max-w-containers mx-auto px-3.6 w-full">
          <div className="md:grid grid-cols-12 gap-12 space-y-5 md:space-y-0">
            <div className="col-span-12 md:col-span-5">
              <div className="w-full space-y-6 md:space-y-10">
                <h3 className="relative text-xl pb-3.5 before:content-[''] before:h-px before:w-7/12 md:before:w-6/12  before:absolute before:bottom-0 before:bg-gray-700 after:content-[''] after:h-0.5 after:w-14  after:absolute after:-bottom-0 after:left-0 after:bg-white">
                  Contact Info
                </h3>
                <div className="w-full space-y-5 md:space-y-7">
                  <div className="flex items-center relative space-x-0 md:space-x-1">
                    <span className="bg-call bg-no-repeat bg-left w-14 h-10 inline-block"></span>
                    <div className="space-y-1 md:space-y-2">
                      <h4 className="text-sm md:text-ltiny text-gray-200">
                        MON TO FRI : 8:00AM - 05:00PM
                      </h4>
                      <p className="text-base md:text-xl font-medium md:font-normal">
                        +84 (2574) 021 333
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center relative space-x-0 md:space-x-1">
                    <span className="bg-email bg-no-repeat bg-left w-14 h-10 inline-block"></span>
                    <div className="space-y-1 md:space-y-2">
                      <h4 className="text-sm md:text-ltiny text-gray-200">
                        DO YOU HAVE A QUESTION?
                      </h4>
                      <p className="text-base md:text-xl font-medium md:font-normal">
                        contact@ada.cn
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center relative space-x-0 md:space-x-1">
                    <div className="bg-address bg-no-repeat bg-left w-14 min-w-56 h-10"></div>
                    <div className="space-y-1 md:space-y-2">
                      <h4 className="text-sm md:text-ltiny text-gray-200">
                        ADDRESS:
                      </h4>
                      <p className="text-base font-normal">
                        ADA Building, Lo E60, Khu 3Ha, Phu Dien, Bac Tu Liem, Ha
                        Noi, Vietnam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 space-y-4 md:space-y-0">
                <div className="w-full space-y-6 md:space-y-10">
                  <h3 className="relative text-xl pb-3.5 before:content-[''] before:h-px before:w-7/12 md:before:w-8/12  before:absolute before:bottom-0 before:bg-gray-700 after:content-[''] after:h-0.5 after:w-14  after:absolute after:-bottom-0 after:left-0 after:bg-white">
                    Quick Links
                  </h3>
                  <ul className="grid grid-cols-2 gap-4 text-white text-sm md:text-base">
                    <li>
                      <Link href="/">
                        <a className="hover:text-bda-brand ease-in duration-300">
                          Home
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <a className="hover:text-bda-brand ease-in duration-300">
                          About us
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className="hover:text-bda-brand ease-in duration-300">
                          Services
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className="hover:text-bda-brand ease-in duration-300">
                          Blog
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className="hover:text-bda-brand ease-in duration-300">
                          Contact us
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a
                          className="hover:text-bda-brand ease-in duration-300"
                          target="blank"
                        >
                          ADA Trip
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a
                          className="hover:text-bda-brand ease-in duration-300"
                          target="blank"
                        >
                          ADA Search
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a
                          className="hover:text-bda-brand ease-in duration-300"
                          target="blank"
                        >
                          Visa Apply
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className="hover:text-bda-brand ease-in duration-300">
                          Privacy Policy
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className="hover:text-bda-brand ease-in duration-300">
                          Terms Conditions
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full space-y-6 md:space-y-10">
                  <h3 className="relative text-xl pb-3.5 before:content-[''] before:h-px before:w-7/12 md:before:w-8/12  before:absolute before:bottom-0 before:bg-gray-700 after:content-[''] after:h-0.5 after:w-14  after:absolute after:-bottom-0 after:left-0 after:bg-white">
                    Socials Network
                  </h3>
                  <div className="flex space-x-4 items-center text-white">
                    <a
                      href="/"
                      className="hover:text-bda-brand ease-in duration-300"
                    >
                      <FiInstagram size={21} />
                    </a>

                    <a
                      href="/"
                      className="hover:text-bda-brand ease-in duration-300"
                    >
                      <BsYoutube size={20} />
                    </a>

                    <a
                      href="/"
                      className="hover:text-bda-brand ease-in duration-300"
                    >
                      <BsTwitter size={19} />
                    </a>

                    <a
                      href="/"
                      className="hover:text-bda-brand ease-in duration-300"
                    >
                      <BsFacebook size={19} />
                    </a>

                    <a
                      href="/"
                      className="hover:text-bda-brand ease-in duration-300"
                    >
                      <ImLinkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-footer-copyright py-2.5 text-center text-white text-sm text-opacity-80">
        <p>Copyright 2023 ADA Corp. All rights reserved</p>
      </div>
    </>
  );
}
