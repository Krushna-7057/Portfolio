import React from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Cpu,
  Layers,
  Zap,
  Cloud,
  GitBranch,
  Sparkles,
  LifeBuoy,
  Users,
  CheckCircle2,
  FileCode2,
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO, ABOUT_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'Web Application Development': <Code2 className="w-5 h-5 text-indigo-400" />,
    'REST API Integration': <FileCode2 className="w-5 h-5 text-blue-400" />,
    'Performance Optimization': <Zap className="w-5 h-5 text-amber-400" />,
    'Azure Cloud Services': <Cloud className="w-5 h-5 text-sky-400" />,
    'CI/CD & DevOps': <GitBranch className="w-5 h-5 text-emerald-400" />,
    'AI/LLM Integration': <Sparkles className="w-5 h-5 text-purple-400" />,
    'Production Support': <LifeBuoy className="w-5 h-5 text-rose-400" />,
    'Agile/Scrum Collaboration': <Users className="w-5 h-5 text-teal-400" />
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="space-y-3 mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ABOUT THE DEVELOPER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            End-to-End Engineering Across the Complete SDLC
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            From initial architectural discovery and responsive frontend interfaces to cloud-native backends and AI-augmented capabilities.
          </p>
        </motion.div>

        {/* Content Grid: Portrait & Bio / Lifecycle Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait & Fast Profile Summary */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 sm:p-5 shadow-xl relative overflow-hidden group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={PERSONAL_INFO.photoUrl}
                  alt="Krushna Belokar Full Stack Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-xs space-y-1">
                  <div className="font-semibold text-slate-100 flex items-center justify-between">
                    <span>Krushna Belokar</span>
                    <span className="text-[11px] font-mono text-indigo-400">4+ Years Exp.</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    Pune, India • Open for Immediate Hire
                  </div>
                </div>
              </div>

              {/* Verified Expertise Tags */}
              <div className="mt-4 space-y-2">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                  Full Software Development Lifecycle
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Architecture',
                    'UI/UX Implementation',
                    'RESTful APIs',
                    'Database Design',
                    'Cloud Hosting',
                    'CI/CD DevOps',
                    'Automated Testing',
                    'SLA Support'
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Professional Summary</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Proven track record in high-velocity agile teams building multi-tenant SaaS, enterprise dashboards, and AI-driven platforms. Adept at breaking down complex business requirements into maintainable, modular software with clean separation of concerns.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 8 SDLC Capabilities Highlighted in User Prompt */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-base text-slate-300 leading-relaxed">
                {ABOUT_DATA.summary}
              </p>
            </div>

            {/* SDLC Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {ABOUT_DATA.pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/90 hover:border-indigo-500/40 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-indigo-500/30 transition-colors shrink-0">
                      {iconMap[pillar.title] || <Cpu className="w-5 h-5 text-indigo-400" />}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Philosophy quote */}
            <div className="p-4 rounded-xl border border-indigo-900/40 bg-gradient-to-r from-indigo-950/20 to-slate-900/40 flex items-center gap-4">
              <div className="w-1.5 h-12 rounded-full bg-indigo-500 shrink-0"></div>
              <p className="text-xs text-slate-300 italic">
                "Writing clean, testable code is just the start. Real enterprise value comes from predictable state, optimized data delivery, zero-downtime releases, and pragmatic AI acceleration."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
