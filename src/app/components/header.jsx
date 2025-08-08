
'use client';
import { motion } from 'framer-motion';

export default function HeaderPage() {
  return (
    <header className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-4 px-6 shadow-md">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto flex justify-between items-center"
      >
        <div className="text-2xl font-bold text-blue-400">
          Abraham Randhawa
        </div>
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <li className="hover:text-white cursor-pointer transition">Home</li>
          <li className="hover:text-white cursor-pointer transition">About</li>
          <li className="hover:text-white cursor-pointer transition">Services</li>
          <li className="hover:text-white cursor-pointer transition">Projects</li>
        </ul>
        <button className="md:block hidden bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition">
          Contact
        </button>
      </motion.nav>
    </header>
  );
}
