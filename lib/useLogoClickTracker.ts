import { useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const LOGO_CLICK_KEY = 'gdg_logo_clicks';
const REQUIRED_CLICKS = 5;

export function useLogoClickTracker() {
  const clickCountRef = useRef(0);
  const router = useRouter();

  const trackClick = useCallback(() => {
    clickCountRef.current += 1;
    
    // Store in localStorage for persistence
    localStorage.setItem(LOGO_CLICK_KEY, String(clickCountRef.current));

    if (clickCountRef.current === REQUIRED_CLICKS) {
      // Reset counter
      clickCountRef.current = 0;
      localStorage.setItem(LOGO_CLICK_KEY, '0');
      
      // Navigate to secret page
      router.push('/secret');
    }
  }, [router]);

  // Initialize from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(LOGO_CLICK_KEY);
    if (stored) {
      clickCountRef.current = parseInt(stored, 10);
    }
  }, []);

  return { trackClick, clickCount: clickCountRef.current };
}
