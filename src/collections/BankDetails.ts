import { CollectionSlug } from 'payload';
import { CollectionConfig } from 'payload';

const BankDetails: CollectionConfig = {
  slug: 'bank-details',
  admin: {
    useAsTitle: 'account_holder_name',
    defaultColumns: ['account_holder_name', 'bank_name', 'account_number', 'currency'],
  },
  auth: false,
  fields: [
    {
      name: 'affiliate',
      type: 'relationship',
      relationTo: 'affiliates' as CollectionSlug,
      required: true,
    },
    {
      name: 'account_holder_name',
      type: 'text',
      required: true,
    },
    {
      name: 'bank_name',
      type: 'text',
      required: true,
    },
    {
      name: 'account_number',
      type: 'text',
      required: true,
      validate: (val: unknown) => {
        if (typeof val !== 'string') return 'Account number must be a string';
        return /^[A-Za-z0-9]{5,34}$/.test(val) || 'Invalid account number format';
      },
      admin: {
        description: 'Alphanumeric account number (5–34 characters)',
      },
    },
    {
      name: 'ifsc_code',
      type: 'text',
      required: false,
      validate: (val: unknown) => {
        if (typeof val !== 'string') return true;
        if (val === '') return true;
        return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(val) || 'Invalid IFSC code format';
      },
      admin: {
        description: 'Indian Financial System Code (e.g., SBIN0001234)',
      },
    },
    {
      name: 'iban',
      type: 'text',
      validate: (val: unknown) => {
        if (typeof val !== 'string') return true;
        if (val === '') return true;
        return /^[A-Z]{2}[0-9A-Z]{13,32}$/.test(val) || 'Invalid IBAN format';
      },
      admin: {
        description: 'IBAN — required for European accounts',
      },
    },
    {
      name: 'swift_code',
      type: 'text',
      required: true,
      validate: (val: unknown) => {
        if (typeof val !== 'string') return 'SWIFT code must be a string';
        return /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/.test(val) || 'Invalid SWIFT/BIC code format';
      },
      admin: {
        description: '8 or 11 character SWIFT/BIC code (e.g., CHASUS33XXX)',
      },
    },
    {
      name: 'bank_country',
      type: 'text',
      required: true,
    },
    {
      name: 'bank_address',
      type: 'text',
      admin: {
        description: 'Full bank branch address for verification',
      },
    },
    {
      name: 'currency',
      type: 'text',
      required: true,
      validate: (val: unknown) => {
        if (typeof val !== 'string') return 'Currency code must be a string';
        return /^[A-Z]{3}$/.test(val) || 'Invalid currency code (ISO 4217 e.g. USD, INR)';
      },
      admin: {
        placeholder: 'e.g. INR, USD, EUR',
      },
    },
    {
      name: 'is_primary',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Mark as primary payout account',
      },
    },
  ],
};

export default BankDetails;
