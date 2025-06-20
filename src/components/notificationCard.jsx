import React from "react";
import checkmark from "../assets/checkmark.svg";

const NotificationCard = ({
  icon,
  showCheck = false,
  showSave = false,
  title,
  children,
}) => {
  return (
    <div className="bg-[#f9fafb] border border-gray-200 rounded-xl m-2 p-4 w-[190px] h-[172px] relative flex flex-col gap-2 justify-between transition-transform duration-300 hover:scale-[1.02]">
      <div className="flex justify-between items-start">
        <div>{icon}</div>
        {showSave && <button className="text-sm text-gray-600">Save</button>}
        {showCheck && (
          <img src={checkmark} alt="" className="w-[16px] h-[16px]" />
        )}
      </div>

      <div>
        {title && <div className="text-black text-sm font-medium">{title}</div>}
        {children}
      </div>
    </div>
  );
};

export default NotificationCard;
