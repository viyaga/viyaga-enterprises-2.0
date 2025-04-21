import { CollectionConfig, CollectionSlug } from 'payload';

const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: { useAsTitle: 'customer_name' },
  fields: [
    { name: 'customer_name', type: 'text', required: true },
    { name: 'rating', type: 'number', min: 1, max: 5 },
    { name: 'review', type: 'textarea' },
    { name: 'product', type: 'relationship', relationTo: 'products' as CollectionSlug },
    { name: 'approved', type: 'checkbox' },
  ],
};

export default Testimonials;
