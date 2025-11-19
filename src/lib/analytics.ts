import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

// Initialize Google Analytics
export const initGA = () => {
  const trackingId = import.meta.env.VITE_GA_TRACKING_ID;
  
  if (!trackingId) {
    console.warn('Google Analytics tracking ID not found in environment variables');
    return;
  }

  // Check if gtag script is already loaded
  if (window.gtag) {
    console.log('Google Analytics already initialized');
    return;
  }

  // Create and append gtag script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script1);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', trackingId, {
    send_page_view: true,
  });

  console.log('Google Analytics initialized with ID:', trackingId);
};

// Track page views
export const trackPageView = (url: string) => {
  if (!window.gtag) {
    console.warn('Google Analytics not initialized');
    return;
  }

  const trackingId = import.meta.env.VITE_GA_TRACKING_ID;
  if (!trackingId) return;

  window.gtag('config', trackingId, {
    page_path: url,
  });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!window.gtag) {
    console.warn('Google Analytics not initialized');
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Custom hook for page tracking
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
};