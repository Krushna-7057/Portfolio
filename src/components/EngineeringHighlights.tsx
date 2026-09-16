import React from 'react';
import { motion } from 'motion/react';
import {
  Zap,
  Workflow,
  Server,
  Cloud,
  GitPullRequest,
  Sparkles,
  Terminal,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Layers
} from 'lucide-react';
import { ENGINEERING_HIGHLIGHTS } from '../data/portfolioData';

export const EngineeringHighlights: React.FC = () => {
  const highlightIcons: Record<string, React.ReactNode> = {
    Zap: <Zap className="w-5 h-5 text-amber-400" />,
    Workflow: <Workflow className="w-5 h-5 text-indigo-400" />,
    Server: <Server className="w-5 h-5 text-blue-400" />,
    Cloud: <Cloud className="w-5 h-5 text-sky-400" />,
    GitPullRequest: <GitPullRequest className="w-5 h-5 text-emerald-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-purple-400" />
  };

  return (
    <section id="highlights" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative border-t border-slate-900">
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
            <span>05 // ENGINEERING EXCELLENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            High-Impact Technical Highlights
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Key architectural breakthroughs across responsiveness, reactive state orchestration, cloud scaling, and enterprise AI.
          </p>
        </motion.div>

        {/* 6 Engineering Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINEERING_HIGHLIGHTS.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-indigo-500/40 p-6 flex flex-col justify-between transition-all group shadow-lg hover:shadow-indigo-500/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="space-y-4">
                {/* Icon & Metric Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-indigo-500/40 transition-colors">
                    {highlightIcons[highlight.icon] || <Cpu className="w-5 h-5 text-indigo-400" />}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium">
                    {highlight.metric}
                  </span>
                </div>

                {/* Category & Title */}
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    {highlight.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                    {highlight.title}
                  </h3>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {highlight.description}
                </p>

                {/* Technical Bullet Items */}
                <div className="space-y-2 pt-2 border-t border-slate-800/60">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">
                    Execution Details:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {highlight.technicalDetails.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom verified bar */}
              <div className="mt-6 pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Enterprise Proven</span>
                <span className="text-emerald-400">Validated</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
