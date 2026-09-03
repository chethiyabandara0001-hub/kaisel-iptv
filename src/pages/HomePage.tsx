import React from 'react';
import { useRouter } from '../context/RouterContext';
import { FEATURED_APP, APPS_CONFIG } from '../config/apps.config';
import { FeaturedAppCard } from '../components/FeaturedAppCard';
import { DeviceMockup } from '../components/DeviceMockup';
import { SafetyBanner } from '../components/SafetyBanner';
import { AppIcon } from '../components/AppIcon';
import { 
  Download, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Tv, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  HardDrive, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export function HomePage() {
  const { navigate } = useRouter();

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-16 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            
            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 shadow-sm text-xs text-zinc-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Official Independent Android Distribution</span>
              <span className="text-zinc-400">•</span>
              <span className="text-cyan-400 font-semibold font-mono">v{FEATURED_APP.version} Live</span>
            </div>

            {/* Brand Title & Hero Slogan */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                Kaisel
              </h1>
              <p className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Your apps. Your way.
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Discover and download official Kaisel applications directly from our website.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2">
              <button
                onClick={() => navigate({ path: 'download', appId: FEATURED_APP.id })}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-[0.98] transition-all"
              >
                <Download size={20} className="stroke-[2.5]" />
                <span>Download Kaisel IPTV</span>
                <span className="text-xs bg-black/25 px-2 py-0.5 rounded-md font-mono">v{FEATURED_APP.version}</span>
              </button>

              <button
                onClick={() => navigate({ path: 'apps' })}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 font-semibold text-base transition-colors"
              >
                <span>Explore Apps</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Security note snippet */}
            <p className="text-xs text-zinc-400 flex items-center justify-center gap-2 pt-2">
              <ShieldCheck size={15} className="text-emerald-400" />
              <span>Direct signed release APKs • Universal Android Architecture • Zero Telemetry</span>
            </p>

          </div>

          {/* High Quality Device Visual */}
          <div className="mt-12 sm:mt-16">
            <DeviceMockup />
          </div>

        </div>
      </section>

      {/* Official Installation Safety Warning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SafetyBanner showGuide={true} />
      </section>

      {/* Featured Application Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Official Distribution</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Application
            </h2>
          </div>
          <button
            onClick={() => navigate({ path: 'apps' })}
            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <span>View all apps catalog</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <FeaturedAppCard app={FEATURED_APP} />
      </section>

      {/* Core Distribution Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Why Direct Distribution?
          </h2>
          <p className="text-sm text-zinc-400">
            Kaisel software is delivered straight from the developer without third-party modifications, wrappers, or forced account lock-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Zap size={20} />
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Direct & Immediate Releases
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Get updates the moment they are compiled. No multi-week app store review queues or delayed security patches.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Cryptographic Authenticity
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Every binary comes with a publicly verifiable SHA-256 checksum and official distribution signature.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Cpu size={20} />
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Lightweight & Native
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Built with native Android components and hardware acceleration. Zero junk code, bloatware, or aggressive tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Installation Walkthrough */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <HelpCircle size={18} className="text-cyan-400" />
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  How to Install Kaisel APK on Android
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400">
                Simple 3-step guide for smartphones, tablets, Android TV, and TV boxes.
              </p>
            </div>
            <button
              onClick={() => navigate({ path: 'verify' })}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors self-start sm:self-auto"
            >
              Verify Checksums →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono font-bold flex items-center justify-center text-sm">
                01
              </div>
              <h4 className="font-display font-bold text-base text-zinc-200">
                Download the APK
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Click <strong>Download APK</strong> on this website. If your browser asks "File might be harmful", tap <strong>Download anyway</strong>.
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono font-bold flex items-center justify-center text-sm">
                02
              </div>
              <h4 className="font-display font-bold text-base text-zinc-200">
                Allow Unknown Source
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Tap the downloaded file. If Android prompts you with a security pop-up, tap <strong>Settings</strong> and enable <strong>Allow from this source</strong> for your browser or file manager.
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono font-bold flex items-center justify-center text-sm">
                03
              </div>
              <h4 className="font-display font-bold text-base text-zinc-200">
                Install & Launch
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Press back and tap <strong>Install</strong>. Once complete, open Kaisel IPTV and configure your favorite playlist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Apps in Suite */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              Kaisel Application Ecosystem
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">Companion utilities built for streaming and TV optimization</p>
          </div>
          <button
            onClick={() => navigate({ path: 'apps' })}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300"
          >
            All Apps ({APPS_CONFIG.length})
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {APPS_CONFIG.map((app) => (
            <div 
              key={app.id} 
              className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <AppIcon iconType={app.icon} size="md" />
                  <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded">
                    v{app.version}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    {app.packageName}
                  </p>
                </div>

                <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                  {app.shortDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => navigate({ path: 'app-detail', appId: app.id })}
                  className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
                >
                  Details →
                </button>
                <button
                  onClick={() => navigate({ path: 'download', appId: app.id })}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-colors"
                >
                  <Download size={13} />
                  <span>APK ({app.apkSize})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
