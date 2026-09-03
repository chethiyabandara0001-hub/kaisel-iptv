import React, { useState } from 'react';
import { AppConfig } from '../types';
import { Copy, Check, ShieldCheck, Upload, FileCheck, AlertCircle, RefreshCw, Lock } from 'lucide-react';
import { calculateFileSha256 } from '../utils/crypto';
import { trackEvent } from '../utils/analytics';

interface ApkVerificationWidgetProps {
  app: AppConfig;
  showFileVerifier?: boolean;
}

export function ApkVerificationWidget({ app, showFileVerifier = true }: ApkVerificationWidgetProps) {
  const [copied, setCopied] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [calculating, setCalculating] = useState(false);
  const [calculatedHash, setCalculatedHash] = useState<string | null>(null);
  const [calculatedFileName, setCalculatedFileName] = useState<string | null>(null);
  const [hashMatch, setHashMatch] = useState<boolean | null>(null);
  const [progress, setProgress] = useState(0);

  const handleCopy = () => {
    navigator.clipboard.writeText(app.sha256);
    setCopied(true);
    trackEvent('checksum_copied', { appId: app.id, version: app.version });
    setTimeout(() => setCopied(false), 2000);
  };

  const processFile = async (file: File) => {
    if (!file) return;
    setCalculating(true);
    setCalculatedFileName(file.name);
    setCalculatedHash(null);
    setHashMatch(null);
    setProgress(0);

    try {
      const hash = await calculateFileSha256(file, (p) => setProgress(p));
      setCalculatedHash(hash);
      const isMatch = hash.toLowerCase() === app.sha256.toLowerCase();
      setHashMatch(isMatch);
      trackEvent('checksum_verified', { appId: app.id, match: isMatch });
    } catch (err) {
      console.error('Failed to compute hash:', err);
    } finally {
      setCalculating(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  return (
    <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-5 sm:p-6 space-y-5">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
        <div className="flex items-center gap-2">
          <ShieldCheck size={20} className="text-cyan-400" />
          <h3 className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-wider">
            Release Authenticity & Checksum
          </h3>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
          v{app.version}
        </span>
      </div>

      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
        Verify that the APK package was built and published directly by the official Kaisel project. You can compare the official cryptographic SHA-256 hash below against your downloaded binary.
      </p>

      {/* Release Meta info */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs py-2 bg-zinc-950/60 rounded-xl p-3 border border-zinc-800/60">
        <div>
          <span className="text-zinc-400 text-[10px] uppercase tracking-wider block font-semibold">Version</span>
          <span className="font-mono text-zinc-200 font-medium">v{app.version} ({app.versionCode})</span>
        </div>
        <div>
          <span className="text-zinc-400 text-[10px] uppercase tracking-wider block font-semibold">File Size</span>
          <span className="font-mono text-zinc-200 font-medium">{app.apkSize}</span>
        </div>
        <div>
          <span className="text-zinc-400 text-[10px] uppercase tracking-wider block font-semibold">Release Date</span>
          <span className="font-mono text-zinc-200 font-medium">{app.releaseDate}</span>
        </div>
        <div>
          <span className="text-zinc-400 text-[10px] uppercase tracking-wider block font-semibold">Target Architecture</span>
          <span className="font-mono text-zinc-200 font-medium truncate block">Universal</span>
        </div>
      </div>

      {/* SHA-256 Box with Copy button */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono font-bold text-zinc-300">Official SHA-256 Checksum</span>
          <span className="text-[11px] text-zinc-400">Standard 256-bit hash</span>
        </div>

        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-cyan-300">
          <span className="break-all select-all flex-1 tracking-wider">
            {app.sha256}
          </span>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-all ${
              copied
                ? 'bg-emerald-500 text-white'
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700'
            }`}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Optional In-Browser Live File Hash Validator */}
      {showFileVerifier && (
        <div className="pt-2 border-t border-zinc-800 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
              <Lock size={14} className="text-cyan-400" />
              <span>Verify Local APK File (In-Browser SHA-256 Matcher)</span>
            </h4>
            <span className="text-[10px] text-zinc-400">Runs 100% locally in browser</span>
          </div>

          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            className={`relative rounded-xl border-2 border-dashed p-4 text-center transition-all cursor-pointer ${
              dragOver
                ? 'border-cyan-400 bg-cyan-950/20'
                : 'border-zinc-800 hover:border-zinc-700 bg-zinc-950/40'
            }`}
          >
            <input
              type="file"
              accept=".apk,application/vnd.android.package-archive"
              onChange={handleFileInput}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            
            {calculating ? (
              <div className="space-y-2 py-2">
                <RefreshCw size={24} className="animate-spin text-cyan-400 mx-auto" />
                <p className="text-xs text-zinc-300 font-medium">Computing cryptographic SHA-256 checksum...</p>
                <div className="w-48 h-1.5 bg-zinc-800 rounded-full mx-auto overflow-hidden">
                  <div className="h-full bg-cyan-400 transition-all duration-150" style={{ width: `${progress}%` }} />
                </div>
              </div>
            ) : calculatedHash ? (
              <div className="space-y-2 py-1">
                <div className="flex items-center justify-center gap-2">
                  {hashMatch ? (
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-sm">
                      <FileCheck size={18} />
                      <span>Verified Genuine APK Release</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-rose-400 font-bold text-sm">
                      <AlertCircle size={18} />
                      <span>Hash Mismatch! Do not install this file.</span>
                    </div>
                  )}
                </div>

                <div className="text-[11px] text-zinc-400 font-mono break-all">
                  File: <span className="text-zinc-200">{calculatedFileName}</span>
                </div>
                <div className="text-[10px] font-mono text-zinc-400 bg-zinc-900 p-2 rounded-lg break-all">
                  Calculated: {calculatedHash}
                </div>
              </div>
            ) : (
              <div className="space-y-1 py-1">
                <Upload size={20} className="text-zinc-400 mx-auto" />
                <p className="text-xs text-zinc-300 font-medium">
                  Drag and drop your downloaded APK here or <span className="text-cyan-400 underline">browse file</span>
                </p>
                <p className="text-[10px] text-zinc-400">
                  Computes SHA-256 hash inside your browser via Web Crypto API without uploading file to any server.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
