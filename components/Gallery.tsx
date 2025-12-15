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




const carGallery = [
  "/buga.jpg",
  "/dodo.jpg",
  "/rx1.jpg",
  "/lambo.jpg",
  "/lexus.jpg",
  "/yeye.jpg",
];


export default function Gallery() {


  return (

<section className="px-6 md:px-16 lg:px-32 py-10 bg-gray-200 pt-16 pb-0">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Cars in Action</h2>
        <p className="text-gray-600 text-sm md:text-lg">
          See our vehicles in real-life scenarios and imagine your ride.
        </p>
      </motion.div>

      {/* Desktop Bento-style Grid */}
      <div className="hidden lg:grid grid-cols-6 grid-rows-3 gap-4 auto-rows-fr">
        {carGallery.map((img, index) => {
          const colSpan = index % 3 === 0 ? 2 : 1;
          const rowSpan = index % 3 === 0 ? 2 : 1;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer`}
              style={{ gridColumn: `span ${colSpan}`, gridRow: `span ${rowSpan}` }}
            >
              <img src={img} alt={`Car ${index + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory px-2">
        {carGallery.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-shrink-0 w-64 h-80 rounded-xl overflow-hidden cursor-pointer snap-start"
          >
            <img src={img} alt={`Car ${index + 1}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </section>


  )}