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

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (


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

  );
}
