import React from "react";
import { ChevronRight} from "lucide-react";
import { cuisineData } from "../utils/constants";
import { items } from "../utils/constants";



const ReserveSection = () => {
  return (
    <div className="w-full mb-3 max-w-4xl h-full mx-auto px-2 sm:px-6 py-8">
      <h2 className="text-2xl font-bold  mb-4">For You</h2>

      <div className="border border-gray-100 rounded-xl max-h-64 overflow-y-auto">
        <div className="space-y-2 sm:p-4">
          {items.map(
            ({ id, icon: Icon, iconBg, iconColor, title, description }) => (
              <div
                key={id}
                className="flex items-start justify-between p-4 rounded-xl hover:bg-gray-50 transition cursor-pointer"
              >
                <div className="flex gap-4">
                  <div className={`${iconBg} p-3 rounded-lg`}>
                    <Icon className={`${iconColor} w-5 h-5`} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{title}</h4>
                    <p className="text-gray-500 text-sm">{description}</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400" />
              </div>
            ),
          )}
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 mt-8">Cuisines</h2>
      <div className="border border-gray-100 rounded-xl min-h-72 overflow-y-auto">
        <div className="space-y-2">
          {cuisineData.map(({ id, icon: Icon, label, value }) => (
            <div
              key={id}
              className="flex items-center gap-4 p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition cursor-pointer"
            >
              <div className="bg-gray-100 p-3 rounded-lg">
                <Icon className="text-gray-600 w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h5 className="text-gray-800 font-semibold">{label}</h5>
                <p className="text-gray-500 text-sm">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReserveSection;
