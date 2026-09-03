/**
 * Privacy-friendly event tracking architecture for Kaisel.
 * Designed to be modular: console logging in dev mode, easily attached
 * to self-hosted or configured analytics endpoints without tracking personal data.
 */

export type AnalyticsEventType = 
  | 'app_page_view'
  | 'download_clicked'
  | 'apk_download_started'
  | 'checksum_copied'
  | 'checksum_verified'
  | 'installation_guide_opened';

export interface AnalyticsEventData {
  appId?: string;
  appName?: string;
  version?: string;
  path?: string;
  source?: string;
  timestamp?: number;
  [key: string]: unknown;
}

export function trackEvent(eventType: AnalyticsEventType, data: AnalyticsEventData = {}): void {
  const eventPayload = {
    event: eventType,
    timestamp: Date.now(),
    ...data,
  };

  // Safe client-side logging for development/debugging
  if (process.env.NODE_ENV !== 'production') {
    console.debug(`[Kaisel Analytics] ${eventType}:`, eventPayload);
  }

  // Hook for custom analytics provider if configured via environment or endpoint
  try {
    if (typeof window !== 'undefined' && (window as unknown as { __KAISEL_ANALYTICS_HOOK__?: (e: string, d: unknown) => void }).__KAISEL_ANALYTICS_HOOK__) {
      (window as unknown as { __KAISEL_ANALYTICS_HOOK__: (e: string, d: unknown) => void }).__KAISEL_ANALYTICS_HOOK__(eventType, eventPayload);
    }
  } catch {
    // Ignore analytics errors silently to preserve smooth UX
  }
}
