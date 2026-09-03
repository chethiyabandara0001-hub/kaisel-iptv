import React from 'react';
import { DEVELOPER_INFO } from '../config/apps.config';
import { ShieldCheck, Lock, EyeOff, Server, Mail, CheckCircle2 } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-10 pb-20">
      
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <ShieldCheck size={13} />
          <span>Honest & Transparent Data Policy</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 font-mono">
          Last Updated: August 2026 • Applies to Kaisel Website & Distributed APKs
        </p>
      </div>

      {/* Summary Highlight Box */}
      <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3">
        <h2 className="font-display font-bold text-base text-zinc-100 flex items-center gap-2">
          <EyeOff size={18} className="text-cyan-400" />
          <span>Privacy in Plain English</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          Kaisel does not require account registrations, does not use tracking cookies, does not sell user information, and does not inject advertising analytics SDKs into our APK binaries.
        </p>
      </div>

      {/* Structured Sections */}
      <div className="space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed">
        
        {/* 1. Information Collected on the Website */}
        <section className="space-y-3">
          <h3 className="font-display text-lg font-bold text-white">
            1. Information We Collect on This Website
          </h3>
          <p>
            When you visit <strong>kaisel.app</strong> to browse or download APK releases, our systems process minimal information:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
            <li>
              <strong className="text-zinc-200">Standard Server Logs:</strong> Standard web server connection metadata (such as IP address, user agent, requested APK path, and timestamp) collected temporarily for network routing, DDoS defense, and download bandwidth delivery.
            </li>
            <li>
              <strong className="text-zinc-200">Contact Form Inquiries:</strong> If you voluntarily contact us via our contact form, we collect your submitted name, email address, subject, and message content solely to respond to your support request.
            </li>
          </ul>
        </section>

        {/* 2. Information Collected by Kaisel Applications */}
        <section className="space-y-3">
          <h3 className="font-display text-lg font-bold text-white">
            2. Information Handled by Kaisel Android Applications (e.g., Kaisel IPTV)
          </h3>
          <p>
            Kaisel media applications operate locally on your Android device:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
            <li>
              <strong className="text-zinc-200">User Playlists & Stream Credentials:</strong> Any M3U playlist URLs, Xtream Codes credentials, or stream URLs entered by the user are stored locally in the application's private device storage. They are never sent to Kaisel servers.
            </li>
            <li>
              <strong className="text-zinc-200">No Telemetry / No Analytics SDKs:</strong> Our release APKs do not bundle third-party tracking libraries, location trackers, or persistent identifier monitors.
            </li>
          </ul>
        </section>

        {/* 3. Cookies and Tracking Technologies */}
        <section className="space-y-3">
          <h3 className="font-display text-lg font-bold text-white">
            3. Cookies & Local Storage
          </h3>
          <p>
            This website does not use third-party advertising or profiling cookies. We use browser <code className="text-cyan-300 font-mono">localStorage</code> solely to remember your chosen theme preference (Dark or Light mode).
          </p>
        </section>

        {/* 4. Third-Party Links & Content */}
        <section className="space-y-3">
          <h3 className="font-display text-lg font-bold text-white">
            4. Third-Party Links and Media Feeds
          </h3>
          <p>
            When using Kaisel IPTV to play live streams or media feeds, your device connects directly to the stream server configured in your playlist. Kaisel has no control over, and assumes no responsibility for, the content or privacy practices of third-party streaming servers.
          </p>
        </section>

        {/* 5. Contact Information */}
        <section className="space-y-3 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
          <h3 className="font-display text-base font-bold text-white flex items-center gap-2">
            <Mail size={16} className="text-cyan-400" />
            <span>5. Contact Our Privacy Lead</span>
          </h3>
          <p className="text-zinc-400 text-xs">
            If you have questions regarding this Privacy Policy or wish to request deletion of contact emails, please reach out directly:
          </p>
          <div className="text-xs text-zinc-300 font-mono pt-1">
            <p><strong>Email:</strong> {DEVELOPER_INFO.email}</p>
            <p><strong>Project:</strong> {DEVELOPER_INFO.organization}</p>
          </div>
        </section>

      </div>

    </div>
  );
}
