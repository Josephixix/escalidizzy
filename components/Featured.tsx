"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {Montserrat} from "next/font/google";
import { i } from "motion/react-client";
import { m, motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";


const montserrat = Montserrat ({
  variable: "--font-montserrat",
  weight: ["700"],
});

const cars = [
  {
    id: 1,
    name: "Toyota Camry XSE",
    year: "2021",
    mileage: "42,000 km",
    price: "₦14,500,000",
    img: "/lexus.jpg",
  },
  {
    id: 2,
    name: "Mercedes-Benz C300",
    year: "2019",
    mileage: "55,000 km",
    price: "₦22,000,000",
    img: "/c300.jpg",
  },
  {
    id: 3,
    name: "Honda Accord Sport",
    year: "2020",
    mileage: "35,000 km",
    price: "₦13,200,000",
    img: "/honda.jpg",
  },
  {
    id: 4,
    name: "Lexus RX 350",
    year: "2018",
    mileage: "60,000 km",
    price: "₦28,400,000",
    img: "/rx1.jpg",
  },
];

export default function Featured() {


  return (



 <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="px-4 md:px-12 lg:px-24 py-12 mt-1 bg-gray-200 pt-16"
    >
      {/* Section Header */}
      <div className="mb-6">
        <h2 className={`text-2xl md:text-3xl font-bold ${montserrat.className}`}>Featured Cars</h2>
        <p className="text-gray-500 mt-2">
          Carefully selected vehicles ready for their next owner.
        </p>
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
        {cars.map((car) => (
          <div
            key={car.id}
            className="min-w-65 snap-center bg-white rounded-xl shadow-md p-3"
          >
            <div className="relative w-full h-40 rounded-lg overflow-hidden">
              <Image src={car.img} alt={car.name} fill className="object-cover" />
            </div>

            <h3 className="font-semibold text-lg mt-3">{car.name}</h3>
            <p className="text-gray-500 text-sm">{car.year} • {car.mileage}</p>

            <p className="font-bold text-primary mt-2">{car.price}</p>

            <button className="mt-3 w-full py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {cars.map((car) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-3"
          >
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image src={car.img} alt={car.name} fill className="object-cover" />
            </div>

            <h3 className="font-semibold text-lg mt-3">{car.name}</h3>
            <p className="text-gray-500 text-sm">{car.year} • {car.mileage}</p>

            <p className="font-bold text-primary mt-2">{car.price}</p>

            <button className="mt-3 w-full py-2 bg-black text-white rounded-lg text-sm hover:bg-green-500 transition">
              View Details
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>

  )}