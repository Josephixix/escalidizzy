"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChessKnight, Dumbbell, Facebook, Instagram, Twitter } from "lucide-react";
import { Orbitron } from "next/font/google";

const LobsterX = Orbitron ({
  variable: "--font-berkshire",
  weight: ["400"],
}); 

export default function Footer() {
  return (
    <footer className="relative z-10 mt-0 w-full overflow-hidden pt-16 pb-8 text-black ">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/c300.jpg" 
          alt="Footer Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Black gradient overlay */}
      <div className="absolute inset-0 z-0 bg-linear-to-t from-black/70 via-black/50 to-black/30" />

      {/* Background Blobs */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden -z-5">
        <div className="absolute -top-32 -left-1/4 h-64 w-72 rounded-full bg-red-600/20 blur-3xl animate-blob" />
        <div className="absolute -bottom-32 -right-1/4 h-80 w-80 rounded-full bg-red-700/20 blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative glass mx-auto max-w-6xl flex flex-col items-center gap-8 rounded-2xl px-6 py-10 md:flex-row md:items-start md:justify-between md:gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <div className="flex items-center gap-2 transform transition-all duration-700 ease-out animate-slideIn">
            
              <span className="font-bold text-lg flex items-center gap-1">
                <span className={`text-black text-lg lg:text-xl ${LobsterX.className}`}>ESCALIDIZZY</span>
            
              </span>
            </div>
          </Link>
          <p className="text-white/80 mb-6 max-w-xs text-center md:text-left">
       Shop smart. Drive happy. 
          </p>

          {/* Socials */}
          <div className="flex gap-4 text-white">
            <Link href="#" className="hover:text-green-500 transition">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-green-500 transition">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-green-500 transition">
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Links */}
        <nav className="flex w-full flex-col gap-10 text-center md:w-auto md:flex-row md:text-left">
          {/* Programs */}
          <div className="animate-fadeUp" style={{ animationDelay: "100ms" }}>
            <h4 className="mb-3 text-xs font-semibold tracking-widest text-black uppercase">quick links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/70 hover:text-green-500">Services</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-green-500">Contact</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-green-500">About Us</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-green-500">Store Locator</Link></li>
               <li><Link href="#" className="text-white/70 hover:text-green-500">Fleet</Link></li>
            
            </ul>
          </div>

        
        </nav>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="mt-10 text-center text-SM text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        © {new Date().getFullYear()} ESCALIDIZZY. All rights reserved.
      </motion.div>
    </footer>
  );
}