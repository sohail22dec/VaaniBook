"use client";

import React from "react";
import { PhoneCall, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface CallButtonProps {
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export function CallButton({
  isLoading = false,
  disabled = false,
  onClick,
  className,
  type = "submit",
}: CallButtonProps) {
  return (
    <motion.button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      whileHover={
        !disabled && !isLoading
          ? {
              y: -2,
              filter: "brightness(1.05)",
              boxShadow: "0 8px 30px rgba(94, 234, 212, 0.28)",
            }
          : undefined
      }
      whileTap={
        !disabled && !isLoading
          ? {
              scale: 0.98,
              y: 0,
            }
          : undefined
      }
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={cn(
        "relative flex h-13 w-full items-center justify-center gap-2.5 rounded-xl text-base font-semibold transition-colors select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5EEAD4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151518]",
        disabled
          ? "bg-[#27272A] text-[#71717A] cursor-not-allowed opacity-60 shadow-none"
          : "bg-[#5EEAD4] text-[#09090B] shadow-[0_4px_20px_rgba(94,234,212,0.18)] hover:bg-[#2DD4BF]",
        className
      )}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin text-[#09090B]" />
          <span>Calling...</span>
        </>
      ) : (
        <>
          <PhoneCall className="h-5 w-5 text-[#09090B]" />
          <span>Call with Booking Agent</span>
        </>
      )}
    </motion.button>
  );
}
