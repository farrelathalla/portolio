"use client";

import { motion } from "framer-motion";
import { SOCIALS } from "@/data/content";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Hero() {
  return (
    <section className="pt-24 pb-8">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="md:text-[60px] text-[40px] font-semibold tracking-[-1.5px] text-stone-900 dark:text-white mb-2">
            Farrel Athalla Putra
          </h1>
          <div className="flex items-center justify-between mb-16">
            <div className="flex gap-3 text-sm text-stone-500 font-medium">
              {SOCIALS.map((social, idx) => (
                <div key={social.name} className="flex gap-3">
                  {idx > 0 && <span>/</span>}
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-800 dark:hover:text-stone-300 transition-colors"
                  >
                    {social.name}
                  </a>
                </div>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
