import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Asterisk, Plus, X, ArrowDown, Download, Code2, Workflow, FileText, Terminal } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '@/data/site-content'
import { portfolioProjects as projects, portfolioServices as services, skillGroups } from '@/data/portfolio-content'
import { usePortfolioMotion } from '@/lib/use-portfolio-motion'

const ease = [.16, 1, .3, 1]
const links = [['Home', '/'], ['Who We Are', '/about'], ['Projects', '/projects'], ['Services', '/services'], ['Contact', '/contact']]
const entrances = {
  up: { opacity: 0, y: 22 },
  bottom: { opacity: 0, y: 28 },
  left: { opacity: 0, x: -22 },
  right: { opacity: 0, x: 22 },
  fade: { opacity: 0 },
  pop: { opacity: 0, y: 24, scale: .985 },
}
function Reveal({ children, className = '', delay = 0, variant = 'up', as = 'div', ...props }) {
  const reduced = useReducedMotion()
  const Component = motion[as]
  return <Component {...props} className={className} data-reveal={variant} initial={reduced ? false : entrances[variant]} whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} viewport={{ once: true, amount: .12 }} transition={{ duration: reduced ? 0 : .65, delay: reduced ? 0 : delay, ease }}>{children}</Component>
}
function Label({ children }) { return <span className="pf-label"><Asterisk size={12}/>{children}</span> }
function Title({ first, second, centered = false }) {
  const reduced = useReducedMotion()
  return <motion.h2 className={`pf-title ${centered ? 'pf-center' : ''}`} initial={reduced ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .65, ease }} viewport={{ once: true, amount: .3 }}>{first}<span>{second}</span></motion.h2>
}
function Action({ children, to, href, download }) {
  const content = <>{children}<span><ArrowUpRight size={15}/></span></>
  return to ? <Link className="pf-action" to={to}>{content}</Link> : <a className="pf-action" href={href} download={download}>{content}</a>
}
function Header() {
  const [open, setOpen] = useState(false)
  const trigger = useRef(null), panel = useRef(null)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    if (!open) return
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panel.current?.querySelector('button')?.focus()
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
      if (event.key === 'Tab') {
        const items = panel.current.querySelectorAll('a,button'), first = items[0], last = items[items.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = oldOverflow; document.removeEventListener('keydown', onKey); trigger.current?.focus() }
  }, [open])
  return <><header className="pf-header"><div className="pf-wrap pf-header-inner"><Link className="pf-brand" to="/" aria-label={`${profile.name} home`}><img className="pf-brand-logo" src="/images/vbs-logo.png" alt="Vijay — VBS"/></Link><nav aria-label="Primary navigation">{links.map(([name, to]) => <Link key={to} to={to} aria-current={pathname === to ? 'page' : undefined}>{name}</Link>)}</nav><Link to="/contact" className="pf-header-talk">Let’s Talk <span><ArrowUpRight size={18}/></span></Link><button ref={trigger} className="pf-menu-button" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}><span/><span/></button></div></header>
    <AnimatePresence>{open && <motion.div ref={panel} role="dialog" aria-modal="true" aria-label="Navigation menu" className="pf-menu" initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }} transition={{ duration: .5, ease }} data-lenis-prevent><div className="pf-wrap"><div className="pf-menu-top"><span>{profile.name}</span><button onClick={() => setOpen(false)} aria-label="Close menu"><X size={20}/> Close</button></div><div className="pf-menu-grid"><nav aria-label="Expanded navigation">{links.map(([name, to], i) => <Link key={to} to={to} onClick={() => setOpen(false)}><small>0{i + 1}</small>{name}<ArrowUpRight/></Link>)}</nav><div><Label>Get in touch</Label><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></div></div></motion.div>}</AnimatePresence></>
}
function Hero() {
  const ref = useRef(null), reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 36])
  return <section className="pf-hero pf-reference-hero" ref={ref}>
    <div className="pf-wrap pf-reference-inner">
      <span className="pf-reference-watermark" aria-hidden="true">VIJAY</span>
      <Reveal className="pf-reference-copy" variant="left">
        <div className="pf-reference-eyebrow">HELLO, I’M <span/></div>
        <h1>Vijay<br/>Bhooshan<br/>Shukla<span>.</span></h1>
        <h2>FULL STACK DEVELOPER | AI AUTOMATION ENGINEER | PROMPT ENGINEER</h2>
        <p>Full Stack Developer, AI Automation Engineer, and Prompt Engineer with 2 years of experience developing scalable MERN web applications, AI-powered solutions, browser automation, and production server deployment.</p>
        <div className="pf-reference-actions">
          <Link to="/projects" className="pf-reference-primary">View My Work <ArrowUpRight size={19}/></Link>
          <a href={profile.resumeUrl} download className="pf-reference-secondary">Download CV <Download size={18}/></a>
        </div>
        <div className="pf-reference-stack"><span>MERN Stack</span><span>AI</span><span>Generative AI</span><span>Automation</span></div>
      </Reveal>
      <motion.div className="pf-reference-portrait" style={{ y: reduced ? 0 : y }} initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1 }} transition={{ duration: .85, ease }}>
        <img src="/images/vijay-professional.png" alt="Vijay Bhooshan Shukla" width="1254" height="1254"/>
        <div className="pf-reference-availability"><i/>Open to<br/>Opportunities</div>
        <span className="pf-reference-signature" aria-hidden="true">Vijay</span>
      </motion.div>
      <Reveal className="pf-reference-feature" variant="right" delay={.15}>
        <span className="pf-reference-feature-label">Featured Project <ArrowDown size={24}/></span>
        <Link to="/projects/9jobs" className="pf-reference-browser" aria-label="Explore the 9JOBS project" data-cursor-text="VIEW">
          <div className="pf-reference-browser-bar"><i/><i/><i/><span>9jobs.co</span></div>
          <img src="/projects/9jobs.png" alt="9JOBS corporate and job services website"/>
          <div className="pf-reference-feature-footer">9JOBS <span>VIEW PROJECT <ArrowUpRight size={15}/></span></div>
        </Link>
      </Reveal>
      <Reveal className="pf-reference-stats" delay={.2}>
        <div><strong>2 <Code2 size={20}/></strong><span>Years of experience</span></div>
        <div><strong>500+ <Workflow size={20}/></strong><span>Applications automated</span></div>
        <div><strong>30+ <FileText size={20}/></strong><span>AI resumes generated</span></div>
      </Reveal>
      <a className="pf-reference-scroll" href="#about-preview" aria-label="Scroll to introduction"><ArrowDown size={22}/></a>
    </div>
  </section>
}
function Intro() {
  return <section className="pf-section pf-wrap pf-engineering-about" id="about-preview">
    <Reveal className="pf-engineering-copy" variant="left">
      <span className="pf-engineering-eyebrow"><i/>DEVELOPMENT WITH PURPOSE</span>
      <div className="pf-engineering-heading">
        <Title first="FULL STACK" second="& AI AUTOMATION"/>
        <span className="pf-engineering-note">ENGINEERING<br/>AUTOMATION<br/>AI</span>
      </div>
      <p className="pf-engineering-description">I’m Vijay Bhooshan Shukla, a Full Stack Developer, AI Automation Engineer, and Prompt Engineer with 2 years of hands-on experience. At 9JOBS Application Services, I build web applications and automated workflows using React.js, Next.js, Node.js, Express.js, MongoDB, Python and Selenium, with AI integration, REST APIs, SEO and server deployment.</p>
      <div className="pf-engineering-metrics">
        <article><strong>500+</strong><div><h3><i/>APPLICATIONS AUTOMATED</h3><p>Python and Selenium workflows for LinkedIn job applications.</p></div></article>
        <article><strong>30+</strong><div><h3><i/>AI RESUMES GENERATED</h3><p>ATS-friendly resumes built with AI Rover.</p></div></article>
      </div>
      <Action to="/about">WHO WE ARE</Action>
    </Reveal>
    <Reveal className="pf-engineering-visual" variant="right" delay={.1}>
      <div className="pf-engineering-grid" aria-hidden="true"/>
      <div className="pf-engineering-block pf-engineering-block-one" aria-hidden="true"/>
      <div className="pf-engineering-block pf-engineering-block-two" aria-hidden="true"/>
      <img className="pf-engineering-laptop" src="/images/developer-laptop.png" alt="Illustration of a developer laptop displaying React code" loading="lazy" width="1536" height="1024"/>
      <div className="pf-engineering-status">
        <div className="pf-engineering-status-top"><b><i/>DEVELOPMENT</b><span><i/>WORKFLOW</span></div>
        <dl><div><dt>BUILD</dt><dd>Scalable Apps</dd></div><div><dt>AUTOMATE</dt><dd>AI Workflows</dd></div><div><dt>DEPLOY</dt><dd>Production Ready</dd></div></dl>
      </div>
      <div className="pf-engineering-experience"><div><i/><ArrowUpRight size={18}/></div><strong>02</strong><span>YEARS<br/>EXPERIENCE</span></div>
      <div className="pf-engineering-code"><Terminal size={35}/><span>CLEAN CODE<br/>RELIABLE SYSTEMS<br/>REAL SOLUTIONS</span></div>
      <span className="pf-engineering-numbers" aria-hidden="true"><b>01</b><span>02</span><span>03</span></span>
    </Reveal>
  </section>
}
function Services({ standalone = false }) {
  const projectPaths = ['/projects/9jobs', '/projects/automation', '/projects/property']
  return <section className="pf-section pf-wrap pf-services-reference" id="services">
    {!standalone && <div className="pf-services-reference-heading">
      <div><span className="pf-services-eyebrow"><i/>WHAT I DO</span><Title first="DEVELOPMENT" second="& AUTOMATION"/></div>
      <p>Building scalable web applications and smart automation solutions that solve real problems and save time.</p>
      <div className="pf-services-decoration" aria-hidden="true"><i/><i/><i/></div>
    </div>}
    <div className="pf-services">{services.map((service, i) => <Reveal key={service.title} variant={i % 2 ? 'right' : 'left'}>
      <article>
        <span className="pf-index">0{i + 1}</span>
        <div className="pf-service-copy"><h3>{service.title}</h3><p>{service.description}</p><div className="pf-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div><Link className="pf-service-project" to={projectPaths[i]}><b>View Project</b></Link></div>
        <div className="pf-service-preview"><Link to={projectPaths[i]} className="pf-service-image" aria-label={`View project for ${service.title.toLowerCase()}`} data-cursor-text="VIEW"><img src={service.image} alt={`${service.title.toLowerCase()} project preview`} loading="lazy"/><span><ArrowUpRight size={21}/></span></Link></div>
      </article>
    </Reveal>)}</div>
  </section>
}
function ProjectVisual({ project }) {
  if (project.image) return <img src={project.image} alt={`${project.title} live website screenshot`} loading="lazy"/>
  if (project.id === 'rover') return <div className="pf-rover-art"><div className="pf-art-top">AI ROVER <Asterisk size={16}/></div><div className="pf-resume-paper"><span>YOUR NEXT CHAPTER.</span><b>A better resume.<br/>A clearer story.</b><hr/><i/><i/><i/><hr/><i/><i/></div><span className="pf-art-chip">30+ ATS-friendly resumes</span><small className="pf-art-caption">PROJECT OVERVIEW</small></div>
  return <div className="pf-bot-art"><div className="pf-art-top"><span>APPLICATION WORKFLOW</span><span>PYTHON / SELENIUM</span></div><strong>500<span>+</span></strong><p>Applications. Automated.</p><div className="pf-flow"><span>SEARCH</span><ArrowUpRight size={12}/><span>FILTER</span><ArrowUpRight size={12}/><span>APPLY</span></div><small className="pf-art-caption">PROJECT OVERVIEW</small></div>
}
function Projects({ standalone = false }) {
  return <section className="pf-section pf-wrap" id="projects">{!standalone && <><Label>Selected work</Label><Title first="MY" second="PROJECTS"/></>}<div className="pf-project-grid">{projects.map((project, i) => <Reveal key={project.id} variant="pop" delay={(i % 2) * .1} className={`pf-project pf-project-${i + 1}`}><Link className="pf-project-link" to={`/projects/${project.id}`} data-cursor-text="VIEW"><div className="pf-project-image"><ProjectVisual project={project}/></div><div className="pf-project-caption"><b><Asterisk size={11}/>{project.title}</b><span>{project.category}<ArrowUpRight size={13}/></span></div></Link><p>{project.description}</p></Reveal>)}</div><Action href={profile.github}>EXPLORE GITHUB</Action></section>
}
function Process() {
  return <section className="pf-section pf-wrap pf-process"><Label>My build process</Label><Title first="A BUILD PROCESS" second="THAT WORKS" centered/><div className="pf-process-grid">{[['DISCOVERY','Understand the users, the goal and the workflow.'],['ARCHITECTURE','Plan reusable components, data and API structure.'],['DEVELOPMENT','Build responsive interfaces and reliable integrations.'],['REFINEMENT','Test, optimize and deploy the finished product.']].map(([title, text], i) => <Reveal key={title} variant="pop" delay={i * .09}><article><Asterisk size={21}/><h3>{title}</h3><p>{text}</p><small>0{i + 1}</small></article></Reveal>)}</div><Reveal className="pf-work-banner pf-work-banner-full" variant="fade"><img src="/images/developer-workspace-banner.png" alt="Developer workspace with code, web applications and AI automation on screen" loading="lazy" width="2172" height="724"/></Reveal></section>
}
function Skills() {
  return <section className="pf-dark pf-section"><div className="pf-wrap"><Label>Tools behind the work</Label><Title first="MY TECH" second="STACK"/><div className="pf-skills-grid">{skillGroups.map(([title, text], i) => <Reveal key={title} variant={i % 2 ? 'bottom' : 'up'} delay={i * .07}><article><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>
}
function Collaboration() {
  const [mode, setMode] = useState('project')
  return <section className="pf-section pf-wrap"><div className="pf-section-heading"><Label>Work together</Label><Title first="BUILD & AUTOMATE" second="WITH ME"/></div><div className="pf-toggle" aria-label="Collaboration type"><button aria-pressed={mode === 'project'} onClick={() => setMode('project')}>PROJECT BASED</button><button aria-pressed={mode === 'ongoing'} onClick={() => setMode('ongoing')}>ONGOING SUPPORT</button></div><div className="pf-plans"><Reveal as="article" variant="pop"><Label>{mode === 'project' ? 'Website development' : 'Website maintenance'}</Label><h3>{mode === 'project' ? 'Build & launch.' : 'Improve & maintain.'}</h3><p>{mode === 'project' ? 'Responsive business websites with a clear user journey, technical SEO and deployment.' : 'UI improvements, debugging, performance optimization and regular product updates.'}</p><Action to="/contact">DISCUSS YOUR PROJECT</Action></Reveal><Reveal as="article" variant="pop" delay={.12}><Label>{mode === 'project' ? 'Full-stack & automation' : 'Product development'}</Label><h3>{mode === 'project' ? 'Connect & automate.' : 'Build what’s next.'}</h3><ul><li>Frontend and backend development</li><li>REST API and AI integration</li><li>Python and Selenium workflows</li><li>Testing and deployment support</li></ul><Action to="/contact">GET IN TOUCH</Action></Reveal></div></section>
}
function Resume() {
  return <section className="pf-section pf-wrap" id="resume"><Label>Experience & education</Label><Title first="A FOUNDATION" second="FOR WHAT’S NEXT"/><div className="pf-resume-grid"><div><h3>EXPERIENCE</h3><article><small>OCT 2024 — PRESENT · DELHI</small><h4>Automation Engineer &<br/>MERN Stack Developer</h4><b>9JOBS Application Services</b><p>Develop and maintain 9JOBS and Modern Property: responsive interfaces, backend functionality, REST APIs, authentication and database operations. Apply Prompt Engineering to development and automation, with performance, SEO and production deployment.</p></article></div><div><h3>EDUCATION</h3><article><small>JUL 2022 — JUN 2024</small><h4>Master of Computer Application</h4><p>Galgotias University, Greater Noida</p></article><article><small>JUN 2019 — JUL 2022</small><h4>Bachelor of Computer Application</h4><p>Integral University, Lucknow</p></article><article><small>CERTIFICATES</small><p>Microsoft Azure<br/>Advanced MERN Stack with Generative AI</p></article></div></div><Action href={profile.resumeUrl} download>DOWNLOAD RESUME</Action></section>
}
function FAQ() {
  return <section className="pf-section pf-wrap pf-faq"><div><Label>FAQ</Label><Title first="FREQUENT" second="QUESTIONS"/></div><div>{[['What do you build?', 'MERN applications, responsive business websites, AI-powered tools and Python / Selenium automation.'],['Which technologies do you use?', 'React, Next.js, Node.js, Express, MongoDB, Python and modern REST APIs.'],['Can you improve an existing website?', 'Yes. I work on responsive layouts, accessibility, debugging, performance and technical SEO.'],['How can we discuss a project?', 'Email me with your project goals, timeline and current requirements. We can work out a practical scope together.']].map(([q, a]) => <Reveal as="details" key={q} variant="up"><summary>{q}<Plus size={15}/></summary><p>{a}</p></Reveal>)}</div></section>
}
function ContactForm() {
  const [ready, setReady] = useState(false)
  function submit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio project enquiry')}&body=${encodeURIComponent(body)}`
    setReady(true)
  }
  return <form className="pf-contact-form" onSubmit={submit}><h3>LET’S TALK ABOUT YOUR IDEA.</h3><label>Name<input name="name" required autoComplete="name" placeholder="Your name"/></label><label>Email<input name="email" type="email" required autoComplete="email" placeholder="you@company.com"/></label><label>Message<textarea name="message" required placeholder="What would you like to build?" rows={3}/></label><button className="pf-submit">OPEN EMAIL DRAFT <ArrowUpRight size={16}/></button><p className="pf-form-note" role="status">{ready ? 'Your email app will open with the draft. You can also email me directly below.' : 'Opens a draft in your email app for you to send.'}</p></form>
}
function ContactBanner() {
  return <section className="pf-wrap pf-contact-exact" id="contact" aria-label="Project or career opportunity">
    <div className="pf-contact-exact-desktop">
      <img src="/images/contact-reference.png" alt="Let’s build something useful. Open to web applications, automation, new ideas and collaboration. Design, develop, collaborate and create value." width="2172" height="724" loading="lazy"/>
      <a className="pf-contact-exact-mail" href={`mailto:${profile.email}`} aria-label="Start a conversation"/>
      <Link className="pf-contact-exact-work" to="/projects" aria-label="View my work"/>
    </div>
    <div className="pf-contact-exact-mobile">
      <div className="pf-contact-exact-copy">
        <span>PROJECT OR CAREER OPPORTUNITY?</span>
        <h2>LET’S BUILD<span>SOMETHING</span><em>USEFUL.</em></h2>
        <p>Whether it’s a web application, automation solution, a new idea, or a collaboration — I’m open to exciting opportunities.</p>
        <Action href={`mailto:${profile.email}`}>START A CONVERSATION</Action>
        <Link className="pf-contact-exact-mobile-work" to="/projects">View My Work <ArrowUpRight size={18}/></Link>
      </div>
      <img src="/images/contact-reference-art.png" alt="Design, collaborate, develop and create value: new projects, ideas, product development and opportunities." width="782" height="491" loading="lazy"/>
    </div>
  </section>
}
function Contact({ full = false }) {
  if (!full) return <ContactBanner/>
  return <section className={`pf-contact pf-wrap ${full ? 'pf-contact-full' : ''}`} id="contact"><Reveal className="pf-contact-art" variant="bottom"><Asterisk aria-hidden="true"/><div><Label>Project or career opportunity?</Label><h2>LET’S BUILD<br/>SOMETHING<br/>USEFUL.</h2><Action href={`mailto:${profile.email}`}>START A CONVERSATION</Action></div></Reveal>{full && <ContactForm/>}</section>
}
function Footer() {
  return <footer className="pf-footer pf-footer-gradient"><div className="pf-wrap"><div className="pf-footer-top"><div><span className="pf-footer-label">LET’S CONNECT</span><p>Full Stack Development<br/>& AI Automation.</p><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={`tel:+91${profile.phone}`}>+91 {profile.phone}</a></div><nav aria-label="Footer navigation"><span className="pf-footer-label">EXPLORE</span>{links.map(([name, to]) => <Link to={to} key={to}>{name}<ArrowUpRight size={13}/></Link>)}</nav><nav aria-label="Social links"><span className="pf-footer-label">FIND ME ONLINE</span><a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a><a href={profile.resumeUrl} download>Resume <Download size={13}/></a></nav><div className="pf-footer-name"><img className="pf-footer-logo" src="/images/footer-vbs-final.png" alt="VBS logo" width="264" height="141"/><span>DEVELOPER & AI AUTOMATION ENGINEER</span></div></div><div className="pf-copyright"><span>© 2026 {profile.name}</span><span>MERN STACK · AI · GENERATIVE AI</span></div></div></footer>
}
function PageHeading({ title, subtitle }) { return <div className="pf-wrap pf-page-heading"><Label>{profile.name}</Label><Reveal><h1>{title}</h1></Reveal><p>{subtitle}</p></div> }
function CaseStudy({ project }) {
  return <><PageHeading title={project.title} subtitle={project.category}/><section className="pf-wrap pf-case"><Reveal className="pf-case-image" variant="pop"><ProjectVisual project={project}/></Reveal><div className="pf-case-info"><div><Label>Project overview</Label><p>{project.description}</p></div><div><small>{project.date}</small><div className="pf-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{project.url ? <a className="pf-action" href={project.url} target="_blank" rel="noreferrer">VISIT LIVE WEBSITE<span><ArrowUpRight size={15}/></span></a> : <Action href={`mailto:${profile.email}?subject=${encodeURIComponent(`${project.title} demo enquiry`)}`}>REQUEST A DEMO</Action>}</div></div><Action to="/projects">ALL PROJECTS</Action></section></>
}
export default function HomePage() {
  const { pathname } = useLocation(), reduced = useReducedMotion()
  const root = useRef(null)
  usePortfolioMotion(root, pathname)
  const [intro, setIntro] = useState(() => !sessionStorage.getItem('portfolio-intro'))
  useEffect(() => { sessionStorage.setItem('portfolio-intro', 'seen'); const timer = setTimeout(() => setIntro(false), 500); return () => clearTimeout(timer) }, [])
  useEffect(() => { window.dispatchEvent(new Event('portfolio-route')); window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  const project = projects.find(item => pathname === `/projects/${item.id}`)
  return <div className="pf-site" ref={root}><a className="pf-skip" href="#main-content">Skip to content</a><AnimatePresence>{intro && !reduced && <motion.div className="pf-loader" aria-hidden="true" exit={{ y: '-100%' }} transition={{ duration: .65, ease }}><span>VIJAY</span></motion.div>}</AnimatePresence><Header/><main id="main-content" key={pathname}>
    {pathname === '/' ? <><Hero/><div className="pf-stack-strip pf-wrap"><span>BUILT WITH<br/>A MODERN STACK</span>{['React.js', 'Next.js', 'Python', 'MongoDB', 'Selenium'].map(x => <b key={x}>{x}</b>)}</div><Intro/><Services/><Projects/><Process/><Skills/><Collaboration/><FAQ/></> : project ? <CaseStudy project={project}/> : pathname === '/projects' ? <><PageHeading title="MY PROJECTS" subtitle="Web platforms, intelligent tools and practical automation."/><Projects standalone/></> : pathname === '/services' ? <><PageHeading title="SERVICES" subtitle="Full stack development, AI workflows and browser automation."/><Services standalone/><Process/><Collaboration/></> : pathname === '/contact' ? <PageHeading title="LET’S TALK" subtitle="Have a development opportunity or automation idea? Let’s talk."/> : <><PageHeading title="WHO WE ARE" subtitle="Full Stack Developer | AI Automation Engineer | Prompt Engineer."/><Intro/><Resume/><Skills/><FAQ/></>}
    <Contact full={pathname === '/contact'}/></main><Footer/></div>
}
