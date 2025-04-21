// payload/collections/categories.js
import { CollectionConfig } from 'payload';

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'description', type: 'textarea' },
    { name: 'icon', type: 'upload', relationTo: 'media' },
  ],
};

export default Categories;
