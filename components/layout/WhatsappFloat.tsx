"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site-config";

/**
 * Botão flutuante do WhatsApp: surge após o hero (canto inferior direito),
 * pulsa uma vez ao aparecer. Verde por convenção.
 */
export const WhatsappFloat = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink()}
          aria-label="Falar no WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
          className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-sm bg-whats px-4 py-3 text-white shadow-deep transition-colors hover:bg-whats-deep"
        >
          {/* Pulso único de chamada de atenção */}
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-sm bg-whats"
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 1.4 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.4 }}
          />
          <MessageCircle strokeWidth={1.75} className="relative size-6" aria-hidden />
          <span className="text-button relative hidden uppercase sm:block">
            WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};
