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

export default function About() {


  return (
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
  className="px-3 md:px-12 lg:px-24 py-16 h-auto md:h-auto lg:h-auto mb-0"
>
  {/* Section Header */}
  <div>
    <h2 className="text-lg font-bold mb-4 text-gray-500">
      About ESCALIDIZZY
    </h2>
  </div>

  {/* Main Heading */}
  <p
    className={
      "text-2xl md:text-3xl lg:text-5xl mb-3 font-bold tracking-tighter leading-[1.2] text-foreground " +
      montserrat.className
    }
  >
Where reliability meets affordability.
  </p>

  {/* Content */}
  <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
    <p className={`text-[12px] md:text-sm max-w-3xl md:max-w-xl py-2 text-gray-600 text-left ${montserrat.className }`}>
We’re dedicated to helping you find a car that fits your lifestyle, your budget, and 
your journey. With a trusted selection of quality vehicles and a team focused on honesty and
 customer care, we make the buying process simple, transparent, and stress-free. Your next ride starts here.
    </p>
  </div>

  {/* Image */}
  <div className="py-6">
    <Image
      src="/about.jpg"
      alt="Fashion Image"
      width={1200}
      height={904}
      className="object-cover object-center rounded-xl shadow-lg h-64 md:h-[65vh] w-full"
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
    />
  </div>
</motion.section>
  )}