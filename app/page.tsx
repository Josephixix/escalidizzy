"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {Montserrat} from "next/font/google";
import { i } from "motion/react-client";
import { m, motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Categories from "@/components/Categories";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";


const montserrat = Montserrat ({
  variable: "--font-montserrat",
  weight: ["700"],
});



export default function Home() {


  return (
    <>
 
<Hero/>

<About/>

<Featured/>

<Categories/>

<Gallery/>

<Faq/>

<Contact/>
</>
  );
}
