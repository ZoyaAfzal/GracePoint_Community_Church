import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Search,
  MapPin,
  PlayCircle,
  LayoutGrid,
  List,
  ArrowLeft,
  ArrowRight,
  Download,
  Calendar as CalIcon,
} from "lucide-react";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { PageHeader, Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/media-events")({
  head: () => ({
    meta: [
      { title: "Media & Events   GracePoint Community Church" },
      {
        name: "description",
        content:
          "Watch recent sermons, browse upcoming events, and stay connected with GracePoint Community Church.",
      },
    ],
  }),
  component: MediaEvents,
});

type EventItem = {
  id: string;
  title: string;
  date: Date;
  location: string;
  description: string;
  img: string;
};

const EVENTS: EventItem[] = [
  {
    id: "summer-nights",
    title: "Summer Nights: Worship Under the Stars",
    date: new Date(2026, 7, 16, 19, 0),
    location: "GracePoint Lawn",
    description: "Outdoor worship, food trucks, and a live band as the sun sets.",
    img: "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "serve-day",
    title: "Serve Day: Downtown Outreach",
    date: new Date(2026, 7, 23, 9, 0),
    location: "Union Station",
    description: "Half-day serving alongside our nonprofit partners across downtown.",
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "kids-kickoff",
    title: "Kids Kickoff Weekend",
    date: new Date(2026, 8, 6, 10, 0),
    location: "GracePoint Kids Wing",
    description: "New year of Kids Ministry launches   inflatables, snacks, all the fun.",
    img: "istockphoto-656916306-612x612.webp",
  },
  {
    id: "young-adults",
    title: "Young Adults Bonfire",
    date: new Date(2026, 8, 13, 18, 30),
    location: "Cherry Creek Park",
    description: "20s & 30s hangout with s'mores, worship, and honest conversation.",
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "membership",
    title: "New Here? Membership Class",
    date: new Date(2026, 8, 27, 11, 0),
    location: "The Commons",
    description: "Everything you want to know about GracePoint over coffee and brunch.",
    img: "pexels-bobbydimas-38232287.jpg",
  },
];

const SERMONS = [
  { title: "Anchored in Hope", speaker: "Pastor Jordan Rivera", date: "Jul 6, 2026", series: "Storms", img: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=900&q=70" },
  { title: "The Weight of Grace", speaker: "Pastor Maya Chen", date: "Jun 29, 2026", series: "Ephesians", img: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=900&q=70" },
  { title: "Neighbors, Not Strangers", speaker: "Pastor Elijah Ford", date: "Jun 22, 2026", series: "Storms", img: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=900&q=70" },
  { title: "The Table Where Everyone Fits", speaker: "Pastor Maya Chen", date: "Jun 15, 2026", series: "Ephesians", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=70" },
  { title: "Prayer That Actually Works", speaker: "Pastor Jordan Rivera", date: "Jun 8, 2026", series: "Practices", img: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=900&q=70" },
  { title: "Rest as Resistance", speaker: "Sarah Okafor", date: "Jun 1, 2026", series: "Practices", img: "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=900&q=70" },
];

function MediaEvents() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [view, setView] = useState<"list" | "grid">("list");
  const [date, setDate] = useState<Date | undefined>();
  const [series, setSeries] = useState("all");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const filteredEvents = useMemo(() => {
    return EVENTS.filter((e) => {
      if (category === "sermons") return false;
      if (query && !e.title.toLowerCase().includes(query.toLowerCase())) return false;
      if (date && e.date.toDateString() !== date.toDateString()) return false;
      return true;
    });
  }, [query, category, date]);

  const grouped = useMemo(() => {
    const map = new Map<string, EventItem[]>();
    filteredEvents.forEach((e) => {
      const key = format(e.date, "MMMM yyyy");
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(e);
    });
    return Array.from(map.entries());
  }, [filteredEvents]);

  const filteredSermons = SERMONS.filter(
    (s) => series === "all" || s.series === series,
  );

  const seriesList = Array.from(new Set(SERMONS.map((s) => s.series)));

  return (
    <>
      <PageHeader
        eyebrow="Media & Events"
        title="What's happening at GracePoint."
        subtitle="Upcoming gatherings, latest sermons, and everything in between."
        image="premium_photo-1769980045169-55ecbf648897.avif"
        noDark
      />

      {/* Filter bar */}
      <section className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-5 py-4 lg:px-8">
          <Popover>
            <PopoverTrigger asChild>
              <button className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm hover:border-primary">
                <CalIcon className="size-4" />
                {date ? format(date, "PP") : "Any date"}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="pointer-events-auto p-3"
                initialFocus
              />
              {date && (
                <button
                  onClick={() => setDate(undefined)}
                  className="w-full border-t border-border p-2 text-xs text-muted-foreground hover:bg-muted"
                >
                  Clear
                </button>
              )}
            </PopoverContent>
          </Popover>

          <div className="relative flex-1 min-w-[180px]">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events"
              className="rounded-full border-border bg-background pl-9"
            />
          </div>

          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[140px] rounded-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="events">Events</SelectItem>
              <SelectItem value="sermons">Sermons only</SelectItem>
            </SelectContent>
          </Select>

          <div className="ml-auto flex items-center gap-1 rounded-full border border-border p-1">
            <button
              onClick={() => setView("list")}
              aria-label="List view"
              className={`grid size-8 place-items-center rounded-full transition ${
                view === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              <List className="size-4" />
            </button>
            <button
              onClick={() => setView("grid")}
              aria-label="Grid view"
              className={`grid size-8 place-items-center rounded-full transition ${
                view === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              <LayoutGrid className="size-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Events */}
      {category !== "sermons" && (
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            {grouped.length === 0 ? (
              <p className="text-center text-muted-foreground">
                No events match your filters.
              </p>
            ) : (
              grouped.map(([month, list]) => (
                <div key={month} className="mb-14 last:mb-0">
                  <h2 className="font-display text-2xl font-bold text-primary">{month}</h2>
                  <StaggerGroup
                    className={`mt-6 ${view === "grid" ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" : "space-y-4"}`}
                  >
                    {list.map((e) =>
                      view === "grid" ? (
                        <StaggerItem key={e.id}>
                          <article id={e.id} className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary hover:shadow-xl scroll-mt-24">
                            <div className="aspect-[4/3] overflow-hidden">
                              <img src={e.img} alt={e.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                                {format(e.date, "EEE, MMM d · h:mma")}
                              </p>
                              <h3 className="mt-2 font-display text-xl font-bold">{e.title}</h3>
                              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                                <MapPin className="size-4" />
                                {e.location}
                              </p>
                              <p className="mt-3 text-sm text-muted-foreground">{e.description}</p>
                            </div>
                          </article>
                        </StaggerItem>
                      ) : (
                        <StaggerItem key={e.id}>
                          <article id={e.id} className="group grid gap-6 rounded-2xl border border-border bg-card p-4 transition hover:border-primary hover:shadow-lg sm:grid-cols-[220px_1fr] sm:p-6 scroll-mt-24">
                            <div className="aspect-[4/3] overflow-hidden rounded-xl">
                              <img src={e.img} alt={e.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                            </div>
                            <div className="flex flex-col justify-center">
                              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                                {format(e.date, "EEE, MMM d · h:mma")}
                              </p>
                              <h3 className="mt-2 font-display text-2xl font-bold">{e.title}</h3>
                              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                                <MapPin className="size-4" />
                                {e.location} ·{" "}
                                <a href="#" className="hover:text-primary">Google Map</a>
                              </p>
                              <p className="mt-3 text-muted-foreground">{e.description}</p>
                              <a
                                href="#"
                                className="mt-4 inline-flex w-fit items-center gap-2 font-semibold text-primary hover:gap-3 transition-all"
                              >
                                Find Out More <ArrowRight className="size-4" />
                              </a>
                            </div>
                          </article>
                        </StaggerItem>
                      ),
                    )}
                  </StaggerGroup>
                </div>
              ))
            )}

            <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary">
                <ArrowLeft className="size-4" /> Previous Events
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary">
                <Download className="size-4" /> Export Listed Events
              </button>
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary">
                Next Events <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Sermons */}
      {category !== "events" && (
        <section className="bg-beige py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Sermons Library
                </p>
                <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                  Watch, listen, repeat.
                </h2>
              </div>
              <Select value={series} onValueChange={setSeries}>
                <SelectTrigger className="w-[200px] rounded-full bg-background">
                  <SelectValue placeholder="Series" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Series</SelectItem>
                  {seriesList.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredSermons.map((s) => (
                <StaggerItem key={s.title}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    className="group cursor-pointer overflow-hidden rounded-2xl bg-background"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/50" />
                      <PlayCircle className="animate-pulse-play absolute left-1/2 top-1/2 size-14 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-2xl" />
                      <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        {s.series}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl font-bold">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {s.speaker} · {s.date}
                      </p>
                    </div>
                  </motion.article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}
    </>
  );
}
