// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#1c1d2a] text-gray-300 px-6 py-10">
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
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Project</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Get in Touch</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span>📧</span>
              abdulhamad373@email.com
            </li>
            <li className="flex items-center gap-2">
              <span>📍</span>
              Fasilabad, Pakistan
            </li>
            <li className="flex items-center gap-4 pt-2 text-lg">
              <a href="#" className="hover:text-white">🐱</a>
              <a href="#" className="hover:text-white">🔗</a>
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
