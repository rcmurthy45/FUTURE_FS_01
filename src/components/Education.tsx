import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, MapPin } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology (B.Tech)',
    branch: 'Artificial Intelligence and Data Science',
    institution: 'Vignan Institute of Information Technology',
    short: 'VIIT, Visakhapatnam',
    period: '2024 — 2028',
    status: 'Current',
    statusColor: 'emerald',
    score: 'Ongoing',
    scoreLabel: 'CGPA',
    description: 'Studying core AI/ML algorithms, data structures, software engineering, and advanced data analytics. Actively participating in national tech fests and industry certification programs.',
    highlights: ['Machine Learning', 'Data Structures & Algorithms', 'Full Stack Development', 'Data Analytics', 'Computer Networks'],
    icon: GraduationCap,
  },
  {
    id: 2,
    degree: 'Intermediate (12th Grade)',
    branch: 'Science — MPC',
    institution: 'Sri Chaitanya Junior College',
    short: 'Visakhapatnam',
    period: '2022 — 2024',
    status: 'Completed',
    statusColor: 'cyan',
    score: '90.1%',
    scoreLabel: 'Percentage',
    description: 'Achieved excellent academic performance with a focus on Mathematics, Physics, and Chemistry. Built a strong quantitative foundation that drives my analytical approach to programming.',
    highlights: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
    icon: BookOpen,
  },
  {
    id: 3,
    degree: 'CBSE (10th Grade)',
    branch: 'Secondary Education',
    institution: 'SR Digi School',
    short: 'Visakhapatnam',
    period: 'Graduated 2022',
    status: 'Completed',
    statusColor: 'cyan',
    score: '78.4%',
    scoreLabel: 'Percentage',
    description: 'Completed secondary education with a strong foundation in science and mathematics, sparking an early interest in computers and technology.',
    highlights: ['Mathematics', 'Science', 'English', 'Social Studies'],
    icon: Award,
  },
];

function TimelineItem({ item, index }: { item: typeof education[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className={`relative flex gap-6 lg:gap-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start`}
    >
      {/* Card */}
      <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
        <div className="glass-card-hover p-6 lg:p-8 group">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                  item.statusColor === 'emerald'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${item.statusColor === 'emerald' ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400'}`} />
                  {item.status}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {item.degree}
              </h3>
              <p className="text-cyan-400 font-medium mt-0.5">{item.branch}</p>
            </div>

            {/* Score badge */}
            <div className="text-right shrink-0">
              <div className="font-display text-2xl font-bold gradient-text">{item.score}</div>
              <div className="text-slate-500 text-xs mt-0.5">{item.scoreLabel}</div>
            </div>
          </div>

          {/* Institution */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm">
            <span className="flex items-center gap-1.5 text-slate-300">
              <GraduationCap size={14} className="text-slate-500" />
              {item.institution}
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin size={14} className="text-slate-500" />
              {item.short}
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Calendar size={14} className="text-slate-500" />
              {item.period}
            </span>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2">
            {item.highlights.map(h => (
              <span key={h} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors">
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Center dot (desktop) */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 flex-col items-center">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 shadow-lg ${
          item.statusColor === 'emerald'
            ? 'bg-gradient-to-br from-emerald-500/30 to-emerald-500/10 border-emerald-500/40 shadow-emerald-500/10'
            : 'bg-gradient-to-br from-cyan-500/30 to-cyan-500/10 border-cyan-500/40 shadow-cyan-500/10'
        }`}>
          <Icon size={22} className={item.statusColor === 'emerald' ? 'text-emerald-400' : 'text-cyan-400'} />
        </div>
      </div>

      {/* Spacer for other side */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  );
}

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-800/50" />
      <div className="orb w-64 h-64 bg-emerald-500 bottom-20 right-0 opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-flex">Education</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            Building a strong technical foundation through rigorous academic training and continuous learning.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-px top-7 bottom-7 w-0.5 bg-gradient-to-b from-cyan-500/50 via-emerald-500/30 to-transparent" />

          <div className="flex flex-col gap-12">
            {education.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
