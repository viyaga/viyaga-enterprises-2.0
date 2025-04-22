import { CollectionConfig, CollectionSlug } from 'payload';

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'description', type: 'richText' },
    { name: 'features', type: 'richText' },

    // Country-wise pricing
    {
      name: 'pricing',
      type: 'array',
      label: 'Pricing by Country',
      fields: [
        {
          name: 'country',
          type: 'select',
          label: 'Country',
          required: true,
          options: [
            { label: 'United States', value: 'US' },
            { label: 'India', value: 'IN' },
            { label: 'Germany', value: 'DE' },
            { label: 'United Kingdom', value: 'UK' },
            { label: 'Canada', value: 'CA' },
          ],
        },
        {
          name: 'currency',
          type: 'select',
          label: 'Currency',
          required: true,
          options: [
            { label: 'USD', value: 'USD' },
            { label: 'INR', value: 'INR' },
            { label: 'EUR', value: 'EUR' },
            { label: 'GBP', value: 'GBP' },
            { label: 'CAD', value: 'CAD' },
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
        },
      ],
    },

    { name: 'version', type: 'text' },
    { name: 'changelog', type: 'richText' },
    { name: 'isFeatured', type: 'checkbox' },
    { name: 'isFree', type: 'checkbox' },

    {
      name: 'demo_urls',
      type: 'array',
      label: 'Demo URLs',
      fields: [
        { name: 'label', type: 'text', required: true }, // e.g., Admin, Client, Delivery
        { name: 'url', type: 'text', required: true },
      ],
    },

    { name: 'documentation_url', type: 'text' },

    {
      name: 'affiliate_commission',
      type: 'number',
      label: 'Affiliate Commission(%)',
      required: false,
      admin: {
        placeholder: 'e.g. 30%',
      },
    },

    { name: 'category', type: 'relationship', relationTo: 'categories' as CollectionSlug },
    { name: 'tags', type: 'relationship', relationTo: 'tags' as CollectionSlug, hasMany: true },
    { name: 'thumbnail', type: 'upload', relationTo: 'media' },

    {
      name: 'screenshots',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },

    { name: 'file', type: 'upload', relationTo: 'media', required: true },
  ],
};

export default Products;
