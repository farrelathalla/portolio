"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveUpRight, ChevronDown, ChevronUp } from "lucide-react";

// Language colors inspired by GitHub - avoiding pure black/white for dark/light mode compatibility
const languageColors: Record<string, { bg: string; text: string }> = {
  TypeScript: { bg: "#3178c6", text: "#ffffff" },
  JavaScript: { bg: "#f1e05a", text: "#1a1a1a" },
  Python: { bg: "#3572A5", text: "#ffffff" },
  Java: { bg: "#b07219", text: "#ffffff" },
  Go: { bg: "#00ADD8", text: "#ffffff" },
  React: { bg: "#61dafb", text: "#1a1a1a" },
  "Next.js": { bg: "#4a4a4a", text: "#ffffff" },
  PostgreSQL: { bg: "#336791", text: "#ffffff" },
  C: { bg: "#555555", text: "#ffffff" },
  "C++": { bg: "#f34b7d", text: "#ffffff" },
  Rust: { bg: "#dea584", text: "#1a1a1a" },
  PHP: { bg: "#777BB4", text: "#ffffff" },
  Ruby: { bg: "#CC342D", text: "#ffffff" },
  Swift: { bg: "#F05138", text: "#ffffff" },
  Kotlin: { bg: "#A97BFF", text: "#ffffff" },
  MySQL: { bg: "#4479A1", text: "#ffffff" },
  HTML: { bg: "#E34F26", text: "#ffffff" },
  CSS: { bg: "#1572B6", text: "#ffffff" },
  Raft: { bg: "#6B7280", text: "#ffffff" },
};

interface ProjectItem {
  title: string;
  description: string;
  link: string;
  isNew?: boolean;
  isBeta?: boolean;
  isUtility?: boolean;
  stars?: string;
  languages?: string[];
}

interface ProjectListProps {
  title: string;
  items: ProjectItem[];
  collapsible?: boolean;
  initialCount?: number;
}

function ProjectCard({
  item,
  isFaded,
}: {
  item: ProjectItem;
  isFaded?: boolean;
}) {
  return (
    <div className={`group ${isFaded ? "opacity-30" : ""}`}>
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
            UI/UX
          </span>
        )}

        <a
          href={item.link}
          target="_blank"
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
      {/* Languages as pill badges */}
      {item.languages && item.languages.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {item.languages.map((lang) => {
            const colors = languageColors[lang] || {
              bg: "#6B7280",
              text: "#ffffff",
            };
            return (
              <span
                key={lang}
                className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: colors.bg,
                  color: colors.text,
                }}
              >
                {lang}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function ProjectList({
  title,
  items,
  collapsible = false,
  initialCount = 5,
}: ProjectListProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldCollapse = collapsible && items.length > initialCount;

  // Always visible items (first 5)
  const alwaysVisibleItems = shouldCollapse
    ? items.slice(0, initialCount)
    : items;
  // Faded preview item (6th)
  const fadedItem = shouldCollapse && !isExpanded ? items[initialCount] : null;
  // Hidden items that appear on expand
  const hiddenItems = shouldCollapse ? items.slice(initialCount) : [];

  return (
    <section className="py-6">
      <h2 className="text-[12px] font-semibold tracking-[2px] text-[#737373] uppercase mb-8">
        {title}
      </h2>
      <div className="space-y-6">
        {/* Always visible items */}
        {alwaysVisibleItems.map((item, index) => (
          <ProjectCard key={`visible-${index}`} item={item} />
        ))}

        {/* Faded preview item (shows when collapsed) */}
        <AnimatePresence mode="wait">
          {fadedItem && !isExpanded && (
            <motion.div
              key="faded-preview"
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectCard item={fadedItem} isFaded />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hidden items with animation (shows when expanded) */}
        <AnimatePresence>
          {isExpanded &&
            hiddenItems.map((item, index) => (
              <motion.div
                key={`hidden-${index}`}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                <ProjectCard item={item} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Show More/Less Button */}
      {shouldCollapse && (
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 flex items-center gap-1 text-[13px] font-medium text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300 transition-colors cursor-pointer"
          whileTap={{ scale: 0.98 }}
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Show More
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </motion.button>
      )}
    </section>
  );
}
