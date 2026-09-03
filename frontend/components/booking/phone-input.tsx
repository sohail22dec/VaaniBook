"use client";

import React, { useState } from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export interface PhoneValue {
  countryCode: string;
  nationalNumber: string;
  fullNumber: string;
}

interface PhoneInputProps {
  value: string;
  onChange: (fullNumber: string, details: PhoneValue) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

const COUNTRIES = [
  { code: "+91", country: "India", flag: "🇮🇳", mask: "98765 43210" },
  { code: "+1", country: "United States", flag: "🇺🇸", mask: "(555) 000-0000" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧", mask: "7911 123456" },
  { code: "+971", country: "UAE", flag: "🇦🇪", mask: "50 123 4567" },
  { code: "+65", country: "Singapore", flag: "🇸🇬", mask: "9123 4567" },
  { code: "+61", country: "Australia", flag: "🇦🇺", mask: "412 345 678" },
  { code: "+49", country: "Germany", flag: "🇩🇪", mask: "151 12345678" },
];

export function PhoneInput({
  value,
  onChange,
  error,
  disabled = false,
  className,
}: PhoneInputProps) {
  const [countryCode, setCountryCode] = useState("+91");

  // Parse existing number if it starts with a country code
  const getNationalNumber = () => {
    if (!value) return "";
    if (value.startsWith(countryCode)) {
      return value.slice(countryCode.length).trim();
    }
    return value.replace(/^\+\d+/, "").trim();
  };

  const nationalNumber = getNationalNumber();

  const handleCountryChange = (newCode: string) => {
    setCountryCode(newCode);
    const cleanedDigits = nationalNumber.replace(/\D/g, "");
    const full = cleanedDigits ? `${newCode}${cleanedDigits}` : "";
    onChange(full, {
      countryCode: newCode,
      nationalNumber: cleanedDigits,
      fullNumber: full,
    });
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    // Allow digits and spaces
    const cleanedDigits = rawVal.replace(/\D/g, "");
    const full = cleanedDigits ? `${countryCode}${cleanedDigits}` : "";
    onChange(full, {
      countryCode,
      nationalNumber: cleanedDigits,
      fullNumber: full,
    });
  };

  const currentCountry = COUNTRIES.find((c) => c.code === countryCode) || COUNTRIES[0];

  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex gap-2">
        {/* Country code selector */}
        <div className="w-[118px] shrink-0">
          <Select
            value={countryCode}
            onValueChange={handleCountryChange}
            disabled={disabled}
          >
            <SelectTrigger
              id="country-code"
              className="h-12 bg-[#111113] border-[#27272A] px-3 hover:border-[#3F3F46] focus:border-[#5EEAD4] focus:ring-[#5EEAD4]/20"
            >
              <SelectValue placeholder="+91">
                <span className="flex items-center gap-1.5 font-mono text-sm">
                  <span>{currentCountry.flag}</span>
                  <span>{countryCode}</span>
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-[#151518] border-[#27272A] text-[#F4F4F5]">
              {COUNTRIES.map((c) => (
                <SelectItem key={c.code} value={c.code} className="cursor-pointer">
                  <span className="flex items-center gap-2">
                    <span className="text-base">{c.flag}</span>
                    <span className="font-mono text-xs text-[#A1A1AA]">{c.code}</span>
                    <span className="text-xs text-[#E4E4E7]">{c.country}</span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* National phone input */}
        <div className="relative flex-1">
          <Input
            id="phone-number"
            type="tel"
            value={nationalNumber}
            onChange={handleNumberChange}
            placeholder={currentCountry.mask}
            disabled={disabled}
            className={cn(
              "h-12 bg-[#111113] border-[#27272A] pl-10 text-sm tracking-wide font-mono placeholder:text-[#71717A] placeholder:font-sans focus:border-[#5EEAD4] focus:ring-[#5EEAD4]/20",
              error && "border-[#F87171] focus:border-[#F87171] focus:ring-[#F87171]/20"
            )}
            autoComplete="tel-national"
          />
          <Phone className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#71717A]" />
        </div>
      </div>

      {error && (
        <p className="text-xs font-medium text-[#F87171] pl-1 animate-in fade-in-50">
          {error}
        </p>
      )}
    </div>
  );
}
