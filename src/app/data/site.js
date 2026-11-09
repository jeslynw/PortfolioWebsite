export const profile = {
  name: "Jeslyn Wangsa",
  // Cycled by the typing line on the cover.
  typedPhrases: [
    // "Jeslyn Wangsa",
    "passionate about AI and software design",
    "care how it looks and how it works",
  ],
  intro:
    "Immersed in the world of technology, learning and growing every day. I’m building this portfolio to share my work, skills, and journey. Step in and explore it with me.",
  properties: [
    { key: "Studying", value: "MITB, Artificial Intelligence track - SMU", mark: "study" },
    { key: "Previously", value: "BCompSc, Cybersecurity - UOW", mark: "building" },
    { key: "Based", value: "Singapore", mark: "pin" },
  ],
  focus: ["Agentic AI", "Applied ML", "Web systems"],
  about: [
    "I first became interested in computers back in high school, where I found myself drawn to clean, well-designed user interfaces. I was curious about how websites were built and what happened behind the scenes to make everything work. That curiosity led me to pursue a Bachelor’s degree in Computer Science.",
    "As I started working on more complex problems, I realised the usual ways of solving things weren’t always enough. That’s when I got into machine learning - it felt like a more practical way to deal with messy, real-world problems.",
    "Now I’m pursuing a Master’s degree in Artificial Intelligence at Singapore Management University. I’ve worked on projects that combine machine learning with real applications, and I enjoy working across both the technical and design sides, building something that works well, looks clean, and actually solves a problem.",
  ],
};

export const links = {
  email: "wangsajeslyn@gmail.com",
  github: "https://github.com/jeslynw",
  linkedin: "https://www.linkedin.com/in/jeslynwangsa/",
};

export const contactRows = [
  { key: "Email", value: links.email, href: `mailto:${links.email}` },
  { key: "GitHub", value: "github.com/jeslynw", href: links.github },
  { key: "LinkedIn", value: "in/jeslynwangsa", href: links.linkedin },
];

// Drives the sidebar tree, the inline `|` nav row, and the scroll-spy.
// `icon` names a glyph in components/Icon.jsx (sidebar); `mark` is the small
// leaf/petal used by section headings and the inline nav row.
export const sections = [
  { id: "cover", label: "Overview", short: "Overview", mark: "leaf", icon: "overview" },
  { id: "about", label: "About me", short: "About", mark: "leaf", icon: "about" },
  { id: "experience", label: "Experience", short: "Experience", mark: "petal", icon: "experience" },
  { id: "education", label: "Education", short: "Education", mark: "leaf", icon: "education" },
  { id: "skills", label: "Tools", short: "Tools", mark: "leaf", icon: "toolkit" },
  { id: "projects", label: "Projects", short: "Projects", mark: "leaf", icon: "projects" },
  { id: "contact", label: "Contact", short: "Contact", mark: "petal", icon: "contact" },
];
