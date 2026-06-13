'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: ReactNode;
}

export function ServiceCard({ title, description, price, icon }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="glass-card p-7 space-y-5"
    >
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-orange-500/15 text-orange-400 ring-1 ring-orange-500/20">
        {icon}
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-slate-300">{description}</p>
      </div>
      <div className="mt-4 border-t border-white/10 pt-4 text-sm text-slate-300">
        <span className="text-orange-400">Precio base:</span> <strong className="text-white">{price}</strong>
      </div>
    </motion.div>
  );
}
