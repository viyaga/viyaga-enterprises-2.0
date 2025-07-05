'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export function CompanyHeader() {
  return (
    <div className="relative overflow-hidden bg-primary px-4 sm:px-6 lg:px-8 rounded-2xl mb-10 py-0">
      {/* Background SVG Waves */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 hover:opacity-30 transition-all duration-300">
          <Image
            src="/img/demos/accounting-1/svg/waves.svg"
            alt="Background Waves"
            width={1200}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
          {/* Left Text */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="secondary"
                className="uppercase text-white bg-black/10 text-sm px-4 py-2 rounded-full mb-4"
              >
                Who We Are
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-2"
            >
              About Us
            </motion.h1>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap text-white text-sm font-semibold space-x-3 mb-6"
            >
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-300">About Us</li>
            </motion.ul>
          </div>

          {/* Right Image */}
          <div className="md:col-span-5 relative">
            {/* Abstract SVG */}
            <div className="absolute w-full top-0 right-0 opacity-20 hidden lg:block">
              <Image
                src="/img/icons/abstract-bg-1.svg"
                alt="Abstract Background"
                width={400}
                height={400}
                className="w-full h-auto rotate-12"
              />
            </div>

            {/* Foreground Masked Image */}
            <div className="relative z-10 rounded-xl overflow-hidden">
              <Image
                src="/img/demos/accounting-1/generic/generic-4.jpg"
                alt="About Image"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
