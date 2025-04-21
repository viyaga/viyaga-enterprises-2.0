// payload/collections/tags.js
import { CollectionConfig } from 'payload';

const Tags: CollectionConfig = {
  slug: 'tags',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
  ],
};

export default Tags;
