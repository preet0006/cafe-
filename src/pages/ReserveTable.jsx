import ReserveCalendar from "../components/ReserveCalendar";
import ReserveSection from "../components/ReserveSection";
import DetailsCard from "../components/tableui/DetailsCard";

const ReserveTable = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="relative w-full h-[40vh]">
        <img
          src="/texture-light.jpg"
          alt="Reserve Table"
          className="w-full h-full object-cover"
        />

        <div className="absolute text-white bottom-10 "></div>

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className=" py-16 px-4 sm:px-6 ">
        <section className="text-center">
          <DetailsCard />
        </section>

        <div className="flex space-x-4  mt-10 w-full h-[70dvh]">
          <div className=" w-full sm:w-1/2 sm:overflow-y-auto scrollbar-hide"> 
           
           <ReserveSection/>

           
          </div>

          <div className="sm:flex hidden justify-center  items-center  w-1/2">
            <ReserveCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveTable;
