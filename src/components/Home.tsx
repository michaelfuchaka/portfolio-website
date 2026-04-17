import React from 'react'

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-900 pt-20">
      <div className="container mx-auto px-8 max-w-3xl flex flex-col items-center text-center space-y-5">

        <p className="text-gray-400 text-sm md:text-base tracking-widest uppercase">
          Full Stack Developer &nbsp;·&nbsp; Nairobi, Kenya
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Michael Fuchaka
        </h1>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
          I build end-to-end web applications using React, Next.js, Flask and PostgreSQL — from clean UIs to production-ready backends.
        </p>

        <div className="flex gap-4 flex-wrap justify-center pt-2">
          <a href="#projects" className="px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg">View My Work</a>
          <a href="/cv.pdf" download className="px-7 py-3 border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300">Download CV</a>
        </div>

      </div>
    </section>
  )
}

export default Home