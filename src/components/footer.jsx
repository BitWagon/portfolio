import Link from "next/link";
import { Mail, MapPin, Github, Linkedin } from "lucide-react"; // lucide icons

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
              <li className="hover:text-white cursor-pointer">Home</li>
            </Link>
            <Link href="#about">
              <li className="hover:text-white cursor-pointer">About</li>
            </Link>
            <Link href="#services">
              <li className="hover:text-white cursor-pointer">Services</li>
            </Link>
            <Link href="#projects">
              <li className="hover:text-white cursor-pointer">Projects</li>
            </Link>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Get in Touch</h2>
          <ul className="space-y-2 text-sm">
            <Link href='https://mail.google.com/mail/u/0/#inbox/FMfcgzQcpKbBxrlPPZNGscKxSxJVPZdJ'>
            <li className="flex items-center gap-2 text-[#]">
              <Mail size={16} />
              abrahamrandhawa@gmail.com
            </li>
            </Link>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              Fasilabad, Pakistan
            </li>
            <li className="flex items-center gap-4 pt-2 text-lg">
              <a href="#" className="hover:text-white">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2025 Abdul Hamad. All rights reserved.
      </div>
    </footer>
  );
}
