
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeaderPage() {
  return (
    <header className="backdrop-blur-lg fixed top-0 shadow-md flex items-center justify-between w-full z-50 px-4 py-4">
        <div className="text-2xl font-bold text-[#364156]">
          Abraham Randhawa
        </div>
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">

          <a href="#home">
          <li className="hover:text-[#00346B] cursor-pointer transition">Home</li>
          </a>

          <a href="#about">
          <li className="hover:text-[#00346B] cursor-pointer transition">About</li>
          </a>

          <a href="#services">
          <li className="hover:text-[#00346B] cursor-pointer transition">Services</li>
          </a>

          <a href="#projects">
          <li className="hover:text-[#00346B] cursor-pointer transition">Projects</li>
          </a>

        </ul>
        <Link href="#contact" className="md:block hidden bg-[#00346B] hover:bg-[#134074] text-white px-4 py-2 rounded-md text-sm font-semibold transition">
          Contact
        </Link>
    </header>
  );
}
