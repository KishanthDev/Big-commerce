"use client";
import React, { useState, useEffect } from "react";
import { Fullscreen, Minimize2 } from "lucide-react";

const FullScreenToggle = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  return (
    <button
      onClick={toggleFullscreen}
      aria-label="Full screen"
      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-2 py-2 rounded-lg transition-all"
    >
      {isFullscreen ? <Minimize2 size={18} /> : <Fullscreen size={18} />}
    </button>
  );
};

export default FullScreenToggle;
