import React from 'react'

const Home = () => {
  return (
    <section
      id="home"
      className="pt-32 min-h-screen flex items-center bg-gray-900"
    >
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* === LEFT SIDE: TEXT CONTENT === */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          {/* Welcome text */}
          <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">
            Hi, I’m
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Michael Fuchaka
          </h1>

          {/* Role / Title */}
          <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
            Full Stack Developer
          </h2>

          {/* Description / Tagline */}
          <p className="text-base md:text-lg text-gray-400 max-w-xl">
            Building innovative web solutions with clean code and a creative vision.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* === RIGHT SIDE: IMAGE === */}
        <div className="flex-1 flex justify-center ">
          <img
            src="/images/portfoli.png"
            alt="Michael Fuchaka"
            className="w-64 md:w-80 lg:w-96 rounded-full border-4 border-blue-500 object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
