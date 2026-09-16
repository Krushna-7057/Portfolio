import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  Search,
  Layout,
  Server,
  Database,
  Cloud,
  Cpu,
  Sparkles,
  Terminal,
  CheckCircle2,
  Code
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Layout className="w-4 h-4" />,
    backend: <Server className="w-4 h-4" />,
    database: <Database className="w-4 h-4" />,
    'cloud-devops': <Cloud className="w-4 h-4" />,
    architecture: <Cpu className="w-4 h-4" />,
    ai: <Sparkles className="w-4 h-4" />
  };

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((category) => {
      const isCategoryMatch = activeCategory === 'all' || activeCategory === category.id;
      if (!isCategoryMatch) return null;

      const filteredSkills = category.skills.filter((skill) => {
        if (!searchQuery.trim()) return true;
        const query = searchQuery.toLowerCase();
        return (
          skill.name.toLowerCase().includes(query) ||
          (skill.description && skill.description.toLowerCase().includes(query))
        );
      });

      if (filteredSkills.length === 0) return null;

      return {
        ...category,
        skills: filteredSkills
      };
    }).filter(Boolean);
  }, [activeCategory, searchQuery]);

  const totalSkillCount = useMemo(() => {
    return SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="space-y-3 mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Modern Full Stack & AI Capabilities
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Enterprise-tested toolset spanning robust web frameworks, distributed architectures, cloud infrastructure, and modern AI models.
          </p>
        </motion.div>

        {/* Filter Controls & Search */}
        <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              All Skills ({totalSkillCount})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {categoryIcons[cat.id]}
                <span>{cat.name}</span>
                <span className="text-[10px] opacity-70">({cat.skills.length})</span>
              </button>
            ))}
          </div>

          {/* Instant Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technologies..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            if (!cat) return null;
            return (
              <motion.div
                key={cat.id}
                className="rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 p-5 flex flex-col justify-between transition-all"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-indigo-400">
                        {categoryIcons[cat.id]}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-100">
                          {cat.name}
                        </h3>
                        <p className="text-[11px] text-slate-400">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                      {cat.skills.length} techs
                    </span>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`group relative px-3 py-1.5 rounded-lg border text-xs transition-all ${
                          skill.isPrimary
                            ? 'bg-slate-950/80 border-indigo-500/30 text-indigo-200 font-medium hover:border-indigo-400 hover:bg-slate-900'
                            : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          {skill.isPrimary && (
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                          )}
                          <span>{skill.name}</span>
                        </div>

                        {/* Subtle contextual tooltip on hover */}
                        {skill.description && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:block z-20 w-48 p-2 rounded bg-slate-900 border border-slate-700 text-[11px] text-slate-300 shadow-xl pointer-events-none text-center">
                            {skill.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom verified context */}
                <div className="mt-5 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Verified in Production</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 bg-slate-900/30 rounded-xl border border-slate-800">
            <p className="text-slate-400 text-sm">No technologies match "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs text-indigo-400 hover:underline"
            >
              Reset filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
