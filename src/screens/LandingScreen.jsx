import React, { useEffect, useState } from "react";
import bellIcon from "../assets/bell.svg";
import cohorts from "../assets/cohorts.svg";
import NotificationCarousel from "../components/notificationCarousal";
import eye from "../assets/eye.svg";
import Testimonials from "../components/testimonialSection";

const LandingScreen = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return; // Only run on mobile

    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="w-full md:w-[55.6%] h-[60%] md:min-h-screen background-quarter-circle text-white md:p-12 pr-0 md:pr-0 overflow-y-hidden md:overflow-y-scroll">
      {/* 1 */}
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          isMobile ? (slideIndex === 0 ? "opacity-100" : "opacity-0 h-0 overflow-hidden") : "opacity-100"
        }`}
      >
        <div className="w-full flex flex-col lg:flex-row items-start justify-between">
          <div className=" mr-[12px] mb-[12px] md:mr-8 md:mb-8 lg:mb-0">
            <img src={bellIcon} className="h-[28px] w-[28px] hidden md:block" />
            <div className="font-inter pl-[12px] md:pl-0 font-medium text-[20px] leading-[20px] md:text-[31px] md:leading-[31px] my-4 text-[#F2F2F2]">
              Get notified when a <br className="hidden md:block" /> highly correlated <br className="hidden md:block" /> whale makes a
              move
            </div>
            <div className=" pl-[12px] md:pl-0 font-medium text-[14px] leading-[14px] md:text-[16px] md:leading-[18px] text-[#F2F2F2]">
              Find out when a certain whale moves <br className="hidden md:block" /> more than any preset
              amount on-chain or <br className="hidden md:block" />
              when a dormant whale you care about <br className="hidden md:block" /> becomes active.
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <NotificationCarousel />
          </div>
        </div>
      </div>

      {/* 2 */}
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          isMobile ? (slideIndex === 1 ? "opacity-100" : "opacity-0 h-0 overflow-hidden") : "opacity-100"
        }`}
      >
        <div className="md:mt-12 mt-8 flex flex-col md:flex-row justify-between">
          <div className="flex justify-center md:justify-start">
            <img src={cohorts} className="rounded-[12px] h-[140px] md:h-[280px]" />
          </div>
          <div className="mr-8 md:mr-12 ml-8 md:ml-0 mb-8 lg:mb-0 flex flex-col items-end mt-6">
            <img src={eye} className="h-[28px] w-[28px] hidden md:block" />
            <div className="font-inter font-medium text-[20px] leading-[20px] md:text-[31px] md:leading-[31px] my-4 text-[#F2F2F2] text-left md:text-right">
              Watch what the <br className="hidden md:block" /> whales are doing
            </div>
            <div className="font-medium text-[14px] leading-[14px] md:text-[16px] md:leading-[18px] text-[#F2F2F2] text-left md:text-right">
              All whales are not equal. Know exactly
              <br className="hidden md:block" /> what the whales impacting YOUR
              <br className="hidden md:block" /> portfolio are doing.
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          isMobile ? (slideIndex === 2 ? "opacity-100" : "opacity-0 h-0 overflow-hidden") : "opacity-100"
        } mt-2`}
      >
        <Testimonials />
      </div>
    </div>
  );
};

export default LandingScreen;
