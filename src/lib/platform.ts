export type Platform = 'windows' | 'macos' | 'ios' | 'android' | 'unknown';

export function getPlatform(): Platform {
  const userAgent = navigator.userAgent.toLowerCase();
  
  // iOS detection
  if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'ios';
  }
  
  // Android detection
  if (/android/.test(userAgent)) {
    return 'android';
  }
  
  // macOS detection
  if (/macintosh|mac os x/.test(userAgent)) {
    return 'macos';
  }
  
  // Windows detection
  if (/windows/.test(userAgent)) {
    return 'windows';
  }
  
  return 'unknown';
}

export const DOWNLOAD_LINKS = {
  windows: '#',
  macos: '#',
  ios: '#',
  android: '#',
};

export const PLATFORM_LABELS = {
  windows: 'Download for Windows',
  macos: 'Download for macOS',
  ios: 'Download on App Store',
  android: 'Get it on Google Play',
  unknown: 'Download Now',
};