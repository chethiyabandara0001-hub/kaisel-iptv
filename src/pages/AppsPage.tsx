import React, { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { APPS_CONFIG } from '../config/apps.config';
import { AppIcon } from '../components/AppIcon';
import { SafetyBanner } from '../components/SafetyBanner';
import { Search, Filter, Download, ArrowRight, Smartphone, Calendar, HardDrive, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export function AppsPage() {
  const { navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Entertainment', 'Utilities', 'Tools'];

  const filteredApps = useMemo(() => {
    return APPS_CONFIG.filter((app) => {
      const matchesSearch = 
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.packageName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.tagline.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = 
        selectedCategory === 'All' || app.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Sparkles size={13} />
          <span>Official Repository</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Kaisel Application Catalog
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
          Explore and download official Android APK releases directly from the Kaisel project. Built for performance, security, and high reliability.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-md">
        
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search applications, packages, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700/80 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-zinc-300 px-1.5 py-0.5 rounded"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-semibold uppercase tracking-wider mr-1 hidden sm:flex">
            <Filter size={14} />
            <span>Category:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-white shadow-sm shadow-cyan-500/30'
                  : 'bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-300 hover:text-white border border-zinc-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Safety Notice */}
      <SafetyBanner showGuide={false} />

      {/* Apps Grid */}
      {filteredApps.length === 0 ? (
        <div className="text-center py-16 space-y-4 bg-zinc-900/40 rounded-3xl border border-zinc-800">
          <Search size={36} className="text-zinc-500 mx-auto" />
          <h3 className="font-display font-bold text-lg text-white">No applications found</h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto">
            No applications match your search query "{searchQuery}". Try searching for "IPTV", "Remote", or reset filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="px-4 py-2 rounded-xl bg-zinc-800 text-xs font-semibold text-zinc-200 hover:bg-zinc-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700/80 p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-xl transition-all group"
            >
              <div className="space-y-4">
                
                {/* Top header row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <AppIcon iconType={app.icon} size="lg" className="shrink-0" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {app.name}
                        </h2>
                        {app.isFeatured && (
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            Flagship
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-mono text-zinc-400">
                        {app.packageName}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700/70 shrink-0">
                    {app.category}
                  </span>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {app.shortDescription}
                </p>

                {/* Metadata Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-3 border-y border-zinc-800/80 text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold block">Version</span>
                    <span className="font-mono text-zinc-200 font-bold">v{app.version}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold block">APK Size</span>
                    <span className="font-mono text-zinc-200 font-semibold">{app.apkSize}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold block">Compatibility</span>
                    <span className="text-zinc-200 truncate block" title={app.minimumAndroid}>{app.minimumAndroid.split('(')[0]}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold block">Updated</span>
                    <span className="text-zinc-200 truncate block">{app.releaseDate}</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                <button
                  onClick={() => navigate({ path: 'app-detail', appId: app.id })}
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-semibold text-xs sm:text-sm border border-zinc-700 transition-colors"
                >
                  <span>View Details & Changelog</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={() => {
                    trackEvent('download_clicked', { appId: app.id, version: app.version });
                    navigate({ path: 'download', appId: app.id });
                  }}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all"
                >
                  <Download size={16} className="stroke-[2.5]" />
                  <span>Download APK</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}
