import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Sparkles,
  Layers,
  Cpu,
  CheckCircle,
  Building2,
  Code2,
  ExternalLink,
  ShieldCheck,
  Zap,
  Flame
} from 'lucide-react';
import { ProjectItem } from '../types';
import { ProjectMockup } from './ProjectMockups';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Top Bar */}
          <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
                {project.category}
              </span>
              {project.client && (
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                  Client: {project.client}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                {project.title}
              </h3>
              <p className="text-base text-indigo-300 font-medium">
                {project.subtitle}
              </p>
            </div>

            {/* Abstract UI Mockup Display */}
            <div className="h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-slate-800 shadow-inner">
              <ProjectMockup type={project.mockupType} />
            </div>

            {/* Impact Metric Banner */}
            {project.metrics && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 flex items-center gap-3">
                <Zap className="w-5 h-5 text-indigo-400 shrink-0" />
                <div>
                  <div className="text-xs text-indigo-300 font-mono uppercase tracking-wider">
                    Verified Outcome / Benchmark
                  </div>
                  <div className="text-sm font-semibold text-slate-100">
                    {project.metrics}
                  </div>
                </div>
              </div>
            )}

            {/* Detailed Description */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono">
                System Overview &amp; Business Context
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.extendedDescription}
              </p>
            </div>

            {/* Two Column Breakdown: Key Features & Architecture Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Key Features */}
              <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
                <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Key Functionalities</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {project.keyFeatures.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture Highlights */}
              <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
                <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  <span>Engineering Highlights</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {project.architectureHighlights.map((arch, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold">•</span>
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                Technologies Employed
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">
              Designed &amp; Built by Krushna Belokar
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
