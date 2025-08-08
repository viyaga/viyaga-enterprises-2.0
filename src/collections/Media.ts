import type { CollectionConfig } from 'payload'
import { hasMediaReadAccess, hasMediaUpdateAccess } from './access/media-access'
import { isAdmin } from './access'
import { setUploadedBy } from './hooks/media-hooks'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: hasMediaReadAccess,
    update: hasMediaUpdateAccess,
    delete: isAdmin,
  },
  upload: true,
  defaultPopulate: {
    filename:true,
    prefix:true,
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
