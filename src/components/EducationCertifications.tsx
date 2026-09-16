import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Award,
  Terminal,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/60 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Education */}
          <motion.div
            className="lg:col-span-6 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>06 // ACADEMIC FOUNDATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-indigo-400" />
                <span>Education</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Formal computer science education focusing on software engineering, computational algorithms, and database systems.
              </p>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-100">
                      {edu.degree}
                    </h3>
                    <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-indigo-300 w-fit">
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-sm font-medium text-slate-300">
                    {edu.institution}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {edu.location}
                    </span>
                    {edu.score && (
                      <span className="text-emerald-400 font-mono">
                        {edu.score}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Certifications */}
          <motion.div
            className="lg:col-span-6 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>07 // CREDENTIALS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 flex items-center gap-3">
                <Award className="w-7 h-7 text-indigo-400" />
                <span>Certifications</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Industry-accredited qualifications validating cloud architecture, enterprise AI, and frontend expertise.
              </p>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold border ${cert.badgeColor}`}>
                          {cert.code}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {cert.issuer}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-100">
                        {cert.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-emerald-400 font-mono bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{cert.verifiedYear}</span>
                    </div>
                  </div>

                  {/* Skills validated */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
