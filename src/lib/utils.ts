import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isJsonString = (str: string | null | undefined): boolean => {
  if (!str) return false;
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
