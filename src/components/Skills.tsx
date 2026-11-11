import React from 'react';
import { Code, Palette, Database, Cloud, Smartphone, PenTool as Tool, Globe, Zap, ShieldCheck, BookOpen } from 'lucide-react';
import javaCertificate from '../assets/java.png';
import qualitySoftwareCertificate from '../assets/quality_software.png';
import anthropicCertificate from '../assets/anthropic.png';
import { useLanguage } from '../context/LanguageContext';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    level?: number;
    color?: string;
  }>;
}

const Skills: React.FC = () => {
  const { tr } = useLanguage();
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "React", level: 95, color: "bg-blue-500" },
        { name: "Vue.js", level: 90, color: "bg-gray-800" },
        { name: "TypeScript", level: 88, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
        { name: "Angular.js", level: 70, color: "bg-green-500" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Laravel", level: 90, color: "bg-green-600" },
        { name: "Spring Boot", level: 85, color: "bg-yellow-500" },
        { name: "Django", level: 82, color: "bg-red-600" },
       
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MySQL", level: 88, color: "bg-blue-700" },
        { name: "MongoDB", level: 85, color: "bg-green-600" },
        { name: "Firebase", level: 78, color: "bg-yellow-600" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Docker", level: 88, color: "bg-blue-600" },
        { name: "Jenkins", level: 75, color: "bg-blue-700" },
        { name: "CI/CD", level: 82, color: "bg-purple-600" },
        { name: "Linux", level: 80, color: "bg-gray-800" }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [   
        { name: "Flutter", level: 75, color: "bg-blue-400" },
      ]
    },
    {
      title: "Tools & Others",
      icon: <Tool className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 95, color: "bg-orange-600" },
        { name: "Figma", level: 80, color: "bg-purple-500" },
      ]
    },
    {
      title: "Quality Assurance",
      icon: <ShieldCheck className="w-6 h-6" />,
      skills: [
        { name: "Robot Framework", level: 85, color: "bg-purple-600" },
        { name: "API Testing", level: 85, color: "bg-blue-600" },
        { name: "Functional Testing", level: 82, color: "bg-emerald-600" },
        { name: "Test Design", level: 80, color: "bg-orange-500" },
        { name: "ISTQB CTFL (in preparation)" }
      ]
    }
  ];

  const topSkills = [
    { name: "JavaScript", icon: <Globe className="w-8 h-8" />, years: "5+" },
    { name: "React", icon: <Zap className="w-8 h-8" />, years: "2+" },
    { name: "Laravel", icon: <Code className="w-8 h-8" />, years: "3+" },
    { name: "Spring Boot", icon: <Database className="w-8 h-8" />, years: "1+" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {tr('Skills, Certifications & Education', 'Compétences, certifications et formation')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {tr(
              'Full-stack engineering, test automation, and my academic and professional qualifications.',
              'Ingénierie Full-Stack, automatisation des tests et parcours académique et professionnel.'
            )}
          </p>
        </div>

        {/* Top Skills Highlight */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {topSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full text-white mb-4">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {skill.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {skill.years} years
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {tr(category.title, ({
                    'Frontend Development': 'Développement Front-end',
                    'Backend Development': 'Développement Back-end',
                    'Database & Storage': 'Bases de données et stockage',
                    'Cloud & DevOps': 'Cloud et DevOps',
                    'Mobile Development': 'Développement mobile',
                    'Tools & Others': 'Outils et autres',
                    'Quality Assurance': 'Assurance qualité'
                  } as Record<string, string>)[category.title] ?? category.title)}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className={`flex justify-between items-center ${skill.level === undefined ? '' : 'mb-2'}`}>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {tr(skill.name, skill.name === 'ISTQB CTFL (in preparation)' ? 'ISTQB CTFL (en préparation)' : skill.name)}
                      </span>
                      {skill.level !== undefined && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      )}
                    </div>
                    {skill.level !== undefined && (
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {tr('Certifications', 'Certifications')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Oracle Certified Professional: Java SE 21 Developer (2026)",
                image: javaCertificate,
                alt: "Oracle Certified Professional Java SE 21 Developer certificate"
              },
              {
                title: "Engineering Practices for Building Quality Software — Coursera (2025)",
                image: qualitySoftwareCertificate,
                alt: "Engineering Practices for Building Quality Software certificate"
              },
              {
                title: "Anthropic AI Agent",
                image: anthropicCertificate,
                alt: "Anthropic AI Agent"
              }
            ].map((cert) => (
              <div 
                key={cert.title}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={cert.image}
                  alt={cert.alt}
                  className="w-full h-48 object-contain mb-4"
                  loading="lazy"
                />
                <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {cert.title === "Oracle Certified Professional: Java SE 21 Developer (2026)"
                    ? tr(cert.title, "Oracle Certified Professional : Développeur Java SE 21 (2026)")
                    : cert.title === "Engineering Practices for Building Quality Software — Coursera (2025)"
                      ? tr(cert.title, "Pratiques d’ingénierie pour la qualité logicielle — Coursera (2025)")
                      : cert.title}
                </h4>
              </div>
            ))}
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-700 dark:text-blue-300">
            <BookOpen className="w-4 h-4" />
            {tr(
              'Currently preparing for the ISTQB Certified Tester Foundation Level (CTFL) exam',
              'Préparation en cours à l’examen ISTQB Certified Tester Foundation Level (CTFL)'
            )}
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {tr('Education', 'Formation')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                institution: "Université Cadi Ayyad",
                degree: "Master's in Information Systems Engineering",
                period: "2024–2026",
                location: "Marrakech, Morocco"
              },
              {
                institution: "Université Ibn Zohr",
                degree: "Bachelor's in Mathematical Sciences and Computer Science",
                period: "2022–2024",
                location: "Agadir, Morocco"
              },
              {
                institution: "École Supérieure de Technologie",
                degree: "University Diploma of Technology (DUT) in Computer Engineering",
                period: "2020–2022",
                location: "Meknès, Morocco"
              }
            ].map((education) => (
              <article
                key={education.institution}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-left"
              >
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {education.period}
                </p>
                <h4 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">
                  {education.institution}
                </h4>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  {tr(education.degree, ({
                    "Master's in Information Systems Engineering": "Master en ingénierie des systèmes d’information",
                    "Bachelor's in Mathematical Sciences and Computer Science": "Licence en sciences mathématiques et informatique",
                    "University Diploma of Technology (DUT) in Computer Engineering": "DUT en génie informatique"
                  } as Record<string, string>)[education.degree] ?? education.degree)}
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {tr(education.location, ({
                    "Marrakech, Morocco": "Marrakech, Maroc",
                    "Agadir, Morocco": "Agadir, Maroc",
                    "Meknès, Morocco": "Meknès, Maroc"
                  } as Record<string, string>)[education.location] ?? education.location)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;