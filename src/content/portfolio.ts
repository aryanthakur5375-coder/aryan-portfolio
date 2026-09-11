// Edit this file to update the portfolio content.
// Placeholders are marked with [ ] — replace them with real details.

export const profile = {
  name: "Aryan Thakur",
  tagline: "Commerce Student | Aspiring Business Professional | Lifelong Learner",
  intro:
    "Hello, I'm Aryan Thakur. I am a B.Com student interested in business, technology, finance, and learning new skills. I enjoy developing my knowledge and exploring opportunities where I can grow professionally.",
  resumeUrl: "#resume", // Replace with a link to the real resume file (e.g. /resume.pdf)
};

export const about = {
  text: [
    "I'm currently pursuing a Bachelor of Commerce, building a strong foundation in accounting, business studies and economics.",
    "Alongside my coursework, I spend time improving practical skills like spreadsheets, communication and presentation — the things that make a difference at work, not just in exams.",
  ],
  cards: [
    {
      icon: "GraduationCap",
      title: "Education",
      description: "Bachelor of Commerce, focused on business, accounting and economics.",
    },
    {
      icon: "Compass",
      title: "Interests",
      description: "Business, finance, banking and how technology shapes them.",
    },
    {
      icon: "Sparkles",
      title: "Skills",
      description: "Excel, communication, problem solving and teamwork.",
    },
    {
      icon: "Target",
      title: "Career Goal",
      description: "To begin my career in a business or finance role and keep growing.",
    },
  ],
};

export const education = [
  {
    degree: "Bachelor of Commerce (B.Com)",
    institution: "[College / University name]",
    period: "[Graduation year]",
    details: [
      "[Relevant subject or area of interest]",
      "[Relevant subject or area of interest]",
      "[Relevant subject or area of interest]",
    ],
  },
];

export const skills = [
  { name: "Business & Commerce", note: "Core commerce concepts and business studies" },
  { name: "Microsoft Excel", note: "Spreadsheets, formulas and basic analysis" },
  { name: "Communication", note: "Clear written and verbal communication" },
  { name: "Problem Solving", note: "Breaking problems down and finding practical answers" },
  { name: "Basic Computer Skills", note: "Office tools, documents and everyday software" },
  { name: "Teamwork", note: "Working well in groups and shared projects" },
  { name: "Presentation", note: "Preparing and delivering clear presentations" },
  { name: "Time Management", note: "Planning, prioritising and meeting deadlines" },
];

export const achievements = [
  { category: "Sports", title: "[Sports achievement]", description: "[Add details here]" },
  { category: "College Society", title: "[Society or club activity]", description: "[Add details here]" },
  { category: "Competition", title: "[Competition or event]", description: "[Add details here]" },
  { category: "Certification", title: "[Certification name]", description: "[Issuing body and year]" },
  { category: "Other", title: "[Other accomplishment]", description: "[Add details here]" },
];

// Add project or internship entries here; the section shows a placeholder while empty.
export const projects: { title: string; role: string; description: string; period: string }[] = [];

export const projectsEmptyMessage =
  "Currently building my skills and working towards my first professional projects.";

export const interests = [
  { icon: "Briefcase", title: "Business", description: "How organisations are built and run." },
  { icon: "LineChart", title: "Finance", description: "Markets, investing and financial planning." },
  { icon: "Landmark", title: "Banking", description: "Banking operations and financial services." },
  { icon: "Cpu", title: "Technology", description: "Tools that make business work better." },
  { icon: "Workflow", title: "Business Process Services", description: "Operations, process and delivery." },
  { icon: "BarChart3", title: "Data & Analytics", description: "Turning numbers into decisions." },
  { icon: "TrendingUp", title: "Professional Development", description: "Learning that compounds over time." },
];

export const contact = {
  email: "[your.email@example.com]",
  phone: "[+91 00000 00000]",
  linkedin: "[linkedin.com/in/your-profile]",
  linkedinUrl: "#",
  location: "[City, Country]",
};

export const socials = [
  { label: "LinkedIn", icon: "Linkedin", url: "#" },
  { label: "Email", icon: "Mail", url: "#" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
