import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-commerce"
              description="Successfully designed and developed a feature-rich e-commerce website leveraging the power of React.js. This project showcases my proficiency in creating dynamic and responsive user interfaces. Additionally, I integrated APIs seamlessly to enhance the website's functionality, ensuring a seamless and efficient shopping experience for users."
              ghLink="https://github.com/AkshadGawde/E-commerce"
              demoLink="-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ClassHub"
              description="Designed and developed a dynamic and engaging website for a Mumbai-based educational institution, utilizing the versatility of React.js. This project not only underscores my expertise in crafting intuitive user interfaces but also emphasizes the tailored solutions provided for the specific needs of the classes."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather App"
              description="Designed and implemented a dynamic Weather App utilizing HTML, CSS, and JavaScript, seamlessly integrating real-time weather forecasts through API integration. Users can now experience up-to-the-minute weather updates at their fingertips, enhancing their daily planning and activities."
              ghLink="https://github.com/AkshadGawde/Portfoilo/blob/main/weather.html"
              demoLink="-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Portfolio Website"
              description="Crafted a personalized and visually stunning portfolio website for a friend using vanilla JavaScript, HTML, and CSS. The website showcases their unique skills, projects, and personality, providing a standout online presence to leave a lasting impression."
              ghLink="https://github.com/AkshadGawde/Shivansh_Web"
              demoLink="https://portfolio-gamma-dusky-39.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Event App"
              description="Pioneered my journey into Next.js by successfully developing an engaging event application, leveraging the power and versatility of Next.js. This inaugural project showcases my ability to create dynamic and responsive web applications, setting the stage for future innovative endeavors in web development.sing 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/AkshadGawde/Event-app"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
              include
              a
              demo
              link
              here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Freelance Website"
              description="Collaborated with my friend to craft a dynamic freelance website that showcases our combined expertise in web development. Leveraged HTML for structure, CSS for sleek and responsive styling, and JavaScript to bring interactive elements to life. To streamline our workflow and optimize performance, we employed the powerful Parcel bundler. "
              ghLink="https://github.com/PrabirKalwani/Portfolio_Site"
              demoLink="https://thedd.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
