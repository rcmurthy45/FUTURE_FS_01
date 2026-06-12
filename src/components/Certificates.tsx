import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Award, X, ZoomIn, Calendar, Building2, ExternalLink } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'C Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'April 2025',
    category: 'Networking & Programming',
    image: '/WhatsApp_Image_2026-06-12_at_7.35.56_PM.jpeg',
    description: 'Certified for successfully completing C Essentials 1 through Vignan\'s Institute of Information Technology via the Cisco Networking Academy program.',
    color: 'blue',
    skills: ['C Programming', 'Networking Basics', 'Problem Solving'],
  },
  {
    id: 2,
    title: 'Certificate of Achievement — VISTA-2K24',
    issuer: "Vignan's Institute of Information Technology",
    date: 'September 2024',
    category: 'Tech Fest Achievement',
    image: '/WhatsApp_Image_2026-06-12_at_7.38.00_PM.jpeg',
    description: 'Awarded for participating in and winning III Prize in App Development at VISTA-2K24 — A National Level Two-Day Technical Fest held at Vignan\'s Institute of Information Technology.',
    color: 'amber',
    skills: ['App Development', 'Problem Solving', 'Innovation'],
    highlight: '3rd Place',
  },
  {
    id: 3,
    title: 'Python, C, C++ & MS Office',
    issuer: 'U-Tech Software Institute of Technologies',
    date: 'December 2024',
    category: 'Professional Training',
    image: '/WhatsApp_Image_2026-06-12_at_8.10.15_PM.jpeg',
    description: 'Successfully completed comprehensive training in Python, C, C++, and MS Office at U-Tech Software Institute of Technologies, Gajuwaka — an ISO 9001:2015 Certified Institute affiliated with NCVT Govt of India.',
    color: 'emerald',
    skills: ['Python', 'C / C++', 'MS Office', 'Programming'],
  },
];

const colorConfig: Record<string, { badge: string; border: string; icon: string; bg: string }> = {
  blue: {
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    border: 'border-blue-500/30',
    icon: 'from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-400',
    bg: 'from-blue-500/10',
  },
  amber: {
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    border: 'border-amber-500/30',
    icon: 'from-amber-500/20 to-amber-500/5 border-amber-500/20 text-amber-400',
    bg: 'from-amber-500/10',
  },
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    border: 'border-emerald-500/30',
    icon: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-400',
    bg: 'from-emerald-500/10',
  },
};

function CertModal({ cert, onClose }: { cert: typeof certificates[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: 'spring', bounce: 0.15 }}
        onClick={e => e.stopPropagation()}
        className="bg-navy-800 border border-white/10 rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl"
      >
        <div className="relative">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-64 object-contain bg-white/5"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="font-display text-xl font-bold text-white">{cert.title}</h3>
              {cert.highlight && (
                <span className={`inline-flex items-center gap-1 mt-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${colorConfig[cert.color].badge}`}>
                  <Award size={10} />
                  {cert.highlight}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
            <span className="flex items-center gap-1.5"><Building2 size={14} />{cert.issuer}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} />{cert.date}</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{cert.description}</p>
          <div className="flex flex-wrap gap-2">
            {cert.skills.map(s => (
              <span key={s} className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${colorConfig[cert.color].badge}`}>{s}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-800/50" />
      <div className="orb w-72 h-72 bg-amber-500 bottom-0 left-1/3 opacity-8" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-flex">Certifications</span>
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Industry certifications and academic achievements that validate my technical expertise.
          </p>
        </motion.div>

        {/* Certificates grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => {
            const colors = colorConfig[cert.color];
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                onClick={() => setSelected(cert)}
                className={`glass-card overflow-hidden cursor-pointer group transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-white/5">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-2"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${colors.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <ZoomIn size={20} className="text-white" />
                    </div>
                  </div>
                  {cert.highlight && (
                    <div className="absolute top-3 right-3">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${colors.badge}`}>
                        <Award size={10} />
                        {cert.highlight}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${colors.badge} mb-2`}>
                    {cert.category}
                  </span>
                  <h3 className="font-display font-bold text-white text-base leading-snug mb-1 group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1"><Building2 size={11} />{cert.issuer}</span>
                    <span className="flex items-center gap-1"><Calendar size={11} />{cert.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map(s => (
                      <span key={s} className={`px-2 py-0.5 rounded text-xs border ${colors.badge}`}>{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-14 grid grid-cols-3 gap-4 max-w-xl mx-auto"
        >
          {[
            { value: '3+', label: 'Certifications' },
            { value: '1', label: 'Award Won' },
            { value: '2025', label: 'Latest Cert' },
          ].map(s => (
            <div key={s.label} className="glass-card p-4 text-center">
              <div className="font-display text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-slate-500 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
