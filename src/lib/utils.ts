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
  } catch {
    return false;
  }
};

export const isUrl = (str: string | null | undefined): boolean => {
  if (!str) return false;
  try {
    const url = new URL(str);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};


export const requiredEnv = (key: string) => {
  const value = process.env[key]
  if (!value) throw new Error(`${key} is required`)
  return value
}

export const slugify = (text: string): string => {
  return text
    .toString()
    .normalize('NFKD')                   // Normalize accents like é → e
    .replace(/[\u0300-\u036F]/g, '')     // Remove diacritics
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')         // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, '');            // Remove leading/trailing hyphens
};

