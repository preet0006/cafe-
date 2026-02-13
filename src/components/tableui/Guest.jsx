import React, { useState } from "react";

const Guest = () => {
  const [selectedGuest, setSelectedGuest] = useState(2);

  const guests = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-bold text-[#111]">Number of guests</h4>

      <div className="grid grid-cols-4 gap-3">
        {guests.map((guest) => (
          <button
            key={guest}
            onClick={() => setSelectedGuest(guest)}
            className={`w-full h-[55px] rounded-xl border text-sm font-semibold transition
              ${
                selectedGuest === guest
                  ? "border-[#007a5e] text-[#007a5e] bg-[#eaf6f2]"
                  : "border-gray-200 text-gray-800 bg-white hover:border-[#007a5e]"
              }
            `}
          >
            {guest}
          </button>
        ))}
      </div>

      {/* More Guests Options */}
      <button className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-800 underline underline-offset-4">
        More guests options
        <span className="text-xl font-bold">+</span>
      </button>

      <p className="text-xs text-gray-500 leading-relaxed">
        Offers are based on time, date, and number of guests and may vary as you
        continue the booking process.
      </p>
    </div>
  );
};

export default Guest;
