"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EXPERIENCE } from "@/data/content";
import { MoveRight } from "lucide-react";

export function Experience() {
  return (
    <section className="py-6">
      <h2 className="text-[12px] font-semibold tracking-[2px] text-[#737373] uppercase mb-8">
        Experiences
      </h2>
      <div className="space-y-4">
        {EXPERIENCE.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
}

function ExperienceItem({
  experience,
}: {
  experience: (typeof EXPERIENCE)[0];
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border-l-2 border-transparent hover:border-stone-200 dark:hover:border-stone-800 pl-4 -ml-4 transition-colors cursor-default py-2"
    >
      <div className="flex justify-between items-baseline mb-1">
        <div className="flex items-center gap-2">
          {/* Logo placeholder if needed, relying on text for now */}
          <h3 className="font-medium text-[15px] text-stone-800 dark:text-[#e5e5e5] transition-colors">
            {experience.company}
          </h3>
        </div>

        <span className="text-[12px] font-mono text-stone-400 dark:text-[#525252] tabular-nums text-right md:pl-0 pl-4">
          {experience.date}
        </span>
      </div>

      <div className="text-[14px] text-stone-500 dark:text-[#a3a3a3] mb-2 font-normal">
        {experience.role}
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pt-1 pb-2">
              <div className="flex items-start gap-2 text-sm text-stone-500 dark:text-stone-400 leading-relaxed max-w-2xl">
                <MoveRight className="w-4 h-4 mt-1 shrink-0 opacity-50" />
                <p>{experience.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
