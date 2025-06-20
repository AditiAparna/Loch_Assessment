import React from "react";

const TestimonialCard = ({ name, role, message }) => {
  return (
    <div className="bg-[#FAFAFA] border border-gray-200 rounded-xl p-4 transition-transform duration-300 hover:scale-[1.02] text-left h-auto md:h-[140px] flex-shrink-0 w-fit max-w-[350px] mr-4">
      <p className="font-semibold text-black mb-0 text-base">
        {name}{" "}
        <span className="text-gray-400 font-normal text-[13px]">{role}</span>
      </p>
      <p className="text-black text-base mt-2 leading-tight">
        “{message}”
      </p>
    </div>
  );
};

export default TestimonialCard;
