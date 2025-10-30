export type ColorVariant = "blue" | "purple" | "green" | "orange" | "red" | "gray";

export type SizeVariant = "sm" | "md" | "lg";

export interface Tab {
    key: string;
    label: string;
}

export interface HeaderInfoItem {
    label: string;
    value: string;
    description?: string;
}