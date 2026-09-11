import { about, achievements, education, interests, projects, projectsEmptyMessage, skills } from "@/content/portfolio";
import { Card, Icon, Section } from "./primitives";

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="A little about me">
      <div className="max-w-3xl space-y-4">
        {about.text.map((p) => (
          <p key={p} className="text-base leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {about.cards.map((card) => (
          <Card key={card.title}>
            <Icon name={card.icon} className="h-6 w-6 text-foreground" />
            <h3 className="mt-4 font-display text-base font-semibold text-foreground">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="My academic path">
      <div className="relative space-y-6 pl-6 before:absolute before:left-1 before:top-2 before:h-full before:w-px before:bg-border">
        {education.map((item) => (
          <div key={item.degree} className="relative">
            <span className="absolute -left-[21px] top-2 h-2.5 w-2.5 rounded-full border-2 border-foreground bg-background" />
            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-foreground">{item.degree}</h3>
                <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{item.institution}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.details.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-border bg-accent px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I bring to the table">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <Card key={skill.name} className="p-5">
            <h3 className="text-sm font-semibold text-foreground">{skill.name}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{skill.note}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements & Activities" title="Beyond the classroom">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item) => (
          <Card key={item.category} className="p-5">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {item.category}
            </span>
            <h3 className="mt-2 text-sm font-semibold text-foreground">{item.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects & Experience" title="Where I'm headed">
      {projects.length === 0 ? (
        <Card className="border-dashed">
          <p className="text-center text-sm leading-relaxed text-muted-foreground">{projectsEmptyMessage}</p>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-foreground">{p.title}</h3>
                <span className="text-xs font-medium text-muted-foreground">{p.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{p.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
}

export function Interests() {
  return (
    <Section id="interests" eyebrow="What I'm Interested In" title="Areas I want to grow in">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map((item) => (
          <Card key={item.title} className="flex items-start gap-4 p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-accent">
              <Icon name={item.icon} className="h-5 w-5 text-foreground" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
