// payload/collections/orders.js
import { CollectionConfig, CollectionSlug } from 'payload';

const Orders: CollectionConfig = {
  slug: 'orders',
  admin: { useAsTitle: 'orderNumber' },
  fields: [
    { name: 'orderNumber', type: 'text', required: true, unique: true },
    { name: 'customer', type: 'relationship', relationTo: 'users' },
    { name: 'product', type: 'relationship', relationTo: 'products' as CollectionSlug },
    { name: 'amount', type: 'number', required: true },
    {
      name: 'payment_status',
      type: 'select',
      options: ['Pending', 'Paid', 'Failed'],
      required: true,
      defaultValue: 'Pending',
    },
    { name: 'download_link', type: 'text' },
  ],
};

export default Orders;
