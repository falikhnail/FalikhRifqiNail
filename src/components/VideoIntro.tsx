import { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoIntroProps {
  language: 'en' | 'id';
}

export default function VideoIntro({ language }: VideoIntroProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const texts = {
    en: {
      playVideo: 'Play Introduction Video',
      videoTitle: 'Introduction Video',
    },
    id: {
      playVideo: 'Putar Video Perkenalan',
      videoTitle: 'Video Perkenalan',
    },
  };

  const t = texts[language];

  // Get YouTube video ID from environment variables
  const youtubeVideoId = import.meta.env.VITE_YOUTUBE_VIDEO_ID || 'uYda5UuU9G8';

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-400 dark:border-purple-600 group">
      {!isPlaying ? (
        <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center cursor-pointer" onClick={() => setIsPlaying(true)}>
          {/* Thumbnail overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Play button */}
          <button
            className="relative z-10 w-24 h-24 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl"
            aria-label={t.playVideo}
          >
            <Play className="w-10 h-10 text-purple-600 ml-1" fill="currentColor" />
          </button>

          {/* Decorative elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-white/30 rounded-full animate-ping"></div>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
          title={t.videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}