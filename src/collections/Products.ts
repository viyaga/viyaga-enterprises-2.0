import { CollectionConfig, CollectionSlug } from 'payload';

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'description', type: 'richText' },
    { name: 'features', type: 'richText' },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'discount_price',
      type: 'number',
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
      index: true,
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
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
    { name: 'documentation_url', type: 'text' },
    {
      name: 'affiliate_commission',
      type: 'number',
      label: 'Affiliate Commission(%)',
      defaultValue: 0,
      admin: {
        placeholder: 'e.g. 30%',
      },
    },
    { name: 'category', type: 'relationship', relationTo: 'categories' as CollectionSlug, hasMany: true, index: true }, // Index added for category filter
    { name: 'tags', type: 'relationship', relationTo: 'tags' as CollectionSlug, hasMany: true, index: true }, // Index added for tags filter
    { name: 'thumbnail', type: 'upload', relationTo: 'media' },
    {
      name: 'screenshots',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
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
