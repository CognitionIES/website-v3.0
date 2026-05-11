"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageSquare, Minimize2 } from "lucide-react";

/* ── Types ─────────────────────────────────────────────────────────────────── */
type Role = "user" | "bot";
interface Message { id: string; role: Role; text: string; ts: Date; }

/* ── Static FAQ knowledge base ─────────────────────────────────────────────── */
const KB: { q: RegExp; a: string }[] = [
  {
    q: /product.?engineer|cad|cae|mechanical|electrical|prototype/i,
    a: "Our Product Engineering team specialises in end-to-end engineering — from concept design and CAD/CAE modelling through to prototyping and production support. We work across automotive, aerospace, industrial machinery, and consumer goods.",
  },
  {
    q: /plant.?engineer|process|digitali[sz]|digital.?twin|3d.?scan|layout/i,
    a: "Plant Engineering covers process optimisation, facility layout design, 3D laser scanning, and digital twin creation. We help industrial facilities reduce downtime and improve operational efficiency.",
  },
  {
    q: /saas|servicecpq|software|cloud|automat/i,
    a: "Our SaaS practice centres on ServiceCPQ — a cloud-native configure-price-quote platform for complex engineering services. We also handle system integration and workflow automation.",
  },
  {
    q: /staff|recruit|hire|talent|job|career|engineer.*role|role.*engineer/i,
    a: "We connect exceptional engineering talent with leading organisations across India and the USA. Whether you need contract, permanent, or project-based engineers, our team can help. Check our Careers page or contact us directly.",
  },
  {
    q: /contact|reach|email|call|office|location|india|usa/i,
    a: "You can reach us at info@cognitionies.com. We operate from offices in India and the USA. Our team typically responds within one business day.",
  },
  {
    q: /service|offer|what.*do|help.*with|capabilit/i,
    a: "Cognition IES offers four core services: Product Engineering, Plant Engineering, SaaS Solutions (ServiceCPQ), and Staffing & Recruitment. Which area would you like to explore?",
  },
  {
    q: /about|who.*you|company|cognition|history|found/i,
    a: "Cognition IES is an engineering services firm operating across India and the USA. We combine deep engineering expertise with technology to help industries solve complex challenges — from product design to plant optimisation.",
  },
  {
    q: /brochure|download|pdf|resource/i,
    a: "We have detailed brochures for both Product Engineering and Plant Engineering. Visit our Brochures page to download them — just fill in a quick form and the PDF opens instantly.",
  },
  {
    q: /price|cost|rate|quotation|quote|fee/i,
    a: "Pricing varies by project scope and engagement type. The best way to get an accurate quote is to tell us about your project — you can use the Contact page or drop us a line at info@cognitionies.com.",
  },
];

/* ── Bot reply logic ───────────────────────────────────────────────────────── */
const FALLBACK =
  "I'm not sure about that one. For a detailed answer, please email us at info@cognitionies.com or use the Contact page — our team replies within one business day.";

function botReply(input: string): string {
  const match = KB.find(({ q }) => q.test(input));
  return match?.a ?? FALLBACK;
}

/* ── Quick-reply suggestions ───────────────────────────────────────────────── */
const SUGGESTIONS = [
  "What services do you offer?",
  "How can I contact you?",
  "Tell me about Plant Engineering",
  "Are you hiring?",
];

/* ── Typing indicator ──────────────────────────────────────────────────────── */
function TypingDots() {
  return (
    <div className="flex items-center gap-1 py-1 px-1">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#718096] animate-bounce"
          style={{ animationDelay: `${i * 0.15}s`, animationDuration: "0.8s" }}
        />
      ))}
    </div>
  );
}

/* ── Message bubble ────────────────────────────────────────────────────────── */
function Bubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] px-4 py-2.5 rounded-2xl font-sans text-[14px] leading-[1.65] ${
          isUser
            ? "bg-[#003C46] text-white rounded-br-sm"
            : "bg-[#f3f4f6] text-[#1f2937] rounded-bl-sm"
        }`}
      >
        {msg.text}
      </div>
    </motion.div>
  );
}

/* ── Main widget ───────────────────────────────────────────────────────────── */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      role: "bot",
      text: "Hi there 👋 I'm the Cognition IES assistant. Ask me anything about our services, or pick a topic below.",
      ts: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Auto-scroll to latest message */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  /* Focus input when opened */
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 350);
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
    setShowBadge(false);
  };

  const send = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;
      setInput("");

      const userMsg: Message = { id: crypto.randomUUID(), role: "user", text: trimmed, ts: new Date() };
      setMessages(prev => [...prev, userMsg]);
      setTyping(true);

      /* Simulate a natural reply delay: 600 – 1200 ms */
      const delay = 600 + Math.random() * 600;
      setTimeout(() => {
        const botMsg: Message = { id: crypto.randomUUID(), role: "bot", text: botReply(trimmed), ts: new Date() };
        setMessages(prev => [...prev, botMsg]);
        setTyping(false);
      }, delay);
    },
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {/* ── Toggle button ── */}
      <div className="fixed bottom-6 right-6 z-[9998]">
        <AnimatePresence>
          {!open && (
            <motion.button
              key="toggle"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              onClick={handleOpen}
              aria-label="Open chat"
              className="relative w-14 h-14 rounded-full bg-[#003C46] hover:bg-[#0098AF] text-white flex items-center justify-center shadow-xl transition-colors duration-200 group"
            >
              <MessageSquare className="w-6 h-6" />
              {/* Unread badge */}
              {showBadge && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#0098AF] border-2 border-white flex items-center justify-center"
                >
                  <span className="text-[10px] font-bold text-white">1</span>
                </motion.span>
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* ── Chat panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-[9998] w-[calc(100vw-3rem)] sm:w-[380px] flex flex-col rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#e2e8f0]"
            style={{ maxHeight: "min(580px, calc(100svh - 6rem))" }}
          >
            {/* Header */}
            <div className="bg-[#003C46] px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0098AF] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-sans text-[14px] font-semibold text-white leading-none mb-0.5">
                    Cognition IES
                  </p>
                  <p className="font-sans text-[11px] text-white/50 leading-none">
                    Usually replies instantly
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Minimise"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-3 scroll-smooth">
              {messages.map(msg => (
                <Bubble key={msg.id} msg={msg} />
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-[#f3f4f6] rounded-2xl rounded-bl-sm px-4 py-2">
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* Quick-reply suggestions (only show if just the welcome msg) */}
            {messages.length === 1 && (
              <div className="px-4 pb-3 flex flex-wrap gap-2">
                {SUGGESTIONS.map(s => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="font-sans text-[12px] font-medium px-3 py-1.5 rounded-full border border-[#e2e8f0] text-[#556677] hover:border-[#0098AF] hover:text-[#0098AF] transition-colors duration-150 bg-white"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-[#e2e8f0] px-4 py-3 shrink-0">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask a question…"
                  disabled={typing}
                  className="flex-1 h-10 px-4 rounded-full border border-[#e2e8f0] bg-[#fafaf8] font-sans text-[14px] text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF]/30 transition-all duration-200 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  aria-label="Send message"
                  className="w-10 h-10 rounded-full bg-[#003C46] hover:bg-[#0098AF] text-white flex items-center justify-center transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <p className="font-sans text-[10px] text-[#9ca3af] text-center mt-2">
                For urgent queries — info@cognitionies.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
