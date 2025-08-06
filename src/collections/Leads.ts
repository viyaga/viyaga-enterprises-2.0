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
      name: 'user_message',
      type: 'textarea',
      label: 'Message',
      required: true,
    },
    {
      name: 'user_country',
      type: 'text',
      label: 'Country',
      required: true,
    },
    {
      name: 'affiliate_id',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'activity_data',
      type: 'json',
      label: 'Activity Data',
    },
  ],
};

export default Leads;