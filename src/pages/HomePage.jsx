import CardSection from "../components/CardSection";
import TextCarousel from "../components/Carousel";
import ShowCase from "../components/ShowCase";
import { data } from "../utils/constants";




export default function Home() {
  return (
  <main className="flex flex-col m-auto max-w-400 min-h-screen overflow-x-hidden bg-[url('/boardck.jpg')] bg-fixed bg-cover bg-center">
 
      
      
      <section className="relative h-[90dvh] sm:h-screen w-screen overflow-hidden">
     
      
        <video
          src="/video.mp4"
          // autoPlay
          preload="metadata"
          muted
          loop
          playsInline
          className="absolute hidden sm:flex top-0 left-0 h-full w-full object-cover"
        />

        <img className="md:hidden absolute w-full h-full object-cover" src="/homeo.jpg" alt="" />

        <div className="absolute top-0 left-0 h-full w-full bg-black/50"></div>

        <div className="relative z-10 text-white">
         

          <div className="flex mt-10   flex-col justify-center items-center h-screen text-center px-5">
               <TextCarousel/>
            
          </div>
        </div>
      </section>
 

          
      <section className="flex  relative flex-col space-y-28 min-h-screen">
        <CardSection img={'/beet-icon.png'} cardImage={'/carrot.png'} variant="brown" data={data[0].menu} />

        <CardSection darkimg={'/pumpkin-icon.png'}  variant="black" data={data[1].second} />

        <CardSection 
        img={'/pumpkin.png'}
        cardImage={'/beet.png'} 
         variant="brown2" data={data[0].menu} />



        <section className="relative flex  flex-col space-y-6 items-center  justify-center w-full uppercase text-start h-[60dvh] md:h-[100dvh] px-6">

       <img
        src="/img-board.jpg"
        alt="Delivery Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

          <div className=" relative text-center sm:text-start  space-y-4">
            <h5 className="text-3xl md:text-7xl font-bold tracking-tight text-white">
              About Our Achievements
            </h5>

            <p className="text-[13px] md:text-[21px] font-extrabold sm:font-medium normal-case text-white w-full max-w-150 leading-relaxed">
              Once upon a time, cofounders Ian O’Meara and Darragh McFeely had a
              renowned beachside bistro in New Zealand that served real food.
              Fresh, delicious, wholesome, authentic food which was sourced from
              a local produce stand called the “The Green Rebel”.
            </p>

            <button className="relative overflow-hidden border border-white px-6 py-3 w-52 font-semibold uppercase text-center group">
              <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

              <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                Read More
              </span>
            </button>


            <img className="absolute h-[150px] -bottom-15 -right-1/5" src="./fresh-icon.png" alt="" />


              <div className="absolute -left-1/5  -top-14 ">
           <img className="h-[150px]" src="./brui.png" alt="" />

          </div>

          
          </div>
                    
        </section>

      </section>

      <ShowCase/>

    
    </main>
  );
}
