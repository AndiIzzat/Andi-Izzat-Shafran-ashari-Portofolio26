"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />

      {/* Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950 pointer-events-none"></div>

      <main className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
              All Projects<span className="text-neutral-500">.</span>
            </h1>
            <p className="text-neutral-400 text-lg max-w-2xl">
              A collection of my work across web development, UI/UX design, and graphic design.
            </p>
          </div>

          {/* Upcoming Projects Card */}
          <div className="max-w-2xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 p-12 md:p-16 text-center">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-neutral-800 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>

              {/* Text */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Upcoming Projects
              </h3>
              <p className="text-neutral-400 text-lg max-w-md mx-auto">
                Exciting projects are currently in the works. Stay tuned for updates!
              </p>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <svg viewBox="0 0 100 100" fill="currentColor" className="text-white">
                  <circle cx="50" cy="50" r="40" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5">
                <svg viewBox="0 0 100 100" fill="currentColor" className="text-white">
                  <rect x="20" y="20" width="60" height="60" rx="10" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
