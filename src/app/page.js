"use client";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const hero = Math.floor(Math.random() * 5) + 1;
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
    <>
      <main className="px-12 py-12">
        <section className="flex w-full flex-col lg:flex-row py-12 gap-12">
          <div className="w-full lg:w-600px">
            <h1 className="text-6xl mulish-400">
              Savour Our Premium Quality Meats...
            </h1>
            <p className="text-2xl mt-4 mulish-300">
              Welcome to Edmund Howdle Butchers, where heritage meets quality.
              We offer the finest cuts of meat, sourced from trusted farms and
              prepared with care. Experience the difference dedication brings to
              your table.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <video
              ref={videoRef}
              className="w-full lg:w-550px h-auto"
              loop
              muted
              preload="auto"
              autoPlay
            >
              <source src={`/hero-${hero}.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </main>
    </>
  );
}
