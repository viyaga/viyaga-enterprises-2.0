import { type ActivityData } from "@/types/leads";
export function getValidAffiliateId(): string | null {
  const raw = localStorage.getItem('affiliate_info');
  if (!raw) return null;

  try {
    const info = JSON.parse(raw);
    const now = new Date();
    if (new Date(info.expiresAt) > now) {
      return info.id;
    }
  } catch {
    // Invalid JSON or date
  }

  return null;
}

/**
 * Get the full activity data object from localStorage, or null if none exists
 */
export function getActivityData(): ActivityData | null {
  const raw = localStorage.getItem('activity_data');
  if (!raw) return null;

  try {
    return JSON.parse(raw) as ActivityData;
  } catch {
    // Invalid JSON
    return null;
  }
}