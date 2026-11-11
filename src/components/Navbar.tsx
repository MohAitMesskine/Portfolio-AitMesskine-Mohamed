import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { scrollToSection } from '../utils/scrollToSection';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, tr } = useLanguage();
  const navItems = [{ label: tr('About', 'À propos'), id: 'about' }, { label: tr('Projects', 'Projets'), id: 'projects' }, { label: tr('Skills', 'Compétences'), id: 'skills' }, { label: tr('Contact', 'Contact'), id: 'contact' }];
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);
  const go = (id: string) => { scrollToSection(id); setIsOpen(false); };
  return <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-slate-200/80 bg-white/85 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85' : 'bg-transparent'}`}>
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
      <button onClick={() => go('home')} className={`font-mono text-sm font-bold tracking-[0.18em] ${scrolled ? 'text-slate-950 dark:text-white' : 'text-white'}`}>MAM<span className="text-cyan-400">.</span></button>
      <div className={`hidden items-center gap-1 rounded-full px-2 py-1 md:flex ${scrolled ? 'bg-slate-100 dark:bg-white/5' : 'bg-white/10 backdrop-blur'}`}>{navItems.map(item => <button key={item.id} onClick={() => go(item.id)} className={`rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white/15 ${scrolled ? 'text-slate-600 dark:text-slate-300 dark:hover:bg-white/10' : 'text-slate-200'}`}>{item.label}</button>)}</div>
      <div className="flex items-center gap-2"><button onClick={toggleLanguage} className={`rounded-full px-3 py-2 text-xs font-bold ${scrolled ? 'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200' : 'bg-white/10 text-white'}`}>{language === 'en' ? 'FR' : 'EN'}</button><button onClick={toggleTheme} aria-label="Toggle theme" className={`rounded-full p-2 ${scrolled ? 'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200' : 'bg-white/10 text-white'}`}>{theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}</button><button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className={`rounded-full p-2 md:hidden ${scrolled ? 'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200' : 'bg-white/10 text-white'}`}>{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button></div>
    </div>
    {isOpen && <div className="border-t border-white/10 bg-slate-950 px-5 py-4 md:hidden"><div className="mx-auto grid max-w-7xl gap-1">{navItems.map(item => <button key={item.id} onClick={() => go(item.id)} className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-200 hover:bg-white/10">{item.label}</button>)}</div></div>}
  </nav>;
};
export default Navbar;
