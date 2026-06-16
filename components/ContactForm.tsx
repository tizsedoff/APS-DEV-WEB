'use client';

import { motion } from 'framer-motion';
import { FormEvent, useEffect, useMemo, useState } from 'react';

interface CalculatorStoredState {
  projectType?: string;
  projectLabel?: string;
  extrasLabels?: string[];
  total?: number;
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [calculatorState, setCalculatorState] = useState<CalculatorStoredState | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const savedValue = window.localStorage.getItem('aps-dev-web-calculator');

    if (!savedValue) {
      return;
    }

    try {
      const parsed = JSON.parse(savedValue) as CalculatorStoredState;
      setCalculatorState(parsed);
    } catch {
      // ignore invalid stored state
    }
  }, []);

  const whatsappLink = useMemo(() => {
    const project = calculatorState?.projectLabel ?? 'No seleccionado';
    const extras = calculatorState?.extrasLabels?.length ? calculatorState.extrasLabels.join(', ') : 'Sin agregados';
    const total = calculatorState?.total != null ? `USD ${calculatorState.total}` : 'No disponible';
    const body = `Hola APS Developer,

Quiero un proyecto:
WEB: ${project}
Agregados: ${extras}
Total: ${total}

Mi nombre: ${name || 'No especificado'}
Email: ${email || 'No especificado'}
Empresa: ${company || 'No especificado'}
Mensaje: ${message || 'No especificado'}`;

    return `https://wa.me/543755301413?text=${encodeURIComponent(body)}`;
  }, [calculatorState, name, email, company, message]);

  const mailtoLink = useMemo(() => {
    const project = calculatorState?.projectLabel ?? 'No seleccionado';
    const extras = calculatorState?.extrasLabels?.length ? calculatorState.extrasLabels.join(', ') : 'Sin agregados';
    const total = calculatorState?.total != null ? `USD ${calculatorState.total}` : 'No disponible';
    const body = `Hola APS Developer,

Quiero un proyecto:
WEB: ${project}
Agregados: ${extras}
Total: ${total}

Mi nombre: ${name || 'No especificado'}
Email: ${email || 'No especificado'}
Empresa: ${company || 'No especificado'}
Mensaje: ${message || 'No especificado'}`;

    return `mailto:tizsedoff@gmail.com?subject=${encodeURIComponent('Contacto desde APS Developer')}&body=${encodeURIComponent(body)}`;
  }, [calculatorState, name, email, company, message]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sent');
    window.location.href = mailtoLink;
  };

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
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-300">
            Nombre
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-orange-400/50"
              placeholder="Tu nombre"
            />
          </label>
          <label className="space-y-2 text-sm text-slate-300">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-orange-400/50"
              placeholder="tizsedoff@gmail.com"
            />
          </label>
        </div>
        <label className="space-y-2 text-sm text-slate-300 block">
          Empresa
          <input
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-orange-400/50"
            placeholder="Nombre de tu empresa"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-300 block">
          Mensaje
          <textarea
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-orange-400/50"
            placeholder="Cuéntanos tu proyecto..."
          />
        </label>
        <button type="submit" className="w-full rounded-3xl bg-orange-500 px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-orange-400">
          Enviar mensaje
        </button>
        {status === 'sent' && <p className="text-sm text-emerald-400">Gracias, tu mensaje ha sido enviado exitosamente.</p>}
      </form>
      <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">
        <p className="font-semibold text-white">Enviar por WhatsApp</p>
        <p className="mt-2">También puedes enviar tu proyecto directamente a WhatsApp con la selección de la calculadora.</p>
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-3xl bg-green-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-green-400">
          Enviar resumen a WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
