import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";

type Slide = {
  image: string;
  eyebrow: string;
  headline: string;
  subtext: string;
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
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=2000&q=80",
    eyebrow: "Sundays at GracePoint",
    headline: "Real people. Real hope. Real Jesus.",
    subtext:
      "Two services every Sunday at 9AM & 11AM. Kids programs, live worship, and a message worth showing up for.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=80",
    eyebrow: "Built for community",
    headline: "You weren't made to do life alone.",
    subtext:
      "Small groups, student nights, and serve teams — real belonging starts here.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=80",
    eyebrow: "Serve the city",
    headline: "Love loud. Serve local.",
    subtext:
      "From food drives to student mentoring — join us in the work of loving our neighbors.",
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

  const go = (dir: 1 | -1) =>
    setCurrent((c) => (c + dir + SLIDES.length) % SLIDES.length);

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
            initial={{ scale: 1 }}
            animate={{ scale: 1.12 }}
            transition={{ duration: DURATION / 1000 + 1.5, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
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
              <Link
                to="/media-events"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <PlayCircle className="size-4" /> Watch Latest Sermon
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

      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-3 text-white opacity-0 backdrop-blur transition hover:bg-black/50 group-hover:opacity-100 lg:block lg:opacity-70 lg:hover:opacity-100"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-3 text-white backdrop-blur transition hover:bg-black/50 lg:block lg:opacity-70 lg:hover:opacity-100"
      >
        <ChevronRight className="size-5" />
      </button>
    </section>
  );
}
