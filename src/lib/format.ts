/**
 * Formatting Utilities
 *
 * Shared formatting functions for dates, numbers, and display values.
 */

type DateFormat = "short" | "long";

/**
 * Format a date string for display.
 * @param dateStr - ISO date string
 * @param format - "short" (Jan 15, 2024) or "long" (January 15, 2024)
 */
export function formatDate(dateStr: string, format: DateFormat = "short"): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: format === "long" ? "long" : "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Format a view count for display.
 * Numbers >= 1000 are shown as "1.2k", etc.
 */
export function formatViews(views: number): string {
  if (views >= 1000) return `${(views / 1000).toFixed(1)}k`;
  return views.toString();
}
