"use client";

import { m, motion, AnimatePresence } from "framer-motion";





const categories = [
  { name: "SUVs", img: "/suv.jpg" },
  { name: "Sedans", img: "/sudan.jpg" },
  { name: "Trucks", img: "/truck.jpg" },
  { name: "Electric Cars", img: "/c300.jpg" },
  { name: "Luxury Cars", img: "/lambo2.jpg" },
  { name: "Budget Cars", img: "/honda.jpg" },
];

export default function Categories() {


  return (

<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
  className="px-6 md:px-16 lg:px-32 py-20 bg-white pt-16"
>
  {/* Section Header */}
  <div className="text-center mb-12">
    <h2 className={`text-2xl md:text-4xl font-bold mb-4`}>
      Shop by Category
    </h2>
    <p className="text-gray-600 text-lg md:text-xl">
      Choose the style that fits your lifestyle.
    </p>
  </div>

  {/* Category Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8">
    {categories.map((category) => (
      <motion.div
        key={category.name}
        whileHover={{ scale: 1.1 }}
        className="flex flex-col items-center p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transition-transform"
      >
        <img src={category.img} alt={category.name} className="w-45 h-45 sm:w-45 sm:h-28 mb-4" />
        <span className="font-semibold text-lg sm:text-xl">{category.name}</span>
      </motion.div>
    ))}
  </div>
</motion.section>

  )}