"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {Montserrat} from "next/font/google";
import { i } from "motion/react-client";
import { m, motion, AnimatePresence } from "framer-motion";



const montserrat = Montserrat ({
  variable: "--font-montserrat",
  weight: ["700"],
});


export default function Contact() {


  return (
    <>

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
