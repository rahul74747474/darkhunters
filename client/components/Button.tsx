import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled,
  isLoading,
  ...props
}: ButtonProps) => {
  const baseStyles = "font-bold uppercase rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dh-black focus:ring-dh-gold disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center";

  const variants = {
    primary:
      "bg-dh-gold text-dh-black hover:bg-dh-gold-dark hover:shadow-gold-glow active:scale-95",
    secondary:
      "bg-dh-charcoal text-dh-gold border border-dh-gold hover:bg-dh-black hover:shadow-gold-glow active:scale-95",
    outline:
      "border-2 border-dh-gold bg-transparent text-dh-gold hover:bg-dh-gold/10 active:scale-95",
    ghost:
      "bg-transparent text-dh-gold hover:bg-dh-charcoal active:scale-95",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};
