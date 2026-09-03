import React from 'react';
import { Tv, Smartphone, Activity, Radio, Cpu, Layers, Volume2, Zap, ShieldCheck, Download, ExternalLink, Copy, Check, Info, ArrowLeft, Search, Filter, AlertCircle, RefreshCw } from 'lucide-react';

interface AppIconProps {
  iconType?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function AppIcon({ iconType = 'tv', className = '', size = 'md' }: AppIconProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-12 h-12 rounded-xl',
    lg: 'w-16 h-16 rounded-2xl',
    xl: 'w-24 h-24 rounded-3xl',
  };

  const iconSizes = {
    sm: 18,
    md: 26,
    lg: 34,
    xl: 52,
  };

  if (iconType === 'tv' || iconType === 'kaisel-iptv') {
    return (
      <div className={`relative flex items-center justify-center bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 text-white shadow-lg shadow-cyan-500/20 ring-1 ring-white/20 overflow-hidden ${sizeClasses[size]} ${className}`}>
        <div className="absolute inset-0 bg-radial from-white/30 via-transparent to-black/30 pointer-events-none" />
        <Tv size={iconSizes[size]} className="relative z-10 stroke-[2.2] drop-shadow" />
        <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-zinc-950 animate-pulse" />
      </div>
    );
  }

  if (iconType === 'remote' || iconType === 'kaisel-remote') {
    return (
      <div className={`relative flex items-center justify-center bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 text-white shadow-lg shadow-emerald-500/20 ring-1 ring-white/20 overflow-hidden ${sizeClasses[size]} ${className}`}>
        <div className="absolute inset-0 bg-radial from-white/30 via-transparent to-black/30 pointer-events-none" />
        <Smartphone size={iconSizes[size]} className="relative z-10 stroke-[2.2] drop-shadow" />
        <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-cyan-300 ring-1 ring-zinc-950" />
      </div>
    );
  }

  if (iconType === 'activity' || iconType === 'kaisel-nettune') {
    return (
      <div className={`relative flex items-center justify-center bg-gradient-to-br from-amber-500 via-orange-600 to-rose-700 text-white shadow-lg shadow-amber-500/20 ring-1 ring-white/20 overflow-hidden ${sizeClasses[size]} ${className}`}>
        <div className="absolute inset-0 bg-radial from-white/30 via-transparent to-black/30 pointer-events-none" />
        <Activity size={iconSizes[size]} className="relative z-10 stroke-[2.2] drop-shadow" />
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center bg-gradient-to-br from-zinc-700 to-zinc-900 text-white shadow-lg ring-1 ring-white/20 overflow-hidden ${sizeClasses[size]} ${className}`}>
      <Radio size={iconSizes[size]} className="relative z-10 stroke-[2.2]" />
    </div>
  );
}

export function FeatureIcon({ name, className = "w-5 h-5 text-cyan-400" }: { name: string; className?: string }) {
  switch (name) {
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Tv':
      return <Tv className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'Volume2':
      return <Volume2 className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Wifi':
      return <Radio className={className} />;
    case 'Smartphone':
      return <Smartphone className={className} />;
    case 'Activity':
      return <Activity className={className} />;
    default:
      return <ShieldCheck className={className} />;
  }
}
