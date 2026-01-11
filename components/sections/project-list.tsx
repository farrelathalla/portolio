"use client";

import { MoveUpRight } from "lucide-react";

interface ProjectItem {
  title: string;
  description: string;
  link: string;
  isNew?: boolean;
  isBeta?: boolean;
  isUtility?: boolean;
  stars?: string;
}

interface ProjectListProps {
  title: string;
  items: ProjectItem[];
}

export function ProjectList({ title, items }: ProjectListProps) {
  return (
    <section className="py-6">
      <h2 className="text-[12px] font-semibold tracking-[2px] text-[#737373] uppercase mb-8">
        {title}
      </h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="group">
            <div className="mb-1 flex items-center gap-2">
              {/* Badges */}
              {item.isNew && (
                <span className="text-[10px] font-bold bg-[#facc15] text-black px-1.5 py-0.5 rounded-sm">
                  NEW
                </span>
              )}
              {item.isBeta && (
                <span className="text-[10px] font-bold bg-[#fb923c] text-black px-1.5 py-0.5 rounded-sm">
                  BETA
                </span>
              )}
              {item.isUtility && (
                <span className="text-[10px] font-bold bg-[#facc15] text-black px-1.5 py-0.5 rounded-sm">
                  UTILITY
                </span>
              )}

              <a
                href={item.link}
                className="font-medium text-[15px] text-stone-800 dark:text-[#e5e5e5] flex items-center gap-1 group-hover:text-stone-950 dark:group-hover:text-white transition-colors"
              >
                {item.title}
                {item.stars && (
                  <span className="ml-2 font-normal text-xs text-stone-400 dark:text-[#525252] font-mono">
                    ★ {item.stars}
                  </span>
                )}
                <MoveUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 transition-all text-[#737373]" />
              </a>
            </div>
            <p className="text-[14px] text-stone-500 dark:text-[#a3a3a3] max-w-2xl leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
