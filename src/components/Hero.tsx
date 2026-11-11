import React from 'react';
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';
import { useLanguage } from '../context/LanguageContext';
import myImage from '../assets/me.jpg';
import cv from '../assets/cv_aitmesskine-mohamed.pdf';

const Hero: React.FC = () => {
  const { tr } = useLanguage();
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-slate-950 pt-24 text-white">
      <div className="hero-grid absolute inset-0 opacity-30" />
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-[32rem] w-[32rem] rounded-full bg-indigo-500/25 blur-[140px]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-10">
        <div className="order-2 lg:order-1">
          {/* <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium tracking-wide text-cyan-200 backdrop-blur"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />{tr('Available for new opportunities', 'Disponible pour de nouvelles opportunités')}</div> */}
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.24em] text-cyan-300">{tr('Master ISI · Full-stack developer · QA engineer', 'Master ISI · Développeur full-stack · Ingénieur QA')}</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-tight sm:text-7xl lg:text-[5.35rem]">Mohamed<br /><span className="text-slate-400">Ait Messkine.</span></h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">{tr('I design reliable web products, from thoughtful interfaces to well-tested systems.', 'Je conçois des produits web fiables, des interfaces soignées aux systèmes rigoureusement testés.')}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => scrollToSection('projects')} className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-200">{tr('Explore my work', 'Découvrir mes projets')} <ArrowDownRight className="h-5 w-5 transition-transform group-hover:translate-y-1" /></button>
            <button onClick={() => scrollToSection('contact')} className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:border-white/40 hover:bg-white/10">{tr('Start a conversation', 'Me contacter')} <ArrowUpRight className="h-5 w-5" /></button>
            <a href={cv} download="CV_Ait_Messkine_Mohamed.pdf" className="inline-flex items-center justify-center gap-3 rounded-full border border-cyan-300/50 px-6 py-3.5 font-semibold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950">{tr('Download CV', 'Télécharger mon CV')} <Download className="h-5 w-5" /></a>
          </div>
          <div className="mt-11 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400"><span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" /> Morocco</span><a className="transition hover:text-white" href="mailto:aitmeskine.mohamed@gmail.com">aitmeskine.mohamed@gmail.com</a></div>
        </div>
        <div className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] max-w-md"><div className="absolute -inset-4 rotate-6 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10" /><div className="absolute -inset-3 -rotate-3 rounded-[2rem] border border-white/10 bg-white/5" /><div className="relative h-full overflow-hidden rounded-[1.7rem] border border-white/15 bg-slate-800 shadow-2xl shadow-black/30"><img src={myImage} alt="Mohamed Ait Messkine" className="h-full w-full object-cover object-center grayscale-[15%]" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent p-6 pt-20"><p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">Full-stack Developer</p><p className="mt-2 text-lg font-medium">&amp; QA Engineer</p></div></div><div className="absolute -right-4 top-8 rounded-2xl border border-white/15 bg-slate-900/85 p-3 shadow-xl backdrop-blur sm:-right-8 sm:p-4"><p className="text-2xl font-bold text-cyan-300">05+</p><p className="text-xs text-slate-400">{tr('core stacks', 'stacks clés')}</p></div></div>
          <div className="mt-8 flex justify-center gap-3 lg:justify-start lg:pl-8">{[{ href: 'https://github.com/MohAitMesskine', label: 'GitHub', icon: Github }, { href: 'https://www.linkedin.com/in/mohamed-aitmeskine-0072aa219/', label: 'LinkedIn', icon: Linkedin }, { href: 'mailto:aitmeskine.mohamed@gmail.com', label: 'Email', icon: Mail }].map(({ href, label, icon: Icon }) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label} className="rounded-full border border-white/15 p-3 text-slate-300 transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-slate-950"><Icon className="h-5 w-5" /></a>)}</div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
