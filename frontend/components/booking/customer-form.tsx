"use client";

import React, { useState } from "react";
import { User, Shield } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { PhoneInput, PhoneValue } from "./phone-input";
import { CallButton } from "./call-button";

interface CustomerFormProps {
  onSubmit: (data: { customerName: string; phoneNumber: string }) => Promise<void>;
  isLoading?: boolean;
}

export function CustomerForm({ onSubmit, isLoading = false }: CustomerFormProps) {
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneDetails, setPhoneDetails] = useState<PhoneValue | null>(null);

  const [nameError, setNameError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [touched, setTouched] = useState({ name: false, phone: false });

  const validateName = (name: string): boolean => {
    if (!name.trim()) {
      setNameError("Please enter the customer's name.");
      return false;
    }
    setNameError(null);
    return true;
  };

  const validatePhone = (fullPhone: string, details?: PhoneValue | null): boolean => {
    const national = details?.nationalNumber || fullPhone.replace(/^\+\d+/, "").replace(/\D/g, "");
    if (!national || national.length < 7 || national.length > 15) {
      setPhoneError("Please enter a valid phone number.");
      return false;
    }
    setPhoneError(null);
    return true;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomerName(val);
    if (touched.name) {
      validateName(val);
    }
  };

  const handleNameBlur = () => {
    setTouched((prev) => ({ ...prev, name: true }));
    validateName(customerName);
  };

  const handlePhoneChange = (fullNumber: string, details: PhoneValue) => {
    setPhoneNumber(fullNumber);
    setPhoneDetails(details);
    if (touched.phone) {
      validatePhone(fullNumber, details);
    }
  };

  const nationalDigits = (
    phoneDetails?.nationalNumber || phoneNumber.replace(/^\+\d+/, "")
  ).replace(/\D/g, "");

  const hasMinValidInputs =
    customerName.trim().length > 0 && nationalDigits.length >= 7;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, phone: true });

    const isNameValid = validateName(customerName);
    const isPhoneValid = validatePhone(phoneNumber, phoneDetails);

    if (!isNameValid || !isPhoneValid) {
      return;
    }

    await onSubmit({
      customerName: customerName.trim(),
      phoneNumber: phoneNumber.trim(),
    });
  };

  return (
    <div className="w-full max-w-lg space-y-4">
      <Card className="w-full border-[#27272A] bg-[#151518] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        <CardHeader className="space-y-1.5 p-7 sm:p-8 pb-4">
          <CardTitle className="text-xl font-semibold tracking-tight text-[#F4F4F5]">
            Customer details
          </CardTitle>
          <CardDescription className="text-sm text-[#A1A1AA]">
            Enter the information needed to start the call.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-7 sm:p-8 pt-2">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Customer Name Field */}
            <div className="space-y-2">
              <Label
                htmlFor="customer-name"
                className="text-sm font-medium text-[#F4F4F5]"
              >
                Customer name
              </Label>
              <div className="relative">
                <Input
                  id="customer-name"
                  type="text"
                  placeholder="Enter customer name"
                  value={customerName}
                  onChange={handleNameChange}
                  onBlur={handleNameBlur}
                  disabled={isLoading}
                  autoComplete="name"
                  className={`pl-10 h-12 ${
                    nameError && touched.name
                      ? "border-[#F87171] focus-visible:border-[#F87171] focus-visible:ring-[#F87171]/20"
                      : ""
                  }`}
                />
                <User className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#71717A]" />
              </div>
              {nameError && touched.name && (
                <p className="text-xs font-medium text-[#F87171] pl-1 animate-in fade-in-50">
                  {nameError}
                </p>
              )}
            </div>

            {/* Phone Number Field */}
            <div className="space-y-2">
              <Label
                htmlFor="phone-number"
                className="text-sm font-medium text-[#F4F4F5]"
              >
                Phone number
              </Label>
              <PhoneInput
                value={phoneNumber}
                onChange={handlePhoneChange}
                disabled={isLoading}
                error={touched.phone ? phoneError || undefined : undefined}
              />
            </div>

            {/* Primary CTA Button */}
            <div className="pt-2">
              <CallButton
                type="submit"
                isLoading={isLoading}
                disabled={!hasMinValidInputs || isLoading}
              />
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Security note below card */}
      <div className="flex items-center justify-center gap-1.5 text-xs text-[#71717A] select-none py-1">
        <Shield className="h-3.5 w-3.5 text-[#5EEAD4]/70" />
        <span>Your information stays secure.</span>
      </div>
    </div>
  );
}
