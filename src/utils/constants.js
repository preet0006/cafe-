import {
  Tag,
  CreditCard,
  ChevronRight,
  Coffee,
  Pizza,
  IceCream,
} from "lucide-react";




export const data = [
  {
    menu: {
      title: "Our Specail Menu",
      subtitle: "The choice is easy when it's real food. Eat real. Feel real.",
      buttonText: "Discover Menu",
      image: "./texture-light.jpg",
    },
  },
  {
    second: {
      title: "Planning a working lunch or event?",
      subtitle: "eel good about the food you’re ordering. Don’t hesitate to call us for any advice. We’re here to help you!",
      buttonText: "See Catering Menu",
      image: "./board.jpg",
    },
  },
];

//reserve page 
export const galleryImages = [
  {
    id: 1,
    src: "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?w=996",
    alt: "restaurant",
    big: true,
  },
  {
    id: 2,
    src: "https://i.pinimg.com/736x/57/51/3a/57513a7ec6245b27f7bbfce544240e32.jpg",
    alt: "food",
  },
  {
    id: 3,
    src: "https://img.freepik.com/free-photo/delicious-pizza-indoors_23-2150873938.jpg?w=996",
    alt: "pizza",
  },
  {
    id: 4,
    src: "https://img.freepik.com/free-photo/restaurant-hall-with-lots-table_140725-6309.jpg?w=996",
    alt: "restaurant hall",
  },
  {
    id: 5,
    src: "https://img.freepik.com/free-photo/blurred-restaurant-background_23-2148212607.jpg?w=996",
    alt: "more photos",
    overlay: true,
    count: 217,
  },
  
  
];


export const cuisineData = [
  { id: 1, icon: Coffee, label: "Type Of Cuisine", value: "Apulian" },
  { id: 2, icon: Pizza, label: "Type Of Cuisine", value: "Italian" },
  { id: 3, icon: IceCream, label: "Type Of Cuisine", value: "Dessert" },
];

export const items = [
  {
    id: 1,
    icon: Tag,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Up to 50% off during TheFork Festival",
    description: "Savor exclusive promotions for select times",
  },
  {
    id: 2,
    icon: CreditCard,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Pay with TheFork Pay",
    description: "Enjoy a fast and secure checkout by skipping the queue",
  },
];



export const locationsData = {
  title: "LOCATIONS",
  image: "/carrot.png",
  sections: [
    {
      items: [
        { text: "Albert St. Location" },
        { text: "Monday - Friday: 11AM - 2PM" },
        { text: "Sat, Sun: Closed" },
        { text: "340 Albert St. Suite 140" },
        { text: "Ottawa, Ontario, K1R 7Y6" },
        { text: "(613) 235-5999", highlight: true },
      ],
    },
    {
      items: [
        { text: "Queen St. Location" },
        { text: "Monday - Friday: 10AM - 7PM" },
        { text: "Sat, Sun: Closed" },
        { text: "99 Bank Street Suite G009" },
        { text: "Ottawa, Ontario, K1P 6B9" },
        { text: "(613) 238-6026", highlight: true },
      ],
    },
  ],
};


export const cateringData = {
  title: "CATERING",
  image: "/burg.png",
  sections: [
    {
      items: [
        { text: "Email order to:" },
        { text: "catering@greenrebel.ca", highlight: true },
        { text: "Or give us a call at:" },
        { text: "(613) 232-3642", highlight: true },
      ],
    },
    {
      heading: "FEEDBACK",
      items: [
        { text: "Please don’t hesitate to send us your comments here:" },
        { text: "customerfeedback@greenrebel.ca", highlight: true },
      ],
    },
  ],
};


//card section classes
export const variants = {
  brown: {
    wrapper:
      " relative flex w-full uppercase items-center justify-center md:justify-start text-[#4D443D]",

    container: "relative w-full  max-w-280 h-[70dvh] md:h-137.5",
    image: "w-full h-full object-cover",

    contentBox:
      "absolute top-[25%]  py-4 md:top-20 left-1/2 -translate-x-1/2 flex flex-col space-y-2 px-4 items-center text-center md:items-start md:text-left",

    title:
      "text-3xl min-w-xs md:min-w-xl md:text-6xl font-bold text-[#4D443D] shrink-0",

    subtitle:
      "mt-2 uppercase text-[14px] text-center md:text-start md:text-[21px] font-bold max-w-xl",

    button:
      "relative overflow-hidden border border-black mt-12 font-semibold text-sm sm:text-base px-3 py-3 w-34 md:w-52 inline-block text-center group",

    buttonBg:
      "absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out",

    imgContent: "absolute -right-[60%] w-full  -top-1/3 md:-right-1/5 sm:w-130",

    buttonText: "relative z-10",
  },

  brown2: {
    wrapper:
      " relative flex w-full uppercase items-center justify-center md:justify-start text-[#4D443D]",

    container: "relative w-full  max-w-280 h-[70dvh] md:h-137.5",
    image: "w-full h-full object-cover",

    contentBox:
      "absolute top-[25%]  py-4 md:top-20 left-1/2 -translate-x-1/2 flex flex-col space-y-2 px-4 items-center text-center md:items-start md:text-left",

    title:
      "text-3xl min-w-xs md:min-w-xl md:text-6xl font-bold text-[#4D443D] shrink-0",

    subtitle:
      "mt-2 uppercase text-[14px] text-center md:text-start md:text-[21px] font-bold max-w-xl",

    button:
      "relative overflow-hidden border border-black mt-12 font-semibold text-sm sm:text-base px-3 py-3 w-34 md:w-52 inline-block text-center group",

    buttonBg:
      "absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out",

    imgContent: "absolute -right-[60%] top-60 md:-right-1/6 w-full sm:w-84",

    buttonText: "relative z-10",
  },

  black: {
    wrapper: "flex w-full  text-white justify-end",
    container: "relative w-full bg-green-300 max-w-280 h-[60dvh] md:h-137.5",
    image: "w-full h-full object-cover",
    contentBox:
      "absolute  top-[25%] left-[15%] md:top-20 md:-left-12 flex flex-col space-y-2 ",

    title: " text-3xl   md:text-6xl  font-bold  shrink-0",

    subtitle:
      "mt-2 uppercase text-[16px]  md:text-[21px] font-bold   max-w-xl ",

    button:
      "relative overflow-hidden text-white border border-gray-300 text-black  mt-12 font-semibold px-3 py-3 w-52 inline-block text-center group",
    buttonBg:
      "  absolute inset-0 bg-[#252525] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out ",
    buttonText: "relative  z-10",
  },

  menu: {
    wrapper:
      " flex w-full text-center md:text-start uppercase justify-start text-[#4D443D] ",

    container: "relative w-full max-w-screen h-137.5",
    image: "w-full h-full object-cover",
    contentBox:
      "absolute top-[25%]  py-4 md:top-50 left-1/2 -translate-x-1/2 flex flex-col space-y-2 px-4 items-center text-center md:items-start md:text-left",
    title:
      "text-3xl min-w-xs md:min-w-xl md:text-6xl font-bold text-[#4D443D] shrink-0",

    subtitle:
      "mt-2 uppercase text-[14px] text-center md:text-start md:text-[21px] font-bold max-w-xl",

    button:
      "relative overflow-hidden border border-black mt-12 font-semibold text-sm sm:text-base px-3 py-3 w-34 md:w-52 inline-block text-center group",

    buttonBg:
      "absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out",

    imgContent:
      "absolute -right-[40%] top-40 md:right-1/7 w-full max-w-96 sm:w-xl",

    buttonText: "relative z-10",
  },
};



//menu page items
export const menu = {
  salads: {
    heading: "Salad Boxes",
    items: [
      {
        title: "Vegan Caesar (Vegan)",
        desc: "Kale, microgreens, vegan parmesan, broccoli, croutons, sunflower seeds, vegan caesar dressing",
      },
      {
        title: "Tofu Salad (Vegan)",
        desc: "Mixed greens, microgreens, tofu, organic rice, cabbage, carrot, cucumber, sunflower seeds, mint, sesame dressing",
      },
      {
        title: "BLAT Salad",
        desc: "Romaine, bacon, feta, avocado, tomato, croutons, greek vinaigrette",
      },
      {
        title: "Vietnamese Style",
        desc: "House-roasted chicken, romaine, organic rice, carrot, cucumber, mint, cilantro, peanuts, broccoli, peanut sauce, chilli lime vinaigrette",
      },
    ],
  },

  burgers: {
    heading: "Burgers",
    items: [
      {
        title: "Classic Cheeseburger",
        desc: "Beef patty, cheddar cheese, lettuce, tomato, pickles, onions, ketchup, and mustard on a brioche bun",
      },
      {
        title: "Spicy Chicken Burger",
        desc: "Crispy chicken fillet, spicy mayo, lettuce, tomato, jalapenos on a sesame bun",
      },
      {
        title: "Vegan Burger",
        desc: "Plant-based patty, vegan cheese, lettuce, tomato, pickles, vegan mayo on a whole-grain bun",
      },
      {
        title: "Bacon BBQ Burger",
        desc: "Beef patty, smoked bacon, cheddar cheese, onion rings, lettuce, BBQ sauce on a toasted bun",
      },
    ],
  },

  coffee: {
    heading: "Coffee & Brews",
    items: [
      {
        title: "Espresso",
        desc: "Rich and bold espresso shot with intense flavor and aroma",
      },
      {
        title: "Cappuccino",
        desc: "Espresso with steamed milk and a thick layer of frothy foam",
      },
      {
        title: "Latte",
        desc: "Smooth espresso with steamed milk, lightly topped with foam",
      },
      {
        title: "Iced Coffee",
        desc: "Chilled brewed coffee served over ice, lightly sweetened",
      },
    ],
  },

  pizza: {
    heading: "Pizzeria",
    items: [
      {
        title: "Margherita",
        desc: "Classic pizza with tomato sauce, fresh mozzarella, and basil",
      },
      {
        title: "Pepperoni",
        desc: "Tomato sauce, mozzarella, and generous slices of pepperoni",
      },
      {
        title: "BBQ Chicken",
        desc: "BBQ sauce base, grilled chicken, red onions, mozzarella, and cilantro",
      },
      {
        title: "Veggie Delight",
        desc: "Tomato sauce, mozzarella, bell peppers, mushrooms, olives, and spinach",
      },
    ],
  },
};