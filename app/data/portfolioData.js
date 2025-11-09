const portfolioData = {
  name: "Abdul Rehman",
  title: "Full Stack Developer",
  tagline: "Building digital experiences with the MERN stack",
  location: "Lahore, Pakistan",
  email: "rehmanvirk318@gmail.com",
  phone: "+92 319 6264318",
  linkedin: "https://linkedin.com/in/rehmanvirk",
  website: "https://abdul-rehman.dev",
  about:
    "I'm a Full Stack Developer specializing in the MERN stack with hands-on experience in building and deploying scalable web applications. I'm passionate about writing clean, maintainable code and collaborating in agile teams to deliver impactful products.",
  skills: {
    frontend: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Figma"],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Authentication (JWT)",
    ],
    integrations: [
      "Zoho CRM API",
      "Google Drive API",
      "Cloudinary",
      "Firebase",
    ],
    tools: ["Git", "Postman", "VS Code", "Linux", "MS Office"],
    soft: [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Adaptability",
      "Leadership",
    ],
  },
  experience: [
    {
      position: "Zoho & MERN Stack Developer Intern",
      company: "Fairchance for CRM",
      location: "Lahore, Pakistan",
      duration: "Mar 2025 – Present",
      responsibilities: [
        "Developed and maintained backend modules for multiple MERN-based web applications.",
        "Built a Node.js server integrating Zoho CRM and Google Drive APIs, automating 100% of call recording synchronization.",
        "Contributed to the backend of a cloud storage application inspired by Google Drive and Zoho WorkDrive — implemented secure file uploads, sharing, and folder management.",
        "Currently developing a mini-CRM system (MERN) to manage leads, clients, notes, and pipelines with authentication and role-based access.",
        "Collaborated with frontend and Zoho teams to ensure seamless data flow between CRM, APIs, and MongoDB.",
      ],
    },
  ],
  projects: [
    // {
    //   name: "Portagen – Portfolio Builder Platform",
    //   description: "A full-stack web app that enables users to create and download custom portfolio websites by entering their details and selecting a template. Implemented dynamic data binding, template rendering, and automatic ZIP file generation.",
    //   longDescription: "",
    //   tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"],
    //   link: "#",
    //   image: "/images/project1.png"  // Add this line

    // },
    {
      name: "Portagen – Portfolio Builder Platform",
      description:
        "A full-stack web app that enables users to create and download custom portfolio websites by entering their details and selecting a template. Implemented dynamic data binding, template rendering, and automatic ZIP file generation.",
      longDescription:
        "PortaGen is a comprehensive portfolio and resume builder platform that allows users to create professional portfolios through an intuitive multi-step wizard. Users can input their personal information, education, work experience, projects, and skills, then choose from multiple professionally designed templates. The platform features real-time preview, PDF generation using Puppeteer, and static website export as ZIP files. Built with modern web technologies including Next.js 15, TypeScript, Tailwind CSS, and Prisma ORM, PortaGen provides a seamless experience for creating stunning portfolios that can be downloaded and hosted anywhere.",
      tech: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "SQLite",
        "Puppeteer",
        "JSZip",
        "JWT",
        "bcrypt",
      ],
      link: "https://github.com/yourusername/portagen",
      image: "/images/project1.png",
    },
    {
      name: "RepoDoc.ai – Automated README Generator",
      description:
        "Developed an intelligent app that generates detailed README files by analyzing GitHub repository URLs using the OpenAI API. Implemented API integration, input validation, and dynamic response rendering.",
      longDescription: "",
      tech: ["React", "Node.js", "Express", "MongoDB", "GeminiAI API"],
      link: "#",
      image: "/images/project2.png", // Add this line
    },
  ],
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution:
      "University of Agriculture Faisalabad, Toba Tek Singh Campus, Pakistan",
    duration: "Sep 2021 – May 2025",
  },
};

export default portfolioData;
