import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { getAppById, FEATURED_APP, DEVELOPER_INFO } from '../config/apps.config';
import { AppIcon, FeatureIcon } from '../components/AppIcon';
import { SafetyBanner } from '../components/SafetyBanner';
import { ApkVerificationWidget } from '../components/ApkVerificationWidget';
import { 
  Download, 
  ArrowLeft, 
  ShieldCheck, 
  Smartphone, 
  HardDrive, 
  Calendar, 
  Cpu, 
  Code, 
  CheckCircle2, 
  Layers, 
  Info, 
  Lock, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Tv,
  Mail,
  Building2,
  FileText
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export function AppDetailPage({ appId }: { appId?: string }) {
  const { navigate } = useRouter();
  const app = getAppById(appId || 'kaisel-iptv') || FEATURED_APP;
  
  const [selectedScreenshot, setSelectedScreenshot] = useState<number | null>(null);
  const [expandedChangelog, setExpandedChangelog] = useState(true);

  const handleDownloadClick = () => {
    trackEvent('download_clicked', { appId: app.id, version: app.version });
    navigate({ path: 'download', appId: app.id });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 pb-20">
      
      {/* Back Navigation Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate({ path: 'apps' })}
          className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to All Applications</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/40 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Official Distribution Page</span>
          </span>
        </div>
      </div>

      {/* Main App Hero Card */}
      <div className="rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 p-6 sm:p-10 shadow-2xl space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-zinc-800/80 pb-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <AppIcon iconType={app.icon} size="xl" className="shrink-0" />
            
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {app.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                  {app.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                  v{app.version}
                </span>
              </div>

              <p className="text-sm font-mono text-cyan-300">
                Package: <span className="font-bold">{app.packageName}</span>
              </p>

              <p className="text-sm sm:text-base font-medium text-zinc-300 max-w-xl">
                {app.tagline}
              </p>
            </div>
          </div>

          {/* Action Download Pill */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <button
              onClick={handleDownloadClick}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-[0.98] transition-all"
            >
              <Download size={20} className="stroke-[2.5]" />
              <div className="text-left">
                <div>Download APK</div>
                <div className="text-[11px] font-mono text-cyan-100 font-normal">v{app.version} • {app.apkSize}</div>
              </div>
            </button>

            <button
              onClick={() => {
                const specElem = document.getElementById('security-section');
                if (specElem) specElem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              <ShieldCheck size={14} className="text-cyan-400" />
              <span>Verify SHA-256 Checksum</span>
            </button>
          </div>

        </div>

        {/* Prominent Installation Warning */}
        <SafetyBanner showGuide={true} />

        {/* Description Section */}
        <div className="space-y-4">
          <h2 className="font-display text-xl font-bold text-white tracking-tight">
            About {app.name}
          </h2>
          <div className="space-y-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p>{app.description}</p>
            {app.longDescription?.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-white tracking-tight">
              Application Interface & Screenshots
            </h2>
            <span className="text-xs text-zinc-400">Official UI Previews</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {app.screenshots.map((screen, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedScreenshot(idx)}
                className="group cursor-pointer rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-cyan-500/50 p-3 space-y-3 transition-all hover:shadow-lg overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Graphic Representation */}
                <div 
                  className="aspect-video sm:aspect-square rounded-xl overflow-hidden relative flex flex-col justify-between p-3 border border-white/5"
                  style={{ backgroundColor: `${screen.themeColor}15` }}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span className="px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md">Kaisel UI</span>
                    <span className="text-cyan-400 font-bold">{screen.previewType.toUpperCase()}</span>
                  </div>

                  <div className="text-center space-y-1 my-auto">
                    <Tv size={28} className="text-cyan-400 mx-auto opacity-80 group-hover:scale-110 transition-transform" />
                    <p className="text-xs font-bold text-white tracking-tight px-2 line-clamp-2">
                      {screen.title}
                    </p>
                  </div>

                  <div className="text-[9px] text-zinc-400 font-mono bg-black/40 px-2 py-1 rounded text-center truncate">
                    {screen.caption}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-zinc-200 group-hover:text-cyan-400 transition-colors">
                    {screen.title}
                  </h3>
                  <p className="text-[11px] text-zinc-400 line-clamp-2">
                    {screen.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshot Modal */}
        {selectedScreenshot !== null && (
          <div 
            onClick={() => setSelectedScreenshot(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-150"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full bg-zinc-900 rounded-3xl border border-zinc-700 p-6 space-y-4 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <h3 className="font-display font-bold text-lg text-white">
                  {app.screenshots[selectedScreenshot].title}
                </h3>
                <button
                  onClick={() => setSelectedScreenshot(null)}
                  className="px-3 py-1 rounded-lg bg-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white"
                >
                  Close
                </button>
              </div>

              <div className="aspect-video bg-zinc-950 rounded-2xl border border-zinc-800 flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Tv size={32} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-white">
                    {app.screenshots[selectedScreenshot].title}
                  </h4>
                  <p className="text-sm text-zinc-400 max-w-lg mt-1">
                    {app.screenshots[selectedScreenshot].description}
                  </p>
                </div>
                <div className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
                  Feature Caption: {app.screenshots[selectedScreenshot].caption}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Features & Key Capabilities Grid */}
      <div className="space-y-6">
        <h2 className="font-display text-2xl font-bold text-white tracking-tight">
          Key Features & Architecture
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {app.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <FeatureIcon name={feature.iconName} className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-zinc-100">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications Table */}
      <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <Code size={20} className="text-cyan-400" />
            <h2 className="font-display text-xl font-bold text-white tracking-tight">
              Technical Specifications & APK Metadata
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400">Single Universal Binary</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between">
            <span className="text-zinc-400 font-medium">Application Name</span>
            <span className="font-bold text-zinc-100">{app.name}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between">
            <span className="text-zinc-400 font-medium">Package Identifier</span>
            <span className="font-mono font-bold text-cyan-300">{app.packageName}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between">
            <span className="text-zinc-400 font-medium">Release Version</span>
            <span className="font-mono font-bold text-zinc-100">v{app.version} (Code: {app.versionCode})</span>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between">
            <span className="text-zinc-400 font-medium">File Size</span>
            <span className="font-mono font-bold text-zinc-100">{app.apkSize}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between">
            <span className="text-zinc-400 font-medium">Minimum Android Version</span>
            <span className="font-medium text-zinc-100">{app.minimumAndroid}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between">
            <span className="text-zinc-400 font-medium">Target SDK</span>
            <span className="font-medium text-zinc-100">{app.targetAndroid}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between">
            <span className="text-zinc-400 font-medium">Supported Architectures</span>
            <span className="font-mono text-zinc-100">{app.architecture}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between">
            <span className="text-zinc-400 font-medium">Release Date</span>
            <span className="font-medium text-zinc-100">{app.releaseDate}</span>
          </div>
        </div>

        {/* Declared Android Permissions */}
        <div className="pt-4 border-t border-zinc-800/80 space-y-3">
          <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
            Declared Android Manifest Permissions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {app.permissions.map((perm, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/60 text-xs flex items-start gap-2">
                <Lock size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-zinc-200 font-semibold">{perm.name}</span>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{perm.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security & Checksum Section */}
      <div id="security-section" className="space-y-4">
        <h2 className="font-display text-2xl font-bold text-white tracking-tight">
          Authenticity & Cryptographic Verification
        </h2>
        <ApkVerificationWidget app={app} showFileVerifier={true} />
      </div>

      {/* Release Changelog Timeline */}
      <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div>
            <h2 className="font-display text-xl font-bold text-white tracking-tight">
              Release Changelog & Version History
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">Track modifications, enhancements, and patches across releases</p>
          </div>
          <button
            onClick={() => setExpandedChangelog(!expandedChangelog)}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>{expandedChangelog ? 'Collapse All' : 'Expand All'}</span>
            {expandedChangelog ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        <div className="space-y-6">
          {app.changelog.map((entry, idx) => (
            <div key={idx} className="relative pl-6 border-l-2 border-cyan-500/40 space-y-2">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-950 border-2 border-cyan-400 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono font-bold text-base text-white">
                  Version {entry.version}
                </span>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">
                  Build {entry.versionCode}
                </span>
                <span className="text-xs text-zinc-400">
                  {entry.releaseDate}
                </span>
                {entry.isLatest && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Current Version
                  </span>
                )}
              </div>

              {expandedChangelog && (
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300 pt-1">
                  {entry.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-cyan-400 shrink-0 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Official Publisher & AppLovin Compliance Card */}
      <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
          <Building2 size={20} className="text-cyan-400" />
          <div>
            <h2 className="font-display text-xl font-bold text-white tracking-tight">
              Official Publisher & App Details (Public Distribution Record)
            </h2>
            <p className="text-xs text-zinc-400">
              Verified public record for ad networks, partners, and user transparency
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          <div className="space-y-3">
            <h3 className="font-bold text-zinc-200 uppercase tracking-wider text-xs">
              Developer Identification
            </h3>
            <div className="space-y-2 text-zinc-300">
              <p><strong className="text-zinc-400">Project / Developer:</strong> {DEVELOPER_INFO.organization}</p>
              <p><strong className="text-zinc-400">Official Website:</strong> <a href={DEVELOPER_INFO.website} className="text-cyan-400 hover:underline">{DEVELOPER_INFO.website}</a></p>
              <p><strong className="text-zinc-400">Support Inquiries:</strong> <a href={`mailto:${DEVELOPER_INFO.email}`} className="text-cyan-400 hover:underline">{DEVELOPER_INFO.email}</a></p>
              <p><strong className="text-zinc-400">Distribution Type:</strong> Direct Developer Release (Independent Android Binary)</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-zinc-200 uppercase tracking-wider text-xs">
              Legal & Policy Compliance
            </h3>
            <div className="space-y-2">
              <p className="text-zinc-400 text-xs">
                Kaisel provides software player tools. The application does not provide, host, or distribute copyright media streams.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={() => navigate({ path: 'privacy' })}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <FileText size={13} />
                  <span>Privacy Policy</span>
                </button>
                <button
                  onClick={() => navigate({ path: 'terms' })}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <FileText size={13} />
                  <span>Terms of Service</span>
                </button>
                <button
                  onClick={() => navigate({ path: 'contact' })}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Mail size={13} />
                  <span>Contact Form</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
