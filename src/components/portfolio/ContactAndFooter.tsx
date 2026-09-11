import { useState, type FormEvent } from "react";
import { ArrowDownToLine, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { contact, profile, socials } from "@/content/portfolio";
import { Card, Section } from "./primitives";

export function Resume() {
  return (
    <Section id="resume" className="border-t border-border/70">
      <div className="rounded-xl bg-primary px-6 py-14 text-center shadow-lifted sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">Resume</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">Want to know more about me?</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-primary-foreground/75">Take a look at my resume to explore my education, technical skills, projects and achievements.</p>
        <a href={profile.resumeUrl} download className="mt-8 inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"><ArrowDownToLine className="h-4 w-4" />Download Resume</a>
      </div>
    </Section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
    toast.success("Message ready to send", { description: "The form is validated, but email delivery is not connected yet." });
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Let's connect" description="I'm always interested in learning, building, and connecting with people working on interesting technology and software projects.">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5">
          <div className="space-y-4 text-sm">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-foreground transition-colors hover:text-muted-foreground"><Mail className="h-4 w-4 text-muted-foreground" />{contact.email}</a>
            <a href={`tel:${contact.phone.replaceAll("-", "")}`} className="flex items-center gap-3 text-foreground transition-colors hover:text-muted-foreground"><Phone className="h-4 w-4 text-muted-foreground" />{contact.phone}</a>
            <a href={contact.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-foreground transition-colors hover:text-muted-foreground"><Linkedin className="h-4 w-4 text-muted-foreground" />{contact.linkedin}</a>
            <a href={contact.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-foreground transition-colors hover:text-muted-foreground"><Github className="h-4 w-4 text-muted-foreground" />{contact.github}</a>
          </div>
          <p className="border-l-2 border-foreground/30 pl-4 text-sm leading-7 text-muted-foreground">I&apos;m happy to talk about backend systems, APIs, databases, AI projects, or opportunities to learn and contribute.</p>
        </div>

        <Card className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-foreground">Name</label><input id="contact-name" name="name" required placeholder="Your name" className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground/40 focus:ring-2 focus:ring-ring/20" /></div>
              <div><label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground">Email</label><input id="contact-email" name="email" type="email" required placeholder="you@example.com" className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground/40 focus:ring-2 focus:ring-ring/20" /></div>
            </div>
            <div><label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground">Message</label><textarea id="contact-message" name="message" required rows={5} placeholder="Write your message…" className="w-full resize-y rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground/40 focus:ring-2 focus:ring-ring/20" /></div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lifted"><Send className="h-4 w-4" />Send Message</button>
            {sent && <p className="text-sm text-muted-foreground">Thanks for reaching out. The message is ready, but no email was sent because delivery is not connected.</p>}
          </form>
        </Card>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="font-display text-sm font-semibold text-foreground">{profile.name}</p><p className="mt-1 text-xs text-muted-foreground">Computer Science Student · Backend Development · Agentic AI</p></div>
        <div className="flex items-center gap-3">{socials.map((social) => <a key={social.label} href={social.url} target={social.label === "Email" ? undefined : "_blank"} rel={social.label === "Email" ? undefined : "noreferrer"} aria-label={social.label} className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"><SocialIcon name={social.icon} /></a>)}</div>
        <p className="text-xs text-muted-foreground">© 2026 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === "Github") return <Github className="h-4 w-4" />;
  if (name === "Linkedin") return <Linkedin className="h-4 w-4" />;
  return <Mail className="h-4 w-4" />;
}