import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Facebook, Music2, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-[var(--charcoal)] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/GracePoint Community Church - Logo design.png"
              alt="GracePoint Community Church"
              className="h-10 w-auto"
            />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            A modern community pursuing Jesus together. Everyone is welcome   bring
            questions, come as you are.
          </p>
          <address className="mt-4 not-italic text-sm text-white/70">
            1420 Riverfront Ave
            <br />
            Denver, CO 80202
            <br />
            (720) 555-0134
          </address>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-white/60">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["Our Church", "/our-church"],
              ["Get Involved", "/get-involved"],
              ["Media & Events", "/media-events"],
              ["Connect", "/connect"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="text-white/80 transition hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-white/60">
            Latest Sermons
          </h4>
          <ul className="mt-4 space-y-3">
            {[
              {
                title: "Anchored in Hope",
                img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=200&q=60",
              },
              {
                title: "The Weight of Grace",
                img: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=200&q=60",
              },
            ].map((s) => (
              <li key={s.title} className="flex items-center gap-3">
                <img
                  src={s.img}
                  alt=""
                  className="size-14 rounded-lg object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{s.title}</p>
                  <p className="text-xs text-white/60">Pastor J. Rivera</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-white/60">
            Stay Connected
          </h4>
          <p className="mt-4 text-sm text-white/70">
            Weekly encouragement + event updates in your inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSubscribed(true);
            }}
            className="mt-4 flex overflow-hidden rounded-full border border-white/15 bg-white/5"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-white/40"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="grid w-11 place-items-center bg-primary text-primary-foreground transition hover:bg-[var(--orange-brand-hover)]"
            >
              <ArrowRight className="size-4" />
            </button>
          </form>
          {subscribed && (
            <p className="mt-2 text-xs text-primary">Thanks   you're on the list.</p>
          )}
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "YouTube" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Music2, label: "Spotify" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="group grid size-10 place-items-center rounded-full border border-white/15 transition hover:scale-110 hover:border-primary hover:bg-primary"
              >
                <Icon className="size-4 transition group-hover:text-primary-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/50 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} GracePoint Community Church. All rights reserved.</p>
          <p>Built with care.</p>
        </div>
      </div>
    </footer>
  );
}
