import { CollectionConfig } from 'payload';

const Banners: CollectionConfig = {
  slug: 'banners',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'link', type: 'text' },
    { name: 'isActive', type: 'checkbox', defaultValue: true },
  ],
};

export default Banners;
