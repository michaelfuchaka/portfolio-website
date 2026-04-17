import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-8 max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
          Let&apos;s Connect
        </h2>

        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          I&apos;m open to new opportunities and collaborations. Feel free to reach out.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-12">
          <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors text-center w-full md:w-1/3">
            <FaEnvelope className="text-5xl text-blue-500 mb-4 mx-auto" />
            <p className="text-gray-400 text-sm mb-2">Email</p>
            <a href="mailto:fuchakamichael06@gmail.com" className="text-white text-lg hover:text-blue-400 break-all">fuchakamichael06@gmail.com</a>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors text-center w-full md:w-1/3">
            <FaLinkedin className="text-5xl text-blue-500 mb-4 mx-auto" />
            <p className="text-gray-400 text-sm mb-2">LinkedIn</p>
            <a href="https://www.linkedin.com/in/fuchaka-michael-557775254/" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-blue-400">Connect on LinkedIn</a>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors text-center w-full md:w-1/3">
            <FaGithub className="text-5xl text-blue-500 mb-4 mx-auto" />
            <p className="text-gray-400 text-sm mb-2">GitHub</p>
            <a href="https://github.com/michaelfuchaka" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-blue-400">github.com/michaelfuchaka</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;