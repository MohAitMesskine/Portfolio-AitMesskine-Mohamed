import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import stage from '../assets/stage.jpg';
import chat from '../assets/chat.jpg';
import event from '../assets/event.png';
import park from '../assets/park.png';
import school from '../assets/school.png';
import tax from '../assets/tax.png';
import robotFramework from '../assets/robotframwork.png';
import { useLanguage } from '../context/LanguageContext';
interface Project {
  id: number;
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  date?: string;
}

const Projects: React.FC = () => {
  const { language, tr } = useLanguage();
  const projects: Project[] = [
    {
      id: 7,
      title: { en: "MyJobs Maroc — Test Automation", fr: "MyJobs Maroc — Automatisation des tests" },
      description: {
        en: "Automated API and functional testing for a Moroccan recruitment platform using Robot Framework. The suite reports 35/35 tests passed (100%) across job search, candidate authentication and applications, admin and employee workflows, Elasticsearch integration, and role-based permissions. Tests run against isolated temporary environments and generate HTML and XML reports.",
        fr: "Automatisation des tests API et fonctionnels d’une plateforme marocaine de recrutement avec Robot Framework. La suite affiche 35 tests réussis sur 35 (100 %) et couvre la recherche d’emploi, l’authentification et les candidatures, les parcours administrateur et employé, Elasticsearch et les permissions par rôle. Les tests utilisent des environnements temporaires isolés et génèrent des rapports HTML et XML."
      },
      image: robotFramework,
      technologies: ["Robot Framework", "Python", "RequestsLibrary", "REST API", "Elasticsearch"],
      githubUrl: "https://github.com/MohAitMesskine/jobs-robot_Framework"
    },
    {
      id: 1,
      title: { en: "Internship Management Platform", fr: "Plateforme de gestion des stages" },
      description: {
        en: "The Internship Management Platform helps schools and companies manage internship offers, student applications, evaluations, and reports in one centralized system. It simplifies coordination between students, supervisors, and administrators.",
        fr: "Une plateforme centralisée permettant aux écoles et aux entreprises de gérer les offres de stage, les candidatures, les évaluations et les rapports, tout en facilitant la coordination entre étudiants, encadrants et administrateurs."
      },
      image: stage,
      technologies: ["React", "Spring boot", "Mysql", "Tailwind CSS"],
      githubUrl: "https://github.com/MohAitMesskine/manage-tax",
      liveUrl: "https://example.com",
      date: "2024"
    },
    {
      id: 2,
      title: { en: "Chatroom Application", fr: "Application de chat en temps réel" },
      description: {
        en: "A real-time messaging platform where users can join chat rooms, send and receive messages instantly, and communicate in a user-friendly environment.",
        fr: "Une plateforme de messagerie en temps réel où les utilisateurs peuvent rejoindre des salons de discussion, échanger instantanément et communiquer dans une interface conviviale."
      },
      image: chat,
      technologies: ["Spring boot", "JavaSript", "Mysql"],
      githubUrl: "https://github.com/MohAitMesskine/chatRoom",
      liveUrl: "https://github.com/MohAitMesskine/chatRoom",
      date: "2024"
    },
    {
      id: 3,
      title: { en: "Event Management System", fr: "Système de gestion d’événements" },
      description: {
        en: "A platform to organize and track events, manage registrations, send notifications, and monitor participation.",
        fr: "Une plateforme pour organiser et suivre des événements, gérer les inscriptions, envoyer des notifications et suivre la participation."
      },
      image: event,
      technologies: ["Laravel", "Vue", "Mysql"],
      githubUrl: "https://github.com/amina-moueddene/Evenement_Marrakech",
      liveUrl: "https://example.com",
      date: "2023"
    },
    {
      id: 4,
      title: { en: "School Management System", fr: "Système de gestion scolaire" },
      description: {
        en: "A web application that helps schools manage students, teachers, classes, grades, and attendance.",
        fr: "Une application web permettant aux établissements de gérer les élèves, enseignants, classes, notes et présences."
      },
      image:school,
      technologies: ["Vue Js", "Mysql", "Laravel"],
      githubUrl: "https://github.com/MohAitMesskine/Gestion-Scolaire",
      liveUrl: "https://example.com",
      date: "2024"
    },
    {
      id: 5,
      title: { en: "Tax Management Platform", fr: "Plateforme de gestion fiscale" },
      description: {
        en: "A digital solution designed to streamline tax management, ensure compliance, and simplify filing and payment processes for businesses.",
        fr: "Une solution numérique qui simplifie la gestion fiscale, favorise la conformité et facilite les déclarations et paiements des entreprises."
      },
      image: tax,
      technologies: ["Vue", "Mysql", "Laravel", "Bootstrap"],
      githubUrl: "https://github.com/MohAitMesskine/manage-tax",
      liveUrl: "https://example.com",
      date: "2023"
    },
    {
      id: 6,
      title: { en: "Automated Parking System", fr: "Système de stationnement automatisé" },
      description: {
        en: "A smart solution that manages parking spaces, monitors vehicle entry and exit, and optimizes space usage.",
        fr: "Une solution intelligente qui gère les places de stationnement, surveille les entrées et sorties des véhicules et optimise l’utilisation de l’espace."
      },
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
            {tr('Recent Projects', 'Projets récents')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {tr(
              'Here are some of my recent projects that showcase my skills and passion for creating innovative solutions across different domains and technologies.',
              'Découvrez quelques projets qui illustrent mes compétences et mon intérêt pour la création de solutions innovantes avec différentes technologies.'
            )}
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
                  alt={project.title[language]}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.date && (
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.date}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title[language]}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description[language]}
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
                    {tr('Code', 'Code')}
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {tr('Demo', 'Démo')}
                    </a>
                  )}
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
            {tr('View All Projects on GitHub', 'Voir tous les projets sur GitHub')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;