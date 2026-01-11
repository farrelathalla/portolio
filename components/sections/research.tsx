"use client";

import { RESEARCH } from "@/data/content";

export function Research() {
  return (
    <section className="py-6">
      <h2 className="text-[12px] font-semibold tracking-[2px] text-[#737373] uppercase mb-8">
        RESEARCH
      </h2>
      <div className="space-y-8">
        {RESEARCH.map((item, index) => (
          <div key={index} className="flex justify-between group">
            <div className="max-w-xl">
              <h3 className="font-medium text-[15px] text-stone-800 dark:text-[#e5e5e5] mb-1 group-hover:underline decoration-stone-600 underline-offset-4">
                <a href={item.link}>{item.title}</a>
              </h3>
              <p className="text-[14px] text-stone-500 dark:text-[#a3a3a3] font-normal">
                {item.venue}
              </p>
            </div>
            <div className="text-[12px] text-stone-400 dark:text-[#525252] font-mono text-right">
              {item.date} <br /> 2022{" "}
              {/* simplified date structure or parse from data */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
