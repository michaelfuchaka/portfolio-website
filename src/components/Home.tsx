import React from 'react'

const Home = () => {
  return (
    <section id="home" className="pt-24 min-h-screen flex items-center bg-gray-900">
      <div className="container mx-auto px-8 flex flex-col items-center text-center space-y-6">
        <p className="text-sm text-blue-400 uppercase tracking-widest font-semibold">Hi, I'm</p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Michael{' '}
          <span style={{ background: 'linear-gradient(90deg, #3b82f6, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Fuchaka
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">Full Stack Developer</h2>

        <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
          Building innovative web solutions with clean code and a creative vision.
        </p>

        <div className="flex gap-4 mt-4 flex-wrap justify-center">
          <a href="#projects" className="px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg">View Projects</a>
          <a href="#contact" className="px-7 py-3 border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Home