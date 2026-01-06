
"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  return (
    <section className="px-6 md:px-16 lg:px-32 py-16 bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-xl"
        >
          <h3 className="text-sm md:text-base font-semibold text-[#7A6453] mb-2 tracking-wide uppercase">
            About ESCALIDIZZY
          </h3>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2F241E] mb-4 leading-tight">
          Built for the <br />road ahead
          </h2>

          <p className="text-[#5C4A3F]">
          We offer reliable, well-maintained vehicles designed to move you confidently through everyday drives and long journeys — quality you can trust, value you can rely on.
          </p>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/Amazon.jpg" 
            alt="Bag Pack craftsmanship"
            fill
            className="object-cover"
          />

          {/* Soft overlay */}
          <div className="absolute inset-0 bg-black/10" />

          
        </motion.div>

      </div>
    </section>
  );
}
