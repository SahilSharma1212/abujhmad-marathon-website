"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";

// Define your stars data
const starsData = [
  { left: "5%", top: "8%", rotate: [0, 3, -3, 0], y: [0, 12, 0], size: 20, duration: 9, delay: 0.1 },
  { left: "18%", top: "14%", rotate: [0, -4, 4, 0], y: [0, 10, 0], size: 18, duration: 7, delay: 0.5 },
  { left: "30%", top: "5%", rotate: [0, 5, -5, 0], y: [0, 15, 0], size: 22, duration: 10, delay: 1 },
  { left: "50%", top: "20%", rotate: [0, 2, -2, 0], y: [0, 8, 0], size: 16, duration: 8, delay: 0.3 },
  { left: "70%", top: "10%", rotate: [0, -3, 3, 0], y: [0, 12, 0], size: 20, duration: 9, delay: 0.7 },
  { left: "85%", top: "18%", rotate: [0, 4, -4, 0], y: [0, 10, 0], size: 18, duration: 11, delay: 1.2 },
];

// Shimmer animation CSS
const shimmerStyles = `
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  .animate-shimmer {
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    background-size: 200% 100%;
    animation: shimmer 3s infinite;
  }
`;

export function StarField({ stars = starsData }) {
  const [visibleStars, setVisibleStars] = useState(stars);

  // Responsive: show fewer stars on small screens
  useEffect(() => {
    const updateStars = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleStars(stars.slice(0, 3));
      else if (width < 1024) setVisibleStars(stars.slice(0, 5));
      else setVisibleStars(stars);
    };

    updateStars();
    window.addEventListener("resize", updateStars);
    return () => window.removeEventListener("resize", updateStars);
  }, [stars]);

  return (
    <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
      <style jsx>{shimmerStyles}</style>
      {visibleStars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: star.left, top: star.top }}
          animate={{ y: star.y, rotate: star.rotate }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        >
          <Star
            stroke="white" // crucial for lucide-react icons
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              filter: "drop-shadow(0 0 8px white) drop-shadow(0 0 12px white)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
