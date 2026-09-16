import React from 'react';
import {
  Bot,
  Sparkles,
  TrendingUp,
  Building2,
  BookOpen,
  Coffee,
  CheckCircle2,
  Layers,
  ArrowRight,
  Database,
  Cpu,
  BarChart3,
  Search,
  FileCheck,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface MockupProps {
  type: 'ai-chat' | 'analytics-dashboard' | 'property-grid' | 'lms-portal' | 'pos-system';
}

export const ProjectMockup: React.FC<MockupProps> = ({ type }) => {
  switch (type) {
    case 'ai-chat':
      return (
        <div className="w-full h-full bg-slate-950 rounded-xl p-4 sm:p-5 flex flex-col justify-between border border-slate-800 text-xs font-mono relative overflow-hidden select-none">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
              <span className="text-slate-200 font-semibold font-sans">AI-Accelerator v2.4</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-500/30 text-indigo-300">
                GPT-4o • RAG Active
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-400">
              <Cpu className="w-3 h-3 text-indigo-400" />
              <span>Vector DB: Synced</span>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="py-3 space-y-3 flex-1 overflow-hidden">
            {/* User prompt */}
            <div className="flex justify-end">
              <div className="bg-indigo-600/30 border border-indigo-500/40 text-slate-200 rounded-lg p-2.5 max-w-[85%]">
                <p className="text-[11px] font-sans">
                  "Analyze CBRE lease renewals for Q3 across Toronto portfolio with rent escalation &gt; 4%."
                </p>
              </div>
            </div>

            {/* AI Agent Reasoning & Retrieval Trace */}
            <div className="flex justify-start">
              <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3 max-w-[90%] space-y-2">
                <div className="flex items-center gap-2 text-indigo-400 text-[10px]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Agent Reasoning &amp; Vector Chunk Retrieval:</span>
                </div>
                
                <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                  <div className="p-1.5 rounded bg-slate-950 border border-slate-800/80 text-slate-300">
                    <span className="text-slate-500 block">Source 1:</span>
                    Doc: Lease_TOR_2025.pdf
                  </div>
                  <div className="p-1.5 rounded bg-slate-950 border border-slate-800/80 text-slate-300">
                    <span className="text-slate-500 block">Similarity:</span>
                    0.963 cosine dist.
                  </div>
                </div>

                <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                  Identified 18 leases meeting criteria with average base rate of $48.50/sqft and standard CPI inflation rider.
                </p>

                <div className="flex items-center gap-2 pt-1 border-t border-slate-800/60 text-[10px] text-slate-400">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>MCP tool execution verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Prompt bar */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
            <span className="font-sans">Ask follow-up or synthesize summary report...</span>
            <div className="w-5 h-5 rounded bg-indigo-600 flex items-center justify-center text-white">
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      );

    case 'analytics-dashboard':
      return (
        <div className="w-full h-full bg-slate-950 rounded-xl p-4 sm:p-5 flex flex-col justify-between border border-slate-800 text-xs select-none">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
              <span className="text-slate-200 font-semibold">PIP Hotels Analytics — CBRE</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/30 text-blue-300">
              5,200+ Assets
            </span>
          </div>

          {/* Metric KPIs */}
          <div className="grid grid-cols-3 gap-2 py-3">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-mono">Avg. ADR</div>
              <div className="text-sm sm:text-base font-bold text-slate-100 font-mono mt-0.5">$214.80</div>
              <div className="text-[9px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
                <TrendingUp className="w-2.5 h-2.5" /> +8.4% YoY
              </div>
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-mono">RevPAR</div>
              <div className="text-sm sm:text-base font-bold text-slate-100 font-mono mt-0.5">$168.20</div>
              <div className="text-[9px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
                <TrendingUp className="w-2.5 h-2.5" /> +12.1% YoY
              </div>
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-mono">Occupancy</div>
              <div className="text-sm sm:text-base font-bold text-slate-100 font-mono mt-0.5">78.3%</div>
              <div className="text-[9px] text-blue-400 flex items-center gap-0.5 mt-0.5">
                <BarChart3 className="w-2.5 h-2.5" /> Market Lead
              </div>
            </div>
          </div>

          {/* Abstract SVG Bar / Trend Chart */}
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-1.5">
            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span>Quarterly Performance Trend</span>
              <span className="text-indigo-400">Q1 - Q4 Analysis</span>
            </div>
            <div className="h-14 flex items-end gap-2 pt-2 px-1">
              {[45, 62, 55, 78, 90, 84, 98, 88, 95].map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t bg-gradient-to-t from-blue-600/80 to-indigo-500 transition-all duration-300 hover:brightness-125"
                    style={{ height: `${val}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>NgRx Store: Memoized Selectors Active</span>
            <span className="text-emerald-400">Zero Reflow</span>
          </div>
        </div>
      );

    case 'property-grid':
      return (
        <div className="w-full h-full bg-slate-950 rounded-xl p-4 sm:p-5 flex flex-col justify-between border border-slate-800 text-xs select-none">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-200 font-semibold">Canada Plus — Real Estate Grid</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
              Sub-second Latency
            </span>
          </div>

          {/* Abstract Table Data Grid */}
          <div className="space-y-1.5 py-2">
            {[
              { id: 'CBRE-401', address: 'Bay St, Toronto', type: 'Class A Office', area: '45,000 sqft', status: 'Leased' },
              { id: 'CBRE-210', address: 'Burrard St, Vancouver', type: 'Commercial Retail', area: '28,400 sqft', status: 'Negotiating' },
              { id: 'CBRE-889', address: 'René-Lévesque, Montreal', type: 'Mixed Use Tower', area: '62,000 sqft', status: 'Available' },
            ].map((row, rIdx) => (
              <div
                key={rIdx}
                className="p-2 rounded bg-slate-900/80 border border-slate-800 flex items-center justify-between text-[11px]"
              >
                <div>
                  <div className="font-semibold text-slate-200">{row.address}</div>
                  <div className="text-[10px] text-slate-400 font-mono">{row.type} • {row.area}</div>
                </div>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    row.status === 'Leased'
                      ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800'
                      : row.status === 'Negotiating'
                      ? 'bg-amber-950/60 text-amber-300 border border-amber-800'
                      : 'bg-blue-950/60 text-blue-300 border border-blue-800'
                  }`}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>Angular OnPush Virtual Scrolling</span>
            <span className="text-indigo-400">100,000+ records</span>
          </div>
        </div>
      );

    case 'lms-portal':
      return (
        <div className="w-full h-full bg-slate-950 rounded-xl p-4 sm:p-5 flex flex-col justify-between border border-slate-800 text-xs select-none">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span className="text-slate-200 font-semibold">Training Management System</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30 text-purple-300">
              LMS Portal
            </span>
          </div>

          {/* Course Modules */}
          <div className="space-y-2 py-2">
            {[
              { title: 'Information Security & Compliance 2025', progress: 100, status: 'Completed' },
              { title: 'Full Stack Engineering Best Practices', progress: 75, status: 'In Progress' },
              { title: 'Cloud Architecture & Azure Governance', progress: 40, status: 'Active' },
            ].map((course, idx) => (
              <div key={idx} className="p-2 rounded bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex justify-between text-[11px] font-semibold text-slate-200">
                  <span className="truncate pr-2">{course.title}</span>
                  <span className="text-purple-300 font-mono text-[10px]">{course.progress}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-950 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>Custom Directives • RBAC Security</span>
            <span className="text-emerald-400">99.8% Compliance</span>
          </div>
        </div>
      );

    case 'pos-system':
      return (
        <div className="w-full h-full bg-slate-950 rounded-xl p-4 sm:p-5 flex flex-col justify-between border border-slate-800 text-xs select-none">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-amber-400" />
              <span className="text-slate-200 font-semibold">Cafe POS Terminal #04</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 text-amber-300">
              Live Orders
            </span>
          </div>

          {/* Table ticket summary */}
          <div className="space-y-1.5 py-2 font-mono text-[11px]">
            <div className="p-2 rounded bg-slate-900 border border-slate-800 flex justify-between">
              <div>
                <div className="text-slate-200 font-semibold">Table 12 • 4 Guests</div>
                <div className="text-[10px] text-slate-400">2x Cappuccino, 1x Panini, 1x Croissant</div>
              </div>
              <div className="text-right font-bold text-indigo-300">$34.50</div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800 text-slate-300">
                <span className="text-slate-500 block">Kitchen State:</span>
                Dispatched (T-3 min)
              </div>
              <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800 text-slate-300">
                <span className="text-slate-500 block">Payment:</span>
                Split Bill Ready
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>MySQL In-Memory Aggregations</span>
            <span className="text-amber-400">-40% Checkout Time</span>
          </div>
        </div>
      );
  }
};
