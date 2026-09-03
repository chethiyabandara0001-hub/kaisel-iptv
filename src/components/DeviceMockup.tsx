import React from 'react';
import { Tv, Play, Volume2, Settings, Wifi, Radio, Sparkles, Shield, Cast } from 'lucide-react';

export function DeviceMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      {/* Background glow behind display */}
      <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-indigo-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-70 pointer-events-none" />

      {/* Screen Frame */}
      <div className="relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 bg-gradient-to-b from-zinc-800 to-zinc-950 border border-zinc-700/80 shadow-2xl shadow-black/80">
        
        {/* Top TV Bezel / Camera / Sensor */}
        <div className="flex items-center justify-between px-3 py-1.5 mb-1 text-[11px] text-zinc-400 font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-zinc-300">KAISEL IPTV ENGINE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-500/30">
              4K HDR 60FPS
            </span>
            <div className="flex items-center gap-1 text-zinc-400">
              <Wifi size={12} className="text-emerald-400" />
              <span>5.0 GHz</span>
            </div>
          </div>
        </div>

        {/* Inner Screen Display */}
        <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-inner flex flex-col justify-between p-3 sm:p-5 select-none">
          
          {/* Simulated Broadcast Stream Graphic */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-900 overflow-hidden">
            {/* Ambient geometric grid */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl" />
          </div>

          {/* Video Stream UI Overlay */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-rose-600 text-white font-bold text-[10px] tracking-wider uppercase animate-pulse">
                  LIVE
                </span>
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  Ultra Sports HD 1
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700 font-mono">
                  CH 104
                </span>
              </div>
              <p className="text-[11px] text-zinc-300 font-medium hidden sm:block">
                International Championship Final • Direct Low Latency Feed
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="px-2 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 flex items-center gap-1.5">
                <Radio size={12} className="text-cyan-400 animate-spin" />
                <span>ExoPlayer v2.19 (H.265)</span>
              </div>
            </div>
          </div>

          {/* Center Simulated Live TV Guide / Channels Row */}
          <div className="relative z-10 grid grid-cols-3 sm:grid-cols-4 gap-2 my-auto">
            <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-b from-cyan-500/20 to-blue-600/20 border border-cyan-400/40 shadow-lg backdrop-blur-md">
              <div className="text-[10px] text-cyan-300 font-bold uppercase tracking-wider">Now Playing</div>
              <div className="text-xs sm:text-sm font-bold text-white truncate">Sports World HD</div>
              <div className="text-[10px] text-zinc-400 truncate">1080p60 • 8.4 Mbps</div>
            </div>

            <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/5 backdrop-blur-sm hidden sm:block">
              <div className="text-[10px] text-zinc-400 font-medium">CH 105</div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200 truncate">Cinema 4K Premier</div>
              <div className="text-[10px] text-zinc-400 truncate">Dolby Audio 5.1</div>
            </div>

            <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/5 backdrop-blur-sm">
              <div className="text-[10px] text-zinc-400 font-medium">CH 106</div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200 truncate">Global News 24/7</div>
              <div className="text-[10px] text-zinc-400 truncate">Live Satellite Feed</div>
            </div>

            <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/5 backdrop-blur-sm">
              <div className="text-[10px] text-zinc-400 font-medium">CH 107</div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200 truncate">Discovery Science</div>
              <div className="text-[10px] text-zinc-400 truncate">EPG Synced</div>
            </div>
          </div>

          {/* Bottom OSD Bar */}
          <div className="relative z-10 p-2 sm:p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-md bg-cyan-500 flex items-center justify-center text-zinc-950">
                <Play size={12} className="fill-current" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-white">EPG Timeline: 20:00 - 22:30</span>
                  <span className="text-[10px] text-cyan-400 font-mono">01:14:20 elapsed</span>
                </div>
                <div className="w-36 sm:w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-zinc-300 font-mono">
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700">Audio: Eng (AC3)</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">Buffer: 4.8s</span>
            </div>
          </div>

        </div>

        {/* TV Stand Base */}
        <div className="mt-2 flex justify-center">
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-zinc-600 to-transparent rounded-full opacity-60" />
        </div>
      </div>
    </div>
  );
}
