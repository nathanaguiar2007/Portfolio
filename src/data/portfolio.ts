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
      "An iOS personal-finance application designed around college life. A calmer way for students to understand spending, manage accounts, and make better financial decisions.",
    status: "Work in progress",
    technologies: ["Swift", "SwiftUI", "Supabase", "PostgreSQL", "iOS"],
    sections: [
      {
        title: "The idea",
        content:
          "College life brings its own financial challenges: meal plans, dorm expenses, part-time income, and a limited budget. Dormonomics is being built with that everyday context in mind.",
      },
      {
        title: "The build",
        content:
          "The application uses Swift and SwiftUI for iOS, with Supabase and PostgreSQL supporting its data layer. The focus is on making financial information easy to access and understand.",
      },
      {
        title: "What comes next",
        content:
          "Dormonomics is a work in progress. Screenshots and more development details will be added as the application takes shape.",
      },
    ],
  },
  {
    slug: "food-ai",
    title: "AI / Food Recognition & Macronutrient Research",
    tagline: "Teaching machines to understand food.",
    description:
      "A computer-vision and machine-learning project focused on recognizing food and connecting predictions with nutritional and macronutrient information.",
    status: "Research published and presented",
    technologies: [
      "Python",
      "Machine Learning",
      "Neural Networks",
      "Computer Vision",
    ],
    sections: [
      {
        title: "The project",
        content:
          "Exploring how computer vision and neural networks can connect a food image with useful nutritional context, from recognizing food to understanding its macronutrients.",
      },
      {
        title: "Research contribution",
        content:
          "This work contributed to research that was published and presented. Publication details and research visuals will be added here when available.",
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
    company: "Technology Services",
    dates: "Summer 2023 – Present",
    description:
      "Supporting technology deployment and maintenance across campus facilities.",
    accomplishments: [
      "Supported new-building technology implementation and technology audits.",
      "Helped deploy and configure hundreds of Apple/macOS laptops.",
      "Managed device inventory with Jamf and resolved support incidents through Incident IQ.",
      "Provided hardware and software troubleshooting for end users.",
    ],
    technologies: ["macOS", "Jamf", "Incident IQ"],
  },
  {
    id: "robotics",
    title: "Robotics",
    company: "",
    dates: "Details coming soon",
    description: "Robotics experience will be added here.",
    accomplishments: [],
    technologies: [],
  },
];

export const skillGroups = [
  { category: "Languages", skills: ["Python", "Java", "Swift", "C#"] },
  {
    category: "Development",
    skills: ["SwiftUI", "Git", "GitHub", "Xcode", "Supabase", "PostgreSQL"],
  },
  {
    category: "AI & Data",
    skills: [
      "Machine Learning",
      "Neural Networks",
      "Computer Vision",
      "LLM APIs",
      "Data Analysis",
    ],
  },
  {
    category: "Engineering & Design",
    skills: ["Fusion 360", "Blender", "3D Printing", "Robotics"],
  },
  { category: "Systems", skills: ["macOS", "Jamf", "Incident IQ"] },
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
    "Nathan Aguiar is a Computer Science student at Purdue University interested in software engineering, artificial intelligence, cybersecurity, product development, robotics, and engineering.",
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
