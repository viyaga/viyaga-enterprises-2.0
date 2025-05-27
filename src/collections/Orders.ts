import { CollectionConfig, FieldHookArgs } from 'payload';

const generateOrderNumber = async ({ req, operation, originalDoc }: FieldHookArgs) => {
  if (operation === 'create') {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const random = Math.floor(10000 + Math.random() * 90000);
    return `ORD${date}${random}`;
  }
  return originalDoc?.orderNumber;
};

const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'productTitle',
    defaultColumns: ['orderNumber', 'productTitle', 'total', 'paymentMethod', 'status', 'createdAt'],
  },
  access: {
    read: ({ req }) => !!req.user
  },
  fields: [
    {
      name: 'productTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'productThumbnail',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'currency',
      type: 'select',
      required: true,
      options: [
        { label: 'USD', value: 'USD' },
        { label: 'INR', value: 'INR' },
      ],
    },
    {
      name: 'originalPrice',
      type: 'number',
      required: true,
    },
    {
      name: 'discountedPrice',
      type: 'number',
      required: true,
    },
    {
      name: 'subtotal',
      type: 'number',
      required: true,
    },
    {
      name: 'taxes',
      type: 'number',
      required: true,
    },
    {
      name: 'total',
      type: 'number',
      required: true,
    },
    {
      name: 'paymentMethod',
      type: 'select',
      required: true,
      options: [
        { label: 'Credit/Debit Card', value: 'card' },
        { label: 'PayPal', value: 'paypal' },
        { label: 'Bank Transfer', value: 'bank transfer' },
      ],
    },
    {
      name: 'countryCode',
      type: 'text',
      required: false,
    },
    {
      name: 'billingDetails',
      type: 'group',
      fields: [
        {
          name: 'fullName',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          type: 'email',
          required: true,
        },
        {
          name: 'address',
          type: 'textarea',
          required: true,
        },
        {
          name: 'city',
          type: 'text',
          required: true,
        },
        {
          name: 'state',
          type: 'text',
          required: true,
        },
        {
          name: 'postalCode',
          type: 'text',
          required: true,
        },
        {
          name: 'country',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'orderStatus',
      type: 'select',
      defaultValue: 'pending',
      required: true,
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Paid', value: 'paid' },
        { label: 'Failed', value: 'failed' },
      ],
    },
    {
      name: 'referralCode',
      type: 'text',
      label: 'Referral Code',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'affiliate',
      type: 'group',
      fields: [
        {
          name: 'paymentStatus',
          type: 'select',
          defaultValue: 'pending',
          required:true,
          options: [
            { label: 'Pending', value: 'pending' },
            { label: 'Paid', value: 'paid' },
            { label: 'Failed', value: 'failed' },
          ],
        },
        {
          name: 'commissionPercentage',
          type: 'number',
          required: true,
        },
      ],
    },
  ],
};

export default Orders;