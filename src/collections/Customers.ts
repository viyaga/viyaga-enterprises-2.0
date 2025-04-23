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
            name: 'referred_by', 
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
        // {
        //     name: 'orders',
        //     type: 'relationship',
        //     relationTo: 'orders' as CollectionSlug,
        //     hasMany: true,
        //     admin: {
        //         position: 'sidebar',
        //     },
        // },
        {
            name: 'isVerified',
            type: 'checkbox',
            defaultValue: false,
        },
    ],
    access: {
        admin: () => false,
        delete: () => false,
    },
    indexes: [
        {
            fields: ['referred_by'],
            unique: false,
        },
    ],
};

export default Customers;
