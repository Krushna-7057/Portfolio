import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  MessageSquare,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Discuss Full-Time Role',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate swift submission and open client email pre-filled as fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Optional mailto trigger
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formState.subject + ' - ' + formState.name
      )}&body=${encodeURIComponent(
        `From: ${formState.name} (${formState.email})\n\n${formState.message}`
      )}`;
      window.open(mailtoLink, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/60 relative border-t border-slate-900">
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
            <span>09 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
            Let's Build Something Meaningful.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Whether you are recruiting for a senior full-stack engineering role, architecting enterprise platforms, or exploring AI workflow integration, I would love to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Channels */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Primary Email Card with Quick Copy */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-all active:scale-95"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">
                  Direct Email
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base sm:text-lg font-bold text-slate-100 hover:text-indigo-300 transition-colors break-all mt-1 block"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Direct Phone & Location Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">IST / UTC+5:30</span>
                  <button
                    onClick={handleCopyPhone}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-all active:scale-95"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Phone</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">
                  Direct Telephone
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-base sm:text-lg font-bold text-slate-100 hover:text-blue-300 transition-colors font-mono mt-1 block tracking-wide"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Social Channels: LinkedIn & GitHub */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                id="contact-linkedin"
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-indigo-500/40 text-indigo-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs text-slate-400 uppercase font-mono">Profile</div>
                <div className="text-sm font-bold text-slate-100 group-hover:text-indigo-300 mt-0.5">
                  LinkedIn
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                id="contact-github"
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-indigo-500/40 text-slate-300">
                    <Github className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs text-slate-400 uppercase font-mono">Repositories</div>
                <div className="text-sm font-bold text-slate-100 group-hover:text-indigo-300 mt-0.5">
                  GitHub
                </div>
              </a>
            </div>

            {/* Location & Relocation notice */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-400 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
              <span>Based in Pune, India • Open for On-site, Hybrid, and Global Remote Roles.</span>
            </div>
          </motion.div>

          {/* Right Column: Simple Interactive Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">
                    Message Prepared &amp; Routed
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formState.name || 'there'}! An email client draft has been prepared directly to Krushna. You can also reach him immediately at <span className="text-indigo-300 font-mono">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        subject: 'Discuss Full-Time Role',
                        message: ''
                      });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-2">
                    <h3 className="text-lg font-bold text-slate-100">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill out the details below to initiate communication directly.
                    </p>
                  </div>

                  {/* Intent chips */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 font-mono block">
                      Topic / Reason:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Discuss Full-Time Role',
                        'Technical Consultation',
                        'Angular / .NET Architecture',
                        'General Networking'
                      ].map((topic) => (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => setFormState({ ...formState, subject: topic })}
                          className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                            formState.subject === topic
                              ? 'bg-indigo-600 text-white shadow-sm'
                              : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-300 font-medium block">
                        Your Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-300 font-medium block">
                        Email Address <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-medium block">
                      Message <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Krushna, we are reviewing candidates for a Full Stack Developer role with Angular/.NET and Azure background..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-submit-btn"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-indigo-600/20 active:scale-95"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center font-mono pt-1">
                    Typically responds within 24 hours on business days.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
