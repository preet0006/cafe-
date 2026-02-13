import React, { useState } from "react";

const lunchTimes = [
  "12:00", "12:15", "12:30", "12:45",
  "13:00", "13:15", "13:30", "13:45",
  "14:00", "14:15", "14:30", "14:45",
  "15:00", "15:15", "15:30", "15:45",
  "16:00", "16:15", "16:30", "16:45",
];

const dinnerTimes = [
  "18:00", "18:15", "18:30", "18:45",
  "19:00", "19:15", "19:30", "19:45",
  "20:00", "20:15", "20:30", "20:45",
  "21:00", "21:15", "21:30", "21:45",
];

const Time = () => {
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <div className="flex flex-col w-full">
      
      <h6 className="text-lg font-bold text-[#111] mb-4">
        Choose your time
      </h6>

  
      <div className="max-h-60 overflow-y-auto scrollbar-hide pr-2">

      
        <section className="mb-6">
          <span className="text-sm font-semibold text-gray-700 block mb-3">
            Lunch
          </span>

          <div className="grid grid-cols-4 gap-3">
            {lunchTimes.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`py-2 rounded-lg border text-sm font-medium transition
                  ${
                    selectedTime === time
                      ? "bg-[#007a5e] text-white border-[#007a5e]"
                      : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
                  }`}
              >
                {time}
              </button>
            ))}
          </div>
        </section>

        
        <section>
          <span className="text-sm font-semibold text-gray-700 block mb-3">
            Dinner
          </span>

          <div className="grid grid-cols-4 gap-3">
            {dinnerTimes.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`py-2 rounded-lg border text-sm font-medium transition
                  ${
                    selectedTime === time
                      ? "bg-[#007a5e] text-white border-[#007a5e]"
                      : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
                  }`}
              >
                {time}
              </button>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Time;
