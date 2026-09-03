import React, { useState } from 'react';
import { APPS_CONFIG, getAppById } from '../config/apps.config';
import { ApkVerificationWidget } from '../components/ApkVerificationWidget';
import { ShieldCheck, Lock, Terminal, CheckCircle2, AlertTriangle, FileCode } from 'lucide-react';

export function VerifyPage({ appId }: { appId?: string }) {
  const [selectedAppId, setSelectedAppId] = useState(appId || 'kaisel-iptv');
  const activeApp = getAppById(selectedAppId) || APPS_CONFIG[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12 pb-20">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <ShieldCheck size={13} />
          <span>Cryptographic Release Verification</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          APK Authenticity & Checksums
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
          Kaisel provides official SHA-256 checksums for every published binary. Verify your downloaded APK against these official release hashes to ensure your package has not been tampered with or modified by third-party sources.
        </p>
      </div>

      {/* Select Application Tab */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {APPS_CONFIG.map((app) => (
          <button
            key={app.id}
            onClick={() => setSelectedAppId(app.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedAppId === app.id
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
            }`}
          >
            {app.name} (v{app.version})
          </button>
        ))}
      </div>

      {/* Main Verification Box */}
      <ApkVerificationWidget app={activeApp} showFileVerifier={true} />

      {/* How to verify in Terminal / CLI */}
      <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
          <Terminal size={20} className="text-cyan-400" />
          <h2 className="font-display text-xl font-bold text-white tracking-tight">
            How to Verify Checksum Using Terminal (CLI)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          
          <div className="space-y-3">
            <h3 className="font-bold text-zinc-200">
              macOS & Linux Terminal:
            </h3>
            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-cyan-300 overflow-x-auto select-all">
              sha256sum {activeApp.packageName}-v{activeApp.version}.apk
            </div>
            <p className="text-zinc-400 text-xs">
              Or on macOS: <code className="text-zinc-300 font-mono">shasum -a 256 filename.apk</code>
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-zinc-200">
              Windows PowerShell:
            </h3>
            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-cyan-300 overflow-x-auto select-all">
              Get-FileHash -Algorithm SHA256 {activeApp.packageName}-v{activeApp.version}.apk
            </div>
            <p className="text-zinc-400 text-xs">
              Ensure the output string matches the official SHA-256 fingerprint shown above.
            </p>
          </div>

        </div>
      </div>

      {/* Security Guidance notice */}
      <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-xs text-zinc-400 space-y-2">
        <div className="flex items-center gap-2 text-zinc-200 font-bold text-sm">
          <AlertTriangle size={16} className="text-amber-400" />
          <span>Security & Integrity Advice</span>
        </div>
        <p className="leading-relaxed">
          Always verify that you downloaded your APK directly from <strong>kaisel.app</strong>. Never install APK files downloaded from unverified file sharing sites, chat groups, or mirror aggregators that have not been signed with Kaisel's official certificate.
        </p>
      </div>

    </div>
  );
}
