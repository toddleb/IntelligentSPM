/**
 * Email Utilities
 *
 * Shared email validation functions that can be used in both
 * client and server contexts.
 */

// Personal email domains to reject (require corporate emails)
export const PERSONAL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "live.com",
  "msn.com",
  "protonmail.com",
  "proton.me",
  "mail.com",
  "ymail.com",
  "gmx.com",
  "gmx.net",
  "zoho.com",
  "fastmail.com",
  "tutanota.com",
  "hey.com",
];

/**
 * Check if an email is from a personal email provider
 */
export function isPersonalEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return PERSONAL_DOMAINS.includes(domain);
}

/**
 * Extract domain from email address
 */
export function extractDomain(email: string): string {
  return email.split("@")[1]?.toLowerCase() || "";
}

/**
 * Basic email format validation
 */
export function isValidEmailFormat(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
