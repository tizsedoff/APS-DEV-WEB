'use client';

import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
}

export function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="glass-card p-7"
    >
      <p className="text-slate-200">“{quote}”</p>
      <div className="mt-6 flex items-center gap-4">
        <div className="h-12 w-12 rounded-2xl bg-orange-500/10 ring-1 ring-orange-500/20" />
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-slate-400">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
