import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Calendar,
  MapPin,
  Terminal,
  FolderGit2,
  CheckCircle,
  ExternalLink,
  Building2,
  Sparkles
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="space-y-3 mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // WORK EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Professional Engineering Timeline
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            4+ years building high-impact enterprise web applications, real-time analytics platforms, and AI tools for global industry leaders.
          </p>
        </motion.div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-16">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className="relative group"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center shadow-lg group-hover:border-indigo-400 group-hover:scale-110 transition-all">
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
              </div>

              {/* Main Experience Card */}
              <div className="rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700/80 p-6 sm:p-8 transition-all space-y-6">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 font-medium">
                      <span className="flex items-center gap-1.5 text-slate-200">
                        <Building2 className="w-4 h-4 text-indigo-400" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 self-start md:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {exp.summary}
                </p>

                {/* Highlighted Projects Banner */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <div className="text-xs uppercase font-mono tracking-wider text-slate-400 flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-indigo-400" />
                    <span>Key Projects Delivered</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.projectsHighlighted.map((project, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-3 py-1 rounded-md bg-slate-900 border border-indigo-500/30 text-xs font-semibold text-indigo-300"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bulleted Contributions */}
                <div className="space-y-2.5">
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    Core Technical Impact
                  </div>
                  <ul className="space-y-2">
                    {exp.keyContributions.map((contrib, cIdx) => (
                      <li
                        key={cIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-slate-500 font-mono mr-2">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
