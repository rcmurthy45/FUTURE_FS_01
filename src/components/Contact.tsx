import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'surlaram2@gmail.com',
    href: 'mailto:surlaram2@gmail.com',
    color: 'cyan',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8374196922',
    href: 'tel:+918374196922',
    color: 'emerald',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Visakhapatnam, Andhra Pradesh',
    href: 'https://maps.google.com/?q=Visakhapatnam',
    color: 'blue',
  },
];

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/rcmurthy45',
    handle: '@rcmurthy45',
    color: '#6e7681',
    hoverColor: 'hover:border-white/40 hover:text-white',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ramchandramurthysurla652855329',
    handle: 'Ram Chandra Murthy',
    color: '#0A66C2',
    hoverColor: 'hover:border-[#0A66C2]/40 hover:text-[#0A66C2]',
  },
];

const colorConfig: Record<string, string> = {
  cyan: 'from-cyan-500/15 to-cyan-500/5 border-cyan-500/20 text-cyan-400',
  emerald: 'from-emerald-500/15 to-emerald-500/5 border-emerald-500/20 text-emerald-400',
  blue: 'from-blue-500/15 to-blue-500/5 border-blue-500/20 text-blue-400',
};

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate form submission
    await new Promise(r => setTimeout(r, 1500));
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 via-navy-900 to-navy-950" />
      <div className="orb w-64 h-64 bg-emerald-500 top-1/4 -right-20 opacity-10" />
      <div className="orb w-64 h-64 bg-cyan-500 bottom-1/4 -left-20 opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-flex">Contact</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Open for collaborations, internships, and exciting opportunities. Let's build something great together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="glass-card p-6">
              <h3 className="font-display text-xl font-bold text-white mb-2">Get In Touch</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                I'm currently looking for opportunities as a Full Stack Developer and Data Engineering intern.
                Whether you have a project idea, collaboration proposal, or just want to say hi — my inbox is always open!
              </p>

              <div className="space-y-3">
                {contactInfo.map(info => {
                  const Icon = info.icon;
                  const colors = colorConfig[info.color];
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${colors.split(' ').slice(0, 2).join(' ')} border ${colors.split(' ')[2]} hover:scale-[1.02] transition-transform duration-200 group`}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.split(' ').slice(0, 2).join(' ')} border ${colors.split(' ')[2]} flex items-center justify-center shrink-0`}>
                        <Icon size={18} className={colors.split(' ')[3]} />
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs font-medium mb-0.5">{info.label}</div>
                        <div className="text-white text-sm font-medium">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card p-6">
              <h4 className="font-medium text-slate-300 text-sm mb-4">Social Profiles</h4>
              <div className="flex flex-col gap-3">
                {socials.map(social => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-xl glass-card text-slate-400 transition-all duration-200 ${social.hoverColor} hover:-translate-y-0.5`}
                    >
                      <Icon size={18} />
                      <div>
                        <div className="text-xs text-slate-500">{social.label}</div>
                        <div className="text-sm font-medium text-slate-300">{social.handle}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8">
              <h3 className="font-display text-xl font-bold text-white mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={e => setFormData(d => ({ ...d, subject: e.target.value }))}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Status messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm"
                  >
                    <CheckCircle size={16} />
                    Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm"
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
