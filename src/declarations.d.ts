declare module 'use-react-countries' {
    export interface Country {
      name: string;
      code: string;
      emoji: string;
      unicode: string;
    }
  
    export function useCountries(): {
      countries: Country[];
    };
  }
  