import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export function Logo({ className, showSubtitle = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      {/* Minimal geometric logo icon */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#151518] border border-[#27272A] shadow-inner transition-colors group-hover:border-[#5EEAD4]/40">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#5EEAD4]"
        >
          {/* Audio waveform / voice geometry */}
          <line
            x1="4"
            y1="10"
            x2="4"
            y2="14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="8"
            y1="7"
            x2="8"
            y2="17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="12"
            y1="4"
            x2="12"
            y2="20"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line
            x1="16"
            y1="7"
            x2="16"
            y2="17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="20"
            y1="10"
            x2="20"
            y2="14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-[#5EEAD4] ring-2 ring-[#09090B]" />
      </div>

      <div className="flex flex-col">
        <span className="text-base font-semibold tracking-tight text-[#F4F4F5]">
          Vaani<span className="text-[#5EEAD4]">Book</span>
        </span>
        {showSubtitle && (
          <span className="text-xs font-medium text-[#71717A] -mt-0.5 tracking-wide">
            Voice Booking Agent
          </span>
        )}
      </div>
    </div>
  );
}
