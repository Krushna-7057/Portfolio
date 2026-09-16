import React from 'react';
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Heart,
  Code2,
  Terminal,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 px-4 sm:px-6 lg:px-8 relative text-xs text-slate-400">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-900">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center font-bold text-sm text-indigo-400">
                KB
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-100">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {PERSONAL_INFO.title}
                </p>
              </div>
            </div>
            <p className="text-xs text-indigo-300/80 font-mono tracking-wide pt-1">
              Angular • React • .NET Core • Azure • AI
            </p>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-2"
              aria-label="Krushna Belokar LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-indigo-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-2"
              aria-label="Krushna Belokar GitHub"
            >
              <Github className="w-4 h-4 text-slate-300" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-2"
              aria-label="Email Krushna Belokar"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>Email</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
              title="Return to top of page"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Fact Statement */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Krushna Belokar. Engineered with React, TypeScript &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-slate-400">Factually aligned with professional resume</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
