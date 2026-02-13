import React from "react";
import { MapPin, Star, Image } from "lucide-react";
import { galleryImages } from "../../utils/constants";



const DetailsCard = () => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl p-10 shadow-sm text-left">
      
      
      <h3 className="text-3xl font-bold text-gray-900">
        Menu 2026 - Nexa Palace
      </h3>

      <p className="flex items-center justify-start gap-2 text-gray-600 mt-2 text-sm">
        <MapPin size={16} className="text-gray-500" />
        17 Rue Malar, 75007, Paris
      </p>

      
      <p className="text-sm text-gray-600 mt-1">
        <span className="font-medium text-gray-800">Apulian</span> · Average price{" "}
        <span className="font-semibold text-gray-900">€25</span>
      </p>

      
      <div className="flex items-center justify-start gap-2 mt-2">
        <div className="flex items-center gap-1 text-sm font-semibold text-green-700">
          <Star size={16} className="fill-green-600 text-green-600" />
          9.1
        </div>

        <p className="text-sm text-gray-600">(989 reviews)</p>
      </div>

      
    <div className="grid grid-cols-3 gap-4 mt-8">
      {galleryImages.map((item) => (
        <div
          key={item.id}
          className={`relative overflow-hidden ${
            item.big ? "col-span-1 row-span-2 h-70" : "h-33.75"
          }`}
        >
          <img
            className={`h-full w-full object-cover rounded-2xl ${
              item.overlay ? "blur-[2px]" : ""
            }`}
            src={item.src}
            alt={item.alt}
          />

          {item.overlay && (
            <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center gap-2 text-white font-semibold">
              <Image size={18} />
              {item.count}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default DetailsCard;
