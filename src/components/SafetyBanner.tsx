import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, ChevronDown, ChevronUp, CheckCircle, ExternalLink } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export function SafetyBanner({ showGuide = true }: { showGuide?: boolean }) {
  const [guideOpen, setGuideOpen] = useState(false);
  const { navigate } = useRouter();

  return (
    <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-zinc-900 to-amber-950/20 p-4 sm:p-5 shadow-lg">
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
          <AlertTriangle size={22} className="stroke-[2.2]" />
        </div>
        
        <div className="space-y-2 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-display font-bold text-sm sm:text-base text-amber-200">
              Official Direct Distribution Notice
            </h3>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40 w-fit">
              Official Domain: kaisel.app
            </span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
            Android may ask you to allow installation from this source. Only download Kaisel APK files from this official website.
          </p>

          {showGuide && (
            <div className="pt-1">
              <button
                onClick={() => setGuideOpen(!guideOpen)}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                <span>{guideOpen ? 'Hide installation steps' : 'How to allow installation on Android (Quick Guide)'}</span>
                {guideOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {guideOpen && (
                <div className="mt-3 pt-3 border-t border-amber-500/20 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-300 animate-in fade-in duration-200">
                  <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 space-y-1">
                    <span className="font-bold text-cyan-400 block font-mono">1. Download</span>
                    <p className="text-zinc-400 text-[11px]">
                      Click "Download APK". When prompted by Chrome or your browser, tap <strong>"Download anyway"</strong>.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 space-y-1">
                    <span className="font-bold text-cyan-400 block font-mono">2. Allow Source</span>
                    <p className="text-zinc-400 text-[11px]">
                      Open the downloaded file. If prompted, tap <strong>Settings</strong> and toggle on <strong>"Allow from this source"</strong>.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 space-y-1">
                    <span className="font-bold text-cyan-400 block font-mono">3. Install & Enjoy</span>
                    <p className="text-zinc-400 text-[11px]">
                      Return to the installer screen and tap <strong>Install</strong>. Launch Kaisel IPTV and add your playlist.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
