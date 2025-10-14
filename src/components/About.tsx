 "use client"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFlask, SiSqlalchemy } from "react-icons/si";

import React from 'react'

const About = () => {
  const [githubStats, setGithubStats] = React.useState({
    repos:0,
    commits:0,
  });
  React.useEffect(() => {
    async function fetchStats(){
      try{
        const username = "michaelfuchaka";
        const response = await fetch( `https://api.github.com/users/${username}` );
        const data = await response.json();

        setGithubStats({
          repos: data.public_repos,
          commits:100,
        })
     }
     catch (error) {
      console.error("Error fetching GitHub stats:", error);
    }
    }
     fetchStats();
  } , []);
  return (
    <section id="about" className='py-18 bg-gray-900 min-h-screen'>
      <div className='container mx-auto px-8 max-w-5xl '>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12'>Get To Know Me</h2>
      <div className='space-y-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl mx-auto '>
       <p>I began my journey in Mathematics and Computer Science in 2021, and in 2025 I made the decision to fully 
        pursue web development. Since then, I have been dedicated to mastering full-stack development and building 
        real-world projects that deliver meaningful digital experiences.</p>

        <p> What drives me is transforming code into functional, well-designed websites that solve problems and enhance user experience. I view debugging
       as a valuable part of the learning process, each challenge deepens my understanding and sharpens my skills. My goal is to continue refining my craft
      and developing high-quality, efficient, and user-centered web applications.</p>
      </div>
      {/* ---  Quick Numbers --- */}
      <div className='mt-20 text-center'>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">By The Numbers</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div  className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
          <div className="text-4xl font-bold text-blue-500 mb-2">4+</div>
          <div  className="text-sm text-gray-400">Years Learning</div>
        </div>

         <div  className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
          <div className="text-4xl font-bold text-blue-500 mb-2">11</div>
          <div  className="text-sm text-gray-400">Technologies</div>
        </div>

         <div  className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
         <div className="text-4xl font-bold text-blue-500 mb-2">{githubStats.repos}</div>
          <div  className="text-sm text-gray-400">projects Built</div>
        </div>

         <div  className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
          <div className="text-4xl font-bold text-blue-500 mb-2">100+</div>
          <div  className="text-sm text-gray-400"> Commits</div>
        </div>
      </div>
    
      </div>

      {/* --- Technologies I Use --- */}
      <div className='mt-20'>
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">Technologies I Use</h3>
        
  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
    {[
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
      { icon: <FaJsSquare className="text-yellow-400" />, name: "JavaScript" },
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
      { icon: <FaPython className="text-yellow-400" />, name: "Python" },
      { icon: <SiFlask className="text-gray-300" />, name: "Flask" },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      { icon: <SiSqlalchemy className="text-purple-400" />, name: "SQLAlchemy" },
      { icon: <FaGithub className="text-gray-200" />, name: "Git / GitHub" }
    ].map((tech) => (
      <div key={tech.name} className="bg-gray-800 p-6 rounded-lg hover:scale-105 hover:bg-gray-700 transition-transform">
        <div className="text-4xl mb-2">{tech.icon}</div>
        <div className="text-sm text-gray-300">{tech.name}</div>
      </div>
    ))}
  </div>

      </div>

   </div> 
   </section>
  )
}

export default About;