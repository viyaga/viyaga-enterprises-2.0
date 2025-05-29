import { CollectionConfig } from 'payload';
import { isAdmin, isAdminOrAffiliate } from './access';

const AffiliateCommissions: CollectionConfig = {
    slug: 'affiliate-commissions',
    admin: {
        useAsTitle: 'order',
        defaultColumns: [
            'order',
            'affiliateUser',
            'commissionAmount',
            'commissionCurrency',
            'commissionPercentage',
            'tier',
            'paymentStatus',
            'createdAt',
        ],
    },
    access: {
        read: isAdminOrAffiliate,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
    },
    fields: [
        {
            name: 'order',
            label: 'Order',
            type: 'relationship',
            relationTo: 'orders',
            required: true,
        },
        {
            name: 'affiliateUser',
            label: 'Affiliate User',
            type: 'relationship',
            relationTo: 'users',
            required: true,
        },
        {
            name: 'commissionAmount',
            label: 'Commission Amount',
            type: 'number',
            required: true,
        },
        {
            name: 'commissionCurrency',
            label: 'Currency',
            type: 'select',
            required: true,
            options: [
                { label: 'USD', value: 'USD' },
                { label: 'INR', value: 'INR' },
            ],
        },
        {
            name: 'commissionPercentage',
            label: 'Commission (%)',
            type: 'number',
            required: true,
        },
        {
            name: 'tier',
            label: 'Tier',
            type: 'select',
            required: true,
            options: Array.from({ length: 10 }, (_, i) => ({
                label: `Tier ${i + 1}`,
                value: (i + 1).toString(),
            })),
        },
        {
            name: 'paymentStatus',
            label: 'Payment Status',
            type: 'select',
            required: true,
            defaultValue: 'pending',
            options: [
                { label: 'Pending', value: 'pending' },
                { label: 'Paid', value: 'paid' },
                { label: 'Failed', value: 'failed' },
            ],
        },
        {
            name: 'notes',
            label: 'Notes',
            type: 'textarea',
            required: false,
            admin: {
                position: 'sidebar',
                description: 'Optional notes about this commission payment.',
            },
        },
    ],
};

export default AffiliateCommissions;