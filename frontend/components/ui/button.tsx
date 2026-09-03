import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5EEAD4]/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#5EEAD4] text-[#09090B] font-semibold hover:bg-[#2DD4BF] shadow-[0_0_20px_rgba(94,234,212,0.18)] hover:shadow-[0_0_28px_rgba(94,234,212,0.32)] active:scale-[0.98]",
        secondary:
          "bg-[#151518] text-[#F4F4F5] border border-[#27272A] hover:bg-[#1A1A1E] hover:border-[#3F3F46] active:scale-[0.98]",
        ghost:
          "text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#151518] active:scale-[0.98]",
        outline:
          "border border-[#27272A] bg-transparent text-[#F4F4F5] hover:bg-[#151518] hover:border-[#3F3F46]",
      },
      size: {
        default: "h-12 px-6 text-sm",
        sm: "h-9 px-3 text-xs rounded-lg",
        lg: "h-14 px-8 text-base rounded-xl font-medium",
        icon: "h-10 w-10 p-0 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
