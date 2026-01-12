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
          <h1 className="md:text-[60px] text-[40px] font-semibold tracking-[-1.5px] text-stone-900 dark:text-white">
            Farrel Athalla Putra
          </h1>
          <p className="text-[14px] text-stone-500 dark:text-[#a3a3a3] max-w-xl mb-4 leading-relaxed">
            Software Engineer and UI/UX designer expanding into AI and Data
            Science. I build intelligent applications by integrating machine
            learning models with robust full-stack architecture.
          </p>
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
