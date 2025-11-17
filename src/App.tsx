import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import BlogDetail from './pages/BlogDetail';
import NotFound from './pages/NotFound';
import { usePageTracking } from './lib/analytics';
import { initEmailJS } from './lib/emailjs';

const queryClient = new QueryClient();

// Initialize services
initEmailJS();

const AppWithTracking = () => {
  usePageTracking();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <AppWithTracking />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;