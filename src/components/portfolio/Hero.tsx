import { ArrowDownToLine, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { contact, profile } from "@/content/portfolio";

export function Hero() {
  return (
    <section id="top" className="border-b border-border/70">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-32">
        <div>
          <p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-8 bg-foreground/50" />
            Open to learning and opportunities
          </p>
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.04] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Hi, I&apos;m {profile.name}.
          </h1>
          <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-foreground sm:text-lg">{profile.tagline}</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lifted"
            >
              View My Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30 hover:bg-accent"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <a href={contact.linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href={contact.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md" aria-label="Backend and Agentic AI code visual">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lifted">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="ml-2 font-mono text-[11px] text-muted-foreground">agent_workflow.py</span>
            </div>
            <div className="space-y-4 p-5 font-mono text-xs leading-relaxed text-muted-foreground sm:p-7 sm:text-sm">
              <p><span className="text-foreground">01</span> <span className="text-foreground">query</span> = user.request</p>
              <p><span className="text-foreground">02</span> <span className="text-foreground">context</span> = retriever.search(query)</p>
              <p><span className="text-foreground">03</span> <span className="text-foreground">grade</span> = relevance.check(context)</p>
              <div className="border-l border-foreground/30 pl-4">
                <p><span className="text-foreground">04</span> <span className="text-foreground">if</span> grade.is_relevant:</p>
                <p className="pl-5">response = agent.generate(context)</p>
                <p><span className="text-foreground">05</span> <span className="text-foreground">else</span>:</p>
                <p className="pl-5">query = rewrite(query)</p>
              </div>
              <p className="border-t border-border pt-4"><span className="text-foreground">06</span> return response</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-border/70 pt-4 text-xs text-muted-foreground">
            <span>APIs</span><span>Databases</span><span>Agents</span><span>RAG</span>
          </div>
        </div>
      </div>
    </section>
  );
}