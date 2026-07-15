import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Mail, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHeader, Reveal } from "@/components/site/Reveal";
import { FormField } from "./get-involved";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Connect Plan a Visit or Submit a Prayer Request" },
      {
        name: "description",
        content:
          "Plan your first visit to GracePoint Community Church or share a confidential prayer request with our pastoral team.",
      },
    ],
  }),
  component: Connect,
});

const visitSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  serviceTime: z.string().min(1, "Pick a service time"),
  guests: z.string().min(1, "How many are coming?"),
  firstTime: z.boolean().optional(),
  message: z.string().optional(),
});
type VisitForm = z.infer<typeof visitSchema>;

const prayerSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  request: z.string().min(10, "Share a little more so we can pray specifically"),
  keepPrivate: z.boolean().optional(),
});
type PrayerForm = z.infer<typeof prayerSchema>;

const faqs = [
  { q: "What should I wear?", a: "Whatever you want   jeans and a tee are perfectly normal here." },
  { q: "What about my kids?", a: "GracePoint Kids runs both services for birth–5th grade. Safe, fun, faith-forming." },
  { q: "Where do I park?", a: "Free parking in the Riverfront garage right next door   guest spots up front." },
  { q: "How long is the service?", a: "About 75 minutes: worship, a message, and a moment for prayer." },
  { q: "Am I expected to give?", a: "Not even a little. Giving is for regular attenders   guests, please just come and enjoy." },
];

function Connect() {
  return (
    <>
      <PageHeader
        eyebrow="Connect"
        title="We can't wait to meet you."
        subtitle="Plan a visit, share a prayer request, or find your way here, we're glad you're here."
        image="photo-1474814947326-d835369963a5.avif"
        noDark
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            <Tabs defaultValue="visit" className="w-full">
              <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-2 rounded-full bg-beige p-1.5">
                <TabsTrigger value="visit" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Plan a Visit
                </TabsTrigger>
                <TabsTrigger value="prayer" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Prayer Request
                </TabsTrigger>
              </TabsList>
              <TabsContent value="visit">
                <VisitFormCard />
              </TabsContent>
              <TabsContent value="prayer">
                <PrayerFormCard />
              </TabsContent>
            </Tabs>
          </Reveal>
        </div>
      </section>

      {/* Contact + Map */}
      <section className="bg-beige py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-background aspect-[4/3]">
              <iframe
                title="GracePoint Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-105.005%2C39.75%2C-104.98%2C39.76&layer=mapnik"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Visit us
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Come as you are.
            </h2>
            <ul className="mt-8 space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <Clock className="mt-1 size-5 text-primary" />
                Sundays 9:00 & 11:00 AM · Wed 7:00 PM
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 size-5 text-primary" />
                hello@gracepoint.church
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              First-visit questions.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-10">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-b border-border">
                  <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function VisitFormCard() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<VisitForm>({ resolver: zodResolver(visitSchema) });

  const onSubmit = async (data: VisitForm) => {
    console.log("visit", data);
    await new Promise((r) => setTimeout(r, 500));
    setDone(true);
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
      <AnimatePresence mode="wait">
        {done ? (
          <SuccessState
            key="done"
            title="See you Sunday!"
            body="We'll email you with parking, kids info, and where to find us when you arrive."
          />
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Name" error={errors.name?.message}>
                <Input {...register("name")} placeholder="Your name" />
              </FormField>
              <FormField label="Email" error={errors.email?.message}>
                <Input type="email" {...register("email")} placeholder="you@example.com" />
              </FormField>
            </div>
            <FormField label="Phone (optional)">
              <Input {...register("phone")} placeholder="(555) 000-0000" />
            </FormField>
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Preferred service time" error={errors.serviceTime?.message}>
                <Select onValueChange={(v) => setValue("serviceTime", v, { shouldValidate: true })} value={watch("serviceTime")}>
                  <SelectTrigger><SelectValue placeholder="Pick a time" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sun-9">Sunday 9:00 AM</SelectItem>
                    <SelectItem value="sun-11">Sunday 11:00 AM</SelectItem>
                    <SelectItem value="wed-7">Wednesday 7:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </FormField>
              <FormField label="Number of guests" error={errors.guests?.message}>
                <Input type="number" min={1} {...register("guests")} placeholder="1" />
              </FormField>
            </div>
            <label className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={watch("firstTime")}
                onCheckedChange={(c) => setValue("firstTime", c === true)}
              />
              This is my first time visiting
            </label>
            <FormField label="Anything we should know?">
              <Textarea rows={3} {...register("message")} placeholder="Kids info, accessibility needs, questions…" />
            </FormField>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-[var(--orange-brand-hover)] hover:scale-[1.01] transition disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Plan my visit"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function PrayerFormCard() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PrayerForm>({ resolver: zodResolver(prayerSchema) });

  const onSubmit = async (data: PrayerForm) => {
    console.log("prayer", data);
    await new Promise((r) => setTimeout(r, 500));
    setDone(true);
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
      <AnimatePresence mode="wait">
        {done ? (
          <SuccessState
            key="done"
            title="We're praying with you."
            body="Our pastoral team has received your request. You matter to us."
          />
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Name" error={errors.name?.message}>
                <Input {...register("name")} placeholder="Your name" />
              </FormField>
              <FormField label="Email (optional)" error={errors.email?.message}>
                <Input type="email" {...register("email")} placeholder="you@example.com" />
              </FormField>
            </div>
            <FormField label="Your prayer request" error={errors.request?.message}>
              <Textarea rows={5} {...register("request")} placeholder="Share what's on your heart" />
            </FormField>
            <label className="flex items-start gap-2 rounded-2xl border border-border bg-beige p-4 text-sm">
              <Checkbox
                className="mt-0.5"
                checked={watch("keepPrivate")}
                onCheckedChange={(c) => setValue("keepPrivate", c === true)}
              />
              <span>
                <strong>Keep this private.</strong>{" "}
                <span className="text-muted-foreground">
                  Only our pastoral team will see this request.
                </span>
              </span>
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-[var(--orange-brand-hover)] hover:scale-[1.01] transition disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Submit request"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function SuccessState({ title, body }: { title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-10 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="mx-auto grid size-16 place-items-center rounded-full bg-primary text-primary-foreground"
      >
        <Check className="size-8" strokeWidth={3} />
      </motion.div>
      <h3 className="mt-5 font-display text-3xl font-bold">{title}</h3>
      <p className="mt-3 text-muted-foreground">{body}</p>
    </motion.div>
  );
}
