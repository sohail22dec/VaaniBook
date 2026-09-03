"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface VoiceWaveformProps {
  isActive?: boolean;
  barCount?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function VoiceWaveform({
  isActive = true,
  barCount = 18,
  className,
  size = "md",
}: VoiceWaveformProps) {
  const heights = [
    0.4, 0.7, 0.3, 0.9, 0.5, 0.8, 1.0, 0.6, 0.4, 0.85, 0.55, 0.95, 0.7, 0.35, 0.8, 0.6, 0.45, 0.75,
  ];

  const sizeClasses = {
    sm: "h-6 gap-0.5",
    md: "h-10 gap-1",
    lg: "h-14 gap-1.5",
  };

  const barWidth = {
    sm: "w-0.5",
    md: "w-1",
    lg: "w-1.5",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center px-4 py-3 rounded-xl bg-[#111113]/80 border border-[#27272A]/80 backdrop-blur-sm",
        sizeClasses[size],
        className
      )}
      aria-label="Voice waveform"
    >
      {Array.from({ length: barCount }).map((_, index) => {
        const heightMultiplier = heights[index % heights.length];
        const duration = 0.8 + (index % 5) * 0.15;
        const delay = (index % 6) * 0.08;

        return (
          <motion.span
            key={index}
            className={cn(
              "rounded-full transition-colors duration-300",
              barWidth[size],
              isActive
                ? "bg-[#5EEAD4] shadow-[0_0_8px_rgba(94,234,212,0.4)]"
                : "bg-[#27272A]"
            )}
            initial={{ height: "20%" }}
            animate={
              isActive
                ? {
                    height: [
                      "20%",
                      `${Math.max(25, heightMultiplier * 100)}%`,
                      "20%",
                    ],
                  }
                : { height: "20%" }
            }
            transition={
              isActive
                ? {
                    duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay,
                  }
                : undefined
            }
          />
        );
      })}
    </div>
  );
}
