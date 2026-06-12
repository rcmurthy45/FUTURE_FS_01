import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown, MapPin } from 'lucide-react';

const typingTexts = [
  'AI & Data Science Student',
  'Full Stack Developer',
  'Future Data Engineer',
  'Problem Solver',
  'Technology Enthusiast',
];

function useTyping(texts: string[]) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const speed = deleting ? 40 : 80;
    const pauseOnComplete = 1800;
    const pauseOnEmpty = 400;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        } else {
          setTimeout(() => setDeleting(true), pauseOnComplete);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        } else {
          setTimeout(() => {
            setDeleting(false);
            setTextIndex(i => (i + 1) % texts.length);
          }, pauseOnEmpty);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts]);

  return displayText;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string }[] = [];
    const colors = ['rgba(6,182,212,', 'rgba(16,185,129,', 'rgba(99,102,241,'];

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6,182,212,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="particles-canvas" />;
}

export default function Hero() {
  const typedText = useTyping(typingTexts);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900 grid-pattern" />
      <ParticleCanvas />

      {/* Gradient orbs */}
      <div className="orb w-96 h-96 bg-cyan-500 top-1/4 -left-32" />
      <div className="orb w-80 h-80 bg-emerald-500 bottom-1/4 -right-20" />
      <div className="orb w-64 h-64 bg-blue-600 top-10 right-1/4" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="tag">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4"
            >
              Surla Ram
              <br />
              <span className="gradient-text">Chandra Murthy</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="h-10 mb-6"
            >
              <span className="text-xl sm:text-2xl font-medium text-cyan-400 typing-cursor">
                {typedText}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-slate-400 text-lg leading-relaxed mb-4 max-w-xl"
            >
              "Building Intelligent Solutions Through Data and Code."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-2 text-slate-500 text-sm mb-8"
            >
              <MapPin size={14} className="text-cyan-500" />
              Visakhapatnam, Andhra Pradesh, India
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <a href="/Surla_RamChandraMurthy_Resume.docx" download className="btn-primary flex items-center gap-2">
                <Download size={16} />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-secondary flex items-center gap-2"
              >
                <Mail size={16} />
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/rcmurthy45"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ramchandramurthysurla652855329"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:surlaram2@gmail.com"
                className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail size={20} />
              </a>
              <div className="h-5 w-px bg-white/10" />
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span><span className="text-white font-semibold">2+</span> Projects</span>
                <span><span className="text-white font-semibold">3+</span> Certs</span>
                <span><span className="text-white font-semibold">2nd</span> Year</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/20 animate-spin-slow" style={{ inset: '-20px' }} />
              <div className="absolute inset-0 rounded-full border border-emerald-500/10 animate-spin-slow" style={{ inset: '-40px', animationDirection: 'reverse', animationDuration: '12s' }} />

              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full" style={{ inset: '-4px', background: 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(16,185,129,0.2), rgba(6,182,212,0.3))', filter: 'blur(8px)' }} />

              {/* Photo container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <img
                  src="/WhatsApp_Image_2026-06-12_at_8.10.51_PM.jpeg"
                  alt="Surla Ram Chandra Murthy"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-card px-3 py-2 text-xs font-semibold text-emerald-400 border-emerald-500/20 shadow-lg"
              >
                AI & DS
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass-card px-3 py-2 text-xs font-semibold text-cyan-400 border-cyan-500/20 shadow-lg"
              >
                Full Stack
              </motion.div>
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -left-12 glass-card px-3 py-2 text-xs font-semibold text-slate-300 shadow-lg hidden lg:block"
              >
                B.Tech 2028
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors group"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
