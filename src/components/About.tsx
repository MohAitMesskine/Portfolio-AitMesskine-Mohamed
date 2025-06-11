import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';
 import myImage from '../assets/me.jpg';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Languages",
      items: ["JavaScript", "TypeScript", "Java", "Python", "PHP"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Frontend",
      items: ["React", "Angular", "Vue.js", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Backend",
      items: ["Spring Boot","Node.js", "Laravel", "Django", "MongoDB"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "DevOps",
      items: ["Git", "Docker", "Jenkins", "CI/CD", "Linux"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700 dark:text-gray-300">
              <p className="mb-6">
              Master’s student in Information Systems Engineering with hands-on experience gained through multiple internships, 
              covering every phase of the development lifecycle: 
              requirements gathering, design, implementation, testing, and deployment. 
              I have worked on web projects using Laravel/MySQL for the backend and Spring Boot/React for RESTful services.
               These roles taught me to write clean, maintainable code, adhere to architectural best practices (MVC, layer separation, 
               DTO/Entity mapping).

      </p>
              <p className="mb-6">
                I appreciate the importance of collaboration during code reviews. Driven by a user-centered mindset,
                I design intuitive, high-performance solutions while anticipating future system scalability. Passionate about open source 
                and mentoring, I continuously explore emerging trends in web development and DevOps to expand my skill set.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, mentoring 
                junior developers, or exploring the latest trends in web development and AI.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              {highlights.map((category, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-1">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 dark:text-gray-400 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-first">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                
                 src={myImage}
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;