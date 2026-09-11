import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About, Achievements, Education, Interests, Projects, Skills } from "@/components/portfolio/Sections";
import { Contact, Footer, Resume } from "@/components/portfolio/ContactAndFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aryan Thakur — Commerce Student & Aspiring Business Professional" },
      {
        name: "description",
        content:
          "Portfolio of Aryan Thakur — B.Com student interested in business, finance, technology and professional growth. View education, skills, achievements and get in touch.",
      },
      { property: "og:title", content: "Aryan Thakur — Commerce Student & Aspiring Business Professional" },
      {
        property: "og:description",
        content:
          "Portfolio of Aryan Thakur — B.Com student interested in business, finance, technology and professional growth.",
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
        <Education />
        <Skills />
        <Achievements />
        <Projects />
        <Interests />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
