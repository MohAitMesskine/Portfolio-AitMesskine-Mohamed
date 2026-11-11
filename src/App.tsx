import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Portfolio />
      </LanguageProvider>
    </ThemeProvider>
  );
}

function Portfolio() {
  const { language, tr } = useLanguage();

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Update document title
    document.title = tr(
      'Ait Messkine Mohamed - Full-Stack Developer & QA Engineer',
      'Ait Messkine Mohamed - Développeur Full-Stack & Ingénieur QA'
    );
    document.documentElement.lang = language;
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', tr(
        'Full-Stack Developer and QA Engineer specializing in web applications, Robot Framework test automation, and software quality. Currently preparing for ISTQB CTFL.',
        'Développeur Full-Stack et ingénieur QA spécialisé dans les applications web, l’automatisation des tests avec Robot Framework et la qualité logicielle. Préparation ISTQB CTFL en cours.'
      ));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = tr(
        'Full-Stack Developer and QA Engineer specializing in web applications, Robot Framework test automation, and software quality. Currently preparing for ISTQB CTFL.',
        'Développeur Full-Stack et ingénieur QA spécialisé dans les applications web, l’automatisation des tests avec Robot Framework et la qualité logicielle. Préparation ISTQB CTFL en cours.'
      );
      document.head.appendChild(meta);
    }

    // Add viewport meta tag if not present
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(meta);
    }

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [language, tr]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;