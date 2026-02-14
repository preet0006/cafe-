import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { CalendarDays, Clock, Users, Tag } from "lucide-react";

import Guest from "./tableui/Guest";
import Options from "./tableui/Options";
import Time from "./tableui/Time";

const steps = [
  { id: "date", label: "Date", icon: CalendarDays },
  { id: "time", label: "Time", icon: Clock },
  { id: "guests", label: "Guests", icon: Users },
  { id: "offers", label: "Offers", icon: Tag },
];

const ReserveCalendar = () => {
  const [selected, setSelected] = useState(new Date());
  const [activeStep, setActiveStep] = useState("date");

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 overflow-hidden rounded-sm shadow-sm">
      
      
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-[#111]">Book a table</h2>
        <p className="text-xs text-gray-500 mt-1">For free</p>
      </div>

     
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between bg-[#eaf6f2] rounded-2xl p-2">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition
                  ${
                    isActive
                      ? "bg-[#007a5e] text-white"
                      : "text-gray-600 hover:bg-white hover:text-black"
                  }`}
              >
                <Icon size={14} />
                {isActive && <span>{step.label}</span>}
              </button>
            );
          })}
        </div>
      </div>

      
      <div className="px-4 py-4">
        {activeStep === "date" && (
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            className="fork-calendar text-sm"
          />
        )}

        {activeStep === "time" && (
          <div className="p-4 bg-gray-50 rounded-xl text-sm text-gray-700">
            <Time/>
          </div>
        )}

        {activeStep === "guests" && (
          <div className="p-4 bg-gray-50 rounded-xl text-sm text-gray-700">
            <Guest/>
          </div>
        )}

        {activeStep === "offers" && (
          <div className="p-4 bg-gray-50 rounded-xl text-sm text-gray-700">
            <Options/>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReserveCalendar;
