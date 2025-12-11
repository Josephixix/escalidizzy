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

const categories = [
  { name: "SUVs", img: "/suv.jpg" },
  { name: "Sedans", img: "/sudan.jpg" },
  { name: "Trucks", img: "/truck.jpg" },
  { name: "Electric Cars", img: "/c300.jpg" },
  { name: "Luxury Cars", img: "/lambo2.jpg" },
  { name: "Budget Cars", img: "/honda.jpg" },
];

const carGallery = [
  "/buga.jpg",
  "/dodo.jpg",
  "/rx1.jpg",
  "/lambo.jpg",
  "/lexus.jpg",
  "/yeye.jpg",
];

const faqs = [
  {
    question: "Do you offer financing?",
    answer: "Yes! We provide flexible financing options tailored to your budget.",
  },
  {
    question: "Can I book a test drive?",
    answer: "Absolutely. Schedule a test drive online or contact us directly.",
  },
  {
    question: "Are your cars inspected?",
    answer: "Every vehicle undergoes a thorough inspection to ensure quality and safety.",
  },
  {
    question: "Do you accept trade-ins?",
    answer: "Yes, we evaluate your current car and offer competitive trade-in value.",
  },
  {
    question: "Do the cars come with a warranty?",
    answer: "Most vehicles come with a manufacturer or dealership warranty. Details vary by model.",
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
   <section className="relative w-full h-[100vh] overflow-hidden">

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
            className="min-w-[260px] snap-center bg-white rounded-xl shadow-md p-3"
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


     <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
  className="px-6 md:px-16 lg:px-32 py-20 bg-white pt-16"
>
  {/* Section Header */}
  <div className="text-center mb-12">
    <h2 className={`${montserrat.className} text-2xl md:text-4xl font-bold mb-4`}>
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

     <section className="px-6 md:px-16 lg:px-32 py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-2">Got Questions? We’ve Got Answers</h2>
        <p className="text-gray-600">Find the info you need before your next ride.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border rounded-lg bg-green-400 shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 font-medium text-left hover:bg-gray-100 transition"
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Still have questions? Contact Us
        </a>
      </div>
    </section>


      <motion.section
      className="flex justify-center items-center py-8 px-3 md:px-12 lg:px-24 bg-gray-200  "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <h2 className={`${montserrat.className} mt-4 mb-5 text-2xl md:text-4xl font-bold text-center text-black `}>
          Let's Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {/* Form container */}
        <div className="grid md:grid-cols-2 gap-12 bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 md:p-12">
          {/* Form */}
          <form className="space-y-6 text-gray-800 w-full">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                className="w-full min-h-[100px] rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2  bg-black hover:bg-green-500 text-white py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/>
                <path d="m21.854 2.147-10.94 10.939"/>
              </svg>
            </button>
          </form>

          {/* Optional Right Content */}
          <div className="hidden md:flex items-center justify-center">
            {/* Add an image, map, or contact info here */}
          </div>
        </div>
      </div>
    </motion.section>
</>
  );
}
