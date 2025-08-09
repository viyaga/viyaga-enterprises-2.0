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
    create: () => true,
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
      min: 0,
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
      min: 0,
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
      name: 'discountCode',
      label: 'Discount Code',
      type: 'text',
      required: false,
      admin: {
        position: 'sidebar',
        description: 'Optional promo or discount code used during checkout',
      },
    },
    {
      name: 'subtotal',
      label: 'Subtotal',
      type: 'number',
      required: true,
      min: 0,
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
      min: 0,
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
      min: 0,
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
        { label: 'Razorpay', value: 'razorpay' },
      ],
    },
    {
      name: 'countryCode',
      label: 'Country Code',
      type: 'text',
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
        { name: 'fullName', label: 'Full Name', type: 'text', required: true },
        { name: 'email', label: 'Email Address', type: 'email', required: true },
        { name: 'phone', label: 'Phone Number', type: 'text', required: true },
        { name: 'address', label: 'Address', type: 'text', required: true },
        { name: 'city', label: 'City', type: 'text', required: true },
        { name: 'state', label: 'State / Province', type: 'text', required: true },
        { name: 'postalCode', label: 'Postal Code', type: 'text', required: true },
        { name: 'country', label: 'Country', type: 'text', required: true },
      ],
    },
    {
      name: 'paymentStatus',
      label: 'Payment Status',
      type: 'select',
      defaultValue: 'awaiting verification',
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
      label: 'Order Status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Processing', value: 'processing' },
        { label: 'Completed', value: 'completed' },
        { label: 'On Hold', value: 'on_hold' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
    },
    {
      name: 'paymentVerifiedAt',
      label: 'Payment Verified At',
      type: 'date',
      admin: { position: 'sidebar' },
    },
    {
      name: 'orderCompletedAt',
      label: 'Order Completed At',
      type: 'date',
      admin: { position: 'sidebar' },
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
          min: 0,
          max: 100,
          required: true,
        },
      ],
    },
    {
      name: 'razorpayOrderId',
      label: 'Razorpay Order ID',
      type: 'text',
      admin: {
        position: 'sidebar',
        disableListColumn: true,
        disableListFilter: true,
      },
    },
    {
      name: 'razorpayPaymentId',
      label: 'Razorpay Payment ID',
      type: 'text',
      admin: {
        position: 'sidebar',
        disableListColumn: true,
        disableListFilter: true,
      },
    },
    {
      name: 'razorpaySignature',
      label: 'Razorpay Signature',
      type: 'text',
      admin: {
        position: 'sidebar',
        disableListColumn: true,
        disableListFilter: true,
      },
    },
    {
      name: 'user',
      label: 'User',
      type: 'relationship',
      relationTo: 'users',
      required: false,
      access: { read: isAdmin },
      admin: {
        position: 'sidebar',
        description: 'Associated user for this order',
      },
    },
  ],
};

export default Orders;