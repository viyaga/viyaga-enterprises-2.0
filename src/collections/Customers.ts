// payload/collections/customers.js
import { CollectionConfig, CollectionSlug } from 'payload';

const Customers: CollectionConfig = {
    slug: 'customers',
    auth: true,
    admin: {
        useAsTitle: 'email',
        defaultColumns: ['name', 'email', 'referred_by_code'],
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'referral_code',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'profile_picture',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'orders',
            type: 'relationship',
            relationTo: 'orders' as CollectionSlug,
            hasMany: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'isVerified',
            type: 'checkbox',
            defaultValue: false,
        },
    ],
    access: {
        read: ({ req: { user } }) => {
            if (!user) return false;
            // Only allow users to read their own data unless admin
            return { id: { equals: user.id } };
        },
        update: ({ req: { user } }) => {
            if (!user) return false;
            return { id: { equals: user.id } };
        },
        delete: () => false,
    },
};

export default Customers;
