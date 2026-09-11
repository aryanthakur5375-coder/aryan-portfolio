import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About, Achievements, Certifications, CurrentFocus, Education, Projects, Skills } from "@/components/portfolio/Sections";
import { Contact, Footer, Resume } from "@/components/portfolio/ContactAndFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aryan Thakur | CS Student & Backend Developer" },
      {
        name: "description",
        content:
          "Personal portfolio of Aryan Thakur — Computer Science student focused on backend development, APIs, databases and Agentic AI.",
      },
      { property: "og:title", content: "Aryan Thakur | CS Student & Backend Developer" },
      {
        property: "og:description",
        content:
          "Personal portfolio of Aryan Thakur — Computer Science student focused on backend development, APIs, databases and Agentic AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Certifications />
        <CurrentFocus />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
