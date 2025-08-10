import type { CollectionConfig } from 'payload';
import { isAdminOrAffiliate } from './access';
import { hasDiscountCodeAccess } from './access/discount-code-access';
import { setCreatedBy, validateMaxUses } from './hooks/discount-code-hooks';

export const DiscountCodes: CollectionConfig = {
  slug: 'discountCodes',
  labels: {
    singular: 'Discount Code',
    plural: 'Discount Codes',
  },
  admin: {
    useAsTitle: 'code',
    description: 'Manage discount codes available for checkout.',
    defaultColumns: ['code', 'discountType', 'discountValue', 'active', 'validFrom', 'validUntil'],
  },
  access: {
    read: hasDiscountCodeAccess,
    create: isAdminOrAffiliate,
    update: hasDiscountCodeAccess,
    delete: hasDiscountCodeAccess,
  },
  hooks: {
    beforeChange: [setCreatedBy, validateMaxUses],
  },
  fields: [
    {
      name: 'code',
      type: 'text',
      label: 'Discount Code',
      required: true,
      unique: true,
    },
    {
      name: 'referralCode',
      label: 'Referral Code',
      type: 'text',
      required: true,
    },
    {
      name: 'discountType',
      type: 'select',
      label: 'Type',
      required: true,
      defaultValue: 'percentage',
      options: [
        { label: 'Percentage', value: 'percentage' },
      ],
    },
    {
      name: 'discountValue',
      type: 'number',
      label: 'Discount Value',
      required: true,
      min: 0,
    },
    {
      name: 'active',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
    },
    {
      name: 'validFrom',
      type: 'date',
      label: 'Valid From',
    },
    {
      name: 'validUntil',
      type: 'date',
      label: 'Valid Until',
    },
    {
      name: 'maxUses',
      type: 'number',
      label: 'Maximum Uses',
      admin: {
        description: 'Leave blank for unlimited',
      },
    },
    {
      name: 'timesUsed',
      type: 'number',
      label: 'Times Used',
      defaultValue: 0,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      admin: { readOnly: true },
    },
  ],
};