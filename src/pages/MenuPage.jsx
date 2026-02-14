import React from "react";
import CardSection from "../components/CardSection";
import MenuSection from "../components/MenuSection";
import { data } from "../utils/constants";
import { menu } from "../utils/constants";


const MenuPage = () => {
  return (
    <div className="flex  overflow-x-hidden flex-col space-y-12 w-full min-h-screen">
      <div className="flex w-full min-h-[110vh] bg-[url('/bimg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
        <CardSection cardImage={'/carrot.png'} variant="menu" data={data[0].menu} />
      </div>

      <MenuSection menuItems={menu.burgers}/>

      <div className="flex flex-col w-full h-full bg-[url('/covermenu.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="w-full mt-40">
          <MenuSection menuItems={menu.salads} />
        </div>

        <div className="w-full mt-40">
          <MenuSection menuItems={menu.pizza} />
        </div>
      </div>

      <div className="flex flex-col w-full h-full bg-[url('/shakes.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="w-full mt-40">
          <MenuSection menuItems={menu.coffee} />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
