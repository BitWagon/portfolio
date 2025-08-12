import Link from "next/link";
import { Mail, MapPin, Github } from "lucide-react"; // removed Linkedin

export default function Footer() {
  return (
    <footer className="bg-[#11151c] text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Name + Description */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Abraham Randhawa</h2>
          <p className="text-sm leading-relaxed">
            Passionate Web Developer building modern and scalable applications
            using Next.js and Tailwind CSS.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <Link href="#home">
              <li className="hover:text-[#00346B] cursor-pointer">Home</li>
            </Link>
            <Link href="#about">
              <li className="hover:text-[#00346B] cursor-pointer">About</li>
            </Link>
            <Link href="#services">
              <li className="hover:text-[#00346B] cursor-pointer">Services</li>
            </Link>
            <Link href="#projects">
              <li className="hover:text-[#00346B] cursor-pointer">Projects</li>
            </Link>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Get in Touch</h2>
          <ul className="space-y-2 text-sm">
            <Link href="https://mail.google.com/mail/u/0/#inbox/FMfcgzQcpKbBxrlPPZNGscKxSxJVPZdJ">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                abrahamrandhawa@gmail.com
              </li>
            </Link>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              Fasilabad, Pakistan
            </li>
            <li className="flex items-center gap-4 pt-2 text-lg">
              <a href="https://github.com/BitWagon" className="hover:text-[#00346B] ">
                <Github size={20} />
              </a>
              <a
                href="https://www.fiverr.com/abrahamrandhawa/buying?source=avatar_menu_profile"
                className="hover:text-[#00346B]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Fiverr SVG Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.31 8.44v-.92h1.73V4.7h-1.73V3.5a1.53 1.53 0 0 1 1.53-1.53h2.44V0h-2.44a3.94 3.94 0 0 0-3.94 3.94v.76H10.5V8.5h2.7v8.62a4.65 4.65 0 0 0 4.64 4.64h2.51v-2.91h-2.51a1.75 1.75 0 0 1-1.73-1.73V8.44h0zM0 8.5v13.26h3.32v-4.4h3.32v-3.33H3.32V8.5H0z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2025 Abraham Randhawa. All rights reserved.
      </div>
    </footer>
  );
}
