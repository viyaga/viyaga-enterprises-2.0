// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Banners from './collections/Banners'
import Categories from './collections/Categories'
import Pages from './collections/Pages'
import Tags from './collections/Tags'
import Products from './collections/Products'
import Affiliates from './collections/Affiliates'
import Customers from './collections/Customers'
import Orders from './collections/Orders'
import Testimonials from './collections/Testimonials'
import BankDetails from './collections/BankDetails'
import AffiliateCommissionSettings from './collections/AffiliateCommissionSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users, Media, Banners, Categories, Pages, Tags, Products,
    Affiliates, Customers, Orders, Testimonials, BankDetails,
    AffiliateCommissionSettings
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
