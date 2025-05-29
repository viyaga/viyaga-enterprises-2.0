import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
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
    Users, Media, Categories, Tags, Products, Orders, BankDetails,
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
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  maxDepth: 2
})
