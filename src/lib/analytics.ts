import { useEffect } from 'react';
import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
  const trackingId = import.meta.env.VITE_GA_TRACKING_ID;
  
  if (trackingId && trackingId !== 'G-XXXXXXXXXX') {
    ReactGA.initialize(trackingId);
    console.log('Google Analytics initialized');
  } else {
    console.warn('Google Analytics tracking ID not configured');
  }
};

// Track page views
export const trackPageView = (page: string) => {
  if (import.meta.env.VITE_GA_TRACKING_ID && import.meta.env.VITE_GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
    ReactGA.send({ hitType: 'pageview', page });
  }
};

// Track custom events
export const trackEvent = (category: string, action: string, label?: string) => {
  if (import.meta.env.VITE_GA_TRACKING_ID && import.meta.env.VITE_GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
    ReactGA.event({
      category,
      action,
      label,
    });
  }
};

// Hook for page view tracking
export const usePageTracking = () => {
  useEffect(() => {
    const trackingId = import.meta.env.VITE_GA_TRACKING_ID;
    
    if (trackingId && trackingId !== 'G-XXXXXXXXXX') {
      ReactGA.initialize(trackingId);
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
    }
  }, []);
};