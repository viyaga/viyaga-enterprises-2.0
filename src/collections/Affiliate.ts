import type { CollectionConfig } from 'payload'
import { isAdmin } from './access'

export const Affiliate: CollectionConfig = {
  slug: 'media',
  access: {
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  upload: true,
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}