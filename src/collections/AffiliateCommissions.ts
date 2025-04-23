import { CollectionConfig, CollectionSlug } from 'payload';

export const AffiliateCommissionSettings: CollectionConfig = {
  slug: 'affiliate-commission-settings',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'tier1', 'tier2', 'tier3'],
  },
 
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
      defaultValue: 'Default',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'tier1',
          label: 'Tier 1 Commission (%)',
          type: 'number',
          required: true,
          defaultValue: 30,
        },
        {
          name: 'tier2',
          label: 'Tier 2 Commission (%)',
          type: 'number',
          required: true,
          defaultValue: 15,
        },
        {
          name: 'tier3',
          label: 'Tier 3 Commission (%)',
          type: 'number',
          required: true,
          defaultValue: 5,
        },
      ],
    },
    {
      name: 'isActive',
      label: 'Active Setting',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
  timestamps: true,
};