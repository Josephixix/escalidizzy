"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  ShoppingCart,
  MapPin,
  Car,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md px-5 lg:px-24 py-2 flex items-center justify-between">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2 animate-slideIn">
          <span className="font-lobsterx text-black text-lg lg:text-xl font-bold">
            ESCALIDIZZY
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
      <ul className="hidden lg:flex gap-6 text-lg font-sofia">
        {[
          { name: "Services", href: "/services" },
          { name: "Contact", href: "/contact" },
          { name: "About us", href: "/about" },
          { name: "Store Locator", href: "/locator" },
          { name: "Fleet", href: "/fleet" },
        ].map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-black hover:text-green-500 hover:bg-green-100 px-2 py-1 rounded transition"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <Link href="/sign-in" className="hidden lg:block">
        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-green-500 transition font-sofia">
          Rent now
        </button>
      </Link>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col animate-slideInRight">
          {/* Top */}
          <div className="flex items-center justify-between px-6 py-6 border-b">
            <span className="font-lobsterx text-black text-lg font-bold">
              ESCALIDIZZY
            </span>
            <button
              onClick={() => setOpen(false)}
              className="transition hover:rotate-90"
            >
              <X className="w-7 h-7 text-green-500" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-6 px-6 py-8 text-lg font-sofia">
            <Link href="/services" onClick={() => setOpen(false)} className="flex items-center gap-3 animate-fadeDelay1 opacity-0">
              <ShoppingCart /> Services
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="flex items-center gap-3 animate-fadeDelay2 opacity-0">
              <Phone /> Contact
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="flex items-center gap-3 animate-fadeDelay3 opacity-0">
              <Mail /> About Us
            </Link>
            <Link href="/locator" onClick={() => setOpen(false)} className="flex items-center gap-3 animate-fadeDelay3 opacity-0">
              <MapPin /> Store Locator
            </Link>
            <Link href="/fleet" onClick={() => setOpen(false)} className="flex items-center gap-3 animate-fadeDelay3 opacity-0">
              <Car /> Fleet
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
