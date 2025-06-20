import React, { useRef, useState } from "react";
import TestimonialCard from "./testimonialCard";
import Loch from "../assets/loch.svg";
import data from "../data/testimonialData.json";

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (window.innerWidth >= 768) {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || window.innerWidth < 768) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <div className="mt-6 md:mt-2 mb-4">
      <div className="font-normal text-[20px] md:text-[25px] mr-8 md:mr-12 text-right opacity-85">
        Testimonials
      </div>
      <div className="md:w-[94%] bg-white h-[1px] my-2 md:my-4 opacity-50"></div>

      <div className="flex items-end my-8">
        <img src={Loch} alt="Loch" className="mr-8 hidden md:block" />

        <div
          ref={scrollRef}
          className={`flex flex-col md:flex-row gap-4 pl-2
            cursor-auto md:cursor-grab md:active:cursor-grabbing
            overflow-y-auto md:overflow-hidden
            max-h-[225px] md:max-h-none`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {data.map((item, index) => (
            <TestimonialCard
              key={index}
              name={item.name}
              role={item.role}
              message={item.message}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
