import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";

type Slide = {
  image: string;
  eyebrow: string;
  headline: string;
  subtext: string;
  objectPosition?: string;
  darkOverlay?: string;
};

const SLIDES: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=2000&q=80",
    eyebrow: "Welcome home",
    headline: "A church for every generation.",
    subtext:
      "Bring your questions, your doubts, your friends. There's a seat with your name on it this Sunday.",
  },
  {
    image: "church2.jpg",
    eyebrow: "Sundays at GracePoint",
    headline: "Real people. Real hope. Real Jesus.",
    subtext:
      "Two services every Sunday at 9AM & 11AM. Kids programs, live worship, and a message worth showing up for.",
    objectPosition: "center 30%",
    darkOverlay: "bg-gradient-to-t from-black/70 via-black/30 to-transparent",
  },
  {
    image: "church.jpg",
    eyebrow: "Built for community",
    headline: "You weren't made to do life alone.",
    subtext:
      "Small groups, student nights, and serve teams   real belonging starts here.",
    darkOverlay: "bg-gradient-to-t from-black/85 via-black/50 to-black/20",
  },
  {
    image: "premium_photo-1678599058696-3f9c42bea366.avif",
    eyebrow: "Grow in faith",
    headline: "Deep roots. Strong community.",
    subtext:
      "Join us as we explore Scripture together and grow in our walk with Jesus.",
  },
];

const DURATION = 5000;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(
      () => setCurrent((c) => (c + 1) % SLIDES.length),
      DURATION,
    );
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative min-h-[85vh] w-full overflow-hidden bg-[var(--charcoal)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        >
          <motion.img
            src={slide.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: slide.objectPosition }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.12 }}
            transition={{ duration: DURATION / 1000 + 1.5, ease: "linear" }}
          />
          {slide.darkOverlay && (
            <div className={`absolute inset-0 ${slide.darkOverlay}`} />
          )}

        </motion.div>
      </AnimatePresence>

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-end px-5 pb-24 pt-32 lg:px-8 lg:pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/90 backdrop-blur">
              <span className="size-1.5 rounded-full bg-primary" />
              {slide.eyebrow}
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
              {slide.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">{slide.subtext}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/connect"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition hover:bg-[var(--orange-brand-hover)] hover:scale-105 active:scale-95"
              >
                Plan a Visit
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 flex items-center gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`relative h-1.5 overflow-hidden rounded-full bg-white/25 transition-all ${
                i === current ? "w-16" : "w-6 hover:w-8"
              }`}
            >
              {i === current && !paused && (
                <motion.span
                  key={`p-${current}`}
                  className="absolute inset-y-0 left-0 bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: DURATION / 1000, ease: "linear" }}
                />
              )}
              {i === current && paused && (
                <span className="absolute inset-0 bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>

    </section>
  );
}
