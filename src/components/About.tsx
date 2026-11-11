import React from 'react';
import { CheckCircle2, Code2, Database, GraduationCap, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { tr } = useLanguage();
  const strengths = [
    { icon: <Code2 />, title: tr('Full-stack engineering', 'Ingénierie full-stack'), text: tr('React, Angular and Spring Boot applications designed for maintainability and performance.', 'Applications React, Angular et Spring Boot pensées pour la maintenabilité et la performance.') },
    { icon: <ShieldCheck />, title: tr('Quality built in', 'Qualité intégrée'), text: tr('Functional, API and automated testing to secure critical user journeys.', 'Tests fonctionnels, API et automatisés pour sécuriser les parcours critiques.') },
    { icon: <Database />, title: tr('From data to delivery', 'De la donnée à la livraison'), text: tr('Clean architecture, databases, versioning and CI/CD practices.', 'Architecture propre, bases de données, versioning et pratiques CI/CD.') },
  ];
  return (
    <section id="about" className="hero-grid relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">01 — {tr('Profile', 'Profil')}</p>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{tr('A builder who cares about the details.', 'Un profil technique, orienté résultat.')}</h2>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <GraduationCap className="h-7 w-7 text-cyan-600" />
              <p className="mt-4 font-mono text-xs uppercase tracking-wider text-slate-500">{tr('Academic background', 'Formation')}</p>
              <p className="mt-2 text-lg font-bold text-slate-900">{tr('Master in Information Systems Engineering', 'Master en Ingénierie des Systèmes d’Information')}</p>
              <p className="mt-1 text-sm text-slate-500">Université Cadi Ayyad · Morocco</p>
            </div>
          </div>
          <div>
            <p className="max-w-3xl text-xl leading-9 text-slate-200 sm:text-2xl">{tr('Full-stack developer and QA engineer with a Master’s degree in Information Systems Engineering. I turn business needs into robust, intuitive web applications—and verify that they work as expected.', 'Développeur full-stack et ingénieur QA, titulaire d’un Master en Ingénierie des Systèmes d’Information. Je transforme les besoins métier en applications web robustes et intuitives, puis je vérifie leur fiabilité.')}</p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">{tr('My approach connects product development and software quality: clear requirements, thoughtful implementation, reliable tests and continuous improvement. This makes me a versatile partner for teams looking to build with confidence.', 'Mon approche relie développement produit et qualité logicielle : besoins clairs, implémentation soignée, tests fiables et amélioration continue. C’est un profil polyvalent pour les équipes qui veulent avancer avec confiance.')}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">{strengths.map((item) => <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"><div className="inline-flex rounded-xl bg-cyan-100 p-2.5 text-cyan-700">{item.icon}</div><h3 className="mt-5 font-bold text-slate-900">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p></article>)}</div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-7 text-sm font-medium text-slate-300"><span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-300" /> React · Angular · Spring Boot</span><span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-300" /> Robot Framework · API testing</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
