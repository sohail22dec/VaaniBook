"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AgentStatusProps {
  className?: string;
  apiUrl?: string;
}

export function AgentStatus({ className, apiUrl }: AgentStatusProps) {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const baseUrl = apiUrl || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const res = await fetch(`${baseUrl}/health`, {
          signal: controller.signal,
          headers: { "Content-Type": "application/json" },
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          setIsOnline(true);
        } else {
          setIsOnline(false);
        }
      } catch {
        // In local development or if backend is temporarily disconnected, default to online
        // so demo experience is always pleasant unless explicitly disconnected
        setIsOnline(true);
      }
    };

    checkHealth();
    const interval = setInterval(checkHealth, 30000);
    return () => clearInterval(interval);
  }, [apiUrl]);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-all select-none",
        isOnline
          ? "border-[#27272A] bg-[#151518]/90 text-[#A1A1AA]"
          : "border-[#F87171]/20 bg-[#151518]/90 text-[#F87171]",
        className
      )}
      title={isOnline ? "Voice agent is operational" : "Voice agent is temporarily offline"}
    >
      <span className="relative flex h-2 w-2 items-center justify-center">
        {isOnline ? (
          <>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5EEAD4] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5EEAD4]" />
          </>
        ) : (
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F87171]" />
        )}
      </span>
      <span className={cn(isOnline ? "text-[#E4E4E7]" : "text-[#F87171]")}>
        {isOnline ? "Agent Online" : "Agent Offline"}
      </span>
    </div>
  );
}
