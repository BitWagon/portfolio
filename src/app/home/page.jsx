'use client';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <main className="scroll-smooth">
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-sans">
            Hi, I'm Abraham Randhawa
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto font-sans mb-6">
            A passionate Web Developer creating modern web apps with Next.js & Tailwind CSS.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="mailto:abrahamrandhawa@email.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="hover:text-blue-400 transition"
            >
              <Mail size={28} />
            </a>
            <a
              href="https://github.com/abrahamrandhawa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-400 transition"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/abrahamrandhawa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I specialize in building full-stack web applications with clean, scalable code.
            My tech stack includes JavaScript, React, Next.js, Node.js, and MongoDB. I love solving
            real-world problems with elegant UI and performance-optimized backends.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">My Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
              <p className="text-sm">Modern UI with React, Next.js, Tailwind CSS.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
              <p className="text-sm">APIs, databases, auth systems using Node.js & MongoDB.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">Full-Stack Solutions</h3>
              <p className="text-sm">From idea to deployment, complete web app services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-100 text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-5 shadow rounded-lg text-left">
              <h3 className="text-lg font-semibold mb-2">E-commerce Platform</h3>
              <p className="text-sm">
                Built with Next.js, Stripe, and MongoDB for seamless checkout experience.
              </p>
            </div>
            <div className="bg-white p-5 shadow rounded-lg text-left">
              <h3 className="text-lg font-semibold mb-2">Task Manager App</h3>
              <p className="text-sm">
                Productivity web app using React, Node.js, and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="text-sm text-gray-600 mb-6">
            Have a project or want to collaborate? Let’s connect!
          </p>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded-md"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="border border-gray-300 p-3 rounded-md"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
