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
      description: 'Building complete web applications from frontend to backend with modern technologies',
      Icon: FaCode,
    },
    {
      title: 'Frontend Development',
      description: 'Creating responsive, user-friendly interfaces with React, TypeScript, and Tailwind CSS',
      Icon: FaLaptopCode,
    },
    {
      title: 'Backend Development',
      description: 'Developing robust APIs and server-side logic with Python/Flask and Node.js',
      Icon: FaServer,
    },
    {
      title: 'Database Design & Integration',
      description: 'Designing and implementing efficient database solutions with SQLAlchemy',
      Icon: FaDatabase,
    },
    {
      title: 'Responsive Design',
      description: 'Crafting mobile-first, pixel-perfect designs that work seamlessly across all devices',
      Icon: FaMobile,
    },
    {
      title: 'API Integration',
      description: 'Connecting applications with third-party services and building RESTful APIs',
      Icon: FaPlug,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-8 max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 hover:scale-105 transition-transform"
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
