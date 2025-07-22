"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { services } from "./services-data";
import ServiceBadge from "./service-badge";

const ServicesMosaic: React.FC = () => {
  const mosaic = services.slice(5);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-4">
      {mosaic.map(svc => (
        <section key={svc.slug} id={svc.slug} className="scroll-mt-24">
          <motion.div className="bg-white dark:bg-gray-900 rounded-2xl p-6 relative overflow-hidden group" whileHover={{ scale: 1.02 }}>
            <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 group-hover:scale-y-100 transition-transform" style={{ backgroundColor: svc.color }} />
            <div className="flex items-center gap-3 mb-4">
              <Image src={svc.image} alt={svc.title} width={36} height={36} />
              <h5 className="text-lg font-semibold text-gray-900 dark:text-white">{svc.title}</h5>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{svc.desc}</p>
            <ServiceBadge text={svc.badge} color={svc.color} />
            <motion.a href={svc.link ?? '#'} className="absolute inset-0 flex items-center justify-center text-blue-500 opacity-0 bg-white/20 dark:bg-black/20 transition-opacity" whileHover={{ opacity: 1 }}>
              {svc.ctaText || 'Learn More'}
            </motion.a>
          </motion.div>
        </section>
      ))}
    </div>
  );
};

export default ServicesMosaic;