import { useEffect, useState, useCallback } from "react";

const LOGO_CLICK_KEY = "gdg_logo_clicks";
const REQUIRED_CLICKS = 5;

export function useLogoClickTracker(onSecretUnlocked?: () => void) {
  const [clickCount, setClickCount] = useState(0);

  const trackClick = useCallback(() => {
    setClickCount((prev) => {
      const newCount = prev + 1;

      // Store in localStorage for persistence
      localStorage.setItem(LOGO_CLICK_KEY, String(newCount));

      if (newCount === REQUIRED_CLICKS) {
        // Trigger callback to open dialog
        if (onSecretUnlocked) {
          onSecretUnlocked();
        }
        // Reset counter
        localStorage.setItem(LOGO_CLICK_KEY, "0");
        return 0;
      }

      return newCount;
    });
  }, [onSecretUnlocked]);

  // Initialize from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(LOGO_CLICK_KEY);
    if (stored) {
      setClickCount(parseInt(stored, 10));
    }
  }, []);

  return { trackClick, clickCount };
}
