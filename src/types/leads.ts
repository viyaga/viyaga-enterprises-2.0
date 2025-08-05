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

export interface PathEntry extends TermEntry {
  duration: number;
  scrollDepth: number;
}

export interface ActivityData {
  searched: TermEntry[];
  sorted: TermEntry[];
  categories: TermEntry[];
  paths: PathEntry[];
  checkout?: CheckoutEntry[];
  productsvisited?: ProductVisitEntry[];
}
