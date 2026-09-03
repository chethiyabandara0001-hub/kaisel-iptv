export interface ChangelogEntry {
  version: string;
  versionCode: number;
  releaseDate: string;
  isLatest?: boolean;
  highlights: string[];
}

export interface AppFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface DeveloperInfo {
  name: string;
  organization: string;
  email: string;
  website: string;
  jurisdiction?: string;
}

export interface AppConfig {
  id: string; // e.g. 'kaisel-iptv'
  name: string; // 'Kaisel IPTV'
  packageName: string; // 'com.iptv.kaisel'
  category: 'Entertainment' | 'Utilities' | 'Media' | 'Tools';
  shortDescription: string;
  description: string;
  longDescription: string[];
  tagline: string;
  version: string;
  versionCode: number;
  apkUrl: string; // Direct APK download URL
  apkSize: string; // '18.4 MB'
  minimumAndroid: string; // 'Android 7.0 (Nougat, API 24)+'
  targetAndroid: string; // 'Android 14 (API 34)'
  releaseDate: string;
  sha256: string;
  icon: string; // SVG data or path
  screenshots: {
    title: string;
    description: string;
    caption: string;
    themeColor: string;
    previewType: 'tv' | 'phone' | 'tablet';
  }[];
  features: AppFeature[];
  changelog: ChangelogEntry[];
  permissions: {
    name: string;
    purpose: string;
    required: boolean;
  }[];
  architecture: string; // 'Universal (arm64-v8a, armeabi-v7a, x86_64)'
  developer: DeveloperInfo;
  isFeatured?: boolean;
  officialNotes?: string;
}

export type PageRoute = 
  | { path: 'home' }
  | { path: 'apps' }
  | { path: 'app-detail'; appId: string }
  | { path: 'download'; appId: string }
  | { path: 'about' }
  | { path: 'contact' }
  | { path: 'privacy' }
  | { path: 'terms' }
  | { path: 'verify'; appId?: string };
