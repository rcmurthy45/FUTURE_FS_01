import { Github, Linkedin, Mail, Code2, Heart, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-white text-lg">
                Ram<span className="gradient-text">.</span>dev
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              AI & Data Science Student passionate about building intelligent solutions and scalable web applications.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-slate-300 font-semibold text-sm mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-500 hover:text-cyan-400 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-300 font-semibold text-sm mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-slate-500">
              <div>surlaram2@gmail.com</div>
              <div>+91 8374196922</div>
              <div>Visakhapatnam, AP, India</div>
            </div>
            <div className="flex gap-3 mt-4">
              {[
                { icon: Github, href: 'https://github.com/rcmurthy45', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/ramchandramurthysurla652855329', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:surlaram2@gmail.com', label: 'Email' },
              ].map(s => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                    aria-label={s.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            Built with <Heart size={12} className="text-rose-500 fill-rose-500" /> by{' '}
            <span className="text-slate-400 font-medium">Surla Ram Chandra Murthy</span>
          </p>
          <p className="text-slate-700 text-xs">
            © {new Date().getFullYear()} — All rights reserved
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-600 hover:text-cyan-400 text-sm transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
