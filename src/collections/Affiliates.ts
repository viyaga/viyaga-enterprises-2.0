import { CollectionSlug } from 'payload';
import { CollectionConfig } from 'payload';
import { updateRank } from '@/lib/hooks/affiliate';

const Affiliates: CollectionConfig = {
    slug: 'affiliates',
    admin: {
        useAsTitle: 'referral_code',
        defaultColumns: ['referral_code', 'commission_rate', 'total_earned'],
    },
    auth: true,
    hooks: {
        beforeOperation: [updateRank],
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
            required: true,
            unique: true,
            admin: {
                readOnly: true,
                description: 'Unique code for referral tracking',
            },
        },
        {
            name: 'address',
            type: 'group',
            fields: [
                {
                    name: 'house_number',
                    type: 'text',
                },
                {
                    name: 'street_and_area',
                    type: 'text',
                },
                {
                    name: 'city',
                    type: 'text',
                },
                {
                    name: 'state',
                    type: 'text',
                },
                {
                    name: 'country',
                    type: 'text',
                },
                {
                    name: 'postal_code',
                    type: 'text',
                }
            ],
        },
        {
            name: 'phone_number',
            type: 'text',
            admin: {
                description: 'Phone number in international format',
            },
        },
        {
            name: 'country_code',
            type: 'text',
            required: true,
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
            name: 'wallet_balance',
            type: 'number',
            defaultValue: 0,
        },
        {
            name: 'bonus_balance',
            type: 'number',
            defaultValue: 0,
        },
        {
            name: 'current_rank',
            type: 'text',
            admin: {
                placeholder: 'e.g. Bronze, Silver, Gold',
            },
        },
        {
            name: 'referral_tree_ids',
            type: 'array',
            fields: [
                {
                    name: 'id',
                    type: 'text',
                }
            ],
            maxRows: 3
        },
        {
            name: 'referred_by',
            type: 'text',
            required: false,
        },
        {
            name: 'bank_accounts',
            type: 'relationship',
            relationTo: 'bank-details' as CollectionSlug,
            hasMany: true,
        },
        {
            name: 'status',
            type: 'radio',
            required: true,
            defaultValue: 1,
            options: [
                {
                    label: 'Active',
                    value: "1",
                },
                {
                    label: 'Inactive',
                    value: "0",
                },
                {
                    label: 'Deleted',
                    value: "-1",
                },
            ],
            admin: {
                layout: 'horizontal',
            },
        },
    ],
    access: {
        admin: () => false,
        delete: () => false,
    },
    indexes: [
        {
            fields: ['referred_by', 'status'],
            unique: false,
        }
    ],
};

export default Affiliates;
