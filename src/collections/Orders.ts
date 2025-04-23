import { CollectionConfig, CollectionSlug } from 'payload';

const Orders: CollectionConfig = {
  slug: 'orders',
  admin: { useAsTitle: 'orderNumber' },
  hooks: {afterChange: []},
  fields: [
    { name: 'orderNumber', type: 'text', required: true, unique: true },
    { name: 'customer', type: 'relationship', relationTo: 'Customers' as CollectionSlug },
    { name: 'product', type: 'relationship', relationTo: 'products' as CollectionSlug },
    {
      name: 'country',
      type: 'select',
      label: 'Country',
      required: true,
      options: [
        { label: 'United States', value: 'US' },
        { label: 'India', value: 'IN' },
        { label: 'Germany', value: 'DE' },
        { label: 'United Kingdom', value: 'UK' },
        { label: 'Canada', value: 'CA' },
      ],
    },
    {
      name: 'currency',
      type: 'select',
      label: 'Currency',
      options: [
        { label: 'USD', value: 'USD' },
        { label: 'INR', value: 'INR' },
        { label: 'EUR', value: 'EUR' },
        { label: 'GBP', value: 'GBP' },
        { label: 'CAD', value: 'CAD' },
      ],
    },
    { name: 'amount', type: 'number', required: true },
    {
      name: 'payment_status',
      type: 'select',
      options: ['Pending', 'Paid', 'Failed'],
      required: true,
      defaultValue: 'Pending',
    },
    {
      name: 'affiliate_commission_status',
      type: 'select',
      options: ['Pending', 'Paid', 'Not Applicable'],
      required: true,
      defaultValue: 'Pending',
    },
    { name: 'download_link', type: 'text' },
  ],
};

export default Orders;
