import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { scrollToSection, scrollToTop } from '../utils/scrollToSection';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { tr } = useLanguage();
  const links = [{ label: tr('Profile', 'Profil'), id: 'about' }, { label: tr('Projects', 'Projets'), id: 'projects' }, { label: tr('Skills', 'Compétences'), id: 'skills' }, { label: tr('Contact', 'Contact'), id: 'contact' }];
  return <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">
    <div className="hero-grid absolute inset-0 opacity-30" />
    <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
        <div><p className="font-mono text-xs font-medium uppercase tracking-[.22em] text-cyan-300">{tr('Let’s build with confidence', 'Construisons avec confiance')}</p><h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">{tr('Ready to bring a reliable digital product to life?', 'Prêt à donner vie à un produit digital fiable ?')}</h2><p className="mt-5 max-w-xl leading-7 text-slate-400">{tr('I combine full-stack engineering and quality assurance to turn ambitious ideas into dependable web experiences.', 'J’allie ingénierie full-stack et assurance qualité pour transformer les idées ambitieuses en expériences web fiables.')}</p><a href="mailto:aitmeskine.mohamed@gmail.com" className="mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-300 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-200">{tr('Start a conversation', 'Démarrer une conversation')} <ArrowUpRight className="h-5 w-5" /></a></div>
        <div className="rounded-2xl border border-white/10 bg-white/[.04] p-6 backdrop-blur"><p className="font-mono text-xs uppercase tracking-[.18em] text-cyan-300">{tr('Contact', 'Contact')}</p><a href="mailto:aitmeskine.mohamed@gmail.com" className="mt-4 block break-all text-lg font-bold transition hover:text-cyan-300">aitmeskine.mohamed@gmail.com</a><div className="mt-5 flex items-center gap-2 text-sm text-slate-400"><MapPin className="h-4 w-4 text-cyan-300" /> Morocco</div><div className="mt-7 flex gap-3">{[{ icon: Github, label: 'GitHub', href: 'https://github.com/MohAitMesskine' }, { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-aitmeskine-0072aa219/' }, { icon: Mail, label: 'Email', href: 'mailto:aitmeskine.mohamed@gmail.com' }].map(({ icon: Icon, label, href }) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-slate-950"><Icon className="h-5 w-5" /></a>)}</div></div>
      </div>
      <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"><button onClick={scrollToTop} className="font-mono font-bold tracking-[.16em] text-white transition hover:text-cyan-300">MAM<span className="text-cyan-300">.</span></button><div className="flex flex-wrap gap-x-5 gap-y-2">{links.map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className="transition hover:text-cyan-300">{link.label}</button>)}</div><p>© {new Date().getFullYear()} Mohamed Ait Messkine</p></div>
    </div>
  </footer>;
};
export default Footer;
