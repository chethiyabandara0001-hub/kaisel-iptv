import { AppConfig } from '../types';

/**
 * ============================================================================
 * KAISEL CENTRALIZED APPLICATION & APK CONFIGURATION SYSTEM
 * ============================================================================
 * 
 * Instructions for Administrator / Developer:
 * To release a new version of Kaisel IPTV or any app:
 * 1. Upload your signed release APK to your hosting storage (S3, Cloudflare R2, GitHub Releases, Firebase Storage, etc.)
 * 2. Update `version`, `versionCode`, `apkUrl`, `apkSize`, `releaseDate`, and `sha256` below.
 * 3. Add a new entry to `changelog`.
 * 4. Save and deploy. Every download link, spec sheet, and security hash on the website will update immediately.
 */

export const DEVELOPER_INFO = {
  name: "Kaisel Development Team",
  organization: "Kaisel Independent Software Project",
  email: "support@kaisel.app",
  contactUrl: "/contact",
  website: "https://kaisel.app",
  supportHours: "Monday - Friday, 09:00 - 18:00 UTC",
};

export const APPS_CONFIG: AppConfig[] = [
  {
    id: "kaisel-iptv",
    name: "Kaisel IPTV",
    packageName: "com.iptv.kaisel",
    category: "Entertainment",
    shortDescription: "High-performance, lightweight IPTV and live stream player engineered specifically for Android devices, Smart TVs, and streaming boxes.",
    tagline: "Your Streams, Ultra Low Latency & High Definition.",
    description: "Kaisel IPTV is a dedicated media player application designed to provide a fluid, responsive, and stutter-free streaming playback experience on Android phones, tablets, Android TV boxes, and Fire OS devices. With hardware-accelerated decoding, intelligent buffer management, and full EPG (Electronic Program Guide) support, Kaisel IPTV delivers maximum performance without bloated background services.",
    longDescription: [
      "Kaisel IPTV is built for users who demand uncompromised streaming quality and intuitive navigation. Designed with a remote-friendly UI for Android TV as well as a gesture-optimized touchscreen layout for mobile devices, it easily handles high-bitrate 4K HDR live streams and multi-audio channel broadcasts.",
      "The app supports modern playlist standards including M3U, M3U8 Plus, Xtream Codes API, and Stalker portal formats. No telemetry or unnecessary tracking is bundled into the release APK, ensuring your playback stays fast, private, and efficient."
    ],
    // ==========================================
    // ⚙️ RELEASE CONFIGURATION (EDIT FOR NEW RELEASES)
    // ==========================================
    version: "2.4.1",
    versionCode: 241,
    releaseDate: "August 28, 2026",
    apkUrl: "https://github.com/kaisel-apps/releases/releases/download/v2.4.1/kaisel-iptv-v2.4.1.apk",
    apkSize: "18.4 MB",
    minimumAndroid: "Android 7.0 (Nougat, API 24) or higher",
    targetAndroid: "Android 14 (API 34)",
    architecture: "Universal APK (arm64-v8a, armeabi-v7a, x86, x86_64)",
    sha256: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    // ==========================================
    icon: "tv",
    isFeatured: true,
    officialNotes: "Official stable release. Signed by Kaisel Distribution Key.",
    screenshots: [
      {
        title: "Live Stream Guide & Channel Grid",
        description: "Interactive Electronic Program Guide with category filtering and instant channel previews.",
        caption: "Smooth EPG with low-latency channel switching",
        themeColor: "#0284c7",
        previewType: "tv"
      },
      {
        title: "4K HDR Hardware Accelerated Player",
        description: "Adaptive ExoPlayer engine with audio track selection, subtitles, and aspect ratio controls.",
        caption: "Zero-frame-drop 4K 60FPS video rendering",
        themeColor: "#0d9488",
        previewType: "tv"
      },
      {
        title: "Multi-Screen Live Grid",
        description: "Watch up to 4 simultaneous live sports and broadcast feeds on supported Android TV hardware.",
        caption: "Multi-view mode for sports & news monitoring",
        themeColor: "#6366f1",
        previewType: "tv"
      },
      {
        title: "Playlist & Xtream Codes Manager",
        description: "Secure local playlist storage with automatic EPG sync and auto-refresh intervals.",
        caption: "M3U8 & Xtream API playlist integration",
        themeColor: "#8b5cf6",
        previewType: "phone"
      }
    ],
    features: [
      {
        title: "Hardware Accelerated Engine",
        description: "Optimized ExoPlayer backend leveraging native MediaCodec for 4K 60fps HDR10 and H.265/HEVC playback.",
        iconName: "Cpu"
      },
      {
        title: "Full Android TV & Remote Support",
        description: "Native D-Pad navigation, channel numbers, fast channel switching, and DPAD focus animations.",
        iconName: "Tv"
      },
      {
        title: "Xtream & M3U8 Integration",
        description: "Seamless synchronization with Xtream Codes API, Stalker portals, and raw M3U playlist URLs.",
        iconName: "Layers"
      },
      {
        title: "Multi-Audio & Subtitle Sync",
        description: "Toggle multiple embedded audio streams, AC3/EAC3 passthrough, and external subtitle sources.",
        iconName: "Volume2"
      },
      {
        title: "Intelligent Adaptive Buffer",
        description: "Configurable buffer size dynamically adjusts for high-latency Wi-Fi and mobile networks.",
        iconName: "Zap"
      },
      {
        title: "Zero Bloatware & No Tracking",
        description: "Pure media player without intrusive analytics or background resource drain.",
        iconName: "ShieldCheck"
      }
    ],
    changelog: [
      {
        version: "2.4.1",
        versionCode: 241,
        releaseDate: "August 28, 2026",
        isLatest: true,
        highlights: [
          "Added support for Android 15 edge-to-edge system navigation.",
          "Enhanced ExoPlayer buffer tuning for unstable network connections.",
          "Fixed audio track sync on select Amlogic and MediaTek Android TV chipsets.",
          "Improved EPG parsing speed for large (>50,000 items) M3U playlists by 38%.",
          "Updated internal TLS ciphers for secure HTTPS streaming links."
        ]
      },
      {
        version: "2.4.0",
        versionCode: 240,
        releaseDate: "July 15, 2026",
        highlights: [
          "Introduced experimental 4-screen multi-view for Android TV devices.",
          "Added auto-refresh timer for Xtream Codes live channel categories.",
          "Redesigned modern dark UI with customizable channel card density.",
          "Added Sleep Timer directly to playback OSD."
        ]
      },
      {
        version: "2.3.2",
        versionCode: 232,
        releaseDate: "May 10, 2026",
        highlights: [
          "Fixed picture-in-picture (PiP) crash on certain Android 12 tablets.",
          "Improved subtitle text rendering with custom background opacities.",
          "General memory consumption optimizations."
        ]
      }
    ],
    permissions: [
      {
        name: "android.permission.INTERNET",
        purpose: "Required to connect to user-supplied stream URLs and download EPG data.",
        required: true
      },
      {
        name: "android.permission.ACCESS_NETWORK_STATE",
        purpose: "Allows the player to detect network switches (Wi-Fi to Ethernet) and adapt buffer sizes.",
        required: true
      },
      {
        name: "android.permission.WAKE_LOCK",
        purpose: "Prevents the device screen from dimming or sleeping during active media playback.",
        required: true
      },
      {
        name: "android.permission.FOREGROUND_SERVICE",
        purpose: "Enables background audio playback when using audio-only radio channels or minimized mode.",
        required: false
      }
    ],
    developer: DEVELOPER_INFO
  },
  {
    id: "kaisel-remote",
    name: "Kaisel TV Remote",
    packageName: "com.remote.kaisel",
    category: "Utilities",
    shortDescription: "Ultra-responsive Wi-Fi and Bluetooth remote control companion for Android TV, Google TV, and Kaisel IPTV playback.",
    tagline: "Instant Touchpad & Keyboard for Smart TVs.",
    description: "Kaisel TV Remote transforms your Android phone into an ergonomic controller for your TV box. Features virtual trackpad, voice dictation, fast text input, and custom macro keys for Kaisel IPTV.",
    longDescription: [
      "Typing search queries and playlist URLs with a physical TV remote can be frustrating. Kaisel TV Remote enables instant clipboard pasting from your phone straight to your TV screen.",
      "Connects seamlessly via local Wi-Fi pairing with zero cloud servers in between."
    ],
    version: "1.2.0",
    versionCode: 120,
    releaseDate: "August 12, 2026",
    apkUrl: "https://github.com/kaisel-apps/releases/releases/download/v1.2.0/kaisel-remote-v1.2.0.apk",
    apkSize: "6.8 MB",
    minimumAndroid: "Android 6.0 (Marshmallow, API 23)+",
    targetAndroid: "Android 14 (API 34)",
    architecture: "Universal APK",
    sha256: "4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a",
    icon: "remote",
    screenshots: [
      {
        title: "Trackpad & D-Pad Controls",
        description: "Smooth haptic touch navigation with customizable gesture sensitivity.",
        caption: "Intuitive touch navigation for Android TV",
        themeColor: "#059669",
        previewType: "phone"
      },
      {
        title: "Fast Keyboard & URL Transmitter",
        description: "Paste long M3U URLs or login credentials instantly to the TV input field.",
        caption: "One-touch keyboard synchronization",
        themeColor: "#0284c7",
        previewType: "phone"
      }
    ],
    features: [
      {
        title: "Zero-Latency Wi-Fi Discovery",
        description: "Automatically discovers Android TV devices on your local network using mDNS.",
        iconName: "Wifi"
      },
      {
        title: "Remote Keyboard & Clipboard",
        description: "Send URLs, passwords, and search terms directly from mobile clipboard to TV.",
        iconName: "Smartphone"
      },
      {
        title: "Customizable Macro Buttons",
        description: "Assign direct shortcuts for channel guide, aspect ratio, and audio selection.",
        iconName: "Sliders"
      }
    ],
    changelog: [
      {
        version: "1.2.0",
        versionCode: 120,
        releaseDate: "August 12, 2026",
        isLatest: true,
        highlights: [
          "Added direct volume buttons support with haptic feedback.",
          "Enhanced device pairing stability on mesh Wi-Fi networks.",
          "Added dark theme custom accent colors."
        ]
      }
    ],
    permissions: [
      {
        name: "android.permission.INTERNET",
        purpose: "Local Wi-Fi socket communication with the target TV device.",
        required: true
      },
      {
        name: "android.permission.ACCESS_WIFI_STATE",
        purpose: "Detects current Wi-Fi SSID for device pairing.",
        required: true
      }
    ],
    developer: DEVELOPER_INFO
  },
  {
    id: "kaisel-nettune",
    name: "Kaisel NetTune",
    packageName: "com.nettune.kaisel",
    category: "Tools",
    shortDescription: "Stream latency tester, custom DNS switcher, and network packet optimizer designed for Android streaming hardware.",
    tagline: "Diagnose and Optimize Your Streaming Route.",
    description: "Kaisel NetTune helps users troubleshoot buffering issues, test CDN ping times, and select high-speed privacy-focused DNS servers (Cloudflare 1.1.1.1, Google 8.8.8.8, Quad9) on Android devices.",
    longDescription: [
      "ISP throttling and slow DNS resolution are the leading causes of streaming stutters. Kaisel NetTune provides transparent, real-time diagnostic tools to benchmark route hops and test throughput directly from your streaming device.",
      "Runs fully on-device without telemetry."
    ],
    version: "1.0.4",
    versionCode: 104,
    releaseDate: "July 30, 2026",
    apkUrl: "https://github.com/kaisel-apps/releases/releases/download/v1.0.4/kaisel-nettune-v1.0.4.apk",
    apkSize: "5.2 MB",
    minimumAndroid: "Android 7.0+",
    targetAndroid: "Android 14 (API 34)",
    architecture: "Universal APK",
    sha256: "7d83b0a2d9b6d8a39a04a646c2688ecf931d87e14d481f3c3a078d49a37e5e3b",
    icon: "activity",
    screenshots: [
      {
        title: "Live Stream Route Diagnostics",
        description: "Visualizes latency hops, jitter, and packet loss to streaming servers.",
        caption: "Comprehensive connection latency analysis",
        themeColor: "#d97706",
        previewType: "phone"
      }
    ],
    features: [
      {
        title: "Stream Buffer Latency Test",
        description: "Benchmark ping, jitter, and real socket throughput to any streaming host.",
        iconName: "Activity"
      },
      {
        title: "DNS Benchmark & Selection",
        description: "Compare DNS lookup response times across top global resolvers.",
        iconName: "ShieldCheck"
      }
    ],
    changelog: [
      {
        version: "1.0.4",
        versionCode: 104,
        releaseDate: "July 30, 2026",
        isLatest: true,
        highlights: [
          "Added visual jitter histogram graph.",
          "Added one-tap DNS speed comparator.",
          "Optimized UI layout for Android TV landscape mode."
        ]
      }
    ],
    permissions: [
      {
        name: "android.permission.INTERNET",
        purpose: "Required to perform network latency and DNS benchmark tests.",
        required: true
      }
    ],
    developer: DEVELOPER_INFO
  }
];

export const FEATURED_APP = APPS_CONFIG.find(app => app.id === 'kaisel-iptv') || APPS_CONFIG[0];

export function getAppById(id: string): AppConfig | undefined {
  return APPS_CONFIG.find(app => app.id === id || app.packageName === id);
}
