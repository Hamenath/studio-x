import Link from "next/link";
import { type ReactNode } from "react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "white" | "white-outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  external = false,
  target,
  rel,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none text-center disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "h-9 px-4 text-xs tracking-wider uppercase",
    md: "h-11 px-6 text-sm",
    lg: "h-13 px-8 text-base",
  }[size];

  const variantStyles = {
    primary:
      "bg-sx-black text-sx-white border border-sx-black hover:bg-sx-soft hover:border-sx-soft active:translate-y-px",
    secondary:
      "bg-sx-white text-sx-black border border-sx-black hover:bg-sx-off active:translate-y-px",
    ghost:
      "bg-transparent text-sx-black hover:underline underline-offset-4 border border-transparent",
    white:
      "bg-sx-white text-sx-black border border-sx-white hover:bg-sx-off active:translate-y-px",
    "white-outline":
      "bg-transparent text-sx-white border border-sx-white hover:bg-white/10 active:translate-y-px",
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`.trim();

  if (href) {
    if (external || target === "_blank") {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
