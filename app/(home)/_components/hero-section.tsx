"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { StarField } from "./starfield";



// Shimmer Animation
const shimmerStyles = `
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  .animate-shimmer {
    background: linear-gradient(90deg, rgba(167, 139, 250,0), rgba(167, 139, 250,0.2), rgba(167, 139, 250,0));
    background-size: 200% 100%;
    animation: shimmer 3s infinite;
  }
`;


const HeroSection = () => {
  const router = useRouter();

  const calculateTimeLeft = () => {
    const target = new Date("2025-03-02T00:00:00.000Z");
    target.setHours(target.getHours() + 5, 30, 0, 0); // IST
    const now = new Date().getTime();
    const difference = target.getTime() - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00", isLive: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
      isLive: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const participatingCountries = [
    { name: "India", flag: "🇮🇳", participants: 6200 },
    { name: "United States", flag: "🇺🇸", participants: 350 },
    { name: "United Kingdom", flag: "🇬🇧", participants: 180 },
    { name: "Canada", flag: "🇨🇦", participants: 120 },
    { name: "Australia", flag: "🇦🇺", participants: 90 },
    { name: "Germany", flag: "🇩🇪", participants: 60 },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-img.png"
          alt="Abujhmad Peace Half Marathon 2026 - Scenic Background"
          fill
          className="object-cover brightness-90"
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-center px-4 md:px-16 lg:px-24">
        <StarField />

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-xl font-semibold text-white drop-shadow-lg md:text-2xl lg:text-3xl -mt-28"
        >
          #RUNWITHMAAD
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-2 text-center md:mb-4"
        >
          <span className="text-2xl font-bold text-primary-light drop-shadow-lg md:text-4xl">
            Central India's Biggest Marathon
          </span>
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="text-white drop-shadow-lg font-bold">Abujhmad Peace</span>
          <br />
          <span className="text-white drop-shadow-lg font-bold">Half Marathon 2026</span>
        </motion.h1>

        <div className="mx-auto mt-6 flex max-w-max items-center gap-3 rounded-3xl bg-purple-400/50 px-4 py-2 backdrop-blur-xl shadow-lg shadow-white/20 animate-shimmer">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg font-bold text-white drop-shadow-lg md:text-2xl lg:text-3xl"
          >
            5th Edition
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => router.push("/registration")}
              className="flex h-auto items-center rounded-3xl px-6 py-3 text-xs font-semibold md:text-base"
            >
              {timeLeft.isLive ? "Join Now" : "Register Now"}
              <ChevronRight className="ml-1 size-5 md:size-6" />
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-8 flex flex-col items-center justify-center gap-6 px-4 md:mt-12 md:flex-row md:gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/30 to-primary-light/30 px-6 py-4 backdrop-blur-md shadow-lg shadow-primary/20 md:px-8"
          >
            <motion.div
              animate={{
                textShadow: [
                  "0 0 10px rgba(139, 92, 246, 0.5)",
                  "0 0 20px rgba(139, 92, 246, 0.8)",
                  "0 0 10px rgba(139, 92, 246, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center text-2xl font-bold text-white drop-shadow-lg md:text-3xl lg:text-4xl"
            >
              ₹18 Lakhs
            </motion.div>
            <div className="text-center text-xs font-bold text-white md:text-sm">Prize Pool 🏆</div>
          </motion.div>

          <div className="hidden h-20 w-px bg-white/30 md:block"></div>

          <div className="flex items-center gap-6 md:gap-8">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="mb-1 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
              >
                7,000+
              </motion.div>
              <div className="text-xs font-semibold text-white md:text-sm">Previous Edition</div>
              <div className="text-xs text-white/70">Runners</div>
            </div>

            <div className="h-12 w-px bg-white/30"></div>

            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="mb-1 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
              >
                6
              </motion.div>
              <div className="text-xs font-semibold text-white md:text-sm">Countries</div>
              <div className="text-xs text-white/70">Represented</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;