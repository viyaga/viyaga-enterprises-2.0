import { CollectionConfig, CollectionSlug } from 'payload';

const  AffiliateCommissionSettings: CollectionConfig = {
  slug: 'affiliate-commission-settings',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'tier1', 'tier2', 'tier3'],
  },
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        if (data.isActive) {
          const existingActive = await req.payload.find({
            collection: 'affiliate-commission-settings' as CollectionSlug,
            where: { isActive: { equals: true } },
            depth: 0,
          });

          const updates = existingActive.docs
            .filter(doc => doc.id !== data.id) // skip the one being saved
            .map(doc =>
              req.payload.update({
                collection: 'affiliate-commission-settings' as CollectionSlug,
                id: doc.id,
                data: { isActive: false } as Partial<typeof data>,
              })
            );

          await Promise.all(updates);
        }

        return data;
      },
    ],
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

export default AffiliateCommissionSettings;