import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { s3Storage } from '@payloadcms/storage-s3'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Categories from './collections/Categories'
import Tags from './collections/Tags'
import Products from './collections/Products'
import Orders from './collections/Orders'
import BankDetails from './collections/BankDetails'
import AffiliateCommissionSettings from './collections/AffiliateCommissionSettings'
import SEO from './collections/Seo'
import AffiliateCommissions from './collections/AffiliateCommissions'
import { requiredEnv } from './lib/utils'
import SubscriptionPlans from './collections/SubscriptionPlans'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  routes: {
    admin: "/dashboard",
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Icon: "./components/payload/icon.tsx",
        Logo: "./components/payload/logo.tsx",
      },
      Nav: './components/payload/navbar/nav.tsx',
      beforeDashboard: ['./components/payload/before-dashboard.tsx'],
    },
  },
  collections: [
    Users, Media, Categories, Tags, Products, SubscriptionPlans, Orders, BankDetails,
    AffiliateCommissionSettings, AffiliateCommissions, SEO
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    // payloadCloudPlugin(),
    s3Storage({
      collections: {
        media: {
          prefix: 'viyaga',
          generateFileURL: ({ filename, prefix }) => {
            const folder = prefix || 'media'
            return `https://${process.env.S3_BUCKET}.s3.${process.env.S3_REGION}.amazonaws.com/${folder}/${filename}`
          },
          disablePayloadAccessControl: true
        },
      },
      bucket: requiredEnv('S3_BUCKET'),
      config: {
        credentials: {
          accessKeyId: requiredEnv('S3_ACCESS_KEY_ID'),
          secretAccessKey: requiredEnv('S3_SECRET_ACCESS_KEY'),
        },
        region: requiredEnv('S3_REGION'),
      },
    }),
  ],
  maxDepth: 2
})
