/**
 * Get first N items from array
 */
export function takeFirst<T>(array: T[], count: number): T[] {
    return array.slice(0, count);
}

/**
 * Remove duplicates from array
 */
export function unique<T>(array: T[]): T[] {
    return [...new Set(array)];
}