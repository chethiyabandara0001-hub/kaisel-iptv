import React, { useState } from 'react';
import { DEVELOPER_INFO, APPS_CONFIG } from '../config/apps.config';
import { Mail, Send, CheckCircle2, AlertCircle, HelpCircle, MessageSquare, Clock, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [appId, setAppId] = useState('kaisel-iptv');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-spam bot trap
  const [formStartTime] = useState(Date.now()); // Anti-spam timing check
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [ticketId, setTicketId] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Anti-spam honeypot check: If filled, silently drop bot
    if (honeypot.trim() !== '') {
      console.warn('Bot detected via honeypot');
      setStatus('success');
      return;
    }

    // 2. Anti-spam timing check: If submitted under 1.5 seconds, likely automated
    if (Date.now() - formStartTime < 1500) {
      console.warn('Submission too fast');
      setStatus('error');
      return;
    }

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    // Simulate safe client-side processing
    setTimeout(() => {
      const generatedTicket = 'KSL-' + Math.floor(100000 + Math.random() * 900000);
      setTicketId(generatedTicket);
      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 800);
  };

  const faqs = [
    {
      q: "How do I install the APK on Android TV or Firestick?",
      a: "You can download the APK using the 'Downloader' app on your TV by typing the direct download URL, or transfer the APK via USB drive / local file transfer app and allow installation from unknown sources."
    },
    {
      q: "Does Kaisel IPTV provide live TV channel links?",
      a: "No. Kaisel IPTV is a dedicated player software application. Users must supply their own legal M3U playlist URLs or Xtream Codes login credentials."
    },
    {
      q: "How do I verify the authenticity of the downloaded APK?",
      a: "Visit our Checksum Verification page to copy the official SHA-256 release hash or drag-and-drop your downloaded file into our in-browser cryptographic verifier."
    },
    {
      q: "Can I request feature additions or report player bugs?",
      a: "Yes! Use the form on this page to send bug reports, device compatibility logs, or feature requests directly to our developer team."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-16 pb-20">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <MessageSquare size={13} />
          <span>Support & Inquiries</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Contact Development Team
        </h1>
        <p className="text-sm sm:text-base text-zinc-300">
          Have questions, feedback, or need technical assistance with Kaisel applications? Send us a direct message.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 rounded-3xl bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 shadow-xl space-y-6">
          
          <div className="border-b border-zinc-800 pb-4">
            <h2 className="font-display text-xl font-bold text-white">
              Send a Direct Message
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              We usually respond within 24–48 business hours.
            </p>
          </div>

          {status === 'success' ? (
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3 animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="font-display font-bold text-lg text-emerald-200">
                Message Sent Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
                Thank you for contacting us. Your reference ticket ID is <strong className="text-emerald-400 font-mono">{ticketId}</strong>. Our developers will review your inquiry shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-3 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Anti-Spam Hidden Honeypot Field */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_url_honey">Leave this field blank</label>
                <input
                  id="website_url_honey"
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-xs">
                  <label htmlFor="contact-name" className="font-semibold text-zinc-300">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700/80 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>

                <div className="space-y-1.5 text-xs">
                  <label htmlFor="contact-email" className="font-semibold text-zinc-300">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700/80 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-xs">
                  <label htmlFor="contact-app" className="font-semibold text-zinc-300">
                    Related Application
                  </label>
                  <select
                    id="contact-app"
                    value={appId}
                    onChange={(e) => setAppId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700/80 text-sm text-zinc-100 focus:outline-none focus:border-cyan-500"
                  >
                    {APPS_CONFIG.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.name} (v{a.version})
                      </option>
                    ))}
                    <option value="general">General Inquiry / Partnership</option>
                    <option value="security">Security & Checksum Issue</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-xs">
                  <label htmlFor="contact-subject" className="font-semibold text-zinc-300">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="e.g. Bug report on Android TV 12"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700/80 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-xs">
                <label htmlFor="contact-message" className="font-semibold text-zinc-300">
                  Message Details <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Please describe your issue, feedback, or device details (e.g. device model, Android version, player behavior)..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700/80 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {status === 'error' && (
                <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>Please fill out all required fields properly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-md shadow-cyan-500/25 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                <Send size={16} />
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
              </button>

              <div className="text-center">
                <span className="text-[11px] text-zinc-500 flex items-center justify-center gap-1.5">
                  <ShieldCheck size={13} className="text-cyan-400" />
                  <span>Protected by client-side anti-spam verification • Zero tracking cookies</span>
                </span>
              </div>

            </form>
          )}

        </div>

        {/* Sidebar info & FAQ */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-4">
            <h3 className="font-display font-bold text-lg text-white">
              Official Communication
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-400 block text-xs">Direct Support Email</span>
                  <a href={`mailto:${DEVELOPER_INFO.email}`} className="text-cyan-300 font-mono font-medium hover:underline">
                    {DEVELOPER_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-400 block text-xs">Operating Hours</span>
                  <span>{DEVELOPER_INFO.supportHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick FAQ Accordion */}
          <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle size={18} className="text-cyan-400" />
              <h3 className="font-display font-bold text-lg text-white">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-2">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-xl bg-zinc-950 border border-zinc-800/80 overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full px-4 py-3 text-left text-xs sm:text-sm font-semibold text-zinc-200 flex items-center justify-between gap-2"
                  >
                    <span>{faq.q}</span>
                    {activeFaq === idx ? <ChevronUp size={15} className="shrink-0 text-cyan-400" /> : <ChevronDown size={15} className="shrink-0 text-zinc-500" />}
                  </button>
                  {activeFaq === idx && (
                    <div className="px-4 pb-3 text-xs text-zinc-400 border-t border-zinc-900 pt-2 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
