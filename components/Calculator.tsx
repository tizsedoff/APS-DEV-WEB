'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const projectOptions = [
  { id: 'pymes', label: 'PyME', value: 800 },
  { id: 'emprendimientos', label: 'Emprendimiento', value: 500 },
  { id: 'educacion', label: 'Educación', value: 350 },
];

const extras = [
  { id: 'login', label: 'Login de usuarios', value: 100 },
  { id: 'admin', label: 'Panel administrativo', value: 150 },
  { id: 'database', label: 'Base de datos avanzada', value: 150 },
  { id: 'api', label: 'Integración con APIs', value: 100 },
  { id: 'payments', label: 'Pasarela de pagos', value: 200 },
  { id: 'mobile', label: 'Aplicación móvil', value: 500 },
  { id: 'hosting', label: 'Hosting y despliegue', value: 80 },
];

export function Calculator() {
  const [projectType, setProjectType] = useState(projectOptions[0].id);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const selectedProject = projectOptions.find((option) => option.id === projectType)!;

  const total = useMemo(() => {
    const extrasTotal = selectedExtras.reduce((sum, extraId) => {
      const extra = extras.find((item) => item.id === extraId);
      return sum + (extra?.value ?? 0);
    }, 0);
    return selectedProject.value + extrasTotal;
  }, [selectedProject.value, selectedExtras]);

  const summary = useMemo(() => {
    return [selectedProject.label, ...extras.filter((item) => selectedExtras.includes(item.id)).map((item) => item.label)];
  }, [selectedProject.label, selectedExtras]);

  const toggleExtra = (extraId: string) => {
    setSelectedExtras((current) =>
      current.includes(extraId) ? current.filter((item) => item !== extraId) : [...current, extraId]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="glass-card overflow-hidden"
    >
      <div className="bg-slate-950/80 px-6 py-7">
        <h3 className="text-2xl font-semibold text-white">Calculadora de Presupuesto</h3>
        <p className="mt-2 text-sm text-slate-400">Selecciona tu proyecto y suma funcionalidades para obtener un estimado instantáneo.</p>
      </div>
      <div className="grid gap-6 p-6 md:grid-cols-[1fr_0.95fr]">
        <div className="space-y-6 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
          <div className="space-y-3">
            <h4 className="text-sm uppercase tracking-[0.28em] text-orange-300">Tipo de proyecto</h4>
            <div className="space-y-3">
              {projectOptions.map((option) => (
                <label key={option.id} className="flex cursor-pointer items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-orange-400/30">
                  <input
                    type="radio"
                    name="projectType"
                    value={option.id}
                    checked={projectType === option.id}
                    onChange={() => setProjectType(option.id)}
                    className="h-4 w-4 accent-orange-500"
                  />
                  <div>
                    <p className="font-medium text-white">{option.label}</p>
                    <p className="text-sm text-slate-400">+ USD {option.value}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm uppercase tracking-[0.28em] text-orange-300">Funcionalidades adicionales</h4>
            <div className="grid gap-3">
              {extras.map((extra) => (
                <button
                  key={extra.id}
                  type="button"
                  onClick={() => toggleExtra(extra.id)}
                  className={`flex w-full items-center justify-between rounded-3xl border px-4 py-3 text-left transition ${
                    selectedExtras.includes(extra.id)
                      ? 'border-orange-400/50 bg-orange-500/10 text-white'
                      : 'border-white/10 bg-white/5 text-slate-300 hover:border-orange-500/30'
                  }`}
                >
                  <span>{extra.label}</span>
                  <span className="text-sm text-slate-400">+ USD {extra.value}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
          <div className="rounded-3xl bg-gradient-to-r from-orange-500/20 via-slate-900 to-slate-950 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-orange-300">Total estimado</p>
            <p className="mt-4 text-4xl font-semibold text-white">USD {total}</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm uppercase tracking-[0.28em] text-orange-300">Resumen</h4>
            <ul className="space-y-2 rounded-3xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300">
              {summary.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full rounded-3xl bg-orange-500 px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-orange-400">
            Solicitar Cotización
          </button>
        </div>
      </div>
    </motion.div>
  );
}
