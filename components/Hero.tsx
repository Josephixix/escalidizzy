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

export default function Hero() {


  return (
  <section className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/vid2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center">
          <h1 className={`${montserrat.className} text-3xl md:text-6xl  text-white`}>
             ESCALIDIZZY
          </h1>
          <h2 className={`text-xl md:text-6xl font-bold text-white ${montserrat.className} mt-1`}>
          
Shop smart. Drive happy.
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto text-sm md:text-lg">   

                     Find the perfect car for your journey. 
                     Quality vehicles, trusted service, 
                      enjoy your ride as you cruise in comfort
                      </p>
         

          <button className={`mt-6 px-6 py-3 bg-black text-white hover:bg-green-500 rounded-lg font-semibold ${montserrat.className} transition`}>
            Rent Now
          </button>
        </div>
      </div>
    </section>
  )}