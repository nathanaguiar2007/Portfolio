export interface Project {
  slug: "dormonomics" | "food-ai";
  title: string;
  tagline: string;
  description: string;
  status: string;
  technologies: string[];
  sections: { title: string; content: string }[];
}

// Keep project facts here so the homepage and detail pages stay in sync.
export const projects: Project[] = [
  {
    slug: "dormonomics",
    title: "Dormonomics",
    tagline: "Personal finance. Built for college.",
    description:
      "I’m building an iOS personal-finance application around college life: a calmer way for students to understand spending, manage accounts, and make better financial decisions.",
    status: "Work in progress",
    technologies: ["Swift", "SwiftUI", "Supabase", "AI tooling"],
    sections: [
      {
        title: "The idea",
        content:
          "College life brings its own financial challenges: meal plans, dorm expenses, part-time income, and a limited budget. I’m building Dormonomics with that everyday context in mind.",
      },
      {
        title: "The build",
        content:
          "I’m using SwiftUI, Supabase, and AI tooling to build spending tracking, semester budgeting, receipt and screenshot parsing, campus deals, spending insights, and personal-finance widgets.",
      },
      {
        title: "What comes next",
        content:
          "Dormonomics is a work in progress. I’ll add screenshots and more development details as the application takes shape.",
      },
    ],
  },
  {
    slug: "food-ai",
    title: "Macronutrient Recognition Using Computer Vision",
    tagline: "Teaching machines to understand food.",
    description:
      "I built a computer-vision and machine-learning project focused on recognizing food and connecting predictions with nutritional and macronutrient information.",
    status: "Research published and presented",
    technologies: [
      "Python",
      "TensorFlow",
      "Pandas",
      "NumPy",
    ],
    sections: [
      {
        title: "The project",
        content:
          "I built and trained a convolutional neural network on 101,000 images across 101 food categories, reaching 91% validation accuracy. I explored how food recognition could support nutrition and macronutrient applications.",
      },
      {
        title: "Research contribution",
        content:
          "I contributed this work to research that was published and presented. I’ll add publication details and research visuals here when they’re available.",
      },
    ],
  },
];

export interface Experience {
  id: string;
  title: string;
  company: string;
  dates: string;
  description: string;
  accomplishments: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    id: "it-internship",
    title: "IT Intern",
    company: "Sidwell Friends School",
    dates: "Summer 2026",
    description:
      "I supported the technology rollout for a new Upper School campus, working across device deployment, classroom audits, and day-to-day troubleshooting.",
    accomplishments: [
      "I configured, tested, and deployed 300+ macOS devices for students and faculty.",
      "I audited 1,000+ devices across 150+ classrooms.",
      "I diagnosed hardware, software, authentication, and connectivity issues using Jamf Pro and Incident IQ.",
      "I assessed emerging technologies to help inform future IT purchasing decisions.",
    ],
    technologies: ["macOS", "Jamf Pro", "Incident IQ"],
  },
  {
    id: "robotics",
    title: "Robotics & Programming Instructor / Anindya Dehejia ’78 Fellows Program",
    company: "UP Robotics Inc.",
    dates: "2024–2026",
    description: "I taught robot design, programming, and drone coding to 100+ students in grades 1–8, helping them learn by building and testing their ideas.",
    accomplishments: [
      "I mentored FLL and FTC teams and developed curriculum involving LEGO SPIKE and FTC Robotics.",
      "I redesigned the company website in Wix to improve navigability.",
    ],
    technologies: ["LEGO SPIKE", "FTC Robotics", "Wix"],
  },
];

export const skillGroups = [
  { category: "Languages", skills: ["Python", "Java", "Swift", "C#"] },
  {
    category: "AI & Data",
    skills: ["TensorFlow", "OpenCV", "Pandas", "NumPy", "Kaggle"],
  },
  {
    category: "App & Developer Tools",
    skills: ["SwiftUI", "Supabase", "OpenAI", "Claude", "Xcode", "Visual Studio Code", "GitHub", "HTML", "CSS"],
  },
  {
    category: "Additional Tools",
    skills: ["Jamf Pro", "Incident IQ", "Fusion 360", "TinkerCAD", "Blender"],
  },
];

export const designCategories = [
  {
    title: "Fusion 360",
    subtitle: "CAD & mechanical design",
    className: "gallery-cad",
  },
  {
    title: "Blender",
    subtitle: "Form, light & visualization",
    className: "gallery-blender",
  },
  {
    title: "3D Printing",
    subtitle: "From model to material",
    className: "gallery-print",
  },
  {
    title: "Physical Builds",
    subtitle: "Ideas in the real world",
    className: "gallery-build",
  },
];

export const about = {
  introduction:
    "I’m a Computer Science student at Purdue University interested in software engineering, artificial intelligence, cybersecurity, product development, robotics, and engineering.",
  description:
    "I’m interested in the moment an abstract idea becomes a thing someone can use. Whether it’s software, a machine learning model, or a physical build, I like moving between the big picture and the details that make it feel right.",
};

// Empty strings are intentional placeholders. Add only your confirmed public URLs.
export const contact = {
  email: "",
  github: "",
  linkedin: "",
  portfolio: "",
};


export interface Certificate {
  id: string;
  name: string;
  issuer: string;
}

export const certificates: Certificate[] = [
  { id: "future-you-ai", name: "Future You — Leveraging AI for Success", issuer: "Northeastern University" },
  { id: "python-scripting", name: "Python Scripting", issuer: "Duke University" },
  { id: "ai-travel-agent", name: "Build an AI Travel Agent App with OpenAI", issuer: "Scrimba" },
  { id: "aws-cloud-practitioner-essentials", name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services (AWS)" },
];

export const experienceStory = {
  subtitle: "A deeper look at how I work, what I’ve built, and what I’m learning.",
  about: "I enjoy taking ideas from an initial concept to something I can build, test, and improve. Moving between software, AI, engineering, and design helps me ask better questions and understand how the pieces fit together.",
  preview: "From a new school campus technology rollout to teaching robotics, I’ve learned by helping people use the things I build and support.",
  approach: [
    "Start with a real problem and understand it before adding complexity.",
    "Build a functional first version and learn the technology underneath it.",
    "Test what works, revise what doesn’t, and improve the experience through feedback.",
  ],
  interests: ["Software engineering", "Artificial intelligence", "Machine learning", "Computer vision", "Cybersecurity", "Product development", "Robotics", "Engineering", "Human-centered software"],
};

export const education = {
  university: "Purdue University",
  location: "West Lafayette, Indiana",
  degree: "B.S. Computer Science",
  expectedYear: "2030",
  intendedMinors: ["Artificial Intelligence", "Mathematics"],
  community: "Entrepreneurship & Innovation Learning Community",
  coursework: ["Problem Solving & Object-Oriented Programming", "Multivariate Calculus", "Strategy and AI in Society, Markets, and Decision Systems"],
};
