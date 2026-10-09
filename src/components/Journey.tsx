"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface Slide {
  year: string;
  location: string;
  title: string[];
  body: string;
  stats: Stat[];
  image: string;
  alt: string;
  // Portrait photos are shown whole over a blurred copy instead of being cropped
  portrait?: boolean;
  position?: string;
}

const slides: Slide[] = [
  {
    year: "2022",
    location: "Dubai · UAE",
    title: ["Steel Bottles for a", "Reusable Future"],
    body: "Jal Seva began distributing reusable steel bottles at Hindu Mandir in Dubai, creating a simple alternative to single-use plastic while supporting access to drinking water.",
    stats: [{ value: "Steel Bottles", label: "Distributed" }],
    image: "/2022.jpeg",
    alt: "A worker in Dubai receiving a reusable steel bottle from a young volunteer",
    portrait: true,
  },
  {
    year: "2023",
    location: "Indore · India",
    title: ["Bringing Clean Water", "to School"],
    body: "Two water filters and coolers were installed in the same school in Indore, helping students access safe and cooled drinking water every day.",
    stats: [{ value: "Water filters & coolers", label: "Installed" }],
    image: "/2023.jpeg",
    alt: "Drinking-water taps at a school in Indore, decorated with balloons and marigold garlands",
  },
  {
    year: "2024",
    location: "Dubai · UAE",
    title: ["Water Where It", "Was Needed"],
    body: "During Ramadan, drinking-water bottles were distributed at a construction site, supporting workers through the demanding summer heat.",
    stats: [{ value: "Ramadan", label: "Community initiative" }],
    image: "/2024.jpeg",
    alt: "Workers in uniform seated together at a labour accommodation in Dubai",
    portrait: true,
  },
  {
    year: "2025",
    location: "Dubai · UAE",
    title: ["Water, With Care"],
    body: "Jal Seva expanded its Ramadan initiative by distributing water bottles together with hygiene kits, supporting workers with both hydration and essential personal care.",
    stats: [{ value: "Water +", label: "Hygiene kits" }],
    image: "/2025.jpeg",
    alt: "Workers in Dubai standing together with the bottles and kits they received",
  },
  {
  year: "2026",
  location: "India",
  title: ["Six Coolers.", "Five Schools."],
  body: "Six water filters and coolers were installed across five different schools in India, bringing reliable access to safe, cooled drinking water to more students.",
  stats: [
{ value: "Water filters & coolers", label: "Installed" }  ],
  image: "/2026-india-coolers.jpeg",
  alt: "Water filter and cooler installation at a school in India",
  position: "object-[50%_40%]",
},

{
  year: "2026",
  location: "Dubai",
  title: ["Steel Bottles.", "Lasting Change."],
  body: "Steel bottles were distributed in Dubai, continuing Jal Seva's commitment to reusable alternatives and accessible drinking water.",
  stats: [
    { value: "2026", label: "Bottle distribution" },
    { value: "Dubai", label: "Community outreach" },
  ],
  image: "/2026-dubai-bottles.jpeg",
  alt: "Steel bottles distributed by Jal Seva in Dubai",
  position: "object-[50%_40%]",
}, 
{
  year: "2026",
  location: "Dubai",
  title: ["Four Coolers.", "Permanent Access."],
  body: "Four water filters and coolers were installed in Dubai, expanding Jal Seva's work from immediate support toward permanent access to safe drinking water.",
  stats: [
{ value: "Water filters & coolers", label: "Installed" } ,
    { value: "Dubai", label: "Permanent infrastructure" },
  ],
  image: "/2026-dubai-coolers.jpeg",
  alt: "Water filter and cooler installation in Dubai",
  position: "object-[50%_40%]",
}, 
{
  year: "2026",
  location: "India",
  title: ["Water in", "Every Hand."],
  body: "Jal Seva ambassadors distributed water bottles across communities in India, carrying the movement forward through youth-led action.",
  stats: [
    { value: "2026", label: "Ambassador-led initiative" },
    { value: "India", label: "Community outreach" },
  ],
  image: "/2026-india-ambassadors.jpeg",
  alt: "Jal Seva ambassador distributing water bottles in India",
  position: "object-[50%_40%]",
}
];

const pad = (n: number) => String(n).padStart(2, "0");

// Shared enter/leave motion for the stacked slide layers
const layer = (index: number, active: number) =>
  `col-start-1 row-start-1 transition-all duration-700 ease-out motion-reduce:transition-none ${
    index === active
      ? "opacity-100 translate-x-0 delay-150"
      : `opacity-0 pointer-events-none ${
          index < active ? "-translate-x-4" : "translate-x-4"
        }`
  }`;

export default function Journey() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const last = slides.length - 1;
  const goTo = (index: number) => setActive(Math.max(0, Math.min(last, index)));

  function handleTouchEnd(e: React.TouchEvent) {
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
    goTo(active + (dx < 0 ? 1 : -1));
  }

  return (
    <section
      id="journey"
      aria-roledescription="carousel"
      aria-label="The JalSeva journey, 2022 to 2026"
      className="scroll-mt-16 overflow-hidden bg-white py-10 md:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-3 lg:grid-cols-[58fr_42fr] lg:items-end lg:gap-12">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              The Journey
            </p>
            <h2 className="text-2xl font-extrabold leading-tight text-dark-blue md:text-3xl">
              From one bottle to a growing movement.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-text-muted">
            What began with reusable bottles has grown into a movement for
            lasting access to safe drinking water across India and the UAE.
          </p>
        </div>

        {/* Slides */}
        <div
          onTouchStart={(e) => {
            touchStart.current = {
              x: e.touches[0].clientX,
              y: e.touches[0].clientY,
            };
          }}
          onTouchEnd={handleTouchEnd}
          className="mt-6 grid gap-y-5 lg:mt-8 lg:grid-cols-[58fr_42fr] lg:grid-rows-[auto_1fr_auto] lg:gap-x-12 lg:gap-y-4"
        >
          {/* Year and location */}
          <div className="grid lg:col-start-2 lg:row-start-1">
            {slides.map((slide, i) => (
              <div
                key={slide.title.join(" ")}
                aria-hidden={i !== active}
                className={`flex items-baseline gap-4 ${layer(i, active)}`}
              >
                <p className="text-5xl font-extrabold leading-none tracking-tight tabular-nums text-dark-blue">
                  {slide.year}
                </p>
                <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  <span className="h-px w-8 bg-primary-bright" />
                  {slide.location}
                </p>
              </div>
            ))}
          </div>

          {/* Image */}
          {/* Image */}
<div className="relative aspect-[4/3] overflow-hidden bg-white lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:aspect-auto lg:h-[380px]">
  {slides.map((slide, i) => (
    <div
      key={slide.title.join(" ")}
      aria-hidden={i !== active}
      className={`absolute inset-0 transition-all duration-700 ease-out motion-reduce:transition-none ${
        i === active
          ? "opacity-100 scale-100 translate-x-0"
          : `opacity-0 scale-[1.02] ${
              i < active ? "-translate-x-3" : "translate-x-3"
            }`
      }`}
    >
      <Image
        src={slide.image}
        alt={slide.alt}
        fill
        sizes="(min-width: 1024px) 58vw, 100vw"
        className={
          slide.portrait
            ? "object-contain"
            : `object-contain ${slide.position ?? ""}`
        }
      />
    </div>
  ))}
</div>

          {/* Title, description and impact */}
          <div className="grid lg:col-start-2 lg:row-start-2">
            {slides.map((slide, i) => (
              <div
                key={slide.title.join(" ")}
                aria-hidden={i !== active}
                className={`flex flex-col ${layer(i, active)}`}
              >
                <h3 className="text-xl font-extrabold leading-tight text-dark-blue md:text-2xl">
                  {slide.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted">
                  {slide.body}
                </p>

                <dl className="mt-5 flex flex-wrap gap-x-10 gap-y-4 lg:mt-auto lg:pt-4">
                  {slide.stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse">
                      <dt className="mt-1 text-xs text-text-muted">
                        {stat.label}
                      </dt>
                      <dd
                        className={
                          /^\d+$/.test(stat.value)
                            ? "text-4xl font-extrabold leading-none tabular-nums text-primary"
                            : "flex h-10 items-end text-base font-extrabold uppercase leading-none tracking-wider text-primary"
                        }
                      >
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          {/* Counter and arrows */}
          <div className="flex items-center justify-between border-t border-sky-medium pt-4 lg:col-start-2 lg:row-start-3">
            <p
              aria-live="polite"
              className="text-sm font-semibold tabular-nums tracking-wider text-text-muted"
            >
              <span className="text-dark-blue">{pad(active + 1)}</span> /{" "}
              {pad(slides.length)}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-white text-primary transition-colors hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                disabled={active === last}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-white text-primary transition-colors hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-40"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
