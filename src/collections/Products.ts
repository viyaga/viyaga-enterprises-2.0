import { CollectionConfig, CollectionSlug } from 'payload';
import { isAdmin, isAdminOrAffiliate } from './access';

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: isAdminOrAffiliate,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    { name: 'thumbnail', type: 'upload', relationTo: 'media' },
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'isFeatured', type: 'checkbox' },
    { name: 'isFree', type: 'checkbox' },
    { name: 'category', type: 'relationship', relationTo: 'categories' as CollectionSlug, hasMany: true, index: true }, // Index added for category filter
    { name: 'tags', type: 'relationship', relationTo: 'tags' as CollectionSlug, hasMany: true, index: true }, // Index added for tags filter
    {
      name: 'isSubscription',
      type: 'checkbox',
      label: 'Is Subscription Product?',
      defaultValue: false,
    },
    {
      name: 'subscriptionPlans',
      type: 'array',
      label: 'Subscription Plans',
      admin: {
        condition: (_, siblingData) => siblingData?.isSubscription === true,
      },
      fields: [
        {
          name: 'planName',
          type: 'text',
          label: 'Plan Name',
          required: true,
        },
        {
          name: 'billingCycle',
          type: 'select',
          label: 'Billing Cycle',
          options: [
            { label: 'Monthly', value: 'monthly' },
            { label: 'Yearly', value: 'yearly' },
            { label: 'One-time', value: 'one-time' },
          ],
          required: true,
        },
        {
          name: 'priceUSD',
          type: 'number',
          label: 'Price (USD)',
          required: true,
        },
        {
          name: 'priceINR',
          type: 'number',
          label: 'Price (INR)',
          required: true,
        },
        {
          name: 'trialPeriodDays',
          type: 'number',
          label: 'Free Trial (Days)',
          defaultValue: 0,
        },
        {
          name: 'features',
          type: 'richText',
          label: 'Plan Features',
        },
      ],
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'discount_price',
      type: 'number',
      required: true,
      index: true,
    },
    {
      name: 'inr_price',
      type: 'number',
      required: true,
    },
    {
      name: 'inr_discount_price',
      type: 'number',
      required: true,
      index: true,
    },
    {
      name: 'affiliateCommission',
      type: 'number',
      label: 'Affiliate Commission %',
      defaultValue: 0,
      max: 100,
      admin: {
        placeholder: 'e.g. 30',
      },
    },
    {
      name: 'screenshots',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
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
