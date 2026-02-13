import React, { useState } from "react";

const Options = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    payment: "online",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-bold text-[#111]">Your details</h4>

      {/* Name */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-gray-700">Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-[#007a5e]"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-[#007a5e]"
        />
      </div>

      {/* Payment Mode */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700">
          Payment Mode
        </label>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, payment: "online" })}
            className={`flex-1 px-4 py-2 rounded-xl border text-sm font-semibold transition
              ${
                formData.payment === "online"
                  ? "bg-[#007a5e] text-white border-[#007a5e]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#007a5e]"
              }
            `}
          >
            Online
          </button>

          <button
            type="button"
            onClick={() => setFormData({ ...formData, payment: "restaurant" })}
            className={`flex-1 px-4 py-2 rounded-xl border text-sm font-semibold transition
              ${
                formData.payment === "restaurant"
                  ? "bg-[#007a5e] text-white border-[#007a5e]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#007a5e]"
              }
            `}
          >
            In Restaurant
          </button>
        </div>
      </div>

      {/* Submit */}
      <button className="w-full bg-[#007a5e] text-white py-3 rounded-2xl font-semibold text-sm hover:opacity-90 transition">
        Confirm Booking
      </button>
    </div>
  );
};

export default Options;
