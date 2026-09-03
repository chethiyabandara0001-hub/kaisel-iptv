import React, { createContext, useContext, useEffect, useState } from 'react';
import { PageRoute } from '../types';
import { trackEvent } from '../utils/analytics';
import { getAppById } from '../config/apps.config';

interface RouterContextType {
  currentRoute: PageRoute;
  navigate: (route: PageRoute | string) => void;
  goBack: () => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function parsePath(pathname: string, hash: string): PageRoute {
  // Support both clean pathname and hash paths (useful in various hosting environments)
  const fullPath = hash.startsWith('#') ? hash.slice(1) : pathname;
  const clean = fullPath.replace(/^\/+|\/+$/g, '');

  if (!clean || clean === 'home') {
    return { path: 'home' };
  }
  if (clean === 'apps') {
    return { path: 'apps' };
  }
  if (clean.startsWith('apps/')) {
    const appId = clean.replace('apps/', '');
    return { path: 'app-detail', appId: appId || 'kaisel-iptv' };
  }
  if (clean.startsWith('download/')) {
    const appId = clean.replace('download/', '');
    return { path: 'download', appId: appId || 'kaisel-iptv' };
  }
  if (clean === 'about') {
    return { path: 'about' };
  }
  if (clean === 'contact') {
    return { path: 'contact' };
  }
  if (clean === 'privacy') {
    return { path: 'privacy' };
  }
  if (clean === 'terms') {
    return { path: 'terms' };
  }
  if (clean.startsWith('verify')) {
    const parts = clean.split('/');
    return { path: 'verify', appId: parts[1] };
  }

  return { path: 'home' };
}

function routeToUrl(route: PageRoute): string {
  switch (route.path) {
    case 'home':
      return '/';
    case 'apps':
      return '/apps';
    case 'app-detail':
      return `/apps/${route.appId}`;
    case 'download':
      return `/download/${route.appId}`;
    case 'about':
      return '/about';
    case 'contact':
      return '/contact';
    case 'privacy':
      return '/privacy';
    case 'terms':
      return '/terms';
    case 'verify':
      return route.appId ? `/verify/${route.appId}` : '/verify';
    default:
      return '/';
  }
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    if (typeof window !== 'undefined') {
      return parsePath(window.location.pathname, window.location.hash);
    }
    return { path: 'home' };
  });

  useEffect(() => {
    const handlePopState = () => {
      const parsed = parsePath(window.location.pathname, window.location.hash);
      setCurrentRoute(parsed);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync title and SEO on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let title = 'Kaisel | Official Android App Distribution';
    let description = 'Discover and download official Kaisel applications directly from our website.';

    if (currentRoute.path === 'apps') {
      title = 'All Apps | Kaisel Official Android Store';
      description = 'Browse and download official Android APK releases directly from Kaisel.';
    } else if (currentRoute.path === 'app-detail') {
      const app = getAppById(currentRoute.appId);
      if (app) {
        title = `${app.name} APK Download (v${app.version}) | Official Kaisel Release`;
        description = `${app.shortDescription} Download APK v${app.version} for Android.`;
      }
    } else if (currentRoute.path === 'download') {
      const app = getAppById(currentRoute.appId);
      if (app) {
        title = `Downloading ${app.name} v${app.version} APK | Kaisel`;
        description = `Official APK download for ${app.name} v${app.version}. Fast, verified, and secure distribution.`;
      }
    } else if (currentRoute.path === 'about') {
      title = 'About Kaisel | Independent Android App Distribution';
      description = 'Learn about Kaisel, an independent software project focused on direct Android app distribution.';
    } else if (currentRoute.path === 'contact') {
      title = 'Contact Support & Feedback | Kaisel';
      description = 'Get in touch with the Kaisel development team for support, reports, and inquiries.';
    } else if (currentRoute.path === 'privacy') {
      title = 'Privacy Policy | Kaisel';
      description = 'Official privacy policy for the Kaisel website and applications.';
    } else if (currentRoute.path === 'terms') {
      title = 'Terms of Service | Kaisel';
      description = 'Terms of service and usage conditions for Kaisel software and distribution.';
    } else if (currentRoute.path === 'verify') {
      title = 'APK Authenticity & Checksum Verification | Kaisel';
      description = 'Verify official SHA-256 release checksums for Kaisel Android APK packages.';
    }

    document.title = title;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    trackEvent('app_page_view', {
      path: routeToUrl(currentRoute),
      appId: 'appId' in currentRoute ? currentRoute.appId : undefined,
    });
  }, [currentRoute]);

  const navigate = (destination: PageRoute | string) => {
    let targetRoute: PageRoute;
    if (typeof destination === 'string') {
      targetRoute = parsePath(destination, '');
    } else {
      targetRoute = destination;
    }

    const url = routeToUrl(targetRoute);
    window.history.pushState({}, '', url);
    setCurrentRoute(targetRoute);
  };

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      navigate({ path: 'home' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentRoute, navigate, goBack }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}
