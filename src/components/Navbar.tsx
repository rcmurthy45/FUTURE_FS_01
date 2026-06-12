import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-navy-900/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={e => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-white text-lg hidden sm:block">
                Ram<span className="gradient-text">.</span>dev
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-cyan-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-cyan-500/10 rounded-lg border border-cyan-500/20"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </motion.a>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <motion.a
                href="/Surla_RamChandraMurthy_Resume.docx"
                download
                className="hidden lg:flex btn-primary text-sm py-2 px-5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
              <button
                onClick={() => setMobileOpen(v => !v)}
                className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-navy-900/95 backdrop-blur-xl border-b border-white/5 lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="/Surla_RamChandraMurthy_Resume.docx"
                download
                className="mt-2 btn-primary text-sm text-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
