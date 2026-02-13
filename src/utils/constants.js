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


export const galleryImages = [
  {
    id: 1,
    src: "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?w=996",
    alt: "restaurant",
    big: true,
  },
  {
    id: 2,
    src: "https://img.freepik.com/free-photo/restaurant-table-with-food_144627-34762.jpg?w=996",
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
