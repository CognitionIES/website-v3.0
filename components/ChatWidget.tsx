"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageSquare, Minimize2, Phone } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";

/* ── Types ─────────────────────────────────────────────────────────────────── */
type Role = "user" | "bot";
interface Message { id: string; role: Role; text: string; ts: Date; }

/* ── Static FAQ knowledge base ─────────────────────────────────────────────── */
const KB: { q: RegExp; a: string }[] = [
  /* Greetings */
  {
    q: /^(hi|hello|hey|good\s?(morning|afternoon|evening)|howdy|greetings)/i,
    a: "Hi there! I'm the Cognition IES assistant. I can help you learn about our [engineering services](/services), [projects](/projects), or [how to get in touch](/contact). What would you like to know?",
  },

  /* Product Engineering */
  {
    q: /product.?engineer|cad|cae|fea|cfd|solidworks|catia|\bnx\b|creo|mechanical design|electrical design|prototype|simulation|stress.?analys|tolerance/i,
    a: "Our Product Engineering team delivers end-to-end engineering: concept design, CAD/CAE modelling (SolidWorks, CATIA, NX, Creo), FEA/CFD analysis, prototyping, and production support. We work across automotive, aerospace, industrial machinery, and consumer goods. [Learn more about Product Engineering](/services/product-engineering) or [see project examples](/projects).",
  },

  /* Plant Engineering */
  {
    q: /plant.?engineer|facility|layout|3d.?scan|laser.?scan|digital.?twin|process.?optim|hazop|p.?&?.?id|maintenance|reliability|downtime|plant.?optim/i,
    a: "Plant Engineering covers facility layout design, 3D laser scanning, digital twin creation, process optimisation, HAZOP reviews, P&ID development, and maintenance planning. We help industrial plants reduce downtime and improve reliability. [Explore Plant Engineering](/services/plant-engineering) or [view our projects](/projects).",
  },

  /* Digital transformation / Industry 4.0 */
  {
    q: /digitali[sz]|industry.?4|iiot|smart.?factory|digital.?transform|automation|connected|sensor|data.?driven|manufacturing.?intel/i,
    a: "We help industrial facilities embrace digital transformation, from IIoT sensor integration and smart factory dashboards to full digitalization programmes. [View our digitalization project](/projects/digitalization) for a real-world example, or [contact us](/contact) to discuss your initiative.",
  },

  /* SaaS / ServiceCPQ */
  {
    q: /saas|servicecpq|cpq|configure.?price|quote|cloud.?platform|software.?solution|erp|crm|integrat|workflow/i,
    a: "Our SaaS practice is built around ServiceCPQ, a cloud-native configure-price-quote platform for complex engineering services. It simplifies quoting, integrates with ERP/CRM systems, and cuts sales cycle time. [Learn more about ServiceCPQ](/services/saas-solution/servicecpq) or [contact us](/contact) to discuss your requirements.",
  },

  /* Careers / Hiring */
  {
    q: /career|hiring|\bjob\b|opening|position|apply|join.*team|work.*for|vacanci|join us/i,
    a: "We're always looking to connect with talented engineers! [Check out our Careers page](/careers) to view current openings and find out how to apply.",
  },

  /* Industries */
  {
    q: /industr|automotive|aerospace|oil.?gas|pharma|consumer.?goods|heavy.?engineer|defence|defense|energy|power.?plant|refiner/i,
    a: "Cognition IES serves clients across automotive, aerospace, oil & gas, pharmaceuticals, heavy engineering, consumer goods, and energy sectors. Our cross-industry experience means we bring best practices from one domain and apply them where others haven't. [View our services](/services) to see how we can help your industry.",
  },

  /* Projects / Portfolio */
  {
    q: /project|portfolio|case.?stud|past.?work|example|previous.?work|showcase|reference/i,
    a: "Our [Projects page](/projects) showcases key engagements including [large-scale plant digitalization](/projects/digitalization) and [product cost management](/projects/product-cost-management) programmes. These highlight how we translate engineering expertise into measurable outcomes. Would you like me to point you to a specific service area?",
  },

  /* How to get started / engagement process */
  {
    q: /how.*(start|begin|engage|work.*together|work.*with.?you)|get.?started|next.?step|process|engagement|onboard|scope/i,
    a: "Getting started is straightforward: 1) Share a brief via our [Contact page](/contact) or email. 2) We schedule a discovery call to understand your scope. 3) We propose a tailored solution and timeline. Most clients receive an initial proposal within 2–3 business days.",
  },

  /* Contact / Location */
  {
    q: /contact|reach|email|call|phone|office|location|address|india|usa|united.?states/i,
    a: "You can reach us at [info@cognitionies.com](mailto:info@cognitionies.com), or use the [Contact form](/contact) for a faster response. We operate from offices USA(HQ) and the India, and our team typically replies within one business day.",
  },

  /* About the company */
  {
    q: /about|who.*you|company|cognition.?ies|history|found|team|background|mission|vision/i,
    a: "Cognition IES is an engineering services firm with offices USA(HQ) and the India. We combine deep domain expertise in product and plant engineering with technology-driven solutions to help industries solve complex challenges. [Read our full story](/about) to learn more about our team and mission.",
  },

  /* Staff Augmentation */
  {
    q: /staff.?aug|augment|resource.?aug|dedicated.?team|contract.?engineer|staffing|\btalent\b|extend.*team|on.?site|off.?shore|body.?shop/i,
    a: "Yes, our [Staff Augmentation](/services/staff-augmentation) service adds pre-vetted engineers to your team across plant, mechanical, electrical, instrumentation, civil/structural, CAE, and plant-digitization disciplines. You can engage them onsite, offshore, or hybrid through Time & Material, Dedicated Team, Project-Based, or Fixed-Price models. Share what you need via the [requirement form](/services/staff-augmentation#share-requirement) and we'll send a matched shortlist.",
  },

  /* Services overview */
  {
    q: /service|offer|what.*do|help.*with|capabilit|solution|practic/i,
    a: "Cognition IES offers four core practice areas: [Product Engineering](/services/product-engineering) (CAD/CAE, simulation, prototyping), [Plant Engineering](/services/plant-engineering) (layouts, 3D scanning, digital twins), [SaaS Solutions (ServiceCPQ)](/services/saas-solution/servicecpq), and [Staff Augmentation](/services/staff-augmentation) (pre-vetted engineers added to your team). Which area would you like to explore?",
  },

  /* Brochure / Downloads */
  {
    q: /brochure|download|pdf|resource|document|datasheet/i,
    a: "We have detailed brochures for both Product Engineering and Plant Engineering. [Visit our Brochures page](/brochure), fill in a quick form, and the PDF opens instantly, with no waiting for an email.",
  },

  /* Pricing / Quote */
  {
    q: /price|cost|rate|quotation|quote|fee|budget|investment/i,
    a: "Pricing depends on project scope, complexity, and engagement type. The quickest way to get an accurate estimate is to share your brief via the [Contact page](/contact) or email [info@cognitionies.com](mailto:info@cognitionies.com). We typically turn around an initial proposal within 2–3 business days.",
  },

  /* Thank you / positive feedback */
  {
    q: /thank|thanks|great|helpful|perfect|awesome|brilliant|appreciate/i,
    a: "You're welcome! If you have any other questions or are ready to discuss a project, reach out via our [Contact page](/contact) or at [info@cognitionies.com](mailto:info@cognitionies.com). We'd love to help.",
  },
];

/* ── Bot reply logic ───────────────────────────────────────────────────────── */
const FALLBACK =
  "I'm not sure about that one. For a detailed answer, please [email us](mailto:info@cognitionies.com) or use the [Contact page](/contact). Our team replies within one business day.";

function botReply(input: string): string {
  const match = KB.find(({ q }) => q.test(input));
  return match?.a ?? FALLBACK;
}

/* ── Quick-reply suggestions ───────────────────────────────────────────────── */
const SUGGESTIONS = [
  "What services do you offer?",
  "How do I get started?",
  "Show me your projects",
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

/* ── Inline link renderer (parses [label](href) in bot text) ──────────────── */
function renderWithLinks(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, label, href] = m;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    parts.push(
      <a
        key={m.index}
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="underline decoration-[#0098AF]/50 text-[#0098AF] hover:text-[#003C46] transition-colors"
      >
        {label}
      </a>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
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
        {isUser ? msg.text : renderWithLinks(msg.text)}
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

      {/* ── Quick-contact floating buttons (phone + WhatsApp) ── */}
      <AnimatePresence>
        {!open && (
          <motion.div
            key="quick-contact"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 28, delay: 0.05 }}
            className="fixed bottom-[5.5rem] right-6 z-[9997] flex flex-col gap-3 items-center"
          >
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1fb356] text-white flex items-center justify-center shadow-lg transition-colors duration-200"
            >
              <IconBrandWhatsapp className="w-6 h-6" />
            </a>
            <a
              href="tel:+919876543210"
              aria-label="Call us"
              className="w-12 h-12 rounded-full bg-[#003C46] hover:bg-[#0098AF] text-white flex items-center justify-center shadow-lg transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

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
                For urgent queries: info@cognitionies.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
