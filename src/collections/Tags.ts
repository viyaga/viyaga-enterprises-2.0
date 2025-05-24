// payload/collections/tags.js
import { CollectionConfig } from 'payload';

const Tags: CollectionConfig = {
  slug: 'tags',
  admin: { useAsTitle: 'name' },
  access: {
    read: () => true,
  },
  defaultPopulate:{
    name:true
  },
  fields: [
    { name: 'name', type: 'text', required: true },
  ],
};

export default Tags;
