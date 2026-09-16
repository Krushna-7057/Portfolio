import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Briefcase,
  Layers,
  Cpu,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle architectural ambient background grid & radial glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-b from-indigo-900/20 via-blue-900/10 to-transparent blur-3xl opacity-60 rounded-full"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <motion.div
          className="lg:col-span-7 space-y-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Identity & Status Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Full Stack Developer
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              Pune, India • Open to Global & Remote
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 leading-[1.15]">
            Building Scalable Digital Experiences with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-200 to-slate-100">
              Code & AI
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            {PERSONAL_INFO.heroSupportingText}
          </p>

          {/* Technology Badges */}
          <div className="pt-2">
            <span className="text-xs uppercase tracking-wider text-slate-400 block mb-2.5 font-medium">
              Core Tech Stack
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {PERSONAL_INFO.techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-medium hover:border-indigo-500/40 hover:text-indigo-300 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs & Socials */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              id="hero-primary-cta"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all shadow-md shadow-indigo-600/20 active:scale-95"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              id="hero-secondary-cta"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 text-slate-200 text-sm font-semibold transition-all active:scale-95"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Download Resume</span>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:ml-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                id="hero-linkedin-link"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Krushna Belokar LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                id="hero-github-link"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Krushna Belokar GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="hero-email-link"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Send Email to Krushna Belokar"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Stats Strip */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight font-mono">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Professional Portrait Frame with Sophisticated Treatment */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="relative max-w-sm sm:max-w-md w-full">
            {/* Ambient Backing Card */}
            <div className="absolute -inset-1.5 bg-gradient-to-b from-indigo-500/20 via-slate-800/40 to-indigo-600/10 rounded-3xl blur-md opacity-70"></div>

            {/* Main Portrait Card Container */}
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-3 sm:p-4 shadow-2xl backdrop-blur-sm">
              {/* Image Frame: natural, un-distorted, dignified presentation */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 group">
                <img
                  src={PERSONAL_INFO.photoUrl}
                  alt="Krushna Belokar - Full Stack Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle vignette / gradient for readable overlay badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none"></div>

                {/* Bottom Overlay Info inside portrait */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-slate-100">
                        Krushna Belokar
                      </div>
                      <div className="text-xs text-indigo-300 font-mono">
                        Full Stack & AI Engineer
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[10px] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Active
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Specification Pills */}
              <div className="mt-3.5 grid grid-cols-2 gap-2 text-left">
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <div className="text-[11px] text-slate-400 uppercase font-mono">Core Focus</div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">Enterprise Web & Cloud</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <div className="text-[11px] text-slate-400 uppercase font-mono">Specialization</div>
                  <div className="text-xs font-semibold text-indigo-300 mt-0.5">Angular • .NET • AI</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
