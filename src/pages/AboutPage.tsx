import React from 'react';
import { useRouter } from '../context/RouterContext';
import { DEVELOPER_INFO, APPS_CONFIG } from '../config/apps.config';
import { AppIcon } from '../components/AppIcon';
import { 
  Building2, 
  Target, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Mail, 
  ExternalLink, 
  ArrowRight,
  Tv,
  CheckCircle2,
  Terminal,
  Cpu
} from 'lucide-react';

export function AboutPage() {
  const { navigate } = useRouter();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12 sm:space-y-16 pb-20">
      
      {/* Header Quote Banner */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Sparkles size={13} />
          <span>Independent Software Initiative</span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          About Kaisel
        </h1>

        {/* Mandatory Quote Requirement */}
        <blockquote className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-cyan-950/20 to-zinc-900 border border-zinc-800 text-lg sm:text-xl font-medium text-zinc-200 leading-relaxed italic shadow-xl">
          "Kaisel is an independent software project focused on creating useful Android applications with a simple and direct distribution experience."
        </blockquote>
      </div>

      {/* Mission & Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Target size={22} />
          </div>
          <h2 className="font-display text-xl font-bold text-white">
            Our Mission
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Modern mobile app distribution has become crowded with opaque review timelines, mandatory telemetry bundles, and aggressive platform lock-ins. Kaisel was founded with a singular purpose: to build focused, high-performance Android applications and deliver them directly to users via clean, cryptographically signed APK packages.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Cpu size={22} />
          </div>
          <h2 className="font-display text-xl font-bold text-white">
            Engineering Principles
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            We prioritize native performance and minimal battery/RAM footprint. Our applications utilize low-level Android APIs (MediaCodec, ExoPlayer, local socket bindings) to maximize frame rates on Android TV hardware while maintaining strict zero-tracking standards.
          </p>
        </div>

      </div>

      {/* Current Applications in the Ecosystem */}
      <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-10 space-y-6">
        <div className="space-y-1">
          <h2 className="font-display text-2xl font-bold text-white tracking-tight">
            Our Applications
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Current active applications developed and distributed under the Kaisel project
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {APPS_CONFIG.map((app) => (
            <div
              key={app.id}
              onClick={() => navigate({ path: 'app-detail', appId: app.id })}
              className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/50 cursor-pointer transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <AppIcon iconType={app.icon} size="md" />
                <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded">
                  v{app.version}
                </span>
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-400 transition-colors">
                  {app.name}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 mt-1">
                  {app.shortDescription}
                </p>
              </div>
              <span className="text-xs text-cyan-400 font-semibold inline-flex items-center gap-1 pt-1">
                <span>View Release</span>
                <ArrowRight size={13} />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Developer Information */}
      <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
          <Building2 size={20} className="text-cyan-400" />
          <h2 className="font-display text-xl font-bold text-white tracking-tight">
            Developer Information & Official Details
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          <div className="space-y-3 text-zinc-300">
            <p><strong className="text-zinc-400">Developer / Organization:</strong> {DEVELOPER_INFO.organization}</p>
            <p><strong className="text-zinc-400">Team:</strong> {DEVELOPER_INFO.name}</p>
            <p><strong className="text-zinc-400">Primary Project Website:</strong> <a href={DEVELOPER_INFO.website} className="text-cyan-400 hover:underline">{DEVELOPER_INFO.website}</a></p>
            <p><strong className="text-zinc-400">Official Inquiries:</strong> <a href={`mailto:${DEVELOPER_INFO.email}`} className="text-cyan-400 hover:underline">{DEVELOPER_INFO.email}</a></p>
          </div>

          <div className="space-y-3 text-zinc-400">
            <p className="text-xs leading-relaxed">
              We welcome bug reports, feature suggestions, and compatibility testing on various Android TV chips (Amlogic, Realtek, MediaTek, Qualcomm). Reach out anytime through our contact channels.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate({ path: 'contact' })}
                className="px-5 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Mail size={14} />
                <span>Contact Development Team</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
