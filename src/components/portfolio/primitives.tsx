import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  BrainCircuit,
  Bot,
  Briefcase,
  Check,
  Code2,
  Container,
  Compass,
  Cpu,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  HeartHandshake,
  Landmark,
  LineChart,
  Linkedin,
  Mail,
  Search,
  Server,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Workflow,
  Puzzle,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  BrainCircuit,
  Bot,
  Briefcase,
  Check,
  Code2,
  Container,
  Compass,
  Cpu,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  HeartHandshake,
  Landmark,
  LineChart,
  Linkedin,
  Mail,
  Search,
  Server,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Workflow,
  Puzzle,
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 border-t border-border/70 py-20 sm:py-24", className)}>
      <div className="mx-auto w-full max-w-5xl px-6">
        {(eyebrow || title) && (
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
            )}
            {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>}
          </div>
        )}
        <div className={cn(eyebrow || title ? "mt-10" : "")}>{children}</div>
      </div>
    </section>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-lifted",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name];
  if (!Cmp) return null;
  return <Cmp className={cn("h-5 w-5", className)} strokeWidth={1.6} aria-hidden="true" />;
}
