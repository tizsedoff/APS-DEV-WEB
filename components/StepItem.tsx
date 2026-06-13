'use client';

import { motion } from 'framer-motion';

interface StepItemProps {
  index: number;
  title: string;
  description: string;
}

export function StepItem({ index, title, description }: StepItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="glass-card p-6"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-500/15 text-orange-300 ring-1 ring-orange-500/20">
          <span className="text-lg font-semibold">{index}</span>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">{title}</h4>
          <p className="text-sm text-slate-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
