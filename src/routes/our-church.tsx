import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Heart, Users, HandHeart, Sprout, ArrowRight } from "lucide-react";
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
      { title: "Our Church   GracePoint Community Church" },
      {
        name: "description",
        content:
          "Meet the pastors, learn what we believe, and see the story of GracePoint Community Church   a modern Denver church family.",
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

const beliefs = [
  { q: "The Bible", a: "We believe Scripture is inspired, authoritative, and speaks to every part of life today." },
  { q: "God", a: "One God, eternally existing as Father, Son, and Holy Spirit." },
  { q: "Jesus", a: "Fully God, fully human, crucified for our sin, risen, and coming again." },
  { q: "Salvation", a: "By grace alone through faith in Jesus alone   a gift, never earned." },
  { q: "The Church", a: "A diverse, worldwide family called to love God and love people." },
];

function OurChurch() {
  return (
    <>
      <PageHeader
        eyebrow="Our Church"
        title="A family, not a building."
        subtitle="We're a diverse community pursuing Jesus in the heart of Denver and everyone is invited."
        image="premium_photo-1723701869394-f616860b7d48.avif"
        noDark
        noBlue
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
      <section className="bg-beige py-24">
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
              questions - we love a good conversation.
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
