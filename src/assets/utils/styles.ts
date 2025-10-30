import { COLORS } from "../config/colors";
import type { ColorVariant } from "../types/ui";

/**
 * Combine CSS class names (filters out falsy values)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(" ");
}

/**
 * Get color classes from variant
 */
export function getColorClasses(variant: ColorVariant) {
    return COLORS[variant];
}