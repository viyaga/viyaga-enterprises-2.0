import type { CollectionConfig, CollectionSlug } from 'payload';
import { isAdmin, isAdminOrAffiliate } from './access';
import { generateAndEnsureUniqueSlug } from './hooks/generate-slug';

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'thumbnail', 'slug', 'category', 'isFeatured'],
  },
  defaultSort: '-sortOrder',
  access: {
    read: isAdminOrAffiliate,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {
    beforeValidate: [
      generateAndEnsureUniqueSlug('products', 'title', 'slug'),
    ],
  },
  fields: [
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        placeholder: 'auto-generated from title if left blank',
      },
    },
    { name: 'isFeatured', type: 'checkbox', label: 'Featured Product' },
    { name: 'isFree', type: 'checkbox', label: 'Free to Use' },

    {
      name: 'status',
      type: 'select',
      options: ['draft', 'published'],
      defaultValue: 'draft',
      required: true,
      index: true,
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: {
        step: 1,
        placeholder: 'e.g. 1',
      },
      index: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories' as CollectionSlug,
      hasMany: true,
      index: true,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags' as CollectionSlug,
      hasMany: true,
      index: true,
    },
    {
      name: 'subscriptionPlans',
      type: 'relationship',
      relationTo: 'subscription-plans' as CollectionSlug,
      hasMany: true,
      label: 'Subscription Plans',
      filterOptions: () => ({
        isActive: {
          equals: true,
        },
      }),
    },
    {
      name: 'setupCostUSD',
      type: 'number',
      label: 'Initial Setup Cost (USD)',
      defaultValue: 0,
      min: 0,
      admin: {
        placeholder: 'e.g. 99',
        step: 0.01,
      },
    },
    {
      name: 'setupCostINR',
      type: 'number',
      label: 'Initial Setup Cost (INR)',
      defaultValue: 0,
      min: 0,
      admin: {
        placeholder: 'e.g. 7999',
        step: 1,
      },
    },
    {
      name: 'affiliateCommission',
      type: 'number',
      label: 'Affiliate Commission %',
      defaultValue: 0,
      min: 0,
      max: 100,
      admin: {
        placeholder: 'e.g. 30',
      },
    },
    {
      name: 'screenshots',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    { name: 'description', type: 'richText' },
    { name: 'features', type: 'richText' },
    {
      name: 'demo_urls',
      type: 'array',
      label: 'Demo URLs',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'seo',
      type: 'relationship',
      relationTo: 'seo' as CollectionSlug,
      label: 'SEO',
    },
  ],
};

export default Products;