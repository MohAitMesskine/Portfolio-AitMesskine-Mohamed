import React from 'react';
import { Code, Palette, Zap, Users, ShieldCheck } from 'lucide-react';
import myImage from '../assets/me.jpg';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { tr } = useLanguage();
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
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Quality Assurance",
      items: ["Robot Framework", "API Testing", "Functional Testing", "ISTQB CTFL preparation"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {tr('About Me', 'À propos de moi')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700 dark:text-gray-300">
              <p className="mb-6">
        {tr(
          "I am a Full-Stack Developer and QA Engineer, and a Master's student in Information Systems Engineering. I have hands-on experience across the development lifecycle, from requirements and design to implementation, testing, and deployment. I build web applications with technologies such as Laravel, MySQL, Spring Boot, and React, and apply architectural practices that support clean, maintainable code.",
          "Je suis développeur Full-Stack et ingénieur QA, et étudiant en Master Ingénierie des Systèmes d’Information. J’interviens sur l’ensemble du cycle de développement, de l’analyse des besoins à la conception, l’implémentation, les tests et le déploiement. Je crée des applications web avec Laravel, MySQL, Spring Boot et React, en appliquant des pratiques d’architecture favorisant un code clair et maintenable."
        )}
      </p>
      <p className="mb-6">
        {tr(
          'I also focus on software quality: designing functional and API tests, automating test scenarios with Robot Framework, and checking role-based access and application workflows. I am currently preparing for the ISTQB Certified Tester Foundation Level (CTFL) exam.',
          'Je m’intéresse également à la qualité logicielle : conception de tests fonctionnels et API, automatisation avec Robot Framework et vérification des rôles et parcours applicatifs. Je prépare actuellement l’examen ISTQB Certified Tester Foundation Level (CTFL).'
        )}
      </p>
      <p>
        {tr(
          'I value collaboration, code reviews, and user-centered design, and I keep developing my skills across full-stack engineering and quality assurance.',
          'J’accorde de l’importance au travail d’équipe, aux revues de code et à la conception centrée sur l’utilisateur. Je continue à développer mes compétences en ingénierie Full-Stack et en assurance qualité.'
        )}
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
                      {tr(category.title, ({
                        Languages: 'Langages',
                        Frontend: 'Front-end',
                        Backend: 'Back-end',
                        DevOps: 'DevOps',
                        'Quality Assurance': 'Assurance qualité'
                      } as Record<string, string>)[category.title] ?? category.title)}
                    </h3>
                  </div>
                  <ul className="space-y-1">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 dark:text-gray-400 text-sm">
                        {tr(item, ({
                          'ISTQB CTFL preparation': 'Préparation ISTQB CTFL',
                          'API Testing': 'Tests API',
                          'Functional Testing': 'Tests fonctionnels',
                          'HTML5/CSS3': 'HTML5/CSS3'
                        } as Record<string, string>)[item] ?? item)}
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