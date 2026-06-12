import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Brain, Shield, Layers } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'MediPredict AI',
    subtitle: 'AI-Powered Healthcare Prediction Platform',
    description:
      'An intelligent healthcare platform that leverages machine learning to analyze symptoms and provide predictive health insights. Features a modern dashboard for tracking health metrics and receiving personalized recommendations powered by AI.',
    liveUrl: 'https://medipredict-26.youware.app',
    githubUrl: 'https://github.com/rcmurthy45',
    icon: Brain,
    tags: ['Python', 'Machine Learning', 'React', 'Healthcare AI', 'Dashboard'],
    highlights: [
      'AI-powered symptom analysis',
      'Real-time health predictions',
      'Personalized recommendations',
      'Interactive dashboard',
      'Responsive interface',
    ],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    accentColor: 'cyan',
    badge: 'Featured',
    pexelsImg: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Derma AI Vision',
    subtitle: 'AI-Powered Dermatology Analysis',
    description:
      'A cutting-edge AI platform for dermatological condition analysis using computer vision. Users can upload skin images to receive AI-generated insights about potential conditions and recommendations for healthcare consultation.',
    liveUrl: 'https://derm-ai-vision.vercel.app/',
    githubUrl: 'https://github.com/rcmurthy45',
    icon: Shield,
    tags: ['Python', 'Computer Vision', 'React', 'Medical AI', 'Vercel'],
    highlights: [
      'Computer vision analysis',
      'Skin condition detection',
      'AI-driven insights',
      'Healthcare consultation guidance',
      'Fast image processing',
    ],
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    accentColor: 'emerald',
    badge: 'Live',
    pexelsImg: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const colorConfig: Record<string, { badge: string; tag: string; link: string; icon: string }> = {
  cyan: {
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    tag: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/15',
    link: 'bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/25',
    icon: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 text-cyan-400',
  },
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/15',
    link: 'bg-emerald-500 hover:bg-emerald-400 shadow-emerald-500/25',
    icon: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-400',
  },
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const colors = colorConfig[project.accentColor];
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className="glass-card overflow-hidden group hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/30"
    >
      {/* Project image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.pexelsImg}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient} to-navy-900/80`} />
        <div className="absolute inset-0 flex items-end p-5">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colors.icon.split(' ').slice(0, 2).join(' ')} border ${colors.icon.split(' ')[2]} flex items-center justify-center`}>
              <Icon size={20} className={colors.icon.split(' ')[3]} />
            </div>
            <div>
              <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${colors.badge} mb-1`}>
                {project.badge}
              </div>
              <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-slate-500 text-sm font-medium mb-2">{project.subtitle}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Highlights */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <Layers size={14} className="text-slate-500" />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Key Features</span>
          </div>
          <ul className="space-y-1.5">
            {project.highlights.map(h => (
              <li key={h} className="flex items-start gap-2 text-sm text-slate-400">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${project.accentColor === 'cyan' ? 'bg-cyan-500' : 'bg-emerald-500'}`} />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${colors.tag}`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${colors.link}`}
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl glass-card text-sm font-medium text-slate-300 hover:text-white hover:border-white/30 transition-all duration-200"
          >
            <Github size={15} />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/30 to-navy-900" />
      <div className="orb w-72 h-72 bg-cyan-500 -top-10 left-1/4 opacity-8" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-flex">Projects</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle">
            Real-world AI applications built with cutting-edge technologies and deployed to production.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/rcmurthy45"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
