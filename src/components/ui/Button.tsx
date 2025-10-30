import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "outlinelink";
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  loading = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center cursor-pointer rounded-md font-medium h-11 transition-colors focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-primary-200 text-white hover:bg-primary-300 px-4",
    outline:
      "bg-white text-primary-300 hover:text-white hover:bg-primary-300 px-4",
    outlinelink:
      "bg-white text-primary-300 hover:text-white hover:bg-primary-300 px-4",
    ghost: "bg-primary-300 text-white hover:bg-primary-400 px-4",
  };

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {loading ? (
        <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
      ) : null}
      {children}
    </button>
  );
};

export default Button;
