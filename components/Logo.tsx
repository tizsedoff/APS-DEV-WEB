export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ''}`}>
      <div className="relative flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-sky-400 to-cyan-500 text-white shadow-[0_30px_80px_rgba(56,189,248,0.18)] ring-1 ring-white/10">
        <svg viewBox="0 0 70 70" className="h-9 w-9">
          <defs>
            <linearGradient id="aps-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <path d="M14 52V20h18v6H22v20h18v6H14z" fill="url(#aps-logo-gradient)" />
          <path d="M38 52V20h18v6H46v20h10v6H38z" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" />
          <path d="M14 32h42" stroke="white" strokeWidth="5" strokeLinecap="round" />
          <path d="M42 22l10-10 10 10" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="space-y-0.5">
        <p className="text-lg font-semibold text-white">APS Developer</p>
        <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Software Corporativo</p>
      </div>
    </div>
  );
}
