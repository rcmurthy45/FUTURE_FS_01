import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Layout, Server, BrainCircuit, Wrench } from 'lucide-react';

const tabs = [
  { id: 'frontend', label: 'Frontend', icon: Layout },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'ai', label: 'AI & Data Science', icon: BrainCircuit },
  { id: 'tools', label: 'Tools', icon: Wrench },
];

const skills: Record<string, { name: string; icon: string; color: string }[]> = {
  frontend: [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' },
  ],
  backend: [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#ED8B00' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: '#ffffff' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
  ],
  ai: [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', color: '#150458' },
    { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', color: '#013243' },
    { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg', color: '#11557c' },
    { name: 'Machine Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00' },
    { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg', color: '#F2C811' },
    { name: 'MS Excel', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg', color: '#217346' },
  ],
  tools: [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#ffffff' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007ACC' },
    { name: 'Google Colab', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg', color: '#F9AB00' },
    { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg', color: '#F37626' },
  ],
};

function SkillCard({ skill, index }: { skill: { name: string; icon: string; color: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="glass-card-hover p-5 flex flex-col items-center gap-3 group cursor-default"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${skill.color}15`, border: `1px solid ${skill.color}25` }}
      >
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-8 h-8 object-contain"
          onError={e => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors text-center">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 via-navy-900 to-navy-900" />
      <div className="orb w-80 h-80 bg-blue-600 top-1/2 -translate-y-1/2 -right-40 opacity-8" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="tag mb-4 inline-flex">Skills</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="section-subtitle">
            A curated collection of technologies and tools I've learned and actively work with.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white glass-card hover:border-white/20'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl shadow-lg shadow-cyan-500/25"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <Icon size={16} />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4"
          >
            {skills[activeTab].map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-slate-600 text-sm mt-10"
        >
          Always learning — constantly adding new tools to the stack.
        </motion.p>
      </div>
    </section>
  );
}
