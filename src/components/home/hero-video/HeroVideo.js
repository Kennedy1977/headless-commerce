import React, { useEffect, useRef } from "react";

function HeroVideo({ hero }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Mute the video to comply with autoplay policies
      video.play().catch((error) => {
        console.error("Failed to autoplay video:", error);
      });
    }
  }, [hero]);

  return (
    <video
      ref={videoRef}
      className="w-full lg:w-550px h-auto rounded-md"
      loop
      muted
      preload="auto"
      autoPlay
    >
      <source src={`/hero-${hero}.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default HeroVideo;
