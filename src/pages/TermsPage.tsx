import React from 'react';
import { DEVELOPER_INFO } from '../config/apps.config';
import { FileText, ShieldAlert, CheckSquare, Info, Mail } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-10 pb-20">
      
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <FileText size={13} />
          <span>Legal Agreement & Terms</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 font-mono">
          Last Updated: August 2026 • Governs Website Access and Software Downloads
        </p>
      </div>

      {/* Structured Terms */}
      <div className="space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed">
        
        {/* 1. Website Usage */}
        <section className="space-y-3">
          <h3 className="font-display text-lg font-bold text-white">
            1. Website Usage
          </h3>
          <p>
            By accessing or using the Kaisel website (<strong>kaisel.app</strong>) and downloading software packages, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must refrain from downloading or using our software.
          </p>
        </section>

        {/* 2. Software Downloads & License */}
        <section className="space-y-3">
          <h3 className="font-display text-lg font-bold text-white">
            2. Software Downloads & Distribution
          </h3>
          <p>
            All APK packages provided on this website are distributed as standalone Android applications. Kaisel grants you a personal, non-exclusive, non-transferable revocable license to install and run the software on compatible Android hardware for personal or legitimate business media playback.
          </p>
        </section>

        {/* 3. User Responsibilities & Content Disclaimer */}
        <section className="space-y-3 p-5 sm:p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30">
          <h3 className="font-display text-base font-bold text-amber-200 flex items-center gap-2">
            <ShieldAlert size={18} className="text-amber-400" />
            <span>3. User Responsibilities & Content Playback Disclaimer</span>
          </h3>
          <p className="text-zinc-300">
            <strong>Kaisel is a pure media player engine.</strong> Kaisel does not host, provide, broadcast, distribute, or index any video or audio content. Users are solely responsible for providing their own lawful streaming URLs, playlists, and credentials. You agree that you will not use Kaisel software to access content without proper legal rights or licenses.
          </p>
        </section>

        {/* 4. Intellectual Property */}
        <section className="space-y-3">
          <h3 className="font-display text-lg font-bold text-white">
            4. Intellectual Property
          </h3>
          <p>
            The Kaisel brand, logo, application source code, interface designs, and website assets are protected by intellectual property laws. You may not decompile, reverse-engineer, redistribute with malware wrappers, or rebrand Kaisel binaries without express authorization.
          </p>
        </section>

        {/* 5. Third-Party Services */}
        <section className="space-y-3">
          <h3 className="font-display text-lg font-bold text-white">
            5. Third-Party Services & Feeds
          </h3>
          <p>
            Our software and website may facilitate connection to third-party endpoints (e.g., DNS resolvers, user-specified streaming servers). Kaisel is not responsible for the availability, latency, or legality of third-party network services.
          </p>
        </section>

        {/* 6. Disclaimer of Warranties & Limitation of Liability */}
        <section className="space-y-3">
          <h3 className="font-display text-lg font-bold text-white">
            6. Disclaimer of Warranties
          </h3>
          <p className="text-zinc-400">
            THE SOFTWARE AND WEBSITE ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. IN NO EVENT SHALL KAISEL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR SPECIAL DAMAGES ARISING FROM THE USE OR INABILITY TO USE OUR SOFTWARE.
          </p>
        </section>

        {/* 7. Contact Information */}
        <section className="space-y-3 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
          <h3 className="font-display text-base font-bold text-white flex items-center gap-2">
            <Mail size={16} className="text-cyan-400" />
            <span>7. Contact Information</span>
          </h3>
          <p className="text-zinc-400 text-xs">
            For questions, legal notices, or clarifications regarding these terms, please contact:
          </p>
          <div className="text-xs text-zinc-300 font-mono pt-1">
            <p><strong>Email:</strong> {DEVELOPER_INFO.email}</p>
            <p><strong>Website:</strong> {DEVELOPER_INFO.website}</p>
          </div>
        </section>

      </div>

    </div>
  );
}
