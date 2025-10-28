import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8 mt-auto">
      <div className="container mx-auto px-8 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Left: Brand/About */}
        <div>
          <h3 className="text-xl font-semibold text-white">Michael Fuchaka</h3>
          <p className="text-gray-400 mt-1 text-sm">Full-Stack Web Developer</p>
        </div>

        {/* Center: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 flex justify-center md:justify-start gap-6 text-gray-300 text-base">

            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#services" className="hover:text-blue-400">Services</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          </ul>
        </div>

        {/* Right: Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-white">Connect with Me</h4>
          <div className="mt-2 flex justify-center md:justify-start gap-4">
            <a href="https://github.com/michaelfuchaka" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-400 hover:text-blue-500">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/fuchaka-michael-557775254/" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-400 hover:text-blue-500">
              <FaLinkedin />
            </a>
            <a href="mailto:fuchakamichael06@gmail.com" className="text-xl text-gray-400 hover:text-blue-500">
              <FaEnvelope />
            </a>
            <a href="https://x.com/MrAbc254" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-400 hover:text-blue-500">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        <p>&copy; 2025 Michael Fuchaka. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
