import type { CollectionConfig } from 'payload'
import { hasMediaAccess } from './access/media-access'
import { isAdmin } from './access'
import { setUploadedBy } from './hooks/media-hooks'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: hasMediaAccess,
    update: hasMediaAccess,
    delete: isAdmin,
  },
  upload: true,
  defaultPopulate: {
    url: true,
    alt: true
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'uploaded_by',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    beforeChange: [
      setUploadedBy,
    ],
  },
}
