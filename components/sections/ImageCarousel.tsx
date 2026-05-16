"use client";

import { useEffect, useMemo, useState } from "react";

const slides = [
  {
    src: "/svgs/1.svg",
    title: "Journal-ready manuscripts",
    description: "Publication-focused editing and formatting."
  },
  {
    src: "/svgs/2.svg",
    title: "Research integrity",
    description: "Ethical compliance and verified citations."
  },
  {
    src: "/svgs/7.svg",
    title: "Global academic support",
    description: "Dedicated teams across regions and time zones."
  },
  {
    src: "/svgs/4.svg",
    title: "Fast delivery",
    description: "Clear milestones with predictable timelines."
  }
];

const AUTOPLAY_MS = 4500;

export function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const orderedSlides = useMemo(
    () => slides.map((slide, i) => ({ ...slide, id: i })),
    []
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [count]);

  return (
    <section className="px-6 py-14 sm:px-10 lg:px-16">
      <div className="grid items-center gap-8 rounded-[8px] bg-slate-50 p-5 sm:p-8 lg:grid-cols-[1.1fr_1.4fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
            Featured Highlights
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">
            A quick tour of our academic workflow
          </h2>
          <p className="max-w-md text-sm text-slate-600">
            Rotate through the highlights to see how we support researchers at every
            step, from strategy to submission.
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIndex((prev) => (prev - 1 + count) % count)}
              className="rounded-[8px] border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-white"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setIndex((prev) => (prev + 1) % count)}
              className="rounded-[8px] border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-white"
            >
              Next
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[8px] bg-white shadow-sm">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {orderedSlides.map((slide) => (
              <div key={slide.id} className="min-w-full p-8">
                <div className="grid gap-6 sm:grid-cols-[220px_1fr] sm:items-center">
                  <img
                    src={slide.src}
                    alt=""
                    aria-hidden="true"
                    className="h-auto w-full max-w-[220px]"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {slide.title}
                    </h3>
                    <p className="text-sm text-slate-600">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 pb-6">
            {orderedSlides.map((slide) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setIndex(slide.id)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === slide.id ? "bg-primary-600" : "bg-slate-300"
                }`}
              >
                <span className="sr-only">Go to slide {slide.id + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
