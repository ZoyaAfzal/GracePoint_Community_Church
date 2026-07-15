import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Heart, Users, HandHeart, Sprout, Instagram, Youtube, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHeader, Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/our-church")({
  head: () => ({
    meta: [
      { title: "Our Church — GracePoint Community Church" },
      {
        name: "description",
        content:
          "Meet the pastors, learn what we believe, and see the story of GracePoint Community Church — a modern Denver church family.",
      },
    ],
  }),
  component: OurChurch,
});

const timeline = [
  { year: "2011", title: "GracePoint is born", text: "A small group of 30 friends starts meeting in a downtown coffee shop." },
  { year: "2014", title: "First building", text: "We move into our first permanent home in the Riverfront district." },
  { year: "2018", title: "Kids Wing opens", text: "A dedicated space built for families with kids of every age." },
  { year: "2022", title: "Serve the city", text: "Launch of our outreach initiatives with 12 local partners." },
  { year: "2026", title: "Two services + online", text: "Now gathering 1,200+ every weekend across Sundays and midweek." },
];

const values = [
  { Icon: Heart, title: "Faith", text: "Rooted in Jesus, honest about the journey." },
  { Icon: Users, title: "Community", text: "Nobody walks alone. Real friendship, real depth." },
  { Icon: HandHeart, title: "Service", text: "Love our city with our hands, not just our words." },
  { Icon: Sprout, title: "Growth", text: "We're all learners. Curiosity welcomed." },
];

const leaders = [
  {
    name: "Pastor Jordan Rivera",
    role: "Lead Pastor",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=70",
    bio: "Jordan planted GracePoint in 2011 and loves espresso, mountain trails, and Ephesians.",
  },
  {
    name: "Pastor Maya Chen",
    role: "Teaching Pastor",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=70",
    bio: "Maya teaches, writes, and disciples students. Ask her about theology or tacos.",
  },
  {
    name: "Pastor Elijah Ford",
    role: "Outreach & Justice",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=70",
    bio: "Eli leads our city partnerships and dreams about a more generous church.",
  },
  {
    name: "Sarah Okafor",
    role: "Worship Director",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=70",
    bio: "Sarah shapes our worship gatherings and mentors our musicians.",
  },
];

const beliefs = [
  { q: "The Bible", a: "We believe Scripture is inspired, authoritative, and speaks to every part of life today." },
  { q: "God", a: "One God, eternally existing as Father, Son, and Holy Spirit." },
  { q: "Jesus", a: "Fully God, fully human, crucified for our sin, risen, and coming again." },
  { q: "Salvation", a: "By grace alone through faith in Jesus alone — a gift, never earned." },
  { q: "The Church", a: "A diverse, worldwide family called to love God and love people." },
];

function OurChurch() {
  return (
    <>
      <PageHeader
        eyebrow="Our Church"
        title="A family, not a building."
        subtitle="We're a diverse community pursuing Jesus in the heart of Denver — and everyone is invited."
        image="https://images.unsplash.com/photo-1520637836862-4d197d17c93a?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Story / Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              How we got here.
            </h2>
          </Reveal>
          <div className="relative mt-16">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border lg:left-1/2" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative pl-12 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 0 ? "" : "lg:[&>div]:col-start-2"
                  }`}
                >
                  <div className="absolute left-2.5 top-3 grid size-4 place-items-center rounded-full bg-primary lg:left-1/2 lg:-translate-x-1/2">
                    <span className="size-1.5 rounded-full bg-primary-foreground" />
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
                    <span className="font-display text-3xl font-bold text-primary">
                      {t.year}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-bold">{t.title}</h3>
                    <p className="mt-2 text-muted-foreground">{t.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="bg-[var(--soft-grey)] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              What We Believe
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Rooted in the historic Christian faith.
            </h2>
            <p className="mt-5 text-muted-foreground">
              You're welcome here even if you're not sure what you believe. Bring your
              questions — we love a good conversation.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {beliefs.map((b) => (
                <AccordionItem key={b.q} value={b.q} className="border-b border-border">
                  <AccordionTrigger className="py-5 text-left font-display text-xl font-semibold hover:no-underline">
                    {b.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {b.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Leaders */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Leadership
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Meet the team.
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((p) => (
              <StaggerItem key={p.name}>
                <article className="group overflow-hidden rounded-2xl bg-card">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-full gap-2 bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform duration-500 group-hover:translate-y-0">
                      <a href="#" aria-label={`${p.name} on Instagram`} className="grid size-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-primary">
                        <Instagram className="size-4" />
                      </a>
                      <a href="#" aria-label={`${p.name} on YouTube`} className="grid size-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-primary">
                        <Youtube className="size-4" />
                      </a>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold">{p.name}</h3>
                    <p className="text-sm text-primary">{p.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{p.bio}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--charcoal)] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Our Values
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              What shapes us.
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, text }) => (
              <StaggerItem key={title}>
                <motion.div
                  whileHover={{ rotateX: 6, rotateY: -6, translateY: -4 }}
                  transition={{ type: "spring", stiffness: 220, damping: 15 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                >
                  <div className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-white/70">{text}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Come meet us this Sunday.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              First-time visitors get free coffee (obviously) and someone to walk you in.
            </p>
            <Link
              to="/connect"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/20 hover:scale-105 transition"
            >
              Plan a Visit <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
