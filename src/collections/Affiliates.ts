import { CollectionSlug } from 'payload';
import { CollectionConfig } from 'payload';
import { updateRank } from '@/lib/hooks/affiliate'

const Affiliates: CollectionConfig = {
    slug: 'affiliates',
    admin: {
        useAsTitle: 'referral_code',
        defaultColumns: ['customer', 'referral_code', 'commission_rate', 'total_earned'],
    },
    hooks: {
  beforeChange: [updateRank],
},
    fields: [
        {
            name: 'customer',
            type: 'relationship',
            relationTo: 'customers' as CollectionSlug,
            required: true,
        },
        {
            name: 'referral_code',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'commission_rate',
            type: 'number',
            required: true,
            defaultValue: 10, // % commission
            min: 0,
            max: 100,
        },
        {
            name: 'total_earned',
            type: 'number',
            defaultValue: 0,
            admin: {
                readOnly: true,
            },
        },
        {
            name: 'isActive',
            type: 'checkbox',
            defaultValue: true,
        },
        {
            name: 'notes',
            type: 'textarea',
        },
    ],
    access: {
        read: ({ req: { user } }) => {
            if (!user) return false;
            // Allow users to view their own affiliate record
            return {
                customer: {
                    equals: user.id,
                },
            };
        },
        update: ({ req: { user } }) => {
            if (!user) return false;
            // Only allow updating your own affiliate account
            return {
                customer: {
                    equals: user.id,
                },
            };
        },
        delete: () => false,
    },
};

export default Affiliates;
