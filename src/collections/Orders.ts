import { CollectionConfig } from 'payload';
import { hasOrderAccess } from './access/order-access';
import { isAdmin } from './access';

const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'productTitle',
    defaultColumns: ['productTitle', 'total', 'currency', 'paymentMethod', 'createdAt'],
  },
  access: {
    read: hasOrderAccess,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'productTitle',
      label: 'Product Name',
      type: 'text',
      required: true,
    },
    {
      name: 'productThumbnail',
      label: 'Product Image',
      type: 'upload',
      relationTo: 'media',
      access: {
        read: isAdmin,
        update: isAdmin,
      },
      admin: {
        disableListColumn: true,
        disableListFilter: true,
      },
    },
    {
      name: 'currency',
      label: 'Currency',
      type: 'select',
      required: true,
      options: [
        { label: 'USD', value: 'USD' },
        { label: 'INR', value: 'INR' },
      ],
    },
    {
      name: 'originalPrice',
      label: 'Original Price',
      type: 'number',
      required: true,
      access: {
        read: isAdmin,
        update: isAdmin,
      },
      admin: {
        disableListColumn: true,
        disableListFilter: true,
      },
    },
    {
      name: 'discountedPrice',
      label: 'Discounted Price',
      type: 'number',
      required: true,
      access: {
        read: isAdmin,
        update: isAdmin,
      },
      admin: {
        disableListColumn: true,
        disableListFilter: true,
      },
    },
    {
      name: 'subtotal',
      label: 'Subtotal',
      type: 'number',
      required: true,
      access: {
        read: isAdmin,
        update: isAdmin,
      },
      admin: {
        disableListColumn: true,
        disableListFilter: true,
      },
    },
    {
      name: 'taxes',
      label: 'Taxes',
      type: 'number',
      required: true,
      access: {
        read: isAdmin,
        update: isAdmin,
      },
      admin: {
        disableListColumn: true,
        disableListFilter: true,
      },
    },
    {
      name: 'total',
      label: 'Total Amount',
      type: 'number',
      required: true,
    },
    {
      name: 'paymentMethod',
      label: 'Payment Method',
      type: 'select',
      required: true,
      options: [
        { label: 'Credit or Debit Card', value: 'card' },
        { label: 'PayPal', value: 'paypal' },
        { label: 'Bank Transfer', value: 'bank transfer' },
      ],
    },
    {
      name: 'countryCode',
      label: 'Country Code',
      type: 'text',
      required: false,
      access: {
        read: isAdmin,
        update: isAdmin,
      },
      admin: {
        disableListColumn: true,
        disableListFilter: true,
      },
    },
    {
      name: 'billingDetails',
      label: 'Billing Details',
      type: 'group',
      admin: {
        disableListColumn: true,
        disableListFilter: true,
      },
      fields: [
        {
          name: 'fullName',
          label: 'Full Name',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'email',
          required: true,
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'text',
          required: true,
        },
        {
          name: 'houseNumber',
          label: 'House / Flat No.',
          type: 'text',
          required: true,
        },
        {
          name: 'streetAndArea',
          label: 'Street and Area',
          type: 'text',
          required: true,
        },
        {
          name: 'city',
          label: 'City',
          type: 'text',
          required: true,
        },
        {
          name: 'state',
          label: 'State / Province',
          type: 'text',
          required: true,
        },
        {
          name: 'postalCode',
          label: 'Postal Code',
          type: 'text',
          required: true,
        },
        {
          name: 'country',
          label: 'Country',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'paymentStatus',
      type: 'select',
      label: 'Payment Status',
      required: true,
      defaultValue: "awaiting verification",
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Awaiting Verification', value: 'awaiting verification' },
        { label: 'Paid', value: 'paid' },
        { label: 'Failed', value: 'failed' },
        { label: 'Refunded', value: 'refunded' },
      ],
    },
    {
      name: 'orderStatus',
      type: 'select',
      label: 'Order Status',
      required: true,
      defaultValue: "pending",
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Processing', value: 'processing' },
        { label: 'Completed', value: 'completed' },
        { label: 'On Hold', value: 'on_hold' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
    },
    {
      name: 'referralCode',
      label: 'Referral Code',
      type: 'text',
      required: true,
      access: {
        read: isAdmin,
        update: isAdmin,
      },
      admin: {
        position: 'sidebar',
        disableListColumn: true,
        disableListFilter: true,
      },
    },
    {
      name: 'affiliate',
      label: 'Affiliate Info',
      type: 'group',
      access: {
        read: isAdmin,
        update: isAdmin,
      },
      admin: {
        disableListColumn: true,
        disableListFilter: true,
      },
      fields: [
        {
          name: 'paymentStatus',
          label: 'Affiliate Payment Status',
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
          name: 'commissionPercentage',
          label: 'Commission (%)',
          type: 'number',
          required: true,
        },
      ],
    },
  ],
};

export default Orders;