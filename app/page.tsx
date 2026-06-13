import { Briefcase, Database, GraduationCap, ShieldCheck, Sparkles, Users, Wand2 } from 'lucide-react';
import { Calculator } from '@/components/Calculator';
import { ChatBot } from '@/components/ChatBot';
import { ContactForm } from '@/components/ContactForm';
import { Logo } from '@/components/Logo';
import { ProjectCard } from '@/components/ProjectCard';
import { ServiceCard } from '@/components/ServiceCard';
import { StepItem } from '@/components/StepItem';
import { TestimonialCard } from '@/components/TestimonialCard';

const services = [
  {
    title: 'PyMES',
    description: 'Desarrollamos sistemas empresariales robustos para gestión interna y automatización de procesos.',
    price: 'USD 800',
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    title: 'Emprendimientos',
    description: 'Landing pages y sitios corporativos con branding digital para potenciar tu crecimiento.',
    price: 'USD 500',
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: 'Educación',
    description: 'Plataformas educativas y campus virtuales centrados en experiencias de aprendizaje efectivas.',
    price: 'USD 350',
    icon: <GraduationCap className="h-6 w-6" />,
  },
];

const projects = [
  {
    title: 'Sistema de Gestión Empresarial',
    category: 'PyME',
    description: 'Gestión de inventarios, facturación y procesos internos con interfaz moderna.',
  },
  {
    title: 'Plataforma Educativa Online',
    category: 'Educación',
    description: 'Campus virtual con cursos, evaluaciones y seguimiento de alumnos.',
  },
  {
    title: 'Ecommerce Moderno',
    category: 'Comercio',
    description: 'Tienda digital responsiva con carrito, pasarela de pagos y experiencia premium.',
  },
  {
    title: 'Dashboard Administrativo',
    category: 'Analytics',
    description: 'Panel de control con métricas clave y reportes en tiempo real.',
  },
  {
    title: 'App de Reservas',
    category: 'Servicios',
    description: 'Sistema de reservas optimizado para clientes y gestión de disponibilidad.',
  },
  {
    title: 'CRM para PyMES',
    category: 'Relaciones',
    description: 'CRM inteligente con automatización de ventas y seguimiento de clientes.',
  },
];

const steps = [
  {
    title: 'Reunión inicial',
    description: 'Entendemos tu visión, objetivos y necesidades con claridad técnica y estratégica.',
  },
  {
    title: 'Planificación',
    description: 'Diseñamos una hoja de ruta escalable, eficiente y alineada a tu negocio.',
  },
  {
    title: 'Desarrollo',
    description: 'Construimos soluciones con código limpio, seguridad y alto rendimiento.',
  },
  {
    title: 'Entrega y soporte',
    description: 'Implementamos el proyecto y acompañamos con soporte continuo post-lanzamiento.',
  },
];

const benefits = [
  'Diseño profesional',
  'Código escalable',
  'Optimización SEO',
  'Soporte continuo',
  'Seguridad avanzada',
  'Alto rendimiento',
];

const testimonials = [
  {
    name: 'Martina Soler',
    role: 'Directora de Operaciones',
    quote: 'APS Developer entregó un sistema eficiente y elegante que transformó nuestra operación diaria.',
  },
  {
    name: 'Julián Torres',
    role: 'Founder, Tech Start',
    quote: 'La plataforma educativa desarrollada superó nuestras expectativas en experiencia y velocidad.',
  },
  {
    name: 'Sofía Cabrera',
    role: 'CFO, Retail Pro',
    quote: 'El equipo entendió el negocio y construyó una solución premium con resultados medibles.',
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(255,107,0,0.16),_transparent_32%)]" />
      <div className="container relative z-10 pt-8">
        <header className="mb-16 flex items-center justify-between gap-6 rounded-[2rem] border border-white/10 bg-slate-950/80 px-6 py-5 shadow-premium backdrop-blur-xl">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#servicios" className="transition hover:text-orange-400">Servicios</a>
            <a href="#proyectos" className="transition hover:text-orange-400">Trabajos</a>
            <a href="#contacto" className="transition hover:text-orange-400">Contacto</a>
          </nav>
        </header>

        <section className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-slate-900/80 px-4 py-3 shadow-[0_20px_70px_rgba(0,0,0,0.16)]">
              <Logo className="h-auto" />
              <span className="text-sm uppercase tracking-[0.28em] text-orange-300">Software Corporativo Premium</span>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-[0.28em] text-orange-300">
              Desarrollo de soluciones digitales
            </span>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">Desarrollamos soluciones digitales que hacen crecer tu negocio</h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Sitios web, sistemas empresariales y plataformas educativas diseñadas para escalar. Experiencias premium con enfoque en resultados reales.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contacto" className="inline-flex items-center justify-center rounded-3xl bg-orange-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-orange-400">
                Solicitar Presupuesto
              </a>
              <a
                href="https://wa.me/543755528367?text=Hola%20APS%20Developer%2C%20quiero%20recibir%20informaci%C3%B3n%20sobre%20un%20proyecto."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-orange-400/40 hover:text-orange-400"
              >
                Chatear por WhatsApp
              </a>
            </div>
          </div>

          <div className="relative rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-premium backdrop-blur-xl">
            <div className="absolute -left-10 top-6 h-28 w-28 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="absolute -right-10 bottom-6 h-24 w-24 rounded-full bg-slate-200/5 blur-3xl" />
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Tecnología</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2 rounded-3xl bg-slate-900/80 p-4">
                    <p className="text-sm text-slate-400">UX moderno</p>
                    <p className="text-lg font-semibold text-white">Interfaces limpias</p>
                  </div>
                  <div className="space-y-2 rounded-3xl bg-slate-900/80 p-4">
                    <p className="text-sm text-slate-400">Arquitectura</p>
                    <p className="text-lg font-semibold text-white">Código escalable</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-orange-500/25 bg-gradient-to-br from-orange-500/5 via-transparent to-slate-950/80 p-6">
                <div className="flex items-center justify-between text-white/80">
                  <span className="text-sm uppercase tracking-[0.24em]">Proyecto premium</span>
                  <span className="rounded-full bg-orange-500/10 px-3 py-2 text-xs text-orange-300">Escalable</span>
                </div>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-3xl bg-slate-900/90 p-4 text-sm text-slate-300">Dashboard inteligente con panel de métricas y notificaciones.</div>
                  <div className="rounded-3xl bg-slate-900/90 p-4 text-sm text-slate-300">Automatización de procesos con integraciones seguras y robustas.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="sobre-nosotros" className="container mt-24">
        <div className="glass-card overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/75 p-10 shadow-premium">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-[0.28em] text-orange-300">Sobre Nosotros</span>
              <h2 className="text-3xl font-semibold text-white">Construimos software pensado para negocios que buscan crecer con seguridad.</h2>
              <p className="text-slate-300">APS Developer es una compañía especializada en desarrollo web, sistemas empresariales, automatización de procesos y plataformas educativas. Crecemos con clientes que buscan soluciones a medida, con un diseño premium y una experiencia digital sólida.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Desarrollo Web', 'Sistemas para empresas', 'Automatización de procesos', 'Plataformas educativas', 'Soluciones personalizadas'].map((item) => (
                <div key={item} className="rounded-[1.8rem] border border-white/10 bg-slate-900/80 p-6 text-slate-200">
                  <p className="font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="container mt-24 space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-orange-300">Servicios</p>
          <h2 className="text-3xl font-semibold text-white">Soluciones diseñadas para cada tipo de proyecto.</h2>
          <p className="max-w-2xl mx-auto text-slate-400">Acompañamos a PyMEs, emprendimientos y organizaciones educativas con sistemas que funcionan y escalan.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} price={service.price} icon={service.icon} />
          ))}
        </div>
      </section>

      <section className="container mt-24 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <Calculator />
        </div>
        <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/75 p-10 shadow-premium">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-orange-300">
              <span className="inline-block h-12 w-12 rounded-3xl bg-orange-500/10 text-center leading-[3rem]">+</span>
              <div>
                <p className="text-sm uppercase tracking-[0.28em]">Estrategia técnica</p>
                <p className="text-white text-2xl font-semibold">Planificación de proyectos con impacto</p>
              </div>
            </div>
            <p className="text-slate-300">Diseñamos soluciones reales con enfoque en experiencia, escalabilidad y entrega segura. Cada proyecto se construye para rendir, crecer y comunicarse con tus usuarios.</p>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-slate-900/85 p-5">
                <p className="font-semibold text-white">Auditoría técnica</p>
                <p className="text-slate-400 text-sm">Validamos alcance, arquitectura y tiempos antes de comenzar.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/85 p-5">
                <p className="font-semibold text-white">Estructura escalable</p>
                <p className="text-slate-400 text-sm">Cada solución se construye para crecer sin sacrificar rendimiento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="container mt-24 space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-orange-300">Trabajos realizados</p>
          <h2 className="text-3xl font-semibold text-white">Proyectos que reflejan calidad y rendimiento.</h2>
        </div>
        <div className="grid gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} title={project.title} category={project.category} description={project.description} />
          ))}
        </div>
      </section>

      <section className="container mt-24">
        <div className="space-y-8 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-orange-300">Proceso de trabajo</p>
          <h2 className="text-3xl font-semibold text-white">Metodología clara para resultados concretos.</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <StepItem key={step.title} index={index + 1} title={step.title} description={step.description} />
          ))}
        </div>
      </section>

      <section className="container mt-24">
        <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/75 p-10 shadow-premium">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-[0.28em] text-orange-300">Beneficios</span>
              <h2 className="text-3xl font-semibold text-white">Ventajas de trabajar con APS Developer.</h2>
              <p className="text-slate-400">Soluciones premium desarrolladas con altos estándares de seguridad, rendimiento y experiencia de usuario.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="rounded-[1.8rem] border border-white/10 bg-slate-900/85 p-6">
                  <p className="font-semibold text-white">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-24 space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-orange-300">Testimonios</p>
          <h2 className="text-3xl font-semibold text-white">Clientes satisfechos con soluciones digitales reales.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} name={testimonial.name} role={testimonial.role} quote={testimonial.quote} />
          ))}
        </div>
      </section>

      <section id="contacto" className="container mt-24 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/75 p-10 shadow-premium">
            <span className="text-sm uppercase tracking-[0.28em] text-orange-300">Contacto directo</span>
            <h2 className="mt-2 text-3xl font-semibold text-white">Hablemos de tu próximo proyecto.</h2>
            <div className="mt-8 space-y-5 text-sm text-slate-300">
              <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                <ShieldCheck className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p>
                    <a href="https://wa.me/543755528367?text=Hola%20APS%20Developer%2C%20quiero%20hablar%20de%20un%20proyecto." target="_blank" rel="noreferrer" className="text-orange-300 hover:text-orange-400">
                      +54 9 3755 528367
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                <Users className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p><a href="mailto:tizsedoff@gmail.com" className="text-orange-300 hover:text-orange-400">tizsedoff@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-premium">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-500/15 text-orange-300">
              <Wand2 className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-orange-300">Listos para crear</p>
              <p className="text-xl font-semibold text-white">Tu proyecto con presencia digital premium.</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>

      <footer className="container mt-24 border-t border-white/10 pt-10 text-slate-400">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xl font-semibold text-white">APS Developer</p>
            <p className="mt-2 text-sm">Soluciones digitales premium para negocios modernos.</p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#servicios" className="transition hover:text-orange-400">Servicios</a>
            <a href="#proyectos" className="transition hover:text-orange-400">Proyectos</a>
            <a href="#contacto" className="transition hover:text-orange-400">Contacto</a>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} APS Developer. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/543755528367" target="_blank" rel="noreferrer" className="transition hover:text-orange-400">WhatsApp</a>
            <a href="#" className="transition hover:text-orange-400">LinkedIn</a>
            <a href="#" className="transition hover:text-orange-400">Instagram</a>
          </div>
        </div>
      </footer>
      <ChatBot />
    </main>
  );
}
