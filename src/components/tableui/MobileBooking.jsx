import React, { useState } from "react";
import ReserveCalendar from "../ReserveCalendar";

const MobileBooking = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full md:hidden  flex mt-8 items-center justify-center">
      <button
        onClick={() => setShow(true)}
        className="flex py-3 border text-xs px-4 rounded-xs shadow font-semibold"
      >
        Book A Reservation
      </button>

      {show && (
        <div className="fixed top-0 right-0 w-[350px] h-screen bg-white text-white z-50 p-4">
          <button
            onClick={() => setShow(false)}
            className="t text-black mb-4 border px-3 py-1"
          >
            Close
          </button>
          
           <section className="mt-12">
              <ReserveCalendar/>
            
            
           </section>
           
         
          
        </div>
      )}
    </div>
  );
};

export default MobileBooking;
