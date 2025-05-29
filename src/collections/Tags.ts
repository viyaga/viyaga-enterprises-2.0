// payload/collections/tags.js
import { CollectionConfig } from 'payload';
import { isAdmin } from './access';

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
  fields: [
    { name: 'name', type: 'text', required: true },
  ],
};

export default Tags;
