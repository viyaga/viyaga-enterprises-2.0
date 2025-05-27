

import React from 'react'
import { Link } from '@payloadcms/ui'
import {
  Home,
  User,
  Image,
  Tag,
  Layout,
  ShoppingCart,
  DollarSign,
  Banknote,
  Star,
  Settings,
  Globe,
  Layers,
  Folder,
  FileText,
} from 'lucide-react'

export default function MyCustomNav() {
  return (
    <nav className="w-full p-4 border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-col gap-4 pt-20">
        <li>
          <Link href="/dashboard" className="flex items-center gap-2">
            <Home size={16} /> Dashboard
          </Link>
        </li>
        <li>
          <Link href="/dashboard/collections/users" className="flex items-center gap-2">
            <User size={16} /> Users
          </Link>
        </li>
        <li>
          <Link href="/dashboard/collections/media" className="flex items-center gap-2">
            <Image size={16} /> Media
          </Link>
        </li>
        <li>
          <Link href="/dashboard/collections/banners" className="flex items-center gap-2">
            <Layout size={16} /> Banners
          </Link>
        </li>
        <li>
          <Link href="/dashboard/collections/categories" className="flex items-center gap-2">
            <Folder size={16} /> Categories
          </Link>
        </li>
        <li>
          <Link href="/dashboard/collections/pages" className="flex items-center gap-2">
            <FileText size={16} /> Pages
          </Link>
        </li>
        <li>
          <Link href="/dashboard/collections/tags" className="flex items-center gap-2">
            <Tag size={16} /> Tags
          </Link>
        </li>
        <li>
          <Link href="/dashboard/collections/products" className="flex items-center gap-2">
            <ShoppingCart size={16} /> Products
          </Link>
        </li>
        <li>
          <Link href="/dashboard/collections/affiliates" className="flex items-center gap-2">
            <Layers size={16} /> Affiliates
          </Link>
        </li>
        <li>
          <Link href="/dashboard/collections/orders" className="flex items-center gap-2">
            <DollarSign size={16} /> Orders
          </Link>
        </li>
        <li>
          <Link href="/dashboard/collections/testimonials" className="flex items-center gap-2">
            <Star size={16} /> Testimonials
          </Link>
        </li>
        <li>
          <Link href="/dashboard/collections/bank-details" className="flex items-center gap-2">
            <Banknote size={16} /> Bank Details
          </Link>
        </li>
        <li>
          <Link href="/dashboard/collections/affiliate-commission-settings" className="flex items-center gap-2">
            <Settings size={16} /> Commission Settings
          </Link>
        </li>
        <li>
          <Link href="/dashboard/collections/seo" className="flex items-center gap-2">
            <Globe size={16} /> SEO
          </Link>
        </li>
      </ul>
    </nav>
  )
}
