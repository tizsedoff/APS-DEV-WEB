'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="glass-card p-8"
    >
      <h3 className="text-2xl font-semibold text-white">Contáctanos</h3>
      <p className="mt-2 text-sm text-slate-400">Déjanos tu mensaje y te responderemos en menos de 24 horas.</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setStatus('sent');
        }}
        className="mt-6 space-y-4"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-300">
            Nombre
            <input className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-orange-400/50" placeholder="Tu nombre" />
          </label>
          <label className="space-y-2 text-sm text-slate-300">
            Email
            <input type="email" className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-orange-400/50" placeholder="tizsedoff@gmail.com" />
          </label>
        </div>
        <label className="space-y-2 text-sm text-slate-300 block">
          Empresa
          <input className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-orange-400/50" placeholder="Nombre de tu empresa" />
        </label>
        <label className="space-y-2 text-sm text-slate-300 block">
          Mensaje
          <textarea rows={5} className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-orange-400/50" placeholder="Cuéntanos tu proyecto..." />
        </label>
        <button type="submit" className="w-full rounded-3xl bg-orange-500 px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-orange-400">
          Enviar mensaje
        </button>
        {status === 'sent' && <p className="text-sm text-emerald-400">Gracias, tu mensaje ha sido enviado exitosamente.</p>}
      </form>
    </motion.div>
  );
}
