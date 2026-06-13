'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
}

export function ProjectCard({ title, category, description }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950/80 shadow-premium"
    >
      <div className="h-48 bg-gradient-to-br from-orange-500/10 via-transparent to-slate-950 p-6">
        <div className="flex h-full flex-col justify-end gap-3 text-slate-200">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-orange-300">
            {category}
          </span>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <p className="text-sm leading-6 text-slate-300">{description}</p>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,0,0.18),_transparent_28%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>
    </motion.article>
  );
}
