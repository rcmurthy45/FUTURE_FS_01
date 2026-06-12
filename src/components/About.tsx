import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code2, Database, Lightbulb, Target, TrendingUp } from 'lucide-react';

const traits = [
  {
    icon: Brain,
    title: 'AI Enthusiast',
    description: 'Passionate about machine learning, neural networks, and intelligent systems that solve real-world problems.',
    color: 'cyan',
  },
  {
    icon: Code2,
    title: 'Full Stack Developer',
    description: 'Building scalable web applications from frontend interfaces to robust backend architectures.',
    color: 'emerald',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Designing data pipelines and analytics solutions to extract meaningful insights from complex datasets.',
    color: 'blue',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Applying computational thinking and creativity to tackle challenging real-world technical problems.',
    color: 'amber',
  },
  {
    icon: Target,
    title: 'Goal Oriented',
    description: 'Focused on building a strong foundation in technology while continuously exploring emerging fields.',
    color: 'rose',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learner',
    description: 'Committed to staying at the forefront of technology through hands-on projects and self-driven learning.',
    color: 'purple',
  },
];

const colorMap: Record<string, string> = {
  cyan: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 text-cyan-400',
  emerald: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-400',
  blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-400',
  amber: 'from-amber-500/20 to-amber-500/5 border-amber-500/20 text-amber-400',
  rose: 'from-rose-500/20 to-rose-500/5 border-rose-500/20 text-rose-400',
  purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/20 text-purple-400',
};

const stats = [
  { value: '2024', label: 'Started B.Tech' },
  { value: '2+', label: 'AI Projects' },
  { value: '3+', label: 'Certifications' },
  { value: '90.1%', label: 'Intermediate Score' },
];

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/50 to-navy-900" />
      <div className="orb w-72 h-72 bg-cyan-500 top-1/2 -translate-y-1/2 -left-36 opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-flex">About Me</span>
          <h2 className="section-title">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p className="section-subtitle">
            A passionate B.Tech student bridging the worlds of artificial intelligence and software engineering.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Bio text */}
          <AnimatedSection>
            <div className="glass-card p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Turning Ideas Into <span className="gradient-text">Reality</span>
              </h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I'm <span className="text-white font-medium">Surla Ram Chandra Murthy</span>, a second-year B.Tech student
                  specializing in <span className="text-cyan-400">Artificial Intelligence and Data Science</span> at Vignan
                  Institute of Information Technology, Visakhapatnam.
                </p>
                <p>
                  My journey in technology is driven by a deep passion for solving real-world problems through intelligent
                  systems and full-stack applications. I'm fascinated by how data can be transformed into insights, and how
                  AI can automate complex decisions.
                </p>
                <p>
                  I aspire to become a <span className="text-emerald-400 font-medium">Full Stack Developer</span> and{' '}
                  <span className="text-emerald-400 font-medium">Data Engineer</span> — building scalable applications
                  that leverage the power of machine learning and data analytics to create meaningful impact.
                </p>
                <p>
                  Outside of academics, I actively work on AI projects, participate in national tech fests, and pursue
                  industry certifications to stay ahead in the rapidly evolving tech landscape.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['AI / ML', 'Data Science', 'Full Stack', 'Python', 'React', 'Java'].map(tag => (
                  <span key={tag} className="tag text-xs">{tag}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Stats + Image */}
          <AnimatedSection delay={0.15}>
            <div className="space-y-6">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="glass-card p-5 text-center hover:border-cyan-500/20 transition-all duration-300"
                  >
                    <div className="font-display text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-slate-500 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Personal info card */}
              <div className="glass-card p-6 space-y-3">
                <h4 className="font-semibold text-white mb-4">Quick Info</h4>
                {[
                  { label: 'Location', value: 'Visakhapatnam, AP, India' },
                  { label: 'Institution', value: 'VIIT — B.Tech AI & DS' },
                  { label: 'Graduation', value: 'Expected 2028' },
                  { label: 'Email', value: 'surlaram2@gmail.com' },
                  { label: 'Phone', value: '+91 8374196922' },
                  { label: 'Goal', value: 'Full Stack & Data Engineer' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-slate-500 text-sm w-24 shrink-0">{item.label}</span>
                    <span className="text-white text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Trait cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {traits.map((trait, i) => {
            const Icon = trait.icon;
            const classes = colorMap[trait.color];
            return (
              <AnimatedSection key={trait.title} delay={i * 0.1}>
                <div className={`glass-card-hover p-6 bg-gradient-to-br ${classes.split(' ').slice(0, 2).join(' ')}`}>
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${classes.split(' ').slice(0, 2).join(' ')} border ${classes.split(' ')[2]} flex items-center justify-center mb-4`}>
                    <Icon size={20} className={classes.split(' ')[3]} />
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg mb-2">{trait.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{trait.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
