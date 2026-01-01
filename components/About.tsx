"use client";

import Image from "next/image";
import { m, motion, AnimatePresence } from "framer-motion";




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
  <h3
    className={
      "text-2xl md:text-3xl lg:text-5xl mb-3 font-bold tracking-tighter leading-[1.2] text-foreground "
    }
  >
Where reliability meets affordability.
  </h3>

  {/* Content */}
  <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
    <h4 className={`text-sm font-normal text-gray-500 mb-3 `}>
We’re dedicated to helping you find a car that fits your lifestyle, your budget, and 
your journey. With a trusted selection of quality vehicles and a team focused on honesty and
 customer care, we make the buying process simple, transparent, and stress-free. Your next ride starts here.
    </h4>
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