# Personal Portfolio — Aryan Thakur

A single-page, one-scroll portfolio with a sticky top navigation. Clean, light, minimal and professional. All personal details that were not provided appear as clearly marked placeholders that are easy to swap out later.

## Look and feel

- Off-white background (#F7F8FA), white cards, very subtle grey borders and soft shadows.
- Deep navy / charcoal for headings, buttons and icons; muted grey for secondary text.
- Manrope for headings, Inter for body text.
- Moderate rounded corners, generous whitespace, gentle hover states, minimal fade-in on scroll.
- Fully responsive: single column on mobile, two columns on tablet, roomy layout on desktop.

## Sections (in order)

1. **Navigation** — sticky, translucent bar: name on the left; About, Education, Skills, Achievements, Resume, Contact links that smooth-scroll. Mobile: compact menu.
2. **Hero** — name, tagline "Commerce Student | Aspiring Business Professional | Lifelong Learner", the intro paragraph, and two buttons (View My Resume, Contact Me). A quiet geometric accent shape beside the text, no photo.
3. **About Me** — short intro plus four minimal cards: Education, Interests, Skills, Career Goal, each with a dark line icon.
4. **Education** — timeline-style card for Bachelor of Commerce with placeholders for college/university, graduation year, and key subjects.
5. **Skills** — grid of skill cards: Business & Commerce, Microsoft Excel, Communication, Problem Solving, Basic Computer Skills, Teamwork, Presentation, Time Management.
6. **Achievements & Activities** — small elegant cards with placeholders for sports, college societies, competitions, certifications, and other accomplishments.
7. **Projects / Experience** — currently shows the line "Currently building my skills and working towards my first professional projects." Built so real entries can be dropped in later.
8. **What I'm Interested In** — icon cards: Business, Finance, Banking, Technology, Business Process Services, Data & Analytics, Professional Development.
9. **Resume** — "Want to know more about me?" with a prominent Download Resume button pointing at a placeholder file until the real resume is supplied.
10. **Contact** — email, phone, LinkedIn and location as placeholders, next to a Name / Email / Message form with a Send Message button.
11. **Footer** — "© 2026 Aryan Thakur. All rights reserved." with small LinkedIn and professional profile icons.

## Easy editing

All text lives in one content file (name, tagline, intro, education, skills, achievements, projects, interests, contact links). Adding or removing a skill, achievement, or project means editing one list — no layout work needed.

## Contact form behaviour

There is no backend on this project yet, so the form will validate the fields and show a confirmation message, but will not deliver mail. If Aryan wants real submissions (stored messages or an email notification), that needs the built-in backend enabled — tell me and I'll add it as a follow-up.

## Technical notes

- Rewrites `src/routes/index.tsx` as the single page; section components under `src/components/portfolio/`, content in `src/content/portfolio.ts`.
- Colour tokens, fonts and shadows added to `src/styles.css` as semantic tokens; fonts loaded via a `<link>` in `src/routes/__root.tsx`.
- Page title, description and social tags set in the index route head.
- Smooth scrolling via anchor ids and CSS `scroll-behavior`, with scroll-margin so the sticky bar doesn't overlap headings.
