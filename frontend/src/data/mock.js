// Portfolio content data - single source of truth for Projects, Skills, Experience, Social links

export const projects = [
  {
    id: 1,
    title: "Society Management System",
    description: "Enterprise-style society management platform for managing members, flats, maintenance payments, notices, polls, expenses and accounting workflows through a centralized dashboard.",
    extraFeature: "Role-based authentication with separate admin and resident access for managing operational workflows.",
    techStack: ["ASP.NET Web Forms", "C#", "SQL Server"],
    image: "/image/society.png",
    githubLink: "https://github.com/devjari235/Society_management",
    type: "code"
  },
  {
    id: 2,
    title: "Kiyara Botanics — AI WhatsApp Product Recommendation System",
    description: "Real-world AI-powered WhatsApp assistant built and deployed for Kiyara Botanics to converse with customers, understand their needs and recommend relevant products.",
    extraFeature: "Automated customer/lead data capture into a connected personalized dashboard and backend workflows, integrating conversational AI with the client's sales-support process.",
    techStack: ["OpenAI", "n8n", "WhatsApp API", "Google Sheets", "Supabase"],
    image: "https://www.revechat.com/wp-content/uploads/2020/05/chatbot-best-practices.webp",
    type: "case-study",
    caseStudy: {
      client: "Kiyara Botanics (real client, live in production)",
      problem: "Customers reaching out on WhatsApp needed fast, personalized product guidance, but manually replying to every inquiry didn't scale for the business.",
      solution: "Built a conversational AI assistant on WhatsApp that understands customer needs in natural language and recommends relevant Kiyara Botanics products automatically.",
      workflow: "Customer → WhatsApp → AI Assistant → n8n → Business/Data Workflow → Personalized Dashboard",
      features: [
        "Natural, conversational product recommendations over WhatsApp",
        "Automated lead and customer data capture",
        "Personalized dashboard for viewing and managing collected leads",
        "Backend workflow automation connecting chat, data storage, and business operations"
      ]
    },
    // NOTE: no public repo for the chatbot itself (client project).
    // Add the dashboard's GitHub URL here once available, e.g. "https://github.com/devjari235/kiyara-dashboard"
    dashboardGithub: null
  },
  {
    id: 3,
    title: "AI Appointment Booking Agent",
    description: "Voice-based AI agent that handles appointment availability checks and books appointments in real time using an AI voice agent, n8n automation, and Google Calendar.",
    techStack: ["AI Voice Agent", "n8n", "Google Calendar", "Gmail API"],
    image: "https://cdn.prod.website-files.com/634e928d7acf0e5b9297c41b/66ffce46eba770a930a019e6_Voice%20AI%20(1).png",
    githubLink: "https://github.com/devjari235/n8n_AI-Appointment-Booking-Voice-Agent",
    type: "code"
  },
  {
    id: 4,
    title: "NutriLens — Smart Food Recommendation",
    description: "A food comparison application that highlights calories, protein, sugar and fat to help users make informed, healthier food choices.",
    techStack: ["React.js", "Application Logic"],
    image: "/image/Food.png",
    githubLink: "https://github.com/devjari235/Food-Recommendation-App",
    type: "code"
  },
    {
    id: 5,
    title: "Online Art Gallery Management System",
    description: "A web-based art gallery platform built with ASP.NET that allows users to explore, purchase, and manage artworks online, with admin and artist modules for complete gallery management.",
    techStack: ["ASP.NET", "C#", "SQL Server", "HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/image/Art_gallery.jpeg",
    githubLink: "https://github.com/devjari235/Online_Art_Gallery",
    type: "code"
  },
  {
    id: 6,
    title: "AdVision AI",
    description: "Telegram-based AI agent that analyzes product images and captions to generate marketing-ready image prompts, video concepts, captions, and creatives, with approval flow and automated image/video generation using GPT-4 and Veo3.",
    techStack: ["n8n", "Telegram Bot API", "OpenAI GPT-4", "LangChain", "Veo3", "HTTP APIs"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    githubLink: "#",
    type: "code"
  }
];

// Older/demo projects kept in the codebase but not shown in the main featured grid.
// Re-add to `projects` above (with a `type`) if you want them featured again.
export const otherProjects = [
  {
    id: 102,
    title: "WhatsApp Inventory Management Chatbot",
    description: "A WhatsApp-based AI chatbot that allows users to check inventory, stock levels, and product availability in real time using natural language.",
    techStack: ["n8n", "OpenAI", "WhatsApp API", "Google Sheets"],
    image: "https://www.revechat.com/wp-content/uploads/2020/05/chatbot-best-practices.webp",
    githubLink: "https://github.com/devjari235/n8n_Chatbot",
    type: "code"
  }
];

export const skills = {
  languages: ["Java", "C#", "JavaScript", "Python"],
  frontend: ["React.js", "HTML", "CSS", "Bootstrap"],
  backend: ["ASP.NET / ASP.NET Web Forms", "Node.js", "PHP"],
  database: ["MySQL", "SQL Server", "MongoDB", "Firebase"],
  automation: ["n8n", "OpenAI API", "Twilio", "REST APIs", "AI Agents & Chatbots", "Workflow Automation"],
  tools: ["Git & GitHub"]
};

export const workExperience = [
  {
    id: 1,
    company: "Fixera Automation",
    location: "Remote",
    role: "Founder / AI Automation Developer",
    period: "2026 – Present",
    responsibilities: [
      "Built AI-powered WhatsApp assistants and voice agents for automated appointment-booking and customer workflows using n8n, OpenAI API and WhatsApp integrations",
      "Designed workflow automations integrating Google Calendar, Google Sheets and Gmail",
      "Implemented REST API integrations connecting conversational AI systems with business data and third-party services",
      "Developed AI-powered content generation workflows for automating repetitive business tasks"
    ]
  },
  {
    id: 2,
    company: "Alekhan Infotech Solutions Pvt. Ltd.",
    location: "Surat",
    role: "Software Development Trainee",
    period: "Apr 2025 – Jun 2025",
    responsibilities: [
      "Worked on coding, debugging and project implementation",
      "Supported development and testing of applications",
      "Collaborated with team members on assigned tasks and project delivery"
    ]
  }
];

export const socialLinks = {
  github: "https://github.com/devjari235",
  linkedin: "https://in.linkedin.com/in/dev-jariwala-a36244341",
  instagram: "https://www.instagram.com/dev__jariwala",
  email: "devjari235@gmail.com",
  phone: "+91 9824155101",
  location: "Surat, Gujarat"
};

export const resumeFile = "/Dev_Jariwala_Resume.pdf";
