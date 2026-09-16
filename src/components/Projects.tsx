import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Terminal,
  ExternalLink,
  ArrowUpRight,
  Layers,
  Sparkles,
  Building2,
  ChevronRight,
  Zap
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectMockup } from './ProjectMockups';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'AI & Cloud', 'Enterprise', 'Full Stack'];

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/60 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            className="space-y-3 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>04 // FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
              Enterprise Projects &amp; AI Systems
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Real-world commercial platforms developed for global enterprises like CBRE and production AI assistants.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  activeFilter === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeaturedLarge = index === 0;
            return (
              <motion.div
                key={project.id}
                className={`group rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-indigo-500/40 transition-all flex flex-col justify-between overflow-hidden shadow-xl ${
                  isFeaturedLarge ? 'lg:col-span-2' : ''
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Visual Mockup Stage */}
                <div
                  className={`w-full bg-slate-950 p-4 sm:p-6 border-b border-slate-800/80 relative overflow-hidden ${
                    isFeaturedLarge ? 'h-72 sm:h-96' : 'h-64 sm:h-72'
                  }`}
                >
                  <ProjectMockup type={project.mockupType} />
                  
                  {/* Subtle click overlay hint */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-[2px]"
                  >
                    <span className="px-4 py-2 rounded-lg bg-slate-900/90 border border-indigo-500/40 text-xs font-semibold text-indigo-300 shadow-xl flex items-center gap-2">
                      <span>Inspect Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Meta tags */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
                          {project.category}
                        </span>
                        {project.client && (
                          <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                            <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                            Client: {project.client}
                          </span>
                        )}
                      </div>

                      {project.metrics && (
                        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                          <Zap className="w-3 h-3" />
                          {project.metrics}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-indigo-300/90 font-medium">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack & Action */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/btn"
                    >
                      <span>Explore Architecture &amp; Case Study</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
