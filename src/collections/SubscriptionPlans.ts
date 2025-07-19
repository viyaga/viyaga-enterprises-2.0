import { CollectionConfig } from 'payload';

const SubscriptionPlans: CollectionConfig = {
  slug: 'subscription-plans',
  admin: {
    useAsTitle: 'label',
    defaultColumns: ['planName', 'label', 'billingOptions'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      label: 'Label',
      defaultValue: 'Basic Plan',
    },
    {
      name: 'planName',
      type: 'text',
      required: true,
      label: 'Plan Name',
      defaultValue: 'basic',
    },
    {
      name: 'billingOptions',
      type: 'array',
      label: 'Billing Options',
      required: true,
      minRows: 1,
      maxRows: 3,
      labels: {
        singular: 'Billing Option',
        plural: 'Billing Options',
      },
      fields: [
        {
          name: 'billingCycle',
          type: 'select',
          required: true,
          label: 'Billing Cycle',
          options: [
            { label: 'Monthly', value: 'monthly' },
            { label: 'Yearly', value: 'yearly' },
            { label: 'One-Time', value: 'one-time' },
          ],
        },
        {
          name: 'priceUSD',
          type: 'number',
          required: true,
          label: 'Price (USD)',
          admin: {
            step: 0.01,
            description: 'Price in USD',
          },
        },
        {
          name: 'priceINR',
          type: 'number',
          required: true,
          label: 'Price (INR)',
          admin: {
            step: 1,
            description: 'Price in INR',
          },
        },
      ],
    },
    {
      name: 'trialPeriodDays',
      type: 'number',
      defaultValue: 0,
      label: 'Trial Period (Days)',
      admin: {
        description: 'Number of free trial days',
      },
    },
    {
      name: 'features',
      type: 'json',
      label: 'Features',
      admin: {
        description: 'List of features included in this plan',
      },
      defaultValue: [
        "Unlimited projects",
        "Priority support",
        "Custom branding",
        "Advanced analytics"
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'Is Active',
    },
    {
      name: 'isPopular',
      type: 'checkbox',
      defaultValue: false,
      label: 'Is Popular',
      admin: {
        description: 'Mark this plan as popular',
      },
    },
  ],
};

export default SubscriptionPlans;


