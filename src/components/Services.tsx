import React from 'react';
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaMobile, FaPlug } from 'react-icons/fa';
import { IconType } from 'react-icons';

type Service = {
  title: string;
  description: string;
  Icon: IconType;
};

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Full Stack Web Development',
      description: 'End-to-end web applications with modern tech stack',
      Icon: FaCode,
    },
    {
      title: 'Frontend Development',
      description: 'Beautiful, responsive UIs with React and TypeScript',
      Icon: FaLaptopCode,
    },
    {
      title: 'Backend Development',
      description: 'Robust APIs and server logic with Python/Flask or Node.js',
      Icon: FaServer,
    },
    {
      title: 'Database Design & Integration',
      description: 'Efficient database design and integration',
      Icon: FaDatabase,
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first designs that work everywhere"',
      Icon: FaMobile,
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with third-party services and APIs',
      Icon: FaPlug,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-8 max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
         What I Offer
        </h2>
        
            
          <p className="text-gray-400 text-center mb-12 md:mb-16">
             Turning ideas into reality with modern web technologies  
            </p> 


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, description, Icon }) => (
            <div
              key={title}
             className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors"

            >
              <div className="text-5xl text-blue-500 mb-4">
                <Icon />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-gray-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
