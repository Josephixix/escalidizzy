"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Package, Phone, Mail, Truck, Box, Gem, ChessKnight, ShoppingCart, MapPin, Car } from "lucide-react";
import {Orbitron } from "next/font/google";
import {Sofia_Sans } from "next/font/google";

const LobsterX = Orbitron  ({
  variable: "--font-berkshire",
  weight: ["400"],
});

const sofia = Sofia_Sans  ({
  variable: "--font-sofia",
  weight: ["400"],
});




export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-5 lg:px-24 py-2 bg-white shadow-md fixed w-full top-0 left-0 z-50">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2 transform transition-all duration-700 ease-out animate-slideIn">
          
          <span className="font-bold text-lg flex items-center gap-1">
            <span className={`text-black text-lg lg:text-xl ${LobsterX.className}`}>ESCALIDIZZY</span>
          </span>
        </div>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden p-2 rounded-lg hover:bg-green-500 transition"
      >
        <Menu className="w-7 h-7 text-black" />
      </button>

      {/* Desktop Links */}
      <ul className="hidden lg:flex gap-6 text-lg">
        <li>
          <Link href="/services" className={`${sofia.className} hover:text-green-500 hover:bg-green-100  text-black transition text-extra-bold`}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className={`${sofia.className} hover:text-green-500 hover:bg-green-100 text-black transition text-extra-bold`}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/about" className={`${sofia.className} hover:text-green-500 hover:bg-green-100 text-black transition text-extra-bold`}>
            About us
          </Link>
        </li>

        <li>
          <Link href="/about" className={`${sofia.className} hover:text-green-500 hover:bg-green-100 text-black transition text-extra-bold`}>
            Store Locator
          </Link>
        </li>

        <li>
          <Link href="/about" className={`${sofia.className} hover:text-green-500 hover:bg-green-100 text-black transition text-extra-bold`}>
          Fleet
          </Link>
        </li>
      </ul>

      {/* Desktop CTA */}    

      <Link href="/sign-in" className="hidden lg:block">
        <button className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-green-500 text-white rounded-md cursor-pointer transition">
          Rent now
        </button>
      </Link>

      {/* FULLSCREEN MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col animate-slideInRight">
          {/* Top */}
          <div className="flex justify-between items-center px-6 py-6 border-gray-200 border-b">
               <Link href="/">
        <div className="flex items-center gap-2 transform transition-all duration-700 ease-out animate-slideIn">
          <span className="font-bold text-lg flex items-center gap-1">
            <span className={`text-black text-lg lg:text-xl ${LobsterX.className}`}>ESCALIDIZZY</span>
          </span>
        </div>
      </Link>
            <button
              onClick={() => setOpen(false)}
              className="transition transform hover:rotate-90"
            >
              <X className="w-7 h-7 bg-green-500" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-6 px-6 py-8 text-lg">
            <Link href="/services" onClick={() => setOpen(false)} className="flex items-center gap-3 animate-fadeDelay1 hover:bg-green-500">
              <ShoppingCart className="w-5 h-5 text-gray-600" /> <span className={`${sofia.className} text-black`}>Services</span>
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="flex items-center gap-3 animate-fadeDelay2 hover:bg-green-500">
              <Phone className="w-5 h-5 text-gray-600" /> <span className={`${sofia.className} text-black`}>Contact</span>
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="flex items-center gap-3 animate-fadeDelay3 hover:bg-green-500">
              <Mail className="w-5 h-5 text-gray-600" /> <span className={`${sofia.className} text-black`}>About Us</span>
            </Link>

             <Link href="/about" onClick={() => setOpen(false)} className="flex items-center gap-3 animate-fadeDelay3 hover:bg-green-500">
              <MapPin className="w-5 h-5 text-gray-600" /> <span className={`${sofia.className} text-black`}>Store Locator</span>
            </Link>

            <Link href="/about" onClick={() => setOpen(false)} className="flex items-center gap-3 animate-fadeDelay3 hover:bg-green-500">
              <Car className="w-5 h-5 text-gray-600" /> <span className={`${sofia.className} text-black`}>Fleet</span>
            </Link>
          </div>

          {/* Bottom CTA (Sticky on Mobile) */}
          <div className="sticky bottom-0 bg-white px-6 pb-6 pt-4 lg:hidden mt-60 border-gray-200 border-t">
            <Link href="/sign-in" onClick={() => setOpen(false)}>
              <button className="w-full flex cursor-pointer items-center justify-center gap-2 px-4 py-3 bg-black hover:bg-green-700 text-white rounded-xl text-lg">
                 Rent now
              </button>
            </Link>
            <div className="text-center mt-4 text-black">
              <p className="text-sm">Need help? Call us at</p>
              <a href="tel:+14784070488" className="font-semibold text-green-500 ">
                +1 (478) 407-0488
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}