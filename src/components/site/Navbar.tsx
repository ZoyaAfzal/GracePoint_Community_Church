import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/our-church", label: "Our Church" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/media-events", label: "Media & Events" },
  { to: "/connect", label: "Connect" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const pathname = location.pathname;
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !onHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-[var(--charcoal)]/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-white">
          <span className="grid size-9 place-items-center rounded-xl bg-primary">
            <Flame className="size-5 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Grace<span className="text-primary">Point</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              data-active={pathname === item.to}
              className="nav-underline text-sm font-medium text-white/90 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/connect"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-[var(--orange-brand-hover)] hover:scale-[1.03] active:scale-95"
          >
            Plan a Visit
          </Link>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="grid size-10 place-items-center rounded-full text-white lg:hidden"
        >
          <Menu className="size-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-[var(--charcoal)] p-6 text-white"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold">
                  Grace<span className="text-primary">Point</span>
                </span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid size-10 place-items-center rounded-full"
                >
                  <X className="size-6" />
                </button>
              </div>
              <motion.ul
                className="mt-10 space-y-1"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                }}
              >
                {NAV.map((item) => (
                  <motion.li
                    key={item.to}
                    variants={{
                      hidden: { opacity: 0, x: 24 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      to={item.to}
                      className="block border-b border-white/10 py-4 font-display text-2xl font-semibold"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: 24 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="pt-6"
                >
                  <Link
                    to="/connect"
                    className="block rounded-full bg-primary px-6 py-3 text-center text-base font-semibold text-primary-foreground"
                  >
                    Plan a Visit
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
