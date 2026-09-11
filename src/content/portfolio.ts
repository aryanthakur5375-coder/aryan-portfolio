// Edit this file to update the portfolio content.

export const profile = {
  name: "Aryan Thakur",
  tagline: "Computer Science Student | Backend Developer | AI Enthusiast",
  intro:
    "I'm a Computer Science and Engineering student with hands-on experience building backend systems, REST APIs, database-driven applications, and Agentic AI workflows. I enjoy solving problems, learning new technologies, and turning ideas into practical software.",
  resumeUrl: "/Aryan_Thakur_Resume.pdf",
};

export const about = {
  text: [
    "I'm a B.Tech Computer Science and Engineering student at Jaipur Engineering College and Research Centre, Jaipur, graduating in 2027.",
    "My work is centered around Python backend development, REST APIs, databases, and emerging Agentic AI patterns. I enjoy learning by building practical systems and improving my problem-solving skills along the way.",
  ],
  cards: [
    {
      icon: "Server",
      title: "Backend Development",
      description: "Building REST APIs and backend applications using Python and FastAPI.",
    },
    {
      icon: "Database",
      title: "Databases",
      description: "Working with PostgreSQL, SQLite, SQLAlchemy and database migrations.",
    },
    {
      icon: "BrainCircuit",
      title: "Artificial Intelligence",
      description: "Exploring Agentic AI, LangGraph, LangChain, RAG, CRAG and Self-RAG.",
    },
    {
      icon: "Puzzle",
      title: "Problem Solving",
      description: "250+ Data Structures and Algorithms problems solved across coding platforms.",
    },
  ],
};

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Jaipur Engineering College and Research Centre, Jaipur",
    period: "2027",
    details: ["CGPA: 7.45", "Graduating 2027"],
  },
  {
    degree: "Senior Secondary",
    institution: "Mangalam DAV Public School, Morak",
    period: "2022",
    details: ["Score: 85.4%"],
  },
  {
    degree: "Secondary",
    institution: "Mangalam DAV Public School, Morak",
    period: "2020",
    details: ["Score: 86.6%"],
  },
];

export const skillGroups = [
  { name: "Languages", skills: ["C++", "Python", "SQL"] },
  { name: "Backend & APIs", skills: ["FastAPI", "RESTful API Design", "SQLAlchemy", "Pydantic", "Alembic"] },
  { name: "Databases", skills: ["PostgreSQL", "SQLite", "FAISS"] },
  {
    name: "Authentication & Security",
    skills: ["JWT Authentication", "OAuth2", "Role-Based Access Control (RBAC)", "Password Hashing", "bcrypt / passlib"],
  },
  {
    name: "AI / Agentic Frameworks",
    skills: ["LangGraph", "LangChain", "Agentic AI", "Retrieval-Augmented Generation (RAG)", "Corrective RAG (CRAG)", "Self-RAG"],
  },
  { name: "Tools", skills: ["Docker", "Git", "GitHub", "Streamlit"] },
];

export const projects = [
  {
    title: "AI Research Assistant",
    category: "Featured project",
    description: "An AI-powered research assistant that processes user queries through multi-step agent workflows.",
    technologies: ["Python", "Streamlit", "LangChain", "LangGraph", "FAISS", "SQLite", "Docker", "OpenRouter API"],
    features: [
      "Multi-step agent workflows using LangGraph",
      "Retrieval-Augmented Generation using FAISS",
      "Context-aware responses using OpenRouter API",
      "Corrective RAG with relevance grading, query rewriting and web-search fallback",
      "Reflection-based critique and exploration of Self-RAG techniques",
      "SQLite checkpointing and persistent multi-turn conversation memory",
      "Dockerized deployment",
    ],
    githubUrl: "#",
    liveUrl: "",
    architecture: ["User Query", "LangGraph Agent", "Retriever", "FAISS", "Relevance Grading"],
    branches: ["Relevant → Generate Response", "Not relevant → Query Rewrite / Web Search", "Final Response"],
  },
  {
    title: "Task Management Backend API",
    category: "Backend project",
    description: "A secure task management backend providing RESTful APIs for task operations, authentication and role-based access control.",
    technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Pydantic", "JWT", "Docker"],
    features: [
      "RESTful APIs and CRUD operations",
      "Task status management with Pydantic request validation",
      "PostgreSQL database with SQLAlchemy ORM",
      "Alembic database migrations",
      "JWT authentication and role-based authorization",
      "Dockerized FastAPI application with Docker Compose and PostgreSQL",
    ],
    githubUrl: "#",
    liveUrl: "",
  },
];

export const achievements = [
  {
    icon: "Code2",
    title: "250+ DSA Problems",
    description: "Solved more than 250 Data Structures and Algorithms problems on LeetCode and other coding platforms.",
  },
  {
    icon: "Trophy",
    title: "Smart India Hackathon 2025",
    description: "Participated in Smart India Hackathon 2025 and collaborated with a team to develop an innovative software solution.",
  },
  {
    icon: "HeartHandshake",
    title: "Aashayein",
    description: "Member of Aashayein, a blood donation club, during the first year of B.Tech.",
  },
];

export const certifications = [
  { title: "Agentic AI for Beginners", issuer: "Udemy" },
  { title: "Fundamentals of Agents", issuer: "Hugging Face Agents Course" },
  { title: "PostgreSQL: Become an SQL Developer", issuer: "Simplilearn" },
  { title: "Python Programming", issuer: "Centre for Electronic Governance (CEG), Rajasthan" },
];

export const currentFocus = [
  { icon: "Server", title: "Backend Engineering", description: "Building secure, scalable APIs and database-driven applications." },
  { icon: "Bot", title: "Agentic AI", description: "Exploring multi-agent workflows, LangGraph and intelligent AI systems." },
  { icon: "Search", title: "RAG Systems", description: "Learning advanced retrieval techniques including RAG, Corrective RAG and Self-RAG." },
  { icon: "Puzzle", title: "Problem Solving", description: "Continuously improving Data Structures and Algorithms skills." },
];

export const contact = {
  email: "aryanthakur5375@gmail.com",
  phone: "+91-7877614837",
  linkedin: "linkedin.com/aryanthakur23",
  linkedinUrl: "https://linkedin.com/aryanthakur23",
  github: "github.com/aryanthakur5375-coder",
  githubUrl: "https://github.com/aryanthakur5375-coder",
};

export const socials = [
  { label: "LinkedIn", icon: "Linkedin", url: contact.linkedinUrl },
  { label: "GitHub", icon: "Github", url: contact.githubUrl },
  { label: "Email", icon: "Mail", url: `mailto:${contact.email}` },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];