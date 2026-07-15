import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Music,
  Baby,
  Coffee,
  Video,
  HandHeart,
  Users,
  Check,
  ArrowRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHeader, Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved   GracePoint Community Church" },
      {
        name: "description",
        content:
          "Volunteer, join a small group, or give   there's a place for you to belong and serve at GracePoint Community Church.",
      },
    ],
  }),
  component: GetInvolved,
});

const ministries = [
  { Icon: Music, title: "Worship Team", text: "Musicians, vocalists, and creatives leading Sunday worship." },
  { Icon: Baby, title: "Kids Ministry", text: "Love on kids birth–5th grade in a safe, fun environment." },
  { Icon: Coffee, title: "Hospitality", text: "Welcome guests, brew coffee, make people feel at home." },
  { Icon: Video, title: "Media & Tech", text: "Cameras, sound, streaming, design   build behind the scenes." },
  { Icon: HandHeart, title: "Outreach", text: "Serve the city through partnerships with local nonprofits." },
  { Icon: Users, title: "Youth Ministry", text: "Mentor middle and high schoolers on Wednesday nights." },
];

const volunteerSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  ministry: z.string().min(1, "Please pick a ministry"),
  availability: z.string().min(2, "Let us know when you're available"),
  message: z.string().optional(),
});
type VolunteerForm = z.infer<typeof volunteerSchema>;

function GetInvolved() {
  const [openMinistry, setOpenMinistry] = useState<string | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Get Involved"
        title="There's a place for you here."
        subtitle="Serve a team, join a group, or step into something new. GracePoint runs on volunteers who love people."
        image="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=2000&q=80"
        noDark
      />

      {/* Volunteer */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Volunteer
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                Use what you've got. Serve where you're needed.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Every Sunday takes 100+ volunteers. Whether you have five minutes or five
                hours, we've got a team for you.
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map(({ Icon, title, text }) => (
              <StaggerItem key={title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition hover:border-primary hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                  <p className="mt-2 flex-1 text-muted-foreground">{text}</p>
                  <button
                    onClick={() => setOpenMinistry(title)}
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-[var(--orange-brand-hover)] hover:scale-105 transition"
                  >
                    I'm interested <ArrowRight className="size-4" />
                  </button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Give band */}
      <section className="bg-[var(--charcoal)] py-24 text-white">
        <Reveal>
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Give
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Fuel what God is doing at GracePoint.
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Every gift plants seeds for our city   kids programs, outreach partners,
              worship, and beyond.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 hover:scale-105 transition"
            >
              Give Online <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </section>

      <VolunteerDialog
        open={!!openMinistry}
        ministry={openMinistry}
        onClose={() => setOpenMinistry(null)}
      />
    </>
  );
}

function VolunteerDialog({
  open,
  ministry,
  onClose,
}: {
  open: boolean;
  ministry: string | null;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerForm>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: { ministry: ministry ?? "" },
  });

  const ministryValue = watch("ministry");

  const onSubmit = async (data: VolunteerForm) => {
    console.log("volunteer signup", data);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 250);
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="max-w-lg">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mx-auto grid size-16 place-items-center rounded-full bg-primary text-primary-foreground"
              >
                <Check className="size-8" strokeWidth={3} />
              </motion.div>
              <h3 className="mt-5 font-display text-2xl font-bold">You're in!</h3>
              <p className="mt-2 text-muted-foreground">
                A team lead will reach out within a few days.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">
                  Sign up: {ministry}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
                <FormField label="Name" error={errors.name?.message}>
                  <Input {...register("name")} placeholder="Your full name" />
                </FormField>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField label="Email" error={errors.email?.message}>
                    <Input type="email" {...register("email")} placeholder="you@example.com" />
                  </FormField>
                  <FormField label="Phone" error={errors.phone?.message}>
                    <Input {...register("phone")} placeholder="(555) 000-0000" />
                  </FormField>
                </div>
                <FormField label="Ministry" error={errors.ministry?.message}>
                  <Select
                    value={ministryValue}
                    onValueChange={(v) => setValue("ministry", v, { shouldValidate: true })}
                  >
                    <SelectTrigger><SelectValue placeholder="Pick a ministry" /></SelectTrigger>
                    <SelectContent>
                      {ministries.map((m) => (
                        <SelectItem key={m.title} value={m.title}>
                          {m.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormField>
                <FormField label="Availability" error={errors.availability?.message}>
                  <Input {...register("availability")} placeholder="Sunday mornings, Wednesday evenings…" />
                </FormField>
                <FormField label="Anything else?">
                  <Textarea rows={3} {...register("message")} placeholder="Tell us anything helpful" />
                </FormField>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--orange-brand-hover)] disabled:opacity-60"
                >
                  {isSubmitting ? "Sending…" : "Submit"}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

export function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="mb-1.5 block text-sm font-medium">{label}</Label>
      <motion.div animate={error ? { x: [0, -6, 6, -4, 4, 0] } : {}} transition={{ duration: 0.35 }}>
        <div className={error ? "[&_input,&_textarea,&_button]:!border-destructive" : ""}>
          {children}
        </div>
      </motion.div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-xs text-destructive"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
