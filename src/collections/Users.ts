import type { CollectionConfig } from 'payload';
import { generateReferralCode, setReferredBy, updateRank } from '@/collections/hooks/user-hooks';
import { CollectionSlug } from 'payload';
import { isAdmin, isAdminOrAffiliate } from './access';
import { canAccessUserDetails } from './access/user-access';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'role', 'referralCode', 'total_earned'],
  },
  auth: {
    tokenExpiration: 60 * 60 * 24 * 365,
  },
  access: {
    read: canAccessUserDetails,
    create: () => true,
    update: canAccessUserDetails,
    delete: isAdmin,
  },
  hooks: {
    beforeValidate: [generateReferralCode, setReferredBy],
    beforeOperation: [updateRank],
  },
  fields: [
    {
      name: 'role',
      label: 'User Role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Affiliate', value: 'affiliate' },
        { label: 'Customer', value: 'customer' },
      ],
      required: true,
      defaultValue: 'customer',
      saveToJWT: true,
      admin: {
        description: 'Defines the access level and permissions of the user.',
        condition: (user) => {
          return user?.role === 'admin';
        },
      },
      access: {
        // read: isAdmin,
        update: isAdmin,
      },
    },
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      admin: {
        placeholder: 'e.g. Jane Doe',
        description: 'Please enter your full legal name.',
      },
    },
    {
      name: 'address',
      label: 'Address',
      type: 'group',
      admin: {
        description: 'Fill in your complete residential address.',
      },
      fields: [
        { name: 'houseNumber', label: 'House / Flat No.', type: 'text' },
        { name: 'streetAndArea', label: 'Street and Area', type: 'text' },
        { name: 'city', label: 'City', type: 'text' },
        { name: 'state', label: 'State / Province', type: 'text' },
        { name: 'postalCode', label: 'Postal Code', type: 'text' },
        { name: 'country', label: 'Country', type: 'text' },
      ],
    },

    // 🔹 Separate section for Affiliate Details
    {
      name: 'affiliateDetails',
      label: 'Affiliate Details',
      type: 'group',
      admin: {
        position: 'sidebar', // moves to sidebar in admin panel
        description: 'All affiliate and referral related information.',
      },
      access: {
        read: isAdminOrAffiliate,
      },
      fields: [
        // {
        //   name: 'referralCode',
        //   label: 'Referral Code',
        //   type: 'text',
        //   required: true,
        //   unique: true,
        //   admin: {
        //     readOnly: true,
        //     description: 'Auto-generated unique code used for referring others.',
        //   },
        //   access: {
        //     read: isAdminOrAffiliate,
        //   },
        // },
        // 
        {
          name: 'referralCode',
          label: 'Referral Link',
          type: 'text',
          required: true,
          unique: true,
          admin: {
            readOnly: true,
            description: 'Share this link to refer others.',
            components: {
              Field: './components/payload/referral-link-field.tsx',
            },
          },
          access: {
            read: isAdminOrAffiliate,
          },
        },
        {
          name: 'team_a_sales_volume',
          label: 'Team A Sales Volume',
          type: 'number',
          defaultValue: 0,
          min: 0,
          admin: {
            readOnly: true,
          },
          access: {
            read: isAdminOrAffiliate,
          },
        },
        {
          name: 'team_b_sales_volume',
          label: 'Team B Sales Volume',
          type: 'number',
          defaultValue: 0,
          min: 0,
          admin: {
            readOnly: true,
          },
          access: {
            read: isAdminOrAffiliate,
          },
        },
        {
          name: 'total_earned',
          label: 'Total Earnings',
          type: 'number',
          defaultValue: 0,
          access: {
            read: isAdminOrAffiliate,
            update: isAdmin,
          },
          admin: {
            readOnly: true,
            description: 'Total earnings accumulated through referrals.',
          },
        },
        {
          name: 'wallet_balance',
          label: 'Wallet Balance',
          type: 'number',
          defaultValue: 0,
          access: {
            read: isAdminOrAffiliate,
            update: isAdmin,
          },
          admin: {
            description: 'Funds currently available in the user’s wallet.',
          },
        },
        {
          name: 'bonus_balance',
          label: 'Bonus Balance',
          type: 'number',
          defaultValue: 0,
          access: {
            read: isAdmin,
            update: isAdmin,
          },
          admin: {
            description: 'Extra bonuses rewarded for performance or campaigns.',
          },
        },
        {
          name: 'current_rank',
          label: 'User Rank',
          type: 'text',
          access: {
            read: isAdminOrAffiliate,
            update: isAdmin,
          },
          admin: {
            placeholder: 'e.g. Bronze, Silver, Gold',
            description: 'User’s current referral rank or status.',
          },
        },
        {
          name: 'referral_tree_ids',
          label: 'Referral Tree (Upline)',
          type: 'json',
          access: {
            read: isAdminOrAffiliate,
          },
          admin: {
            description: 'Tracks the chain of referrers above this user.',
          },
          defaultValue: [{ t: 'a', id: "689aa1cc01365e214c7e954f" }],
        },
        {
          name: 'referred_by',
          label: 'Referred By',
          type: 'relationship',
          relationTo: 'users' as CollectionSlug,
          access: {
            read: isAdmin,
          },
        },
        {
          name: 'referred_team',
          label: 'Referred Team',
          type: 'select',
          access: {
            read: isAdmin,
          },
          defaultValue: 'a',
          options: [
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ],
        },
        {
          name: 'bank_accounts',
          label: 'Bank Accounts',
          type: 'relationship',
          relationTo: 'bank-details' as CollectionSlug,
          hasMany: true,
          access: {
            read: isAdminOrAffiliate,
            update: isAdmin,
          },
          admin: {
            description: 'Linked bank account(s) for payouts.',
          },
        },
      ],
    },
    {
      name: 'status',
      label: 'Account Status',
      type: 'radio',
      required: true,
      defaultValue: '1',
      options: [
        { label: 'Active', value: '1' },
        { label: 'Inactive', value: '0' },
        { label: 'Deleted', value: '-1' },
      ],
      admin: {
        layout: 'horizontal',
        description: 'Used by admins to manage account visibility.',
      },
      access: {
        read: isAdmin,
        update: isAdmin,
      },
    },
  ],
};