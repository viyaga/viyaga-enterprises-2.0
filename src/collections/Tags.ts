// payload/collections/tags.js
import { CollectionConfig } from 'payload';
import { isAdmin } from './access';
import { generateAndEnsureUniqueSlug } from './hooks/generate-slug';

const Tags: CollectionConfig = {
  slug: 'tags',
  admin: { useAsTitle: 'name' },
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin
  },
  defaultPopulate: {
    name: true
  },
  hooks: {
    beforeValidate: [
      generateAndEnsureUniqueSlug('tags', 'title', 'slug'),
    ],
  },
  fields: [
    { name: 'name', type: 'text', required: true },
  ],
};

export default Tags;
