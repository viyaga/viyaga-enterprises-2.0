// components/ActivityTracker.tsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

interface TermEntry {
  term: string;
  t: string;
}

interface ActivityData {
  searched: TermEntry[];
  sorted: TermEntry[];
  categories: TermEntry[];
  paths: TermEntry[];
}

const STORAGE_KEY = 'activity_data';
const MAX_ITEMS = 50; // limit per array

function addEntry(array: TermEntry[], value: string) {
  const now = new Date().toISOString();
  // remove existing
  const filtered = array.filter(entry => entry.term !== value);
  // add new at front
  filtered.unshift({ term: value, t: now });
  // limit length
  return filtered.slice(0, MAX_ITEMS);
}

export default function ActivityTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastKeyRef = useRef<string>('');

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    const data: ActivityData = raw
      ? JSON.parse(raw)
      : { searched: [], sorted: [], categories: [], paths: [] };

    // Unique key to avoid duplicate logging
    const key = pathname + '?' + searchParams.toString();
    if (lastKeyRef.current === key) return;
    lastKeyRef.current = key;

    // Track path
    data.paths = addEntry(data.paths, pathname);

    // Track query params
    const q = searchParams.get('q');
    if (q) {
      data.searched = addEntry(data.searched, q);
    }
    const sort = searchParams.get('sort');
    if (sort) {
      data.sorted = addEntry(data.sorted, sort);
    }
    const category = searchParams.get('category');
    if (category) {
      data.categories = addEntry(data.categories, category);
    }

    // Persist
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    console.log({ activity: JSON.parse(localStorage.getItem(STORAGE_KEY) as string) });

  }, [pathname, searchParams]);

  return null;
}