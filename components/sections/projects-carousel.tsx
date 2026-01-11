"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { PROJECTS_CAROUSEL } from "@/data/content";

export function ProjectsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Speed control - using refs to avoid re-renders
  const baseSpeed = 0.5;
  const currentSpeedRef = useRef(baseSpeed);
  const targetSpeedRef = useRef(baseSpeed);
  const x = useMotionValue(0);

  // Creating a seamless loop by duplicating data
  const duplicatedProjects = [
    ...PROJECTS_CAROUSEL,
    ...PROJECTS_CAROUSEL,
    ...PROJECTS_CAROUSEL,
    ...PROJECTS_CAROUSEL,
  ];

  // Smooth speed interpolation
  useAnimationFrame((t, delta) => {
    // Smoothly interpolate towards target speed
    const lerpFactor = 0.1;
    currentSpeedRef.current +=
      (targetSpeedRef.current - currentSpeedRef.current) * lerpFactor;

    let newX = x.get() - currentSpeedRef.current * (delta / 10);

    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const singleSetWidth = scrollWidth / 4;

      if (newX <= -singleSetWidth) {
        newX = 0;
      } else if (newX > 0) {
        newX = -singleSetWidth;
      }
    }

    x.set(newX);
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window === "undefined" || !carouselRef.current) return;

    const rect = carouselRef.current.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const width = rect.width;

    // Calculate position from 0 to 1
    const position = relativeX / width;

    // Create zones: left (0-0.35), center (0.35-0.65), right (0.65-1)
    const leftZone = 0.35;
    const rightZone = 0.65;
    const maxSpeed = 4;

    if (position < leftZone) {
      // Left zone: scroll right (positive speed means moving content left, so we need negative for right)
      // The closer to the left edge, the faster
      const intensity = 1 - position / leftZone;
      targetSpeedRef.current = -maxSpeed * intensity;
    } else if (position > rightZone) {
      // Right zone: scroll left (positive speed)
      // The closer to the right edge, the faster
      const intensity = (position - rightZone) / (1 - rightZone);
      targetSpeedRef.current = maxSpeed * intensity;
    } else {
      // Center zone: default slow drift
      targetSpeedRef.current = baseSpeed;
    }
  };

  const handleMouseLeave = () => {
    targetSpeedRef.current = baseSpeed;
  };

  return (
    <section className="py-8 overflow-hidden">
      <div className="container px-4 md:px-0 mb-8 mx-auto max-w-4xl">
        <h2 className="text-[12px] font-semibold tracking-[2px] text-[#737373] uppercase">
          THINGS I MADE
        </h2>
      </div>
      <div
        ref={carouselRef}
        className="w-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          ref={containerRef}
          className="flex gap-8 px-4 w-max"
          style={{ x }}
        >
          {duplicatedProjects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 relative w-[300px] h-[200px] md:w-[400px] md:h-[250px] rounded-2xl overflow-hidden bg-stone-900 block group"
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Placeholder Image because we don't have real files */}
              <div className="absolute inset-0 bg-stone-800 flex items-center justify-center">
                <span className="text-stone-500 text-sm font-mono">
                  {project.title}
                </span>
              </div>

              {/* Hover Overlay - gradient from bottom */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === idx ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="space-y-1">
                  <p className="text-[13px] text-stone-400 font-normal">
                    {project.date}
                  </p>
                  <h3 className="text-white font-medium text-[15px] leading-snug">
                    {project.description}
                  </h3>
                </div>
              </motion.div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
