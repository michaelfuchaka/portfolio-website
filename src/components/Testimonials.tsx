import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Julius Kedienye",
      role: "Team Member - JamboStays Project",
      text: "Working with Michael was an incredible experience. His dedication, problem-solving skills, and attention to detail helped our project run smoothly and efficiently.",
    },
    {
      id: 2,
      name: "Mike",
      role: "Team Member - My Bookie Project",
      text: "Michael consistently brought creative ideas and strong technical execution. His teamwork and leadership made a huge difference in our project's success.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-8 max-w-6xl">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
          What People Say
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Feedback from teammates and collaborators
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FaQuoteLeft className="text-4xl text-blue-500 mb-4" />
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                {t.text}
              </p>
              <h3 className="text-white font-bold text-lg">{t.name}</h3>
              <p className="text-gray-400 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
