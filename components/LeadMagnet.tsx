"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, CheckCircle2, FileText } from "lucide-react";

const DISMISSED_KEY = "lead_magnet_dismissed";
const SUBMITTED_KEY = "lead_magnet_submitted";

/**
 * LeadMagnet: a non-intrusive slide-up panel that appears after the user
 * has scrolled 60% of the page OR spent 45 seconds on it (whichever first).
 *
 * Offer: "Download our Engineering Capabilities Guide". Captures name + email,
 * submits to Web3Forms, then reveals the brochure download link.
 *
 * Rules:
 * - Never shown if already dismissed or submitted in this session.
 * - Dismissed state persists in localStorage (doesn't reappear for 7 days).
 * - Only shown once per session after that.
 */

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "aba4ac86-a28e-496a-86bb-e3c981356299";

export default function LeadMagnet() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const fired = useRef(false);

  const show = useCallback(() => {
    if (fired.current) return;
    // Check if dismissed recently (7 days)
    const dismissed = localStorage.getItem(DISMISSED_KEY);
    if (dismissed && Date.now() - parseInt(dismissed) < 7 * 86400000) return;
    // Check if already submitted this session
    if (sessionStorage.getItem(SUBMITTED_KEY)) return;
    fired.current = true;
    setVisible(true);
  }, []);

  useEffect(() => {
    // Trigger on 60% scroll
    const onScroll = () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (pct >= 0.4) show();
    };
    // Trigger after 20 seconds
    const timer = setTimeout(show, 20000);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, [show]);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(DISMISSED_KEY, Date.now().toString());
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setBusy(true); setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "Capabilities Guide Download Request",
          name,
          email,
          source: "Lead Magnet: Capabilities Guide",
        }),
      });
      const r = await res.json();
      if (r.success) {
        setSubmitted(true);
        sessionStorage.setItem(SUBMITTED_KEY, "1");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="lead-magnet"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
          className="fixed bottom-6 left-6 z-[9990] w-[calc(100vw-3rem)] sm:w-[420px]"
          role="complementary"
          aria-label="Download our Capabilities Guide"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-[#e2e8f0] overflow-hidden">
            {/* Header strip */}
            <div className="bg-[#003C46] px-6 py-4 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0098AF] flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-sans text-[13px] font-semibold text-white leading-tight">
                    Free Download
                  </p>
                  <p className="font-sans text-[11px] text-white/50 leading-tight mt-0.5">
                    Engineering Capabilities Guide
                  </p>
                </div>
              </div>
              <button
                onClick={dismiss}
                aria-label="Dismiss"
                className="text-white/40 hover:text-white transition-colors mt-0.5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-4 space-y-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-display text-xl text-[#111827]">Thanks, {name.split(" ")[0]}!</p>
                      <p className="font-sans text-[14px] text-[#718096] mt-1 leading-relaxed">
                        Your guide is ready to download.
                      </p>
                    </div>
                    <a
                      href="/pdf/COGNITION_Brochure_Product.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0098AF] hover:bg-[#007a8c] text-white font-sans text-[13px] font-semibold rounded-full transition-colors duration-200"
                    >
                      <Download className="w-4 h-4" />
                      Download Now
                    </a>
                    <button onClick={dismiss} className="block w-full font-sans text-[12px] text-[#9ca3af] hover:text-[#718096] transition-colors mt-1">
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form">
                    <p className="font-display text-xl text-[#111827] mb-1">
                      Get our Capabilities Guide
                    </p>
                    <p className="font-sans text-[14px] text-[#718096] mb-4 leading-relaxed">
                      A concise overview of our engineering services, project examples, and technical expertise, in one PDF.
                    </p>

                    <form onSubmit={submit} className="space-y-3">
                      <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        disabled={busy}
                        className="w-full h-11 px-4 border border-[#e2e8f0] bg-[#fafaf8] rounded-xl font-sans text-[14px] text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF]/25 transition-all duration-200"
                      />
                      <input
                        type="email"
                        placeholder="Work email address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        disabled={busy}
                        className="w-full h-11 px-4 border border-[#e2e8f0] bg-[#fafaf8] rounded-xl font-sans text-[14px] text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF]/25 transition-all duration-200"
                      />
                      {error && <p className="font-sans text-[12px] text-red-500">{error}</p>}
                      <button
                        type="submit"
                        disabled={busy || !name.trim() || !email.trim()}
                        className="w-full flex items-center justify-center gap-2 h-11 bg-[#003C46] hover:bg-[#0098AF] text-white font-sans text-[13px] font-semibold rounded-full transition-colors duration-200 disabled:opacity-50"
                      >
                        {busy ? (
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            Send Me the Guide
                          </>
                        )}
                      </button>
                    </form>

                    <p className="font-sans text-[11px] text-[#9ca3af] text-center mt-3">
                      No spam. Unsubscribe anytime.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
