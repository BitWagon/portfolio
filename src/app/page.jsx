'use client';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Home() {

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message.');
    }
  }
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
          <div className="flex justify-center space-x-6 mt-4 mb-6">
            <a
              href="https://github.com/abrahamrandhawa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="bg-gray-900 p-4 rounded-full border border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.7)] transition"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/abrahamrandhawa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-gray-900 p-4 rounded-full border border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.7)] transition"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:abrahamrandhawa@email.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="bg-gray-900 p-4 rounded-full border border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.7)] transition"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="bg-cyan-500 text-white px-6 py-3 rounded-md font-medium hover:bg-cyan-400 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-cyan-500 text-cyan-500 px-6 py-3 rounded-md font-medium hover:bg-cyan-500 hover:text-white transition"
            >
              Hire Me
            </a>
          </div>
        </div>
      </section>

     ` {/* About Section */}
<section id="about" className="py-20 px-6 bg-[#11151c] text-white">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
    
    {/* Left Image */}
    <div className="flex-shrink-0">
      <img
        src="/about-image.png" // replace with your image path
        alt="About Me"
        className="w-64 h-64 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_40px_rgba(0,255,255,0.6)]"
      />
    </div>

    {/* Right Content */}
    <div>
      <h2 className="text-4xl font-bold mb-6">
        About <span className="text-cyan-400">Me</span>
      </h2>
      <p className="text-lg mb-4 text-gray-300">
        Hello! I’m <span className="font-bold">Abdul Hamad</span>, a passionate web developer with a love for building intuitive and responsive digital experiences. I specialize in crafting dynamic web apps using 
        <span className="text-cyan-400 font-semibold"> JavaScript</span>, 
        <span className="text-cyan-400 font-semibold"> React</span>, and 
        <span className="text-cyan-400 font-semibold"> Next.js</span>. My mission is to deliver elegant and efficient solutions that solve real-world problems.
      </p>
      <p className="text-lg mb-4 text-gray-300">
        I started coding with a dream to turn ideas into reality. Over time, I’ve learned the power of clean design, scalable code, and great user experience. Whether it’s a small business website or a full-stack SaaS app, I’m all about attention to detail and continual improvement. Outside of coding, I enjoy learning new technologies, contributing to open-source, and staying updated with the latest in web development.
      </p>
      <p className="text-lg text-gray-300">
        I began my web development journey on YouTube around a year ago. During this time, I learned the fundamentals of 
        <span className="text-cyan-400 font-semibold"> HTML</span>, 
        <span className="text-cyan-400 font-semibold"> CSS</span>, 
        <span className="text-cyan-400 font-semibold"> JavaScript</span>, and responsive web design. I also created logic-based projects such as a calculator, a to-do app, and a rock-paper-scissors game using 
        <span className="text-cyan-400 font-semibold"> Math.random</span>.
      </p>
    </div>
  </div>
</section>


          {/* Services Section */}
          <section id="services" className="py-20 px-6 bg-[#212d40] text-white">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-10">My Services</h2>
              <div className="grid md:grid-cols-3 gap-8">

              {/* Service 1 */}
              <div className="bg-[#11151c] p-6 rounded-lg shadow hover:shadow-xl transition">
                <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
                <p className="text-sm text-gray-300">
                  Modern UI with React, Next.js, Tailwind CSS.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-[#11151c] p-6 rounded-lg shadow hover:shadow-xl transition">
                <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
                <p className="text-sm text-gray-300">
                  APIs, databases, auth systems using Node.js & MongoDB.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-[#11151c] p-6 rounded-lg shadow hover:shadow-xl transition">
                <h3 className="text-xl font-semibold mb-3">Full-Stack Solutions</h3>
                <p className="text-sm text-gray-300">
                  From idea to deployment, complete web app services.
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-[#11151c] p-6 rounded-lg shadow hover:shadow-xl transition">
                <h3 className="text-xl font-semibold mb-3">Bug Handling & Debugging</h3>
                <p className="text-sm text-gray-300">
                  Identify, troubleshoot, and fix errors to ensure smooth performance.
                </p>
                </div>

          {/* Service 5 */}
          <div className="bg-[#11151c] p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">SaaS Project Development</h3>
            <p className="text-sm text-gray-300">
              Build scalable, cloud-based SaaS apps tailored to business needs.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-[#11151c] p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
            <p className="text-sm text-gray-300">
              Craft intuitive, user-friendly designs for great digital experiences.
            </p>
          </div>

        </div>
      </div>
    </section>


      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-[#11151c] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Project Card 1 */}
            <div className="bg-[#212d40] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img
                src="/projects/ecommerce.jpg"
                alt="Business Manager"
                className="w-full h-40 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold mb-2">Business Manager</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Built with Next.js, Stripe, and MongoDB for a seamless checkout experience.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/BitWagon/businessmanager"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://ecommerce-demo.vercel.app"
                    target="_blank"
                    className="text-green-400 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-[#212d40] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img
                src="/projects/taskmanager.jpg"
                alt="Own Bussines"
                className="w-full h-40 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold mb-2">Own Bussines</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Productivity web app using React, Node.js, and MongoDB.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/BitWagon/own-bussines"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://taskmanager-demo.vercel.app"
                    target="_blank"
                    className="text-green-400 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-[#212d40] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img
                src="/projects/saasapp.jpg"
                alt="Solo"
                className="w-full h-40 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold mb-2">Solo</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Full SaaS product dashboard built with Next.js, Prisma, and Tailwind CSS.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/BitWagon/solo"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://saas-dashboard-demo.vercel.app"
                    target="_blank"
                    className="text-green-400 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

`
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-sm text-gray-300 mb-6">
          Have a project or want to collaborate? Let’s connect!
        </p>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border border-[#212d40] p-3 rounded-md text-black"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border border-[#212d40] p-3 rounded-md text-black"
          />
          <textarea
            rows="4"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="border border-[#212d40] p-3 rounded-md text-black"
          ></textarea>
          <button
            type="submit"
            className="bg-[#00346B] text-white px-6 py-3 rounded-md hover:bg-[#123d6e] transition"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-sm">{status}</p>}
      </div>
    </section>
    </main>
  );
}
