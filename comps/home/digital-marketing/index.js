import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { katana } from "utils/katana";

export default function DigitalMarketing() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="bg-bda-linked md:bg-[url('/img/dm-background.svg')] md:min-h-521 relative pb-5 pt-6 md:pt-12 w-full h-full bg-cover bg-no-repeat">
        <div className="max-w-containers mx-auto px-3.6 w-full">
          <div className="w-full">
            <Carousel
              ssr
              responsive={responsive}
              itemClass="px-2"
              infinite={false}
              autoPlay={true}
              autoPlaySpeed={3000}
              arrows={false}
              showDots={true}
              dotListClass="custom-dot-list-style"
            >
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center pb-7">
                  <div className="w-full">
                    <span>
                      <Image
                        src="/img/digital-marketing-g.svg"
                        alt="digital marketing"
                        width={527}
                        height={449}
                        loader={katana}
                      />
                    </span>
                  </div>
                  <div className="w-full">
                    <div className="text-left space-y-1 md:space-y-2 w-full">
                      <div className="text-sm md:text-lg font-sans font-medium text-white">
                        DIGITAL MARKETING
                      </div>
                      <h3 className="text-subtitle md:text-3xl font-medium text-white leading-snug">
                        Professional Digital Marketing Services That Drive
                        Results
                      </h3>
                      <p className="text-white leading-6 text-ltiny">
                        With more than three million leads and more than $1
                        billion generated for its clients, ADA is the industry’s
                        leading digital marketing agency. Our performance-driven
                        digital marketing services help your company accomplish
                        its toughest goals, from improving conversions to
                        growing brand awareness.
                      </p>
                      <ul className="w-full text-white text-base md:grid grid-cols-12 gap-3 pt-2 space-y-1.5 md:space-y-0">
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Drive more leads</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Engage your target audience</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Increase your reach</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Connect with your clients</span>
                        </li>
                        <li className="flex items-center col-span-12 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Improve your website experience</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center pb-7">
                  <div className="w-full">
                    <span>
                      <Image
                        src="/img/software-developmant.svg"
                        alt="software developmant"
                        width={527}
                        height={449}
                        loader={katana}
                      />
                    </span>
                  </div>
                  <div className="w-full">
                    <div className="text-left space-y-2 w-full">
                      <div className="text-sm md:text-lg font-sans font-medium text-white">
                        SOFTWARE DEVELOPMENT
                      </div>
                      <h3 className="text-subtitle md:text-3xl font-medium text-white leading-snug">
                        Full Range of Software Development Services
                      </h3>
                      <p className="text-white leading-6 text-ltiny">
                        From custom software development with the latest tech to
                        automated quality assurance, you get all types of
                        software development services to help you build,
                        sustain, and modernise enterprise software — as well as
                        our extensive 10-year expertise in building IT
                        solutions.
                      </p>
                      <ul className="w-full text-white text-base md:grid grid-cols-12 gap-3 pt-2 space-y-1.5 md:space-y-0">
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Mobile Application</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Web Application</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>IT Consulting</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Custom Software</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>DevOps Services</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Maintenance Services</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center pb-7">
                  <div className="w-full">
                    <span>
                      <Image
                        src="/img/social-media-marketing.svg"
                        alt="Social Media Marketing"
                        width={527}
                        height={449}
                        loader={katana}
                      />
                    </span>
                  </div>
                  <div className="w-full">
                    <div className="text-left space-y-2 w-full">
                      <div className="text-sm md:text-lg font-sans font-medium text-white">
                        SOCIAL MEDIA MARKETING
                      </div>
                      <h3 className="text-subtitle md:text-3xl font-medium text-white leading-snug">
                        Social media advertising services for every business
                      </h3>
                      <p className="text-white leading-6 text-ltiny">
                        ADA is a leading social media marketing agency with a
                        focus on driving impactful business growth through
                        social media services. Whether you are looking to
                        enhance your brand's social media presence or drive
                        targeted leads through social media advertising, our
                        social media advertising services can help you hit your
                        goals.
                      </p>
                      <ul className="w-full text-white text-base md:grid grid-cols-12 gap-3 pt-2 space-y-1.5 md:space-y-0">
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Facebook Advertising</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Instagram Advertising</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Twitter Advertising</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>YouTube Advertising</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Pinterest Advertising</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>LinkedIn Advertising</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center pb-7">
                  <div className="w-full">
                    <span>
                      <Image
                        src="/img/seo.svg"
                        alt="SEO"
                        width={527}
                        height={449}
                        loader={katana}
                      />
                    </span>
                  </div>
                  <div className="w-full">
                    <div className="text-left space-y-2 w-full">
                      <div className="text-sm md:text-lg font-sans font-medium text-white">
                        SEO SERVICES
                      </div>
                      <h3 className="text-subtitle md:text-3xl font-medium text-white leading-snug">
                        SEO Services That Drive Business Growth
                      </h3>
                      <p className="text-white leading-6 text-ltiny">
                        ADA is the best SEO agency in the world — and we have
                        the track record to prove it. No matter what marketing
                        goals you have for your company, BDA can help increase
                        your bottom line with an SEO campaign that is
                        specifically designed for your unique business. Start
                        earning more qualified search traffic to your website
                        today with our search engine optimization services.
                      </p>
                      <ul className="w-full text-white text-base md:grid grid-cols-12 gap-3 pt-2 space-y-1.5 md:space-y-0">
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Ecommerce SEO</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Enterprise SEO</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>SEO Audit</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Local SEO</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Amazon SEO</span>
                        </li>
                        <li className="flex items-center col-span-6 bg-blue-600 py-1 px-2 rounded-sm md:bg-transparent md:py-0 md:px-0">
                          <BsFillCheckCircleFill
                            className="text-yellow-300 mr-3"
                            size={20}
                          />{" "}
                          <span>Shopify Store Optimization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
