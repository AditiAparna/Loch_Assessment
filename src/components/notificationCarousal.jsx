import React from "react";
import NotificationCard from "./notificationCard";
import colouredBell from "../assets/colouredBell.svg";
import chart from "../assets/chart.svg";
import clock from "../assets/clock.svg";

const cardData = [
  {
    icon: colouredBell,
    title: "We’ll be sending notifications to you here",
    type: "input",
  },
  {
    icon: chart,
    title: "Notify me when any wallets move more than",
    type: "select",
    options: ["$1,000.00", "$5,000.00", "$10,000.00"],
  },
  {
    icon: clock,
    title: "Notify me when any wallet dormant for",
    type: "select",
    options: ["> 30 days", "> 60 days"],
    after: "becomes active",
  },
];

const NotificationCarousel = () => {
  const duplicatedCards = [...cardData, ...cardData];

  return (
<div className="relative overflow-hidden group">
<div className="hidden md:block pointer-events-none absolute top-2 left-[-2px] h-[92%] w-10 z-10 bg-gradient-to-r from-black/50 to-transparent rounded" />
  <div className="hidden md:block pointer-events-none absolute top-0 right-0 h-full w-10 z-10 bg-gradient-to-l from-black/50 to-transparent"></div>
  <div className="flex w-max gap-4 animate-carousel group-hover:[animation-play-state:paused]">
    {duplicatedCards.map((card, index) => (
      <div key={index} className="flex-shrink-0 w-[200px]">
        <NotificationCard
          icon={<img src={card.icon} alt="icon" className="w-[28px] h-[28px]" />}
          title={card.title}
          showSave={card.type === "input"}
          showCheck={card.type === "select"}
        >
          {card.type === "input" && (
            <input
              placeholder="hello@gmail.com"
              className="w-full border rounded-md px-3 py-2 text-sm border-gray-300 h-[35px] text-gray-800 mt-2"
            />
          )}
          {card.type === "select" && (
            <>
              <select className="border text-sm rounded-md px-2 py-1 mt-2 border-gray-300 h-[35px] text-gray-800 bg-gray-200">
                {card.options.map((opt, i) => (
                  <option key={i}>{opt}</option>
                ))}
              </select>
              {card.after && (
                <div className="text-sm text-black mt-1">{card.after}</div>
              )}
            </>
          )}
        </NotificationCard>
      </div>
    ))}
  </div>
</div>

  );
};

export default NotificationCarousel;
