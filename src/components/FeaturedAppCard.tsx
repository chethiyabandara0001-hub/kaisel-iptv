import React from 'react';
import { AppConfig } from '../types';
import { useRouter } from '../context/RouterContext';
import { AppIcon, FeatureIcon } from './AppIcon';
import { Download, ArrowRight, ShieldCheck, Sparkles, Check, HardDrive, Smartphone, Calendar, Layers } from 'lucide-react';

interface FeaturedAppCardProps {
  app: AppConfig;
}

export function FeaturedAppCard({ app }: FeaturedAppCardProps) {
  const { navigate } = useRouter();

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 shadow-2xl p-6 sm:p-8 lg:p-10 overflow-hidden group">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left info column */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
              <Sparkles size={13} />
              <span>Featured Flagship Application</span>
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
              {app.category}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-950/70 text-emerald-300 border border-emerald-800/40">
              v{app.version} (Latest Release)
            </span>
          </div>

          {/* Header & Title */}
          <div className="flex items-start gap-4 sm:gap-5">
            <AppIcon iconType={app.icon} size="lg" className="shrink-0" />
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {app.name}
              </h2>
              <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-0.5">
                Package: <span className="text-cyan-300">{app.packageName}</span>
              </p>
              <p className="text-sm font-medium text-zinc-300 mt-1">
                {app.tagline}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {app.shortDescription}
          </p>

          {/* Quick Technical Specs Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y border-zinc-800/80">
            <div className="space-y-0.5">
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block">Platform</span>
              <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-zinc-200">
                <Smartphone size={14} className="text-cyan-400" />
                <span>Android</span>
              </div>
            </div>

            <div className="space-y-0.5">
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block">Latest Version</span>
              <span className="text-xs sm:text-sm font-bold text-white font-mono">v{app.version}</span>
            </div>

            <div className="space-y-0.5">
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block">File Size</span>
              <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-zinc-200">
                <HardDrive size={14} className="text-cyan-400" />
                <span>{app.apkSize}</span>
              </div>
            </div>

            <div className="space-y-0.5">
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block">Last Updated</span>
              <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-zinc-200">
                <Calendar size={14} className="text-cyan-400" />
                <span>{app.releaseDate}</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <button
              onClick={() => navigate({ path: 'download', appId: app.id })}
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-[0.98] transition-all"
            >
              <Download size={19} className="stroke-[2.5]" />
              <span>Download APK</span>
              <span className="text-xs bg-black/20 px-2 py-0.5 rounded-md font-mono">{app.apkSize}</span>
            </button>

            <button
              onClick={() => navigate({ path: 'app-detail', appId: app.id })}
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-200 hover:text-white border border-zinc-700/80 font-semibold text-base transition-colors"
            >
              <span>View Details</span>
              <ArrowRight size={17} />
            </button>
          </div>

        </div>

        {/* Right Feature Highlights */}
        <div className="lg:col-span-5 bg-zinc-950/60 rounded-2xl p-5 sm:p-6 border border-zinc-800/80 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
            <h3 className="font-display font-bold text-sm text-zinc-200 uppercase tracking-wider">
              Core Capabilities
            </h3>
            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
              Hardware Accelerated
            </span>
          </div>

          <div className="space-y-3">
            {app.features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-zinc-800/90 border border-zinc-700/60 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <FeatureIcon name={feature.iconName} className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-zinc-200">
                    {feature.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Direct Developer Binary</span>
            </div>
            <button
              onClick={() => navigate({ path: 'app-detail', appId: app.id })}
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Changelog (v{app.version}) →
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
