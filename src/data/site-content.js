export const profile = {
  name: "Vijay Bhooshan Shukla",
  brand: "Vijay",
  title: "Full Stack Developer | AI Automation Engineer | Prompt Engineer",
  location: "Delhi, India",
  phone: "8052869880",
  email: "as7612399@gmail.com",
  linkedin: "https://www.linkedin.com/in/vijay-bhooshan-shukla/",
  github: "https://github.com/as7212399/",
  resumeUrl: "/Vijay-rr.pdf",
  resumeDriveUrl: "https://drive.google.com/file/d/1ciGs_4_19B3dDUrSHMbLlkFKFi6S4kCv/view?usp=sharing",
  upwork: "https://www.upwork.com",
  portfolio: "https://site.veloxn.com/",
  heroImage: "/images/vijay-professional.png",
  web3FormsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY", // Get a free access key from https://web3forms.com/
}

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Who We Are", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
]

export const socialLinks = [
  { name: "LinkedIn", href: profile.linkedin },
  { name: "GitHub", href: profile.github },
]

export const heroStats = [
  { number: "2", label: "Years Experience" },
  { number: "500+", label: "LinkedIn Applications Automated" },
  { number: "30+", label: "AI ATS Resumes Generated" },
]

export const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Develop scalable web applications using React.js, Next.js, Node.js, Express.js, MongoDB, JavaScript, and REST APIs covering frontend, backend, and database workflows.",
    features: ["React.js & Next.js UI", "Node.js & Express APIs", "MongoDB Data Models"],
    image: "/img/webdev.jpg",
    href: "/services",
  },
  {
    title: "AI Development & Integration",
    description:
      "Integrate Generative AI capabilities, AI API models, and apply structured Prompt Engineering for AI-assisted development, ATS resume platforms, and content generation.",
    features: ["Generative AI", "AI API Integration", "Prompt Engineering"],
    image: "/img/modern.jpg",
    href: "/services",
  },
  {
    title: "AI Automation & Scraping",
    description:
      "Automate complex browser workflows, job application submission, form filling, and data extraction using Python, Selenium WebDriver, and ChromeDriver.",
    features: ["Selenium WebDriver", "Python Automation", "Web Scraping"],
    image: "/img/auto.jpg",
    href: "/services",
  },
  {
    title: "Responsive Web Design",
    description:
      "Build clean, mobile-friendly interfaces with reusable React components, modern UI/UX principles, technical SEO, and cross-browser usability.",
    features: ["SEO Optimization", "Responsive UI", "Cross-Browser Compatibility"],
    image: "/img/react.jpg",
    href: "/services",
  },
  {
    title: "Deployment & Optimization",
    description:
      "Deploy production-ready web and AI applications on Vercel, Render, Railway, Netlify, and DigitalOcean with hosting configuration and performance tuning.",
    features: ["Vercel & Render", "Railway & Netlify", "DigitalOcean Deployment"],
    image: "/img/api.jpg",
    href: "/services",
  },
  {
    title: "API & Database Architecture",
    description:
      "Design and integrate RESTful APIs, authentication flows, database schema operations, form handling, Postman testing, and debugging.",
    features: ["RESTful APIs", "MongoDB Atlas", "Postman & Debugging"],
    image: "/img/software.jpg",
    href: "/services",
  },
]

export const projects = [
  {
    title: "LinkedIn Automation Job Applier System",
    description:
      "Automated 500+ LinkedIn job applications using Python and Selenium WebDriver. Implemented job search, filtering, resume uploads, application submission, exception handling, retry logic, and explicit waits.",
    image: "/img/linkauto.jpg",
    tags: ["Python", "Selenium", "WebDriver", "ChromeDriver"],
    liveUrl: "https://www.linkedin.com/in/vijay-bhooshan-shukla/",
    githubUrl: "",
    demoLabel: "View Profile",
  },
  {
    title: "AI Rover — AI Resume Builder",
    description:
      "AI-powered ATS-friendly resume builder developed using React.js and Python. Generated 30+ professional resumes with AI content suggestions, customizable templates, real-time preview, and ATS-compatible formatting.",
    image: "/projects/rover-resume.png",
    tags: ["React.js", "Python", "AI Integration", "ATS"],
    liveUrl: "https://rover-resume.vercel.app/",
    githubUrl: "",
  },
  {
    title: "9JOBS — Corporate & Job Services Platform",
    description:
      "Corporate and job-services platform developed using React.js, Next.js, JavaScript, Node.js, and REST APIs. Features responsive UI, reusable components, job-search interfaces, forms, and production deployment.",
    image: "/projects/9jobs.png",
    tags: ["React.js", "Next.js", "Node.js", "REST APIs"],
    liveUrl: "https://9jobs.co/",
    githubUrl: "",
  },
  {
    title: "Modern Property — Real Estate Web Platform",
    description:
      "Responsive real-estate platform built using React.js, Next.js, JavaScript, and REST APIs. Features property-focused interfaces, reusable components, search-oriented layouts, forms, SEO, and performance optimization.",
    image: "/projects/modern-property.png",
    tags: ["React.js", "Next.js", "REST APIs", "Responsive Design"],
    liveUrl: "https://modernproperties.co/",
    githubUrl: "",
  },
]

export const imageGalleryItems = []

export const videoGalleryItems = []

export const blogPosts = []

export const testimonials = [
  {
    name: "9JOBS Application Services",
    role: "Corporate & Job Platform Delivery",
    quote:
      "Developed responsive interfaces, full-stack features, and browser automation tools with focus on speed, reliability, and usability.",
    project: "9JOBS Platform & Automation Workflows",
    outcome: "Streamlined job-service operations and application workflows",
    rating: 4.9,
    image: "/images/testimonial-daniel.svg",
  },
  {
    name: "Modern Property Platform",
    role: "Real Estate Web Architecture",
    quote:
      "Delivered responsive property interfaces, search layouts, reusable components, REST API integration, and SEO optimization.",
    project: "Modern Property Platform",
    outcome: "Enhanced platform performance, accessibility, and UI responsiveness",
    rating: 4.8,
    image: "/images/testimonial-sophia.svg",
  },
  {
    name: "AI Rover Resume Builder",
    role: "AI Product Development",
    quote:
      "The AI resume builder generated 30+ ATS-friendly resumes with real-time editing, customizable templates, and machine-readable output.",
    project: "AI Rover Resume Builder",
    outcome: "Fast, ATS-compatible resume creation with AI suggestions",
    rating: 4.9,
    image: "/images/testimonial-mia.svg",
  },
  {
    name: "LinkedIn Automation System",
    role: "Browser Automation",
    quote:
      "Automated over 500 job applications using Python, Selenium WebDriver, explicit waits, and configurable search scripts.",
    project: "LinkedIn Automation Job Applier System",
    outcome: "Saved manual submission time with robust exception handling",
    rating: 4.8,
    image: "/images/testimonial-daniel.svg",
  },
]

export const resumeHighlights = [
  "Automation Engineer & MERN Stack Developer with 2 years of hands-on experience at 9JOBS Application Services, Delhi.",
  "Built LinkedIn Automation Job Applier System (500+ applications automated) and AI Rover Resume Builder (30+ resumes generated).",
  "Developed 9JOBS Corporate & Job Services Platform and Modern Property Real Estate Web Platform.",
  "Proficient in React.js, Next.js, Node.js, Express.js, MongoDB, Python, Selenium, REST APIs, Prompt Engineering, SEO, and server deployment.",
]

export const contactMethods = [
  {
    title: "Send Email",
    description: "Share your project scope, timeline, and current requirement directly by email.",
    href: `mailto:${profile.email}`,
  },
  {
    title: "View LinkedIn",
    description: "Check the profile, background, and professional updates.",
    href: profile.linkedin,
  },
  {
    title: "Download Resume",
    description: "Open or download the latest resume PDF directly from the portfolio website.",
    href: profile.resumeUrl,
  },
  {
    title: "Call Now",
    description: "Connect directly for urgent hiring, project discussions, or collaboration opportunities.",
    href: `tel:${profile.phone}`,
  },
]
