import { CollectionConfig } from 'payload';
import isURL from 'validator/lib/isURL'; // You can install this package to validate URLs
import { isJsonString } from '@/lib/utils'; // A custom utility function to validate JSON-LD

// Define types for each field's value
interface SEOFieldValue {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: { width: number; height: number }; // Assuming image has width/height properties
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: { width: number; height: number }; // Assuming image has width/height properties
  canonicalUrl?: string;
  structuredData?: string; // JSON string
}

const SEO: CollectionConfig = {
  slug: 'seo',
  fields: [
    {
      name: 'metaTitle',
      type: 'text',
      label: 'Meta Title',
      required: true,
      validate: (value: string | null | undefined) => {
        if (value && value.length > 60) {
          return 'Meta Title should be 60 characters or less.';
        }
        return true;
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Meta Description',
      required: true,
      validate: (value: string | null | undefined) => {
        if (value && value.length > 160) {
          return 'Meta Description should be 160 characters or less.';
        }
        return true;
      },
    },
    {
      name: 'metaKeywords',
      type: 'text',
      label: 'Meta Keywords',
      validate: (value: string | null | undefined) => {
        if (value && value.length > 100) {
          return 'Meta Keywords should be 100 characters or less.';
        }
        return true;
      },
    },
    {
      name: 'ogTitle',
      type: 'text',
      label: 'OG Title',
      validate: (value: string | null | undefined) => {
        if (value && value.length > 60) {
          return 'OG Title should be 60 characters or less.';
        }
        return true;
      },
    },
    {
      name: 'ogDescription',
      type: 'textarea',
      label: 'OG Description',
      validate: (value: string | null | undefined) => {
        if (value && value.length > 200) {
          return 'OG Description should be 200 characters or less.';
        }
        return true;
      },
    },
    {
      name: 'ogImage',
      type: 'upload',
      label: 'OG Image',
      relationTo: 'media',
    },
    {
      name: 'twitterTitle',
      type: 'text',
      label: 'Twitter Title',
      validate: (value: string | null | undefined) => {
        if (value && value.length > 70) {
          return 'Twitter Title should be 70 characters or less.';
        }
        return true;
      },
    },
    {
      name: 'twitterDescription',
      type: 'textarea',
      label: 'Twitter Description',
      validate: (value: string | null | undefined) => {
        if (value && value.length > 200) {
          return 'Twitter Description should be 200 characters or less.';
        }
        return true;
      },
    },
    {
      name: 'twitterImage',
      type: 'upload',
      label: 'Twitter Image',
      relationTo: 'media',
    },
    {
      name: 'canonicalUrl',
      type: 'text',
      label: 'Canonical URL',
      validate: (value: string | null | undefined) => {
        if (value && !isURL(value)) {
          return 'Canonical URL must be a valid URL.';
        }
        return true;
      },
    },
    {
      name: 'structuredData',
      type: 'json',
      label: 'Structured Data (JSON-LD)',
      validate: (value: string | null | undefined) => {
        if (value && !isJsonString(value)) {
          return 'Structured Data must be valid JSON.';
        }
        return true;
      },
    },
  ],
};

export default SEO;
