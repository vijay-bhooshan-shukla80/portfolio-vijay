export const profile = {
  name: "Vijay Bhooshan Shukla",
  brand: "Vijay Bhooshan Shukla",
  title: "Automation Engineer & MERN Stack Developer",
  location: "Delhi, India",
  phone: "8052869880",
  email: "as7612399@gmail.com",
  linkedin: "https://www.linkedin.com/in/vijay-bhooshan-shukla/",
  github: "https://github.com/as7212399/",
  resumeUrl: "/Vijay-Bhooshan-Shukla-Resume.pdf",
  resumeDriveUrl: "https://drive.google.com/file/d/1ciGs_4_19B3dDUrSHMbLlkFKFi6S4kCv/view?usp=sharing",
  upwork: "https://www.upwork.com",
  portfolio: "https://site.veloxn.com/",
  heroImage: "/images/laptop_developer.png",
}

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Quote", href: "/#get-quote" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
]

export const socialLinks = [
  { name: "LinkedIn", href: profile.linkedin },
  { name: "GitHub", href: profile.github },
]

export const heroStats = [
  { number: "1.7+", label: "Years MERN & Automation Experience" },
  { number: "8+", label: "Web, AI, and Automation Builds" },
  { number: "100%", label: "Responsive UI and API Delivery" },
]

export const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Build scalable full-stack web applications with React.js, Next.js, Node.js, Express.js, MongoDB, and clean REST API architecture.",
    features: ["React / Next.js UI", "Node + Express APIs", "MongoDB data models"],
    image: "/img/webdev.jpg",
    href: "/services",
  },
  {
    title: "MERN Stack Applications",
    description:
      "Create maintainable MERN products for business workflows, ATS-friendly platforms, dashboards, and customer-facing software.",
    features: ["Secure CRUD flows", "Responsive UI/UX", "Deployment-ready builds"],
    image: "/img/modern.jpg",
    href: "/services",
  },
  {
    title: "Automation Solutions",
    description:
      "Reduce repetitive work with Python, Selenium WebDriver, ChromeDriver, web scraping, browser automation, and data extraction workflows.",
    features: ["Selenium WebDriver", "Web scraping", "Workflow automation"],
    image: "/img/auto.jpg",
    href: "/services",
  },
  {
    title: "Portfolio & Business Websites",
    description:
      "Launch polished business and company websites with optimized UI/UX, SEO performance, and cross-device compatibility.",
    features: ["SEO-ready pages", "Mobile-first design", "Cross-browser support"],
    image: "/img/react.jpg",
    href: "/services",
  },
  {
    title: "API Integration",
    description:
      "Connect frontend products to reliable REST APIs, external services, backend logic, and scalable database operations.",
    features: ["REST API development", "Postman testing", "Performance tuning"],
    image: "/img/api.jpg",
    href: "/services",
  },
  {
    title: "Website Maintenance & Support",
    description:
      "Keep applications stable after launch with debugging, testing, UI improvements, GitHub workflows, and iteration support.",
    features: ["Debugging", "Feature updates", "Git / GitHub workflow"],
    image: "/img/software.jpg",
    href: "/services",
  },
]

export const projects = [
  {
    title: "LinkedIn Automation Job Applier System",
    description:
      "A Selenium and Python automation system for LinkedIn job searching, resume uploads, application submission workflows, and exception handling.",
    image: "/img/linkauto.jpg",
    tags: ["Python", "Selenium", "ChromeDriver", "Automation"],
    liveUrl: "https://www.linkedin.com/in/vijay-bhooshan-shukla/",
    githubUrl: "",
    demoLabel: "View Profile",
  },
  {
    title: "AI Rover Resume Builder",
    description:
      "An AI-powered ATS-friendly resume builder with dynamic generation, AI suggestions, resume optimization, responsive templates, and parsing compatibility.",
    image: "/img/jobs.jpg",
    tags: ["React.js", "Python", "AI Integration", "ATS"],
    liveUrl: "https://9jobs.co/",
    githubUrl: "",
  },
  {
    title: "Veloxn Software Company Website",
    description:
      "A responsive MERN software company website with dynamic content, backend APIs, SEO optimization, and cross-device compatibility.",
    image: "/img/veloxn.jpg",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    liveUrl: "https://site.veloxn.com/",
    githubUrl: "",
  },
  {
    title: "9JOBS Application Services Platform",
    description:
      "A full-stack job services platform focused on ATS resume support, automation workflows, lead capture, and scalable backend performance.",
    image: "/img/jobs.jpg",
    tags: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    liveUrl: "https://9jobs.co/",
    githubUrl: "",
  },
  {
    title: "Modern Properties Website",
    description:
      "A full-stack real estate platform with listings, search flows, lead generation, responsive UI, and business-focused user experience.",
    image: "/img/modern.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://modernproperties.co/",
    githubUrl: "",
  },
  {
    title: "Build Urban Home Website",
    description:
      "A real estate and construction website designed to showcase services, improve trust, and generate qualified client inquiries.",
    image: "/img/real.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://biuld-urban-homes.netlify.app/",
    githubUrl: "",
  },
]

export const imageGalleryItems = []

export const videoGalleryItems = []

export const blogPosts = []

export const testimonials = [
  {
    name: "9JOBS Application Services",
    role: "Automation & Full Stack Work",
    quote:
      "Reliable browser automation workflows and full-stack features were built with strong attention to speed, debugging, and practical usability.",
    project: "Automation systems and MERN platform work",
    outcome: "Reduced manual workflow effort and improved application handling",
    rating: 4.9,
    image: "/images/testimonial-daniel.svg",
  },
  {
    name: "Pragallabh Private Limited",
    role: "MERN Development",
    quote:
      "He handled responsive React interfaces, backend APIs, MongoDB operations, and deployment support while keeping the code maintainable.",
    project: "Responsive MERN web solutions",
    outcome: "Improved UI responsiveness and backend reliability",
    rating: 4.8,
    image: "/images/testimonial-sophia.svg",
  },
  {
    name: "AI Resume Platform User",
    role: "ATS Resume Builder",
    quote:
      "The AI resume builder experience felt clear, modern, and useful for improving resume content while keeping ATS compatibility in mind.",
    project: "AI Rover Resume Builder",
    outcome: "Faster resume generation with better optimization guidance",
    rating: 4.8,
    image: "/images/testimonial-mia.svg",
  },
   {
    name: "LinkedIn Automation User",
    role: "Job Application Workflow",
    quote:
      "The automation system made repetitive job searching, resume uploading, and application submission faster and easier to manage.",
    project: "LinkedIn Automation Job Applier System",
    outcome: "Saved time through browser automation and exception handling",
    rating: 4.8,
    image: "/images/testimonial-daniel.svg",
  },
  {
    name: "Veloxn Website Stakeholder",
    role: "Company Website Delivery",
    quote:
      "The website delivered a clean software-company presentation with responsive layouts, dynamic content structure, and SEO-conscious implementation.",
    project: "Veloxn Software Company Website",
    outcome: "Stronger service presentation and cross-device experience",
    rating: 4.9,
    image: "/images/testimonial-sophia.svg",
  },
  {
    name: "Business Website Client",
    role: "Frontend and Backend Support",
    quote:
      "Communication stayed clear, implementation issues were solved quickly, and the delivery had a practical full-stack mindset.",
    project: "Business websites and MERN features",
    outcome: "Cleaner delivery process and stable product updates",
    rating: 4.8,
    image: "/images/testimonial-mia.svg",
  },
]

export const resumeHighlights = [
  "Automation Engineer and MERN Stack Developer with 1.7+ years of practical experience",
  "Built browser automation systems, AI resume tools, company websites, and full-stack platforms",
  "Skilled in React.js, Next.js, Node.js, Express.js, MongoDB, Python, Selenium, and REST APIs",
  "Strong in communication, problem solving, team collaboration, debugging, and deployment workflows",
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
