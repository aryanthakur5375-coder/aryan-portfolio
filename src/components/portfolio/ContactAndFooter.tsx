import { useState, type FormEvent } from "react";
import { ArrowDown, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { contact, profile, socials } from "@/content/portfolio";
import { Card, Icon, Section } from "./primitives";

export function Resume() {
  return (
    <Section id="resume" className="border-t border-border/70">
      <div className="rounded-2xl border border-border bg-card px-6 py-14 text-center shadow-soft">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Want to know more about me?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          My resume brings together my education, skills and goals in one place.
        </p>
        <a
          href={profile.resumeUrl}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-lifted hover:brightness-110"
        >
          <ArrowDown className="h-4 w-4" />
          Download Resume
        </a>
      </div>
    </Section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
    toast.success("Message ready to send", {
      description: "Connect a real email address to deliver messages to Aryan.",
    });
  }

  const details = [
    { icon: Mail, label: "Email", value: contact.email },
    { icon: Phone, label: "Phone", value: contact.phone },
    { icon: MapPin, label: "Location", value: contact.location },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in touch"
      description="Whether it's an opportunity, a question or just a hello — I'd love to hear from you."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {details.map((item) => (
            <Card key={item.label} className="flex items-center gap-4 p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-accent">
                <item.icon className="h-4.5 w-4.5 text-foreground" strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-0.5 text-sm font-medium text-foreground">{item.value}</p>
              </div>
            </Card>
          ))}
          <Card className="flex items-center gap-4 p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-accent">
              <Icon name="Linkedin" className="h-4.5 w-4.5 text-foreground" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">LinkedIn</p>
              <a
                href={contact.linkedinUrl}
                className="mt-0.5 block text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                {contact.linkedin}
              </a>
            </div>
          </Card>
        </div>

        <Card className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground/40 focus:ring-2 focus:ring-ring/20"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground/40 focus:ring-2 focus:ring-ring/20"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Write your message…"
                className="w-full resize-y rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground/40 focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-lifted hover:brightness-110"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
            {sent && (
              <p className="text-sm text-muted-foreground">
                Thanks for reaching out! Aryan will get back to you soon.
              </p>
            )}
          </form>
        </Card>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-xs text-muted-foreground">© 2026 {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <Icon name={social.icon} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
