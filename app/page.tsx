import Image from "next/image";
import {
  about,
  contactLinks,
  experiences,
  focusAreas,
  profile,
  projects,
  skillGroups,
  stats
} from "@/data/portfolio";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#stack" },
  { label: "Contact", href: "#contact" }
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="page-orb page-orb-left" />
      <div className="page-orb page-orb-right" />

      <header className="site-header">
        <a className="brand-mark" href="#top">
          Collins Rop
        </a>
        <nav className="site-nav" aria-label="Primary">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href={profile.resume}>
            Resume
          </a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.intro}</p>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore projects
            </a>
            <a className="button button-secondary" href={profile.resume}>
              Download resume
            </a>
            <a className="button button-tertiary" href="#contact">
              Contact me
            </a>
          </div>

          <div className="hero-context-card">
            <span className="panel-label">Currently</span>
            <strong>Building at Soilwatch</strong>
            <p>
              Full-stack product work across frontend systems, backend services,
              data workflows, and deployable infrastructure.
            </p>
          </div>

          <dl className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual">
          <div className="hero-stage">
            <div className="hero-stage-frame">
              <Image
                className="hero-stage-image"
                src={profile.image}
                alt={profile.name}
                width={640}
                height={760}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-grid" id="about">
        <div className="section-heading">
          <h2>About Me</h2>
        </div>
        <div className="about-layout">
          <div className="panel panel-copy">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="about-image-card">
            <Image
              src={profile.secondaryImage}
              alt={`${profile.name} supporting portrait`}
              width={420}
              height={420}
            />
          </div>
        </div>
        <div className="about-feature-grid">
          {focusAreas.map((area) => (
            <article key={area.title} className="panel feature-panel">
              <p className="panel-kicker">{area.title}</p>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid" id="experience">
        <div className="section-heading">
          <h2>Work Experience</h2>
        </div>
        <div className="timeline">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.period}`} className="timeline-item">
              <div className="timeline-meta">
                <span>{experience.period}</span>
                <span>{experience.location}</span>
              </div>
              <div className="panel timeline-panel">
                <div className="timeline-header">
                  <div>
                    <h3>{experience.title}</h3>
                    <p>{experience.company}</p>
                  </div>
                </div>
                <ul className="impact-list">
                  {experience.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {"technicalSkills" in experience && experience.technicalSkills.length > 0 ? (
                  <p className="experience-skill-line">
                    <strong>Technical Skills:</strong> {experience.technicalSkills.join(", ")}
                  </p>
                ) : null}
                {"softSkills" in experience && experience.softSkills.length > 0 ? (
                  <p className="experience-skill-line">
                    <strong>Soft Skills:</strong> {experience.softSkills.join(", ")}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid" id="projects">
        <div className="section-heading">
          <h2>Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="panel project-card">
              <div className="project-card-top">
                <h3>{project.title}</h3>
              </div>
              <p className="project-copy">{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    Live project
                  </a>
                ) : null}
                <a href={project.github} target="_blank" rel="noreferrer">
                  Source / GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid" id="stack">
        <div className="section-heading">
          <h2>Technical Skills</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="panel skill-card">
              <p className="panel-kicker">{group.title}</p>
              <div className="tag-row">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid" id="contact">
        <div className="contact-panel">
          <div className="section-heading section-heading-compact">
            <h2>Get In Touch</h2>
          </div>
          <div className="contact-grid">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                className="panel contact-card"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="panel-kicker">{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>{profile.name}</p>
        <p>{profile.location}</p>
      </footer>
    </main>
  );
}
