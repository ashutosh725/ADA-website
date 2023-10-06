import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function MainNav() {
  // sticky-menu-function
  const [stickyClass, setStickyClass] = useState(
    "absolute md:bg-transparent md:shadow-none"
  );
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 220
        ? setStickyClass("fixed md:shadow-menu is-sticky")
        : setStickyClass("absolute md:bg-transparent md:shadow-none");
    }
  };

  // toggle isActive state on click
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <>
      <div
        className={`w-full transition z-50 h-auto left-0 right-0 top-0 bg-white shadow-menu ${stickyClass}`}
      >
        <div className="py-5 flex items-center h-auto">
          <div className="max-w-containers mx-auto w-full px-3.6">
            <div className="flex items-center md:justify-start flex-wrap md:flex-nowrap justify-between">
              <Link href="/">
                <a>
                  <img
                    className="w-20"
                    src="/logo.webp"
                    alt="logo"
                  />
                </a>
              </Link>
              <button
                type="button"
                onClick={handleClick}
                className="block md:hidden bg-gray-100 px-2.5 py-2.5"
              >
                <span
                  className={` bg-bda-linked w-7 h-0.5 block transition-all ${
                    isActive ? "relative left-1 rotate-45 origin-top" : ""
                  }`}
                ></span>
                <span
                  className={` bg-bda-linked w-7 h-0.5 block transition-all my-1.5 ${
                    isActive ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={` bg-bda-linked w-7 h-0.5 block transition-all ${
                    isActive ? "relative left-1 -rotate-45 origin-bottom" : ""
                  }`}
                ></span>
              </button>

              <div
                className={` md:flex items-center md:basis-auto grow basis-full ${
                  isActive ? "block" : "hidden"
                }`}
              >
                <ul className="ml-auto md:flex-row md:flex w-full md:w-auto text-ltiny font-normal space-y-4 md:space-y-0 md:space-x-9 text-bda-linked md:text-white md:mt-0 mt-6">
                  <li>
                    <Link href="/">
                      <a className="px-3 md:px-0">Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="px-3 md:px-0">About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="px-3 md:px-0">Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="px-3 md:px-0">Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="px-3 md:px-0">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
