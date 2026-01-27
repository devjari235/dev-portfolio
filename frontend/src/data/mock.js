// Mock data for portfolio - will be replaced with backend integration later

export const projects = [
  {
    id: 1,
    title: "Society Management System",
    description: "Complete web application for managing residential societies with modules for notices, polling, payments, and user management.",
    techStack: ["ASP.NET", "C#", "SQL Server", "Bootstrap", "JavaScript"],
    image: "/image/society.png",
    githubLink: "https://github.com/devjari235/Society_management",
    
  },
  {
    id: 2,
    title: "Online Art Gallery Management System",
    description: "A web-based art gallery platform built with ASP.NET that allows users to explore, purchase, and manage artworks online, with admin and artist modules for complete gallery management.",
    techStack: ["ASP.NET", "C#", "SQL Server", "HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/image/Art_gallery.jpeg",
    githubLink: "https://github.com/devjari235/Online_Art_Gallery",
    liveLink: "#"
  },
  {
    id: 3,
   title: "Smart Food Recommendation App",
    description: "A frontend-only React application focused on Indian foods that helps users compare nutrition values, understand what to eat or avoid, and make healthier choices using rule-based health scoring and smart UI interactions.",
    techStack: ["React", "JavaScript", "CSS", "LocalStorage"],
    image: "/image/Food.png",
    githubLink: "https://github.com/devjari235/Food-Recommendation-App",
    liveLink: "#"
  },
  {
    id: 4,
   title: "WhatsApp Inventory Management Chatbot",
   description: "A WhatsApp-based AI chatbot that allows users to check inventory, stock levels, and product availability in real time using natural language.",
   techStack: ["n8n", "OpenAI", "WhatsApp API", "Google Sheets"],
   image: "https://www.revechat.com/wp-content/uploads/2020/05/chatbot-best-practices.webp",
    githubLink: "https://github.com/devjari235/n8n_Chatbot",
   
  },
  {
    id: 5,
    title: "AI Appointment Booking Voice Agent",
   description: "Voice-based AI agent that handles appointment availability checks and books appointments in real time through phone calls using Retell AI, n8n automation, and Google Calendar.",
   techStack: ["Retell AI", "n8n", "OpenAI", "LangChain", "Google Calendar", "Gmail API"],
    image: "https://cdn.prod.website-files.com/634e928d7acf0e5b9297c41b/66ffce46eba770a930a019e6_Voice%20AI%20(1).png",
    githubLink: "https://github.com/devjari235/n8n_AI-Appointment-Booking-Voice-Agent",
    
  },
  {
    id: 6,
    title: "AdVision AI",
    description: "Telegram-based AI agent that analyzes product images and captions to generate marketing-ready image prompts, video concepts, captions, and creatives, with approval flow and automated image/video generation using GPT-4 and Veo3.",
    techStack: [
      "n8n",
      "Telegram Bot API",
      "OpenAI GPT-4",
      "LangChain",
      "Veo3",
      "HTTP APIs"
    ],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    githubLink: "#",
    liveLink: "#"
  }
];

export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
  backend: ["ASP.NET", "C#", "ADO.NET", "JAVA"],
  database: ["SQL Server","MySQL","MongoDB"],
  automation: ["AI Agents", "Chatbots", "Workflow Automation"],
  tools: ["Git", "GitHub", "Visual Studio", "Vercel"]
};

export const workExperience = [
  {
    id: 1,
    company: "Alekhan Infotech Solution Pvt.Ltd.",
    location: "Surat",
    role: "Web Developer Intern",
    period: "Past",
    responsibilities: [
      "Developing Society Management System using ASP.NET and C#",
      "Implementing user management, notices, and polling modules",
      "Working with SQL Server for database design and optimization",
      "Building responsive UI components with Bootstrap and JavaScript",
      "Collaborating with team on full-stack development projects"
    ]
  }
];

export const socialLinks = {
  github: "https://github.com/devjari235",
  linkedin: "https://www.linkedin.com/in/dev-jariwala-a36244341/",
  instagram: "https://www.instagram.com/dev__jariwala",
  email: "devjari235@gmail.com"
};
