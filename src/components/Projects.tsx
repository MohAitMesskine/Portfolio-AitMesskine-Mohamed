import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import stage from '../assets/stage.jpg';
import chat from '../assets/chat.jpg';
import event from '../assets/event.png';
import park from '../assets/park.png';
import school from '../assets/school.png';
import tax from '../assets/tax.png';
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  date: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Internship Management Platform",
      description: "The Internship Management Platform helps schools and companies manage internship offers, student applications, evaluations, and reports in one centralized system. It simplifies coordination between students, supervisors, and administrators.",
      image: stage,
      technologies: ["React", "Spring boot", "Mysql", "Tailwind CSS"],
      githubUrl: "https://github.com/MohAitMesskine/manage-tax",
      liveUrl: "https://example.com",
      date: "2024"
    },
    {
      id: 2,
      title: "Chatroom Application",
      description: "The Chatroom Application is a real-time messaging platform that allows users to join chat rooms, send and receive messages instantly, and communicate in a user-friendly environment. It supports multiple users and ensures smooth and secure interactions.",
      image: chat,
      technologies: ["Spring boot", "JavaSript", "Mysql"],
      githubUrl: "https://github.com/MohAitMesskine/chatRoom",
      liveUrl: "https://github.com/MohAitMesskine/chatRoom",
      date: "2024"
    },
    {
      id: 3,
      title: " Event Management System",
      description: "The Event Management System is a platform that helps organize, manage, and track events. It allows users to create events, handle registrations, send notifications, and monitor participation in a simple and efficient way.",
      image: event,
      technologies: ["Laravel", "Vue", "Mysql"],
      githubUrl: "https://github.com/amina-moueddene/Evenement_Marrakech",
      liveUrl: "https://example.com",
      date: "2023"
    },
    {
      id: 4,
      title: "School Management System",
      description: "The School Management System is a web app that helps schools manage students, teachers, classes, grades, and attendance. It improves organization, reduces paperwork, and makes communication easier for all users.",
      image:school,
      technologies: ["Vue Js", "Mysql", "Laravel"],
      githubUrl: "https://github.com/MohAitMesskine/Gestion-Scolaire",
      liveUrl: "https://example.com",
      date: "2024"
    },
    {
      id: 5,
      title: "Manage tax Platform",
      description: "Manage Tax Platform is a digital solution designed to streamline tax management, ensure compliance, and simplify filing and payment processes for businesses.",
      image: tax,
      technologies: ["Vue", "Mysql", "Laravel", "Bootstrap"],
      githubUrl: "https://github.com/MohAitMesskine/manage-tax",
      liveUrl: "https://example.com",
      date: "2023"
    },
    {
      id: 6,
      title: "Automated Parking System",
      description: "The Automated Parking System is a smart solution that manages parking spaces, monitors vehicle entry and exit, and optimizes space usage. It improves efficiency, reduces manual work, and enhances user convenience",
      image: park,
      technologies: ["TensorFlow", "OpenCV", "Django"],
      githubUrl: "https://github.com/ParkiBrain-PFE/ParkiBrain-AI",
      liveUrl: "https://example.com",
      date: "2022"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating 
            innovative solutions across different domains and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400 flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {project.date}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/MohAitMesskine?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transform hover:scale-105 transition-all duration-200"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;