import React, { useEffect, useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { getAppById, FEATURED_APP } from '../config/apps.config';
import { AppIcon } from '../components/AppIcon';
import { ApkVerificationWidget } from '../components/ApkVerificationWidget';
import { 
  Download, 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  Smartphone, 
  HardDrive, 
  RefreshCw, 
  AlertCircle,
  ExternalLink,
  HelpCircle,
  Copy,
  Check
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export function DownloadPage({ appId }: { appId?: string }) {
  const { navigate } = useRouter();
  const app = getAppById(appId || 'kaisel-iptv') || FEATURED_APP;

  const [countdown, setCountdown] = useState(3);
  const [downloadTriggered, setDownloadTriggered] = useState(false);
  const [copied, setCopied] = useState(false);

  const startActualDownload = () => {
    trackEvent('apk_download_started', {
      appId: app.id,
      appName: app.name,
      version: app.version,
      apkUrl: app.apkUrl,
    });
    setDownloadTriggered(true);

    // Trigger download via invisible link
    const link = document.createElement('a');
    link.href = app.apkUrl;
    link.setAttribute('download', `${app.packageName}-v${app.version}.apk`);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !downloadTriggered) {
      startActualDownload();
    }
  }, [countdown, downloadTriggered]);

  const copySha = () => {
    navigator.clipboard.writeText(app.sha256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 pb-20">
      
      {/* Top navigation */}
      <button
        onClick={() => navigate({ path: 'app-detail', appId: app.id })}
        className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-zinc-100 transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Back to {app.name}</span>
      </button>

      {/* Main Download Card */}
      <div className="rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-6 sm:p-10 shadow-2xl space-y-8 text-center">
        
        {/* App Icon & Header */}
        <div className="space-y-4">
          <AppIcon iconType={app.icon} size="xl" className="mx-auto" />
          
          <div className="space-y-1">
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Downloading {app.name}
            </h1>
            <p className="text-sm font-mono text-zinc-400">
              Package: <span className="text-cyan-300 font-semibold">{app.packageName}</span>
            </p>
          </div>
        </div>

        {/* Countdown & Status Progress */}
        <div className="max-w-md mx-auto p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-4">
          {countdown > 0 ? (
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-zinc-300">
                <RefreshCw size={14} className="animate-spin text-cyan-400" />
                <span>Preparing secure official release link in {countdown}s...</span>
              </div>
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 ease-linear"
                  style={{ width: `${((3 - countdown) / 3) * 100}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-400">
              <CheckCircle2 size={16} />
              <span>Download request initiated! Check your browser downloads.</span>
            </div>
          )}

          {/* Direct Manual Download Trigger */}
          <div className="pt-2 space-y-2">
            <button
              onClick={startActualDownload}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all active:scale-[0.98]"
            >
              <Download size={18} className="stroke-[2.5]" />
              <span>Download APK Directly</span>
              <span className="text-xs font-mono bg-black/20 px-2 py-0.5 rounded">{app.apkSize}</span>
            </button>
            
            <p className="text-[11px] text-zinc-400">
              If your download didn't start automatically, click the button above.
            </p>
          </div>
        </div>

        {/* Specifications & Security Information Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-left bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800/60">
          <div className="space-y-0.5">
            <span className="text-zinc-400 text-[10px] uppercase tracking-wider font-semibold">Version</span>
            <p className="font-mono text-zinc-200 font-bold">v{app.version}</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-zinc-400 text-[10px] uppercase tracking-wider font-semibold">APK Size</span>
            <p className="font-mono text-zinc-200 font-bold">{app.apkSize}</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-zinc-400 text-[10px] uppercase tracking-wider font-semibold">Android Requirements</span>
            <p className="text-zinc-200 font-medium truncate" title={app.minimumAndroid}>{app.minimumAndroid.split('(')[0]}</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-zinc-400 text-[10px] uppercase tracking-wider font-semibold">Source Authenticity</span>
            <p className="text-emerald-400 font-medium flex items-center gap-1">
              <ShieldCheck size={13} />
              <span>Direct Release</span>
            </p>
          </div>
        </div>

        {/* SHA-256 Quick Hash Snippet */}
        <div className="text-left space-y-1.5 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono font-semibold text-zinc-300 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-cyan-400" />
              <span>SHA-256 Release Fingerprint</span>
            </span>
            <button
              onClick={copySha}
              className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
            >
              {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span>{copied ? 'Copied to clipboard' : 'Copy Checksum'}</span>
            </button>
          </div>
          <p className="text-[11px] font-mono text-cyan-300/90 break-all select-all bg-zinc-900/90 p-2 rounded-lg border border-zinc-800">
            {app.sha256}
          </p>
        </div>

      </div>

      {/* Step-by-Step Android Installation Guide */}
      <div className="rounded-3xl bg-zinc-900/70 border border-zinc-800 p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
          <HelpCircle size={20} className="text-cyan-400" />
          <h2 className="font-display text-xl font-bold text-white tracking-tight">
            How to Install on Your Android Device
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm">
          
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 font-bold font-mono flex items-center justify-center shrink-0">
              1
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-zinc-100">Step 1: Confirm Download Prompt</h3>
              <p className="text-zinc-400 leading-relaxed">
                When your browser (Chrome, Samsung Internet, Firefox) displays a warning: <em>"File might be harmful"</em>, tap <strong>"Download anyway"</strong>. This is standard Android security for files downloaded outside the Google Play Store.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 font-bold font-mono flex items-center justify-center shrink-0">
              2
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-zinc-100">Step 2: Enable "Install Unknown Apps"</h3>
              <p className="text-zinc-400 leading-relaxed">
                Tap on the downloaded APK file notification. If Android says <em>"For your security, your phone is not allowed to install unknown apps from this source"</em>, tap <strong>Settings</strong> and toggle on <strong>"Allow from this source"</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 font-bold font-mono flex items-center justify-center shrink-0">
              3
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-zinc-100">Step 3: Tap Install</h3>
              <p className="text-zinc-400 leading-relaxed">
                Return to the installation prompt and tap <strong>"Install"</strong>. Once installed, tap <strong>"Open"</strong> to launch {app.name}.
              </p>
            </div>
          </div>

        </div>

        {/* Back navigation CTA */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => navigate({ path: 'app-detail', appId: app.id })}
            className="px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs sm:text-sm font-semibold text-zinc-200 transition-colors"
          >
            ← Back to {app.name} Information Page
          </button>
        </div>

      </div>

    </div>
  );
}
