"use client";

import React from "react";
import { CheckCircle2, ArrowLeft, AlertCircle, PhoneForwarded } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VoiceWaveform } from "@/components/magic/voice-waveform";
import { BorderBeam } from "@/components/magic/border-beam";
import { Card } from "@/components/ui/card";

export type CallStage = "connecting" | "calling" | "active" | "error";

interface CallStatusProps {
  customerName: string;
  phoneNumber: string;
  stage: CallStage;
  errorMessage?: string;
  onReset: () => void;
  onRetry?: () => void;
}

export function CallStatus({
  customerName,
  phoneNumber,
  stage,
  errorMessage,
  onReset,
  onRetry,
}: CallStatusProps) {
  // Format phone number to hide middle digits for privacy if desired (e.g., +91 98XXX XX210)
  const formatDisplayPhone = (raw: string) => {
    if (!raw) return "";
    const cleaned = raw.trim();
    if (cleaned.length >= 10) {
      const prefix = cleaned.slice(0, 5);
      const suffix = cleaned.slice(-3);
      return `${prefix} ••• ••• ${suffix}`;
    }
    return cleaned;
  };

  return (
    <Card className="relative overflow-hidden w-full max-w-lg border-[#27272A] bg-[#151518] shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
      {/* Subtle border beam active during connecting / active call */}
      {(stage === "connecting" || stage === "calling") && (
        <BorderBeam size={180} duration={4} colorFrom="#5EEAD4" borderWidth={1.5} />
      )}

      {stage === "error" ? (
        <div className="p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3 text-[#F87171]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F87171]/10 border border-[#F87171]/20">
              <AlertCircle className="h-6 w-6 text-[#F87171]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#F4F4F5]">Call failed to initiate</h3>
              <p className="text-xs text-[#A1A1AA]">We encountered an issue starting the call</p>
            </div>
          </div>

          <div className="rounded-xl border border-[#27272A] bg-[#111113] p-4 text-sm text-[#A1A1AA]">
            {errorMessage || "Unable to reach the booking agent service. Please check the backend connection and try again."}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {onRetry && (
              <Button
                variant="default"
                onClick={onRetry}
                className="flex-1"
              >
                Try again
              </Button>
            )}
            <Button
              variant="secondary"
              onClick={onReset}
              className="flex-1"
            >
              Back to form
            </Button>
          </div>
        </div>
      ) : (stage === "connecting" || stage === "calling") ? (
        /* In-progress transition state */
        <div className="p-8 sm:p-10 space-y-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#5EEAD4]/10 border border-[#5EEAD4]/20">
                <PhoneForwarded className="h-5 w-5 text-[#5EEAD4] animate-pulse" />
              </div>
              <div>
                <h3 className="text-base font-medium text-[#F4F4F5]">Initiating call</h3>
                <p className="text-xs text-[#71717A]">Connecting to VaaniBook AI</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#27272A] bg-[#111113] px-2.5 py-1 text-xs text-[#5EEAD4]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5EEAD4] animate-ping" />
              Live
            </span>
          </div>

          {/* Workflow step indicators */}
          <div className="space-y-3 rounded-xl border border-[#27272A] bg-[#111113]/70 p-4">
            <div className="flex items-center gap-3 text-xs">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                  stage === "connecting" || stage === "calling"
                    ? "bg-[#5EEAD4] text-[#09090B]"
                    : "bg-[#27272A] text-[#71717A]"
                }`}
              >
                1
              </span>
              <span className={stage === "connecting" ? "text-[#5EEAD4] font-medium" : "text-[#A1A1AA]"}>
                Connecting to booking agent
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                  stage === "calling"
                    ? "bg-[#5EEAD4] text-[#09090B]"
                    : "bg-[#27272A] text-[#71717A]"
                }`}
              >
                2
              </span>
              <span className={stage === "calling" ? "text-[#5EEAD4] font-medium" : "text-[#71717A]"}>
                Calling customer ({customerName || "Customer"})
              </span>
            </div>
          </div>

          <div className="py-2">
            <VoiceWaveform isActive={true} size="md" />
          </div>
        </div>
      ) : (
        /* Success State */
        <div className="p-8 sm:p-10 space-y-7">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5EEAD4]">
                <CheckCircle2 className="h-4 w-4 text-[#5EEAD4]" />
                Call initiated
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#F4F4F5]">
                The booking agent is calling {customerName} now.
              </h2>
            </div>
          </div>

          {/* Customer & Phone Card Info */}
          <div className="rounded-xl border border-[#27272A] bg-[#111113] p-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-[#71717A]">Recipient</p>
              <p className="text-sm font-semibold text-[#F4F4F5] mt-0.5">{customerName}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium text-[#71717A]">Phone</p>
              <p className="text-sm font-mono font-medium text-[#A1A1AA] mt-0.5">
                {formatDisplayPhone(phoneNumber)}
              </p>
            </div>
          </div>

          {/* Live Waveform & Status */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs px-1">
              <span className="flex items-center gap-2 text-[#5EEAD4] font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5EEAD4] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5EEAD4]" />
                </span>
                Call in progress
              </span>
              <span className="text-[#71717A]">AI Voice Engine Active</span>
            </div>
            <VoiceWaveform isActive={true} size="lg" />
          </div>

          {/* Back CTA */}
          <div className="pt-2">
            <Button
              variant="secondary"
              onClick={onReset}
              className="w-full flex items-center justify-center gap-2 h-12"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to new call</span>
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
