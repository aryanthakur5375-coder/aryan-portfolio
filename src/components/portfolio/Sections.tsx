import { ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { about, achievements, certifications, currentFocus, education, projects, skillGroups } from "@/content/portfolio";
import { Card, Icon, Section } from "./primitives";

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Building with a practical, technical mindset">
      <div className="max-w-3xl space-y-4">
        {about.text.map((paragraph) => (
          <p key={paragraph} className="text-base leading-8 text-muted-foreground">{paragraph}</p>
        ))}
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {about.cards.map((card) => (
          <Card key={card.title} className="p-5">
            <Icon name={card.icon} className="h-6 w-6 text-foreground" />
            <h3 className="mt-5 font-display text-base font-semibold text-foreground">{card.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{card.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="Technical Skills" title="Tools I use to build and learn">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <Card key={group.name} className="p-5">
            <h3 className="font-display text-base font-semibold text-foreground">{group.name}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-md border border-border bg-accent px-2.5 py-1.5 text-xs font-medium text-muted-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, featured = false }: { project: (typeof projects)[number]; featured?: boolean }) {
  return (
    <Card className={featured ? "border-foreground/20 p-6 shadow-lifted sm:p-8" : "p-6 sm:p-7"}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{project.category}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">{project.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-accent">
            GitHub <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground">Live Demo <ExternalLink className="h-3.5 w-3.5" /></a>}
        </div>
      </div>
      <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => <span key={technology} className="rounded-md bg-accent px-2.5 py-1.5 text-xs font-medium text-muted-foreground">{technology}</span>)}
      </div>
      <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Key features</h4>
          <ul className="mt-4 space-y-3">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2.5 text-sm leading-6 text-muted-foreground"><Check className="mt-1 h-4 w-4 shrink-0 text-foreground" />{feature}</li>
            ))}
          </ul>
        </div>
        {"architecture" in project && project.architecture && (
          <div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Architecture flow</h4>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {project.architecture.map((step, index) => (
                <span key={step} className="inline-flex items-center gap-2 text-xs font-medium text-foreground">
                  <span className="rounded-md border border-border bg-accent px-2.5 py-2">{step}</span>
                  {index < project.architecture.length - 1 && <span className="text-muted-foreground">→</span>}
                </span>
              ))}
            </div>
            <div className="mt-4 space-y-2 border-l border-foreground/30 pl-4 text-xs leading-5 text-muted-foreground">
              {"branches" in project && project.branches?.map((branch) => <p key={branch}>{branch}</p>)}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Projects" title="Systems built to solve real problems" description="A closer look at the backend and AI work I have been exploring.">
      <div className="space-y-5">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} featured={index === 0} />)}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic foundation">
      <div className="relative space-y-5 pl-6 before:absolute before:left-1 before:top-2 before:h-full before:w-px before:bg-border">
        {education.map((item) => (
          <div key={item.degree} className="relative">
            <span className="absolute -left-[21px] top-7 h-2.5 w-2.5 rounded-full border-2 border-foreground bg-background" />
            <Card className="p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-foreground">{item.degree}</h3>
                <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{item.institution}</p>
              <ul className="mt-4 flex flex-wrap gap-2">{item.details.map((detail) => <li key={detail} className="rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-muted-foreground">{detail}</li>)}</ul>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements & Activities" title="Consistent learning beyond coursework">
      <div className="grid gap-4 md:grid-cols-3">
        {achievements.map((item) => <Card key={item.title} className="p-5"><Icon name={item.icon} className="h-6 w-6 text-foreground" /><h3 className="mt-5 font-display text-base font-semibold text-foreground">{item.title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p></Card>)}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Training & Certifications" title="Learning through focused study">
      <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
        {certifications.map((certification) => <div key={certification.title} className="flex gap-3 border-b border-border pb-4"><Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" /><div><h3 className="text-sm font-semibold text-foreground">{certification.title}</h3><p className="mt-1 text-sm text-muted-foreground">{certification.issuer}</p></div></div>)}
      </div>
    </Section>
  );
}

export function CurrentFocus() {
  return (
    <Section id="focus" eyebrow="Current Focus" title="What I'm currently exploring">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {currentFocus.map((item) => <Card key={item.title} className="p-5"><Icon name={item.icon} className="h-6 w-6 text-foreground" /><h3 className="mt-5 font-display text-base font-semibold text-foreground">{item.title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p></Card>)}
      </div>
    </Section>
  );
}