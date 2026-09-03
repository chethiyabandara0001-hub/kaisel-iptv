import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Download, ShieldCheck, Tv, Smartphone, Layers, ChevronRight } from 'lucide-react';
import { FEATURED_APP } from '../config/apps.config';

export function Header() {
  const { currentRoute, navigate } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string, appId?: string) => {
    if (path === 'home' && currentRoute.path === 'home') return true;
    if (path === 'apps' && currentRoute.path === 'apps') return true;
    if (path === 'app-detail' && currentRoute.path === 'app-detail' && currentRoute.appId === appId) return true;
    if (path === 'about' && currentRoute.path === 'about') return true;
    if (path === 'contact' && currentRoute.path === 'contact') return true;
    if (path === 'verify' && currentRoute.path === 'verify') return true;
    return false;
  };

  const navLinks = [
    { label: 'Home', onClick: () => navigate({ path: 'home' }), active: isActive('home') },
    { label: 'Apps', onClick: () => navigate({ path: 'apps' }), active: isActive('apps') },
    { label: 'Kaisel IPTV', onClick: () => navigate({ path: 'app-detail', appId: 'kaisel-iptv' }), active: isActive('app-detail', 'kaisel-iptv'), isHighlight: true },
    { label: 'About', onClick: () => navigate({ path: 'about' }), active: isActive('about') },
    { label: 'Contact', onClick: () => navigate({ path: 'contact' }), active: isActive('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 dark:bg-zinc-950/80 light:bg-white/90 backdrop-blur-xl transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => navigate({ path: 'home' })}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-600 p-[1.5px] shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="w-full h-full bg-zinc-950 dark:bg-zinc-950 light:bg-white rounded-[10px] flex items-center justify-center">
              <span className="font-display font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                K
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-xl tracking-wider text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
                KAiSEL
              </span>
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                APK
              </span>
            </div>
            <span className="text-[11px] text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-medium tracking-tight">
              Official Distribution
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.onClick}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all relative ${
                link.active
                  ? 'text-cyan-400 dark:text-cyan-400 light:text-cyan-600 font-semibold'
                  : 'text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-zinc-200 dark:hover:text-zinc-100 light:hover:text-zinc-900 hover:bg-zinc-900/60 dark:hover:bg-zinc-900/60 light:hover:bg-zinc-100'
              }`}
            >
              {link.label}
              {link.active && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Checksum quick link */}
          <button
            onClick={() => navigate({ path: 'verify' })}
            title="Verify APK Checksums"
            className="p-2 text-zinc-400 hover:text-zinc-200 dark:hover:text-zinc-100 light:hover:text-zinc-900 rounded-lg hover:bg-zinc-900/80 dark:hover:bg-zinc-900/80 light:hover:bg-zinc-100 transition-colors"
          >
            <ShieldCheck size={19} />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-zinc-400 hover:text-zinc-200 dark:hover:text-zinc-100 light:hover:text-zinc-900 rounded-lg hover:bg-zinc-900/80 dark:hover:bg-zinc-900/80 light:hover:bg-zinc-100 transition-colors"
          >
            {theme === 'dark' ? <Sun size={19} className="text-amber-400" /> : <Moon size={19} className="text-zinc-700" />}
          </button>

          {/* Primary Download Button */}
          <button
            onClick={() => navigate({ path: 'download', appId: FEATURED_APP.id })}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-[0.98] transition-all"
          >
            <Download size={16} className="stroke-[2.5]" />
            <span>Download App</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-zinc-400 rounded-lg hover:bg-zinc-900 light:hover:bg-zinc-100"
          >
            {theme === 'dark' ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-zinc-700" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 rounded-lg hover:bg-zinc-900 light:hover:bg-zinc-100 transition-colors"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/95 dark:bg-zinc-950/95 light:bg-white/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  link.onClick();
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-medium transition-colors ${
                  link.active
                    ? 'bg-cyan-500/10 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 font-semibold'
                    : 'text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:bg-zinc-900 light:hover:bg-zinc-100'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight size={18} className="text-zinc-500" />
              </button>
            ))}

            <button
              onClick={() => {
                navigate({ path: 'verify' });
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-base text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:bg-zinc-900 light:hover:bg-zinc-100"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-cyan-400" />
                <span>Verify APK Checksums</span>
              </div>
              <ChevronRight size={18} className="text-zinc-500" />
            </button>
          </div>

          <div className="pt-3 border-t border-zinc-800/80">
            <button
              onClick={() => {
                navigate({ path: 'download', appId: FEATURED_APP.id });
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base shadow-lg shadow-cyan-500/30"
            >
              <Download size={18} className="stroke-[2.5]" />
              <span>Download Kaisel IPTV v{FEATURED_APP.version}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
