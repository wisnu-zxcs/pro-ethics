import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import type { SizeVariant } from "../../types/ui";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../utils/styles";

type ButtonBaseProps = {
    variant?: "primary" | "secondary" | "outline";
    size?: SizeVariant;
    icon?: LucideIcon;
    fullWidth?: boolean;
    children: ReactNode;
    className?: string;
};

type ButtonAsButton = ButtonBaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: "button";
    };

type ButtonAsLink = ButtonBaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: "a";
    };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
    children,
    variant = "primary",
    size = "md",
    icon: Icon,
    fullWidth = false,
    className,
    as: Component = "button",
    ...props
}: ButtonProps) {
    const baseStyles = "font-medium rounded-lg transition-all inline-flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    const classes = cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
    );

    const content = (
        <>
            {Icon && <Icon size={16} />}
            {children}
        </>
    );

    if (Component === "a") {
        return (
            <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {content}
            </a>
        );
    }

    return (
        <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
            {content}
        </button>
    )
}