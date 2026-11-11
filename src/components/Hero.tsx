import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';
import { useLanguage } from '../context/LanguageContext';
import myImage from '../assets/me.jpg';


const Hero: React.FC = () => {
  const { tr } = useLanguage();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 p-1 animate-pulse">
              <img
                src={myImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 animate-spin-slow opacity-75 blur-sm"></div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Ait Messkine Mohamed
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light">
              {tr('Full-Stack Developer & QA Engineer', 'Développeur Full-Stack & Ingénieur QA')}
            </h2>
          </div>

          {/* Introduction */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {tr(
              'I build full-stack web applications and help ensure their quality through thoughtful test automation. Currently preparing for the ISTQB Certified Tester Foundation Level (CTFL) exam.',
              'Je développe des applications web Full-Stack et veille à leur qualité grâce à l’automatisation des tests. Je prépare actuellement la certification ISTQB Certified Tester Foundation Level (CTFL).'
            )}
          </p>

          {/* Social Links */}
         <div className="flex justify-center space-x-6">
  <a
    href="https://github.com/MohAitMesskine"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110"
    aria-label="GitHub"
  >
    <Github className="w-6 h-6" />
  </a>

  <a
    href="https://www.linkedin.com/in/mohamed-aitmeskine-0072aa219/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110"
    aria-label="LinkedIn"
  >
    <Linkedin className="w-6 h-6" />
  </a>

  <a
    href="mailto:aitmeskine.mohamed@gmail.com"
    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110"
    aria-label="Email"
  >
    <Mail className="w-6 h-6" />
  </a>
</div>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {tr('View My Projects', 'Voir mes projets')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transform hover:scale-105 transition-all duration-200"
            >
              {tr('Contact Me', 'Me contacter')}
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;