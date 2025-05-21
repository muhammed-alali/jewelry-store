"use client";

import React from "react";

type YouTubePlayerProps = {
  url: string;
};

export default function YouTubePlayer({ url }: YouTubePlayerProps) {
  // استخراج معرف الفيديو من رابط يوتيوب
  const extractVideoId = (youtubeUrl: string): string | null => {
    const regex = /(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = youtubeUrl.match(regex);
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(url);

  if (!videoId) return <p className="text-red-500">رابط غير صالح.</p>;

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="xs:h-[220px] w-full aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src={embedUrl}
        title="YouTube video player"
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
