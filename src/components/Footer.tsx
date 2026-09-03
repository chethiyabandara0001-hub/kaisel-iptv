import React from 'react';
import { useRouter } from '../context/RouterContext';
import { FEATURED_APP, APPS_CONFIG, DEVELOPER_INFO } from '../config/apps.config';
import { ShieldCheck, Download, ExternalLink, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 text-zinc-400 text-sm transition-colors duration-200">
      {/* Top Banner / Verification Guarantee */}
      <div className="border-b border-zinc-800/60 bg-gradient-to-r from-zinc-900/50 via-cyan-950/20 to-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-zinc-200 font-semibold text-sm">
                100% Direct & Official Distribution
              </p>
              <p className="text-xs text-zinc-400">
                All APK packages are directly signed by the developer. No repacked binaries, third-party wrappers, or telemetry.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate({ path: 'verify' })}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors shrink-0"
          >
            <span>Verify SHA-256 Checksums</span>
            <ExternalLink size={13} />
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => navigate({ path: 'home' })}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-600 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-zinc-950 rounded-[9px] flex items-center justify-center">
                  <span className="font-display font-extrabold text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    K
                  </span>
                </div>
              </div>
              <span className="font-display font-extrabold text-xl tracking-wider text-zinc-100">
                KAiSEL
              </span>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Kaisel is an independent software project focused on creating useful Android applications with a simple and direct distribution experience.
            </p>

            <div className="pt-2 text-xs text-zinc-400 space-y-1">
              <p className="flex items-center gap-1.5">
                <span className="text-zinc-300 font-medium">Flagship:</span>
                <span>{FEATURED_APP.name} v{FEATURED_APP.version}</span>
                <span className="text-emerald-400 font-mono text-[11px] bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-800/40">Latest Stable</span>
              </p>
              <p className="text-zinc-400 font-mono">
                Package: {FEATURED_APP.packageName}
              </p>
            </div>
          </div>

          {/* Applications */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-zinc-200">
              Applications
            </h3>
            <ul className="space-y-2 text-sm">
              {APPS_CONFIG.map((app) => (
                <li key={app.id}>
                  <button
                    onClick={() => navigate({ path: 'app-detail', appId: app.id })}
                    className="hover:text-cyan-400 transition-colors text-left flex items-center gap-1.5 group"
                  >
                    <span>{app.name}</span>
                    <span className="text-[11px] text-zinc-400 group-hover:text-zinc-300 font-mono">
                      v{app.version}
                    </span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigate({ path: 'apps' })}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-xs flex items-center gap-1 pt-1"
                >
                  <span>View all apps</span>
                  <span>→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Project & Support */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-zinc-200">
              Project & Info
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate({ path: 'about' })}
                  className="hover:text-zinc-200 transition-colors"
                >
                  About Kaisel
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate({ path: 'verify' })}
                  className="hover:text-zinc-200 transition-colors flex items-center gap-1.5"
                >
                  <span>Security & SHA-256</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate({ path: 'contact' })}
                  className="hover:text-zinc-200 transition-colors"
                >
                  Contact & Support
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${DEVELOPER_INFO.email}`}
                  className="hover:text-zinc-200 transition-colors text-xs font-mono text-zinc-400"
                >
                  {DEVELOPER_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-zinc-200">
              Legal & Policies
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate({ path: 'privacy' })}
                  className="hover:text-zinc-200 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate({ path: 'terms' })}
                  className="hover:text-zinc-200 transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate({ path: 'app-detail', appId: 'kaisel-iptv' })}
                  className="hover:text-zinc-200 transition-colors"
                >
                  Publisher Details (AppLovin)
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>
            © {new Date().getFullYear()} Kaisel. All rights reserved. Android is a trademark of Google LLC.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-zinc-400">
              Direct Distribution Channel
            </span>
            <span className="inline-flex items-center gap-1 text-zinc-400">
              <span>Secure Official Builds</span>
              <CheckCircle2 size={13} className="text-cyan-400" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
