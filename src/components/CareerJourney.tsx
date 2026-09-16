import React from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  CheckCircle2,
  Terminal,
  ArrowUpRight,
  Briefcase,
  Sparkles,
  CalendarCheck
} from 'lucide-react';
import { CAREER_JOURNEY_STATEMENT } from '../data/portfolioData';

export const CareerJourney: React.FC = () => {
  return (
    <section id="career-journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Subtle background ambient highlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10 space-y-6">
            {/* Header Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-indigo-400">
                <Compass className="w-3.5 h-3.5" />
                <span>08 // CAREER JOURNEY &amp; AVAILABILITY</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Immediate Availability</span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
              Ready for the Next High-Impact Engineering Chapter
            </h2>

            {/* Exact Required Career Journey Statement */}
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-indigo-500/30">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium italic">
                "{CAREER_JOURNEY_STATEMENT.quote}"
              </p>
            </div>

            {/* Availability checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {CAREER_JOURNEY_STATEMENT.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Quick Action */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-400 font-mono">
                Target Roles: Senior Full Stack Developer • Angular/.NET Specialist • AI Solutions Engineer
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-md shadow-indigo-600/20 active:scale-95"
              >
                <span>Discuss Opportunities</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
