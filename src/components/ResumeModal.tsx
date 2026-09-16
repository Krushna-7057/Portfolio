import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Award,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Cpu
} from 'lucide-react';
import {
  PERSONAL_INFO,
  ABOUT_DATA,
  EXPERIENCE_DATA,
  SKILL_CATEGORIES,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Sheet */}
        <motion.div
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Header Action Bar */}
          <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
              <Briefcase className="w-4 h-4" />
              <span>OFFICIAL RESUME VIEW // KRUSHNA BELOKAR</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-sm"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close resume preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Canvas */}
          <div className="p-6 sm:p-10 overflow-y-auto bg-slate-900 space-y-8 print:bg-white print:text-black print:p-0">
            {/* Candidate Header */}
            <div className="border-b border-slate-800 pb-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 print:text-black">
                    KRUSHNA BELOKAR
                  </h1>
                  <p className="text-sm font-semibold text-indigo-400 print:text-indigo-700 mt-0.5">
                    Full Stack Developer | Angular | React | .NET Core | AI Integration | Azure
                  </p>
                </div>

                <div className="text-xs text-slate-400 print:text-gray-600 space-y-1 font-mono text-left sm:text-right">
                  <div>{PERSONAL_INFO.email}</div>
                  <div>{PERSONAL_INFO.phone}</div>
                  <div>{PERSONAL_INFO.location}</div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 text-xs text-indigo-300 font-mono pt-1">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                  linkedin.com/in/krushna-belokar
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">
                  github.com/krushna-belokar
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-gray-800">
                Full Stack Developer with 4+ years of professional experience engineering resilient web applications using Angular, React, .NET Core, Azure, and modern AI architectures. Demonstrated success delivering mission-critical applications for global enterprises including CBRE, optimizing performance by up to 10x, and integrating generative AI/RAG solutions.
              </p>
            </div>

            {/* Technical Skills Matrix */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="p-2.5 rounded bg-slate-950/60 border border-slate-800/80">
                    <span className="font-semibold text-indigo-300 block mb-1">{cat.name}:</span>
                    <span className="text-slate-400">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
                Work Experience
              </h2>
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <div>
                      <span className="font-bold text-sm text-slate-100">{exp.role}</span>
                      <span className="text-xs text-slate-400"> — {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-indigo-400">{exp.period}</span>
                  </div>

                  <p className="text-xs text-slate-300 italic">{exp.summary}</p>

                  <ul className="space-y-1 text-xs text-slate-300 pl-4 list-disc">
                    {exp.keyContributions.map((kc, kIdx) => (
                      <li key={kIdx}>{kc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
                  Education
                </h2>
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="text-xs text-slate-300 space-y-0.5">
                    <div className="font-semibold text-slate-200">{edu.degree}</div>
                    <div className="text-slate-400">{edu.institution} ({edu.period})</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
                  Certifications
                </h2>
                {CERTIFICATIONS_DATA.map((cert, idx) => (
                  <div key={idx} className="text-xs text-slate-300 space-y-0.5">
                    <div className="font-semibold text-indigo-300">{cert.code} — {cert.title}</div>
                    <div className="text-slate-400">{cert.issuer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
