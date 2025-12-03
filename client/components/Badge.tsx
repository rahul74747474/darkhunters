import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "gold" | "success" | "error" | "warning";
  size?: "sm" | "md" | "lg";
}

export const Badge = ({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}: BadgeProps) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-full whitespace-nowrap";

  const variants = {
    default: "bg-dh-charcoal text-dh-gold border border-dh-gold/30",
    gold: "bg-dh-gold text-dh-black font-bold",
    success: "bg-green-500/20 text-green-300 border border-green-500/30",
    error: "bg-dh-red/20 text-dh-red border border-dh-red/30",
    warning: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <div
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};
