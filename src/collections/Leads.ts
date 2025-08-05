import { CollectionConfig } from 'payload';
import { isAdmin } from './access';

const Leads: CollectionConfig = {
  slug: 'leads',
  labels: {
    singular: 'Lead',
    plural: 'Leads',
  },
  admin: {
    useAsTitle: 'user_username',
    defaultColumns: ['user_username', 'user_email', 'createdAt'],
  },
  access: {
    read: isAdmin,
    create: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  timestamps: true,
  fields: [
    {
      name: 'user_username',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'user_email',
      type: 'email',
      label: 'Email',
      required: true,
    },
    {
      name: 'user_phone',
      type: 'text',
      label: 'Phone',
      required: false,
    },
    {
      name: 'user_budget',
      type: 'select',
      label: 'Budget',
      required: true,
      options: [
        { label: 'Below ₹10,000', value: 'below_10k' },
        { label: '₹10,000 - ₹50,000', value: '10k_50k' },
        { label: '₹50,000 - ₹1,00,000', value: '50k_1lakh' },
        { label: 'Above ₹1,00,000', value: 'above_1lakh' },
      ],
    },
    {
      name: 'user_message',
      type: 'textarea',
      label: 'Message',
      required: true,
    },
    {
      name: 'affiliate_id',
      type: 'text',
      label: 'Affiliate ID',
      required: false,
    },
    {
      name: 'activity_data',
      type: 'json',
      label: 'Activity Data',
      required: false,
    },
  ],
};

export default Leads;