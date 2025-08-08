import { CollectionConfig, CollectionSlug } from 'payload';
import { isAdmin } from './access';
import { generateAndEnsureUniqueSlug } from './hooks/generate-slug';

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: { useAsTitle: 'title' },
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin
  },
  defaultPopulate: {
    title: true,
    slug: true
  },
  hooks: {
    beforeValidate: [
      generateAndEnsureUniqueSlug('categories', 'title', 'slug'),
    ],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'description', type: 'textarea' },
    { name: 'icon', type: 'upload', relationTo: 'media' },
    {
      name: 'seo',
      type: 'relationship',
      relationTo: 'seo' as CollectionSlug,
      label: 'SEO',
    },
  ],
};

export default Categories;