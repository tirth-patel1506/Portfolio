import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

/* ========== PERSONAL DETAILS ========== */
const ME = {
  name: "Tirth Patel",
  role: "Frontend Developer",
  intro: "A clean, fast, and responsive website using React and Bootstrap.",
  email: "tirthpatel1506@gmail.com",
  phone: "+91 7862941791",
  city: "Gujarat, India",
  github: "https://github.com/tirth-patel1506",
  linkedin: "https://www.linkedin.com/in/tirth-patel-5b249736b/",
};

const RESUME_URL = "/public/Tirth_Patel_Resume.pdf";
const RESUME_NAME = "Resume.pdf";

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "College",
  "Resume",
  "Contact",
];

const id = (text) => text.toLowerCase();

const skills = [
  ["HTML5", 90],
  ["CSS3 & Bootstrap", 85],
  ["JavaScript", 75],
  ["React.js", 70],
  ["Git & GitHub", 65],
  ["Node.js", 50],
];

const projects = [
  {
    t: "Quiz Application",
    d: "An interactive quiz app with questions, options and score tracking.",
    s: ["JavaScript", "HTML", "CSS"],
    git: "https://github.com/tirth-patel1506/Quiz_Application",
  },
  {
    t: "Data Table",
    d: "Product table with search, sorting, category filter and pagination.",
    s: ["React", "JavaScript", "CSS"],
    git: "https://github.com/tirth-patel1506/react-data-table-1",
  },
  {
    t: "Netflix Clone",
    d: "A responsive Netflix-inspired landing page built with HTML and CSS.",
    s: ["HTML", "CSS"],
    git: "https://github.com/tirth-patel1506/Netflix8.html",
  },
];

const stats = [
  ["3", "Projects"],
  ["6", "Technologies"],
  ["1+", "Year coding"],
];

export default function App() {
  const formRef = useRef(null);

  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);

  /* Load Google Fonts */
  useEffect(() => {
    const fontLink = document.createElement("link");

    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=IBM+Plex+Sans:wght@400;500;600&display=swap";

    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(fontLink);
    };
  }, []);

  /* CONTACT FORM - REACT SUBMISSION */
  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const userData = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    if (!userData.name || !userData.email || !userData.message) {
      setStatus("error");
      return;
    }

    try {
      const savedData = JSON.parse(
        localStorage.getItem("portfolioMessages") || "[]"
      );

      if (!Array.isArray(savedData)) {
        throw new Error("Invalid saved form data");
      }

      savedData.push({
        ...userData,
        id: Date.now(),
        date: new Date().toISOString(),
      });

      localStorage.setItem(
        "portfolioMessages",
        JSON.stringify(savedData)
      );

      console.log("Contact form submitted:", userData);

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="shell">
      {/* SIDEBAR */}
      <aside className={"side" + (open ? " open" : "")}>
        <div className="side-top">
          <a href="#home" className="brand-mark">
            {ME.name}
          </a>

          <button
            className="burger"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className="side-nav">
          {links.map((link) => (
            <a
              key={link}
              href={"#" + id(link)}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="side-foot">
          <a
            href={ME.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href={ME.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </aside>

      <main className="main">
        {/* HOME / HERO */}
        <section id="home" className="hero">
          <Container fluid="xl">
            <Row className="align-items-center g-5">
              <Col lg={7}>
                <p className="kicker">{ME.role}</p>

                <h1 className="mega">
                  {ME.name}
                  <br />
                  builds for the web.
                </h1>

                <p className="lead-text">{ME.intro}</p>

                <div className="d-flex gap-3 flex-wrap">
                  <Button className="btn-solid" href="#projects">
                    See my projects
                  </Button>

                  <Button
                    className="btn-ghost"
                    href={RESUME_URL}
                    download={RESUME_NAME}
                  >
                    Download resume
                  </Button>
                </div>

                <div className="stats">
                  {stats.map(([value, label]) => (
                    <div key={label}>
                      <b>{value}</b>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </Col>

              <Col lg={5}>
                <div className="terminal">
                  <div className="t-bar">
                    <i />
                    <i />
                    <i />
                    <span>developer.js</span>
                  </div>

                  <pre>{`const developer = {
  name: "${ME.name}",
  role: "${ME.role}",
  stack: ["React", "Bootstrap",
          "JavaScript"],
  learning: "Full Stack",
  openToWork: true,
};`}</pre>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* ABOUT */}
        <section id="about" className="block">
          <Container fluid="xl">
            <h2 className="h-sec">About me</h2>

            <Row className="g-5">
              <Col lg={7}>
                <p className="body-lg">
                  Frontend development mein idea seedha screen par
                  dikhta hai, aur yahi ise interesting banata hai.
                  Mera focus React.js, responsive UI aur JavaScript
                  par hai. Main Full Stack Development bhi seekh raha hoon.
                </p>

                <p className="body-lg">
                  Naye tools seekhna, real projects banana aur
                  practical coding skills improve karna mera goal hai.
                </p>
              </Col>

              <Col lg={5}>
                <dl className="facts">
                  <dt>Education</dt>
                  <dd>Diploma, Computer Engineering</dd>

                  <dt>Focus</dt>
                  <dd>Frontend Development</dd>

                  <dt>Learning</dt>
                  <dd>React.js & Full Stack</dd>

                  <dt>Goal</dt>
                  <dd>Software Developer</dd>
                </dl>
              </Col>
            </Row>
          </Container>
        </section>

        {/* SKILLS */}
        <section id="skills" className="block dark">
          <Container fluid="xl">
            <h2 className="h-sec">Skills</h2>

            <Row className="g-4">
              {skills.map(([name, percentage]) => (
                <Col md={6} key={name}>
                  <div className="skill">
                    <div className="skill-row">
                      <span>{name}</span>
                      <span>{percentage}%</span>
                    </div>

                    <div className="track">
                      <div
                        className="fill"
                        style={{ width: percentage + "%" }}
                      />
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="block">
          <Container fluid="xl">
            <h2 className="h-sec">Featured Projects</h2>

            <div className="proj-list">
              {projects.map((project) => (
                <article key={project.t} className="proj">
                  <div>
                    <h3>{project.t}</h3>
                    <p>{project.d}</p>

                    <ul className="stack">
                      {project.s.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="btn-ghost"
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View code ↗
                  </Button>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* COLLEGE */}
        <section id="college" className="block alt">
          <Container fluid="xl">
            <h2 className="h-sec">Education</h2>

            <Row className="g-5">
              <Col lg={6}>
                <h3 className="college-name">
                  Dr. Jivraj Mehta Institute of Polytechnic
                </h3>

                <dl className="facts">
                  <dt>Course</dt>
                  <dd>Diploma in Computer Engineering</dd>

                  <dt>University</dt>
                  <dd>Gujarat Technological University (GTU)</dd>

                  <dt>Location</dt>
                  <dd>Mogar, Anand, Gujarat</dd>
                </dl>
              </Col>

              <Col lg={6}>
                <ul className="ticks">
                  <li>Technical foundation in Computer Engineering</li>
                  <li>Hands-on practical learning</li>
                  <li>Web development projects</li>
                  <li>Continuous skill improvement</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>

        {/* RESUME */}
        <section id="resume" className="block dark">
          <Container fluid="xl">
            <Row className="align-items-center g-4">
              <Col md={8}>
                <h2 className="h-sec mb-2">My Resume</h2>

                <p className="body-lg light">
                  Education, technical skills aur projects ek PDF mein.
                </p>
              </Col>

              <Col
                md={4}
                className="d-flex gap-3 flex-wrap justify-content-md-end"
              >
                <Button
                  className="btn-ghost on-dark"
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View resume
                </Button>

                <Button
                  className="btn-solid"
                  href={RESUME_URL}
                  download={RESUME_NAME}
                >
                  Download
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* CONTACT FORM */}
        <section id="contact" className="block">
          <Container fluid="xl">
            <h2 className="h-sec">Let's Connect</h2>

            <Row className="g-5">
              <Col lg={5}>
                <p className="body-lg">
                  Kisi project, internship ya collaboration ke liye
                  contact karein.
                </p>

                {/* Email & Phone ab plain text hain (no links) */}
                <dl className="facts">
                  <dt>Email</dt>
                  <dd>{ME.email}</dd>

                  <dt>Phone</dt>
                  <dd>{ME.phone}</dd>

                  <dt>Location</dt>
                  <dd>{ME.city}</dd>
                </dl>
              </Col>

              <Col lg={7}>
                <Form
                  ref={formRef}
                  onSubmit={sendEmail}
                  className="form-box"
                >
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      autoComplete="name"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      autoComplete="email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={4}
                      placeholder="Write your message..."
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="btn-solid mt-2"
                    disabled={status === "sending"}
                  >
                    Send message
                  </Button>

                  {status === "success" && (
                    <div className="msg ok" role="status">
                      Form submitted successfully! Data saved in this browser.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="msg bad" role="alert">
                      Form submit nahi hua. Please dobara try karein.
                    </div>
                  )}
                </Form>
              </Col>
            </Row>
          </Container>
        </section>

        {/* FOOTER */}
        <footer className="foot">
          <Container fluid="xl">
            <Row className="g-5 foot-top">
              <Col lg={5}>
                <div className="foot-brand">{ME.name}</div>

                <p className="foot-text">
                  {ME.role}. Clean aur responsive websites,
                  React aur Bootstrap ke saath.
                </p>

                <Button className="btn-solid" href="#contact">
                  Contact me
                </Button>
              </Col>

              <Col sm={6} lg={3}>
                <h6 className="foot-head">Navigate</h6>

                <ul className="foot-list">
                  {links.map((link) => (
                    <li key={link}>
                      <a href={"#" + id(link)}>{link}</a>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col sm={6} lg={4}>
                <h6 className="foot-head">Contact</h6>

                <ul className="foot-list">
                  <li>
                    <a href={"mailto:" + ME.email}>{ME.email}</a>
                  </li>

                  <li>
                    <a href={"tel:" + ME.phone.replace(/\s/g, "")}>
                      {ME.phone}
                    </a>
                  </li>

                  <li>
                    <span>{ME.city}</span>
                  </li>

                  <li className="foot-social">
                    <a
                      href={ME.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>

                    <a
                      href={ME.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>

            <div className="foot-bottom">
              <span>© 2026 {ME.name}. All rights reserved.</span>

              <span>Built with React & Bootstrap</span>

              <a href="#home">Back to top ↑</a>
            </div>
          </Container>
        </footer>
      </main>
    </div>
  );
}