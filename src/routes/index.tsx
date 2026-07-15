import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  PlayCircle,
  Heart,
  Users,
  HandHeart,
  Sparkles,
  Instagram,
  Calendar,
} from "lucide-react";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GracePoint Community Church   Modern church in Denver" },
      {
        name: "description",
        content:
          "Join GracePoint Community Church Sundays 9AM & 11AM in Denver. Modern worship, real community, sermons online, and ways to get involved.",
      },
    ],
  }),
  component: Home,
});

const welcomeCards = [
  {
    icon: Clock,
    title: "Service Times",
    lines: ["Sunday 9:00 AM & 11:00 AM", "Wednesday 7:00 PM"],
  },
  {
    icon: MapPin,
    title: "Find Us",
    lines: ["1420 Riverfront Ave", "Denver, CO 80202"],
  },
  {
    icon: Phone,
    title: "Get In Touch",
    lines: ["(720) 555-0134", "hello@gracepoint.church"],
  },
];

const events = [
  {
    id: "summer-nights",
    date: { day: "16", month: "Aug" },
    title: "Summer Nights: Worship Under the Stars",
    location: "GracePoint Lawn",
    img: "pexels-adrien-olichon-1257089-2537596.jpg",
  },
  {
    id: "serve-day",
    date: { day: "23", month: "Aug" },
    title: "Serve Day: Downtown Outreach",
    location: "Union Station",
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=70",
  },
  {
    id: "kids-kickoff",
    date: { day: "06", month: "Sep" },
    title: "Kids Kickoff Weekend",
    location: "GracePoint Kids Wing",
    img: "istockphoto-656916306-612x612.webp",
  },
  {
    id: "young-adults",
    date: { day: "13", month: "Sep" },
    title: "Young Adults Bonfire",
    location: "Cherry Creek Park",
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=70",
  },
];

const sermons = [
  {
    title: "Anchored in Hope",
    speaker: "Pastor Jordan Rivera",
    date: "Jul 6, 2026",
    img: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "The Weight of Grace",
    speaker: "Pastor Maya Chen",
    date: "Jun 29, 2026",
    img: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "Neighbors, Not Strangers",
    speaker: "Pastor Elijah Ford",
    date: "Jun 22, 2026",
    img: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=900&q=70",
  },
];

const testimonials = [
  {
    quote:
      "GracePoint didn't ask me to have it all figured out. They just asked me to come as I am.",
    name: "Alex M.",
  },
  {
    quote:
      "Our whole family found a home here. The kids beg to come back every week.",
    name: "The Ortiz Family",
  },
  {
    quote:
      "I walked in skeptical and walked out with real friends. That's rare.",
    name: "Priya S.",
  },
];

const igImages = [
  "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=500&q=60",
];

function Home() {
  return (
    <>
      <HeroCarousel />

      {/* Welcome strip */}
      <section className="border-b border-border bg-background py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            {welcomeCards.map(({ icon: Icon, title, lines }) => (
              <StaggerItem key={title}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                  {lines.map((l) => (
                    <p key={l} className="mt-1 text-muted-foreground">
                      {l}
                    </p>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <div className="relative">
              <img
                src="photo-1650852712430-c101a9e31ce5.avif"
                alt="GracePoint congregation gathered together in worship"
                className="aspect-[4/5] w-full rounded-3xl object-cover object-[center_65%]"
              />
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl md:block">
                <p className="font-display text-4xl font-bold">15+</p>
                <p className="text-sm">Years serving Denver</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Our Church
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-balance sm:text-5xl">
              We're a family chasing Jesus in the middle of a busy city.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              GracePoint exists to help people find and follow Jesus. Whether you've been
              in church your whole life or you're checking it out for the first time,
              you belong here.
            </p>
            <Link
              to="/our-church"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all"
            >
              Learn more about us <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Service times band */}
      <section className="bg-[var(--charcoal)] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Join us this week
                </p>
                <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                  Weekly gatherings.
                </h2>
              </div>
              <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                    Sunday Services
                  </p>
                  <p className="mt-3 font-display text-4xl font-bold text-primary">
                    9:00 & 11:00 AM
                  </p>
                  <p className="mt-3 text-white/70">
                    Live worship, kids programs, coffee bar open.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                    Wednesday Night
                  </p>
                  <p className="mt-3 font-display text-4xl font-bold text-primary">
                    7:00 PM
                  </p>
                  <p className="mt-3 text-white/70">
                    Midweek worship + student ministry gatherings.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                What's Happening
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                Upcoming events.
              </h2>
            </div>
            <Link
              to="/media-events"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary"
            >
              See all events <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 -mx-5 overflow-x-auto pb-4 lg:mx-0">
            <StaggerGroup className="flex gap-6 px-5 lg:px-0">
              {events.map((e) => (
                <StaggerItem
                  key={e.title}
                  className="w-[300px] flex-shrink-0 lg:w-auto lg:flex-1"
                >
                  <Link
                    to="/media-events"
                    hash={e.id}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={e.img}
                        alt={e.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute left-4 top-4 grid place-items-center rounded-xl bg-primary px-3 py-2 text-center text-primary-foreground shadow-lg">
                        <span className="font-display text-2xl font-bold leading-none">
                          {e.date.day}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-widest">
                          {e.date.month}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-bold">{e.title}</h3>
                      <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="size-4" /> {e.location}
                      </p>
                      <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                        Find Out More <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Sermons */}
      <section className="bg-beige py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Watch & Listen
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                Recent sermons.
              </h2>
            </div>
            <Link
              to="/media-events"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary"
            >
              Full library <ArrowRight className="size-4" />
            </Link>
          </div>

          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {sermons.map((s) => (
              <StaggerItem key={s.title}>
                <article className="group overflow-hidden rounded-2xl bg-background transition hover:-translate-y-1 hover:shadow-2xl">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/50" />
                    <PlayCircle className="animate-pulse-play absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-2xl" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {s.speaker} · {s.date}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Get involved teaser */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 lg:px-8">
          {[
            {
              title: "Volunteer with us",
              text: "Use your gifts to serve on Sundays and beyond.",
              img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=70",
              img2: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=70",
              cta: "Find your team",
            },
            {
              title: "Join a small group",
              text: "Do life with people who know your name.",
              img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=70",
              img2: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=70",
              cta: "Find a group",
            },
          ].map((b) => (
            <Reveal key={b.title}>
              <Link
                to="/get-involved"
                className="group relative block h-[380px] overflow-hidden rounded-3xl bg-[var(--charcoal)] text-white"
              >
                <img
                  src={b.img}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-0"
                />
                <img
                  src={b.img2}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-8">
                  <h3 className="font-display text-3xl font-bold sm:text-4xl">
                    {b.title}
                  </h3>
                  <p className="mt-2 max-w-md text-white/80">{b.text}</p>
                  <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
                    {b.cta} <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Prayer CTA band */}
      <section className="bg-[var(--charcoal)] py-24 text-white">
        <Reveal>
          <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
            <Heart className="mx-auto size-10 text-primary" />
            <h2 className="mt-6 font-display text-4xl font-bold sm:text-5xl">
              Need prayer? We're here for you.
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Share a request confidentially with our pastoral team. We'll pray for you
              this week.
            </p>
            <Link
              to="/connect"
              className="mt-8 inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition hover:bg-[var(--orange-brand-hover)] hover:scale-105"
            >
              Submit a prayer request
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Testimonials */}
      <TestimonialSlider items={testimonials} />

      {/* Instagram grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Follow along
                </p>
                <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                  @gracepoint.church
                </h2>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"
              >
                <Instagram className="size-4" /> Follow on Instagram
              </a>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-3 gap-2 md:grid-cols-6">
            {igImages.map((img, i) => (
              <a
                key={i}
                href="#"
                className="group relative block aspect-square overflow-hidden rounded-xl"
              >
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 grid place-items-center bg-primary/0 transition group-hover:bg-primary/70">
                  <Instagram className="size-6 text-white opacity-0 transition group-hover:opacity-100" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats mini strip */}
      <section className="border-y border-border bg-beige py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 lg:grid-cols-4 lg:px-8">
          {[
            { n: "1,200+", l: "Weekly attenders", Icon: Users },
            { n: "15", l: "Years in Denver", Icon: Sparkles },
            { n: "22", l: "Active ministries", Icon: HandHeart },
            { n: "48", l: "Small groups", Icon: Calendar },
          ].map(({ n, l, Icon }) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Icon className="mx-auto size-6 text-primary" />
              <p className="mt-3 font-display text-4xl font-bold sm:text-5xl">{n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{l}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

function TestimonialSlider({
  items,
}: {
  items: { quote: string; name: string }[];
}) {
  return (
    <section className="bg-beige py-24">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <StaggerGroup className="space-y-10" stagger={0.15}>
          {items.map((t) => (
            <StaggerItem key={t.name}>
              <blockquote className="font-display text-2xl font-medium leading-snug text-balance sm:text-3xl">
                "{t.quote}"
              </blockquote>
              <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-primary">
                  {t.name}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
