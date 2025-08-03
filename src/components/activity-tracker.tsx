'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

interface TermEntry {
  term: string;
  t: string;
}

interface CheckoutEntry {
  id: string;
  plan: string;
  billingcycle: string;
  t: string;
}

interface ProductVisitEntry {
  slug: string;
  t: string;
}

interface PathEntry extends TermEntry {
  duration: number; // milliseconds
  scrollDepth: number; // 0 - 100
}

interface ActivityData {
  searched: TermEntry[];
  sorted: TermEntry[];
  categories: TermEntry[];
  paths: PathEntry[];
  checkout?: CheckoutEntry[];
  productsvisited?: ProductVisitEntry[];
}

const STORAGE_KEY = 'activity_data';
const MAX_ITEMS = 50;

function addEntry<T extends { t: string }>(array: T[], entry: T, key: keyof T) {
  const filtered = array.filter(item => item[key] !== entry[key]);
  filtered.unshift(entry);
  return filtered.slice(0, MAX_ITEMS);
}

export default function ActivityTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const startTimeRef = useRef<number>(Date.now());
  const scrollDepthRef = useRef<number>(0);
  const lastKeyRef = useRef<string>('');

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(100, Math.round((scrollTop / docHeight) * 100));
      scrollDepthRef.current = Math.max(scrollDepthRef.current, scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Save activity when navigating or leaving page
  useEffect(() => {
    const savePageActivity = () => {
      const duration = Date.now() - startTimeRef.current;
      const scrollDepth = scrollDepthRef.current;
      const now = new Date().toISOString();

      const raw = localStorage.getItem(STORAGE_KEY);
      const data: ActivityData = raw
        ? JSON.parse(raw)
        : { searched: [], sorted: [], categories: [], paths: [], checkout: [], productsvisited: [] };

      const entry: PathEntry = {
        term: pathname,
        t: now,
        duration,
        scrollDepth,
      };

      data.paths = addEntry(data.paths, entry, 'term');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    };

    // Save on tab close or switch
    window.addEventListener('beforeunload', savePageActivity);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') savePageActivity();
    });

    // Save on route change
    return () => {
      savePageActivity();
      window.removeEventListener('beforeunload', savePageActivity);
      document.removeEventListener('visibilitychange', savePageActivity);
    };
  }, [pathname]);

  // Track query and page-based info
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    const data: ActivityData = raw
      ? JSON.parse(raw)
      : { searched: [], sorted: [], categories: [], paths: [], checkout: [], productsvisited: [] };

    const key = pathname + '?' + searchParams.toString();
    if (lastKeyRef.current === key) return;
    lastKeyRef.current = key;

    startTimeRef.current = Date.now(); // reset time
    scrollDepthRef.current = 0;        // reset scroll
    const now = new Date().toISOString();

    // Query params
    const q = searchParams.get('q');
    if (q) {
      data.searched = addEntry(data.searched, { term: q, t: now }, 'term');
    }
    const sort = searchParams.get('sort');
    if (sort) {
      data.sorted = addEntry(data.sorted, { term: sort, t: now }, 'term');
    }
    const category = searchParams.get('category');
    if (category) {
      data.categories = addEntry(data.categories, { term: category, t: now }, 'term');
    }

    // Dynamic routes
    const checkoutMatch = pathname.match(/^\/checkout\/([^\/\?]+)/);
    const solutionsMatch = pathname.match(/^\/solutions\/([^\/\?]+)/);

    if (checkoutMatch) {
      const id = checkoutMatch[1];
      const plan = searchParams.get('plan') || 'default';
      const billingcycle = searchParams.get('billingcycle') || 'monthly';

      const entry = { id, plan, billingcycle, t: now };
      data.checkout = addEntry(data.checkout || [], entry, 'id');
    }

    if (solutionsMatch) {
      const slug = solutionsMatch[1];
      const entry = { slug, t: now };
      data.productsvisited = addEntry(data.productsvisited || [], entry, 'slug');
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [pathname, searchParams]);

  return null;
}
