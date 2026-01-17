"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const upcomingProjects = [
  {
    id: 1,
    title: "Upcoming Project",
    category: "Web Design",
    description: "An exciting web design project is currently in development.",
    tags: ["Web Design", "UI/UX", "Development"],
  },
  {
    id: 2,
    title: "Upcoming Project",
    category: "UI/UX Design",
    description: "A new UI/UX design project will be revealed soon.",
    tags: ["Figma", "UI/UX", "Mobile"],
  },
  {
    id: 3,
    title: "Upcoming Project",
    category: "Mobile App",
    description: "A mobile application project is in the works.",
    tags: ["Mobile", "App Design", "UI"],
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { theme } = useTheme();

  return (
    <section id="projects" className="relative py-24 md:py-32" ref={ref}>
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        {/* Section Header */}
        <div
          className={`mb-12 transition-[transform,opacity] duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-neutral-500 text-sm tracking-widest uppercase mb-3 block">
            My Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Projects<span className="text-neutral-500">.</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden transition-[transform,opacity] duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${(index + 2) * 100}ms` : "0ms" }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden transition-colors border"
                style={{
                  backgroundColor: theme === "dark" ? "#171717" : "#ffffff",
                  borderColor: theme === "dark" ? "#262626" : "#e5e5e5",
                }}
              >
                {/* Placeholder Background */}
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: theme === "dark" ? "#0a0a0a" : "#f5f5f5",
                  }}
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: theme === "dark"
                      ? "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 100%)",
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Top - Category */}
                  <div className="flex justify-between items-start">
                    <span className="text-sm tracking-widest uppercase text-white/70">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom - Info */}
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p
                      className={`mb-3 text-sm text-white/80 transition-[transform,opacity] duration-300 ${
                        hoveredProject === project.id
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 rounded-full text-xs bg-white/20 backdrop-blur-sm text-white transition-[transform,opacity] duration-300 ${
                            hoveredProject === project.id
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-2"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover border glow */}
                <div
                  className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: theme === "dark" ? "#404040" : "#d4d4d4" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
