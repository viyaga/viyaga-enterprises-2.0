'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Custom Software Development',
    description: 'Tailored digital solutions engineered for speed, scale, and precision.',
    icon: '/icons/icon-1.svg',
    bg: '/icons/abstract-bg-1.svg',
    rotate: '-rotate-6',
  },
  {
    title: 'Technical Strategy & Consulting',
    description: 'Guiding your vision with architectural clarity and technical foresight.',
    icon: '/icons/icon-2.svg',
    bg: '/icons/abstract-bg-1.svg',
    rotate: '-rotate-12',
  },
  {
    title: 'Infrastructure & Automation',
    description: 'Robust systems and DevOps pipelines that enable continuous delivery.',
    icon: '/icons/icon-3.svg',
    bg: '/icons/abstract-bg-1.svg',
    rotate: '-rotate-3',
  }
]

const galleryImages = [
  '/gallery/image-1.jpg',
  '/gallery/image-2.jpg',
  '/gallery/image-3.jpg',
  '/gallery/image-4.jpg',
  '/gallery/image-5.jpg',
  '/gallery/image-6.jpg'
]

export function FeaturesAndGallerySection() {
  return (
    <section className="space-y-24 px-4 sm:px-6 lg:px-8">
      {/* Feature Boxes */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 pt-12 pb-16">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-4 items-start relative"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
              <div className={`absolute inset-0 opacity-20 ${feature.rotate}`}>
                <Image src={feature.bg} alt="bg" fill className="object-contain" />
              </div>
              <Image src={feature.icon} alt={feature.title} width={48} height={48} className="relative top-2 sm:w-[55px] sm:h-[55px]" />
            </div>
            <div className="ps-2">
              <h4 className="text-base sm:text-lg font-semibold mb-1 text-foreground dark:text-white">{feature.title}</h4>
              <p className="text-sm text-muted-foreground dark:text-neutral-400 leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Summary */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center text-center text-base sm:text-lg font-medium text-foreground dark:text-white space-y-2 sm:space-y-0 sm:space-x-4 px-4"
        >
          <Image src="/icons/icon-4.svg" alt="Join Icon" width={28} height={28} />
          <strong className="text-primary">Partner With Us</strong>
          <span className="hidden sm:inline-block">|</span>
          <span>Trusted by over 1000 global teams</span>
          <div className="text-yellow-400 text-sm sm:text-base">
            {'★★★★★'}
          </div>
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto pt-5 pb-4 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src={src}
                alt={`Gallery ${idx + 1}`}
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl object-cover border border-border dark:border-neutral-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}