import { ArrowRight, FileText } from "lucide-react";
import { profile } from "@/content/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Quiet geometric accent */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-border" />
        <div className="absolute -right-8 top-32 h-44 w-44 rounded-full border border-border/70" />
        <div className="absolute right-24 top-24 h-3 w-3 rounded-full bg-foreground/25" />
        <div className="absolute -left-16 bottom-8 hidden h-40 w-40 rounded-full border border-border/70 lg:block" />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-8 px-6 py-24 sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
          Open to opportunities
        </span>

        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>

        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {profile.tagline}
        </p>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{profile.intro}</p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={profile.resumeUrl}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-lifted hover:brightness-110"
          >
            <FileText className="h-4 w-4" />
            View My Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-foreground/30 hover:bg-accent"
          >
            Contact Me
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
