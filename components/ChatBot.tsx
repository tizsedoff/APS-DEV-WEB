'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Send, PhoneOutgoing } from 'lucide-react';
import { useState } from 'react';

function getUniqueId() {
  return Date.now();
}

interface ChatMessage {
  id: number;
  sender: 'user' | 'bot';
  text: string;
  action?: {
    label: string;
    href: string;
  };
}

const WA_LINK = 'https://wa.me/543755528367?text=Hola%20APS%20Developer%2C%20quiero%20recibir%20informaci%C3%B3n%20sobre%20un%20proyecto.';

const defaultMessages: ChatMessage[] = [
  {
    id: 1,
    sender: 'bot',
    text: 'Hola, soy el asistente virtual de APS Developer. ¿En qué te puedo ayudar hoy?',
  },
];

const quickReplies = [
  { label: 'Presupuesto', value: 'Quiero un presupuesto para mi proyecto.' },
  { label: 'WhatsApp', value: 'Quiero hablar por WhatsApp.' },
  { label: 'Educación', value: 'Necesito una plataforma educativa.' },
];

function getReply(message: string): ChatMessage {
  const normalized = message.toLowerCase();

  if (/whatsapp|whats|mensaje|chat/.test(normalized)) {
    return {
      id: Date.now(),
      sender: 'bot',
      text: 'Puedes iniciar tu contacto directo con WhatsApp en el siguiente enlace. ¡Vamos a tomar tu proyecto ahora mismo!',
      action: {
        label: 'Abrir WhatsApp',
        href: WA_LINK,
      },
    };
  }

  if (/presupuesto|cotización|costo|precio/.test(normalized)) {
    return {
      id: Date.now(),
      sender: 'bot',
      text: 'Nuestros proyectos comienzan desde USD 350 y se ajustan según tus necesidades: PyMES, emprendimientos o plataformas educativas. ¿Qué tipo de solución necesitas?',
    };
  }

  if (/educa|campus|curso|alumnos/.test(normalized)) {
    return {
      id: Date.now(),
      sender: 'bot',
      text: 'Desarrollamos plataformas educativas con campus virtual, administración de alumnos y contenido interactivo. Te ayudo a planificarlo.',
    };
  }

  if (/pyme|empresa|gestión/.test(normalized)) {
    return {
      id: Date.now(),
      sender: 'bot',
      text: 'Creamos sistemas empresariales que automatizan procesos internos, optimizan la gestión y mejoran la productividad.',
    };
  }

  return {
    id: Date.now(),
    sender: 'bot',
    text: 'Perfecto, estoy listo para ayudarte con tu proyecto. También puedes escribir "WhatsApp" para iniciar contacto directo con nuestro equipo.',
  };
}

export function ChatBot() {
  const [messages, setMessages] = useState<ChatMessage[]>(defaultMessages);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const lastMessage = messages[messages.length - 1];

  const handleSend = async (message: string) => {
    if (!message.trim()) return;
    const userEntry: ChatMessage = {
      id: getUniqueId() + 1,
      sender: 'user',
      text: message,
    };

    setMessages((current) => [...current, userEntry]);
    setInput('');
    setIsSending(true);

    await new Promise((resolve) => setTimeout(resolve, 700));

    const botReply = getReply(message);
    setMessages((current) => [...current, botReply]);
    setIsSending(false);
  };

  const handleQuickReply = (value: string) => {
    handleSend(value);
  };

  const botHasAction = lastMessage?.action;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            className="w-[360px] max-w-full rounded-[2rem] border border-white/10 bg-slate-950/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-slate-800 text-white shadow-[0_20px_50px_rgba(56,189,248,0.25)]">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-white">Asistente APS</p>
                  <p className="text-xs text-slate-400">Respuestas instantáneas y contacto por WhatsApp.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 transition hover:text-white"
              >
                Cerrar
              </button>
            </div>

            <div className="mt-4 max-h-[320px] space-y-3 overflow-y-auto pr-1 text-sm">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`rounded-3xl px-4 py-3 ${message.sender === 'bot' ? 'bg-slate-900/95 text-slate-200' : 'ml-auto bg-orange-500/10 text-white'}`}
                >
                  <p>{message.text}</p>
                  {message.action && (
                    <a
                      href={message.action.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-3xl bg-orange-500 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
                    >
                      <PhoneOutgoing className="h-4 w-4" />
                      {message.action.label}
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-2">
              <div className="grid grid-cols-3 gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.label}
                    type="button"
                    onClick={() => handleQuickReply(reply.value)}
                    className="rounded-3xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 transition hover:border-orange-400/50 hover:bg-orange-500/10"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSend(input);
                }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Escribe tu consulta..."
                  className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-400/50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isSending}
                  className="inline-flex h-12 items-center justify-center rounded-3xl bg-orange-500 px-4 text-white transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="group inline-flex items-center gap-3 rounded-full bg-slate-950/95 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-black/40 ring-1 ring-white/10 transition hover:bg-slate-900"
      >
        <MessageCircle className="h-5 w-5 text-orange-400 transition group-hover:scale-110" />
        Chatbot
      </button>
    </div>
  );
}
