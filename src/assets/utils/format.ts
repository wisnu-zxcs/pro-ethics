/**
 * Format number with thousands separator
 */
export function formatNumber(num: number): string {
    return new Intl.NumberFormat("id-ID").format(num);
}

/**
 * Format salary string
 */
export function formatSalary(amount: number): string {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(amount);
}